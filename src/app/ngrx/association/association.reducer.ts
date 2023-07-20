import { Action } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";
import { AssociationActionType, AssociationActions } from "./association.actions";

export enum AssociationStateEnum{
    INITIAL = "Initial",
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    NEW = "New"
}

export interface AssociationState{
    associations? :Association[],
    dataState?: AssociationStateEnum,
    errorMessage?: string,
    currentAssociation: Association | null 
}

const initialState: AssociationState = {
    associations : [],
    dataState: AssociationStateEnum.INITIAL,
    errorMessage : "",
    currentAssociation : null
}

export function associationReducer(state=initialState, action:Action):AssociationState{
    switch(action.type){
        case AssociationActionType.GET_ALL_ASSOCIATION:
            return {...state,dataState:AssociationStateEnum.LOADING}
        case AssociationActionType.GET_ALL_ASSOCIATION_SUCCESS:
            return {...state,dataState:AssociationStateEnum.LOADED, associations:(<AssociationActions>action).payload}
        case AssociationActionType.GET_ALL_ASSOCIATION_ERROR:
            return {...state,dataState:AssociationStateEnum.ERROR,errorMessage:(<AssociationActions>action).payload}
        default :
            return {...state}
    }

}

