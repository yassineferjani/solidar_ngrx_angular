import { Action } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";
import { AssociationActionType, AssociationActions } from "./association.actions";

export enum AssociationStateEnum {
    LOADING = "Loading",
    LOADED = "Loaded",
    ERROR = "Error",
    INITIAL = "Initial",
    NEW = "New",
    EDIT = "Edit",
    UPDATED = "Updated"
}

export interface AssociationState {
    associations: Association[],
    dataState: AssociationStateEnum,
    errorMessage: string,
    currentAssociation: Association | null
}

const initialState: AssociationState = {
    associations: [],
    dataState: AssociationStateEnum.INITIAL,
    errorMessage: "",
    currentAssociation: null
}

export function associationReducer(state = initialState, action: Action): AssociationState {
    switch (action.type) {
        case AssociationActionType.GET_ALL_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.GET_ALL_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.LOADED, associations: (<AssociationActions>action).payload }
        case AssociationActionType.GET_ALL_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        /* Delete Association */

        case AssociationActionType.DELETE_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.DELETE_ASSOCIATION_SUCCESS:
            let p: Association = (<AssociationActions>action).payload;
            let index = state.associations.indexOf(p);
            let listAssociations = [...state.associations];
            listAssociations.slice(index, 1);
            return { ...state, dataState: AssociationStateEnum.LOADED, associations: listAssociations }
        case AssociationActionType.DELETE_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        /* New Association */

        case AssociationActionType.NEW_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.NEW_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.NEW }
        case AssociationActionType.NEW_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        /* Save Association */

        case AssociationActionType.SAVE_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.SAVE_ASSOCIATION_SUCCESS:
            let prods: Association[] = [...state.associations];
            prods.push((<AssociationActions>action).payload);
            return { ...state, dataState: AssociationStateEnum.LOADED, associations: prods }
        case AssociationActionType.SAVE_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        /* Edit Association */

        case AssociationActionType.EDIT_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.EDIT_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.EDIT, currentAssociation: ((<AssociationActions>action).payload) }
        case AssociationActionType.EDIT_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        /* Update Association */

        case AssociationActionType.UPDATE_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.UPDATE_ASSOCIATION_SUCCESS:
            let updatedAssociation: Association = (<AssociationActions>action).payload;
            let AssociationList: Association[] = state.associations.map(p => (p.id == updatedAssociation.id ? updatedAssociation : p))
            return { ...state, dataState: AssociationStateEnum.UPDATED, associations: AssociationList }
        case AssociationActionType.UPDATE_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }


        default:
            return { ...state }
    }

}

