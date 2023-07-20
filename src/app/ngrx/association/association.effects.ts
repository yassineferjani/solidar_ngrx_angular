import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { AssociationService } from 'src/app/services/association.service';
import { AssociationActionType, GetAllAssociationSuccess, GetAllAssociation_Error } from './association.actions';
@Injectable({providedIn:"root"})
export class AssociationEffects{
    
    constructor(private service:AssociationService, private effectsActions: Actions){}
    
    getAllAssociation : Observable<Action> = createEffect(
        ()=> this.effectsActions.pipe(
            ofType(AssociationActionType.GET_ALL_ASSOCIATION),
            mergeMap((action)=> {
                return this.service.getAllAssociations().pipe(
                    map((association)=> new GetAllAssociationSuccess(association)),
                    catchError((err)=> of(new GetAllAssociation_Error(err.message)))
                )
            })
        )
    )
}