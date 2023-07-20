import { Action } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";

export enum AssociationActionType{
    /* Get all */
    GET_ALL_ASSOCIATION_SUCCESS = "Get All Association successfully",
    GET_ALL_ASSOCIATION_ERROR = "Get All Association with error",
    GET_ALL_ASSOCIATION = "Get All Association"

}

export class GetAllAssociation implements Action{
    type: AssociationActionType= AssociationActionType.GET_ALL_ASSOCIATION;
    constructor(public payload:any){} 
}

export class GetAllAssociationSuccess implements Action{
    type: AssociationActionType= AssociationActionType.GET_ALL_ASSOCIATION_SUCCESS;
    constructor(public payload:Association[]){} 
}

export class GetAllAssociation_Error implements Action{
    type: AssociationActionType= AssociationActionType.GET_ALL_ASSOCIATION_ERROR;
    constructor(public payload:string){} 
}

export type AssociationActions= 
    GetAllAssociation | GetAllAssociationSuccess | GetAllAssociation_Error;