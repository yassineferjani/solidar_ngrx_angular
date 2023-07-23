import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { AssociationService } from 'src/app/services/association.service';
import { createAssociation, 
    createAssociationSuccess, 
    createAssociationsError, 
    deleteAssociation, 
    deleteAssociationSuccess, 
    deleteAssociationsError, 
    editAssociation, 
    editAssociationError, 
    editAssociationSuccess, 
    getAssociations, 
    getAssociationsError, 
    getAssociationsSuccess, 
    newAssociation, 
    newAssociationSuccess, 
    updateAssociation, 
    updateAssociationSuccess, 
    updateAssociationsError } from './association.actions';
import { Association } from 'src/app/models/Association.model';



@Injectable({ providedIn: "root" })
export class AssociationEffects {

    constructor(private readonly actions$: Actions, private service: AssociationService) { }

    getAssociations$ = createEffect(
        () => this.actions$.pipe(
            ofType(getAssociations.type),
            switchMap(() => {
                return this.service.getAllAssociations().pipe(
                    map((association: Association[]) => getAssociationsSuccess({ associations: association })),
                    catchError((err) => of(getAssociationsError(err.message)))
                )
            })
        )
    );

    deleteAssociation$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteAssociation),
            switchMap(({ association }) => {
                return this.service.deleteAssociation((<Association>association).id)
                    .pipe(
                        map(() => deleteAssociationSuccess({association})),
                        catchError((err) => of(deleteAssociationsError(err.message)))
                    )
            })
        )
    );

    createAssociation$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createAssociation),
      switchMap(({ association }) =>
        this.service.saveAssociation(association).pipe(
          map((response) => createAssociationSuccess({ association: response })),
          catchError((error) => of(createAssociationsError({ errorMessage: error.message })))
        )
      )
    )
  );


    /**New Association */

    newAssociation$ = createEffect(
        () => this.actions$.pipe(
            ofType(newAssociation),
            map(() => {
                return newAssociationSuccess();
            })
        )
    );

    

    /**Edit Association */

    editAssociation$ = createEffect(
        () => this.actions$.pipe(
            ofType(editAssociation),
            switchMap(({ id }) => {
                return this.service.getAssociation(id).pipe(
                    map((association) => editAssociationSuccess({ association })),
                    catchError((err) => of(editAssociationError(err.message)))
                )
            })
        )
    );

    /**Update Association */

    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(updateAssociation),
            switchMap(({ association }) => {
                return this.service.updateAssociation(association).pipe(
                    map((association) => updateAssociationSuccess({ association })),
                    catchError((err) => of(updateAssociationsError(err.message)))
                )
            })
        )
    );


}

