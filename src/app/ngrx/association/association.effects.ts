import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { AssociationService } from 'src/app/services/association.service';
import { AssociationActionType, AssociationActions, DeleteAssociationActionError, DeleteAssociationActionSuccess, EditAssociationActionError, EditAssociationActionSuccess, GetAllAssociationSuccess, GetAllAssociation_Error, NewAssociationAction, SaveAssociationActionError, SaveAssociationActionSuccess, UpdateAssociationActionError, UpdateAssociationActionSuccess } from './association.actions';



@Injectable({ providedIn: "root" })
export class AssociationEffects {

    constructor(private service: AssociationService, private effectsActions: Actions) { }

    getAllAssociation: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.GET_ALL_ASSOCIATION),
            mergeMap((action) => {
                return this.service.getAllAssociations().pipe(
                    map((association) => new GetAllAssociationSuccess(association)),
                    catchError((err) => of(new GetAllAssociation_Error(err.message)))
                )
            })
        )
    );

    /**Delete Association */

    deleteAssociationEffects: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.DELETE_ASSOCIATION),
            mergeMap((action: AssociationActions) => {
                return this.service.deleteAssociation(action.payload.id)
                    .pipe(
                        map(() => new DeleteAssociationActionSuccess(action.payload)),
                        catchError((err) => of(new DeleteAssociationActionError(err.message)))
                    )
            })
        )
    );

    /**New Association */

    newAssociationEffects: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.NEW_ASSOCIATION),
            map((action: AssociationActions) => {
                return new NewAssociationAction({});
            })
        )
    );

    /**Save Association */

    saveAssociationEffects: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.SAVE_ASSOCIATION),
            mergeMap((action: AssociationActions) => {
                return this.service.saveAssociation(action.payload).pipe(
                    map((association) => new SaveAssociationActionSuccess(association)),
                    catchError((err) => of(new SaveAssociationActionError(err.message)))
                )
            })
        )
    );

    /**Edit Association */

    editAssociationEffects: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.EDIT_ASSOCIATION),
            mergeMap((action: AssociationActions) => {
                return this.service.getAssociation(action.payload).pipe(
                    map((association) => new EditAssociationActionSuccess(association)),
                    catchError((err) => of(new EditAssociationActionError(err.message)))
                )
            })
        )
    );

    /**Update Association */

    updateProductEffects: Observable<Action> = createEffect(
        () => this.effectsActions.pipe(
            ofType(AssociationActionType.UPDATE_ASSOCIATION),
            mergeMap((action: AssociationActions) => {
                return this.service.updateAssociation(action.payload).pipe(
                    map((association) => new UpdateAssociationActionSuccess(association)),
                    catchError((err) => of(new UpdateAssociationActionError(err.message)))
                )
            })
        )
    );
}