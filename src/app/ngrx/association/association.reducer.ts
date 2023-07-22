import { Action, createReducer, on } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";
import { createAssociation, createAssociationSuccess, createAssociationsError, deleteAssociation, deleteAssociationSuccess, deleteAssociationsError, editAssociation, editAssociationError, editAssociationSuccess, getAssociations, getAssociationsError, getAssociationsSuccess, newAssociation, newAssociationError, newAssociationSuccess, updateAssociation, updateAssociationSuccess, updateAssociationsError } from "./association.actions";

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
    currentAssociation: Association | null,
    id : number | null
}

const initialState: AssociationState = {
    associations: [],
    dataState: AssociationStateEnum.INITIAL,
    errorMessage: "",
    currentAssociation: null,
    id : null
}

/* export function associationReducer(state = initialState, action: Action): AssociationState {
    switch (action.type) {
        case AssociationActionType.GET_ALL_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.GET_ALL_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.LOADED, associations: (<AssociationActions>action).payload }
        case AssociationActionType.GET_ALL_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

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

        case AssociationActionType.NEW_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.NEW_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.NEW }
        case AssociationActionType.NEW_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }

        case AssociationActionType.SAVE_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.SAVE_ASSOCIATION_SUCCESS:
            let prods: Association[] = [...state.associations];
            prods.push((<AssociationActions>action).payload);
            return { ...state, dataState: AssociationStateEnum.LOADED, associations: prods }
        case AssociationActionType.SAVE_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }


        case AssociationActionType.EDIT_ASSOCIATION:
            return { ...state, dataState: AssociationStateEnum.LOADING }
        case AssociationActionType.EDIT_ASSOCIATION_SUCCESS:
            return { ...state, dataState: AssociationStateEnum.EDIT, currentAssociation: ((<AssociationActions>action).payload) }
        case AssociationActionType.EDIT_ASSOCIATION_ERROR:
            return { ...state, dataState: AssociationStateEnum.ERROR, errorMessage: (<AssociationActions>action).payload }


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

 */


const reducer = createReducer<AssociationState>(
    initialState,
    on(getAssociations,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(getAssociationsSuccess,(state, {associations})=>{
        return {
            ...state,
            dataState: AssociationStateEnum.LOADED,
            associations: associations
        };
    }),
    on(getAssociationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(deleteAssociation,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(deleteAssociationSuccess,(state, {association})=>{
        return {
            ...state,
            dataState: AssociationStateEnum.LOADED,
            associations : [...state.associations.filter((a) => a.id !== association.id)]
        };
    }),
    on(deleteAssociationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(createAssociation,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(createAssociationSuccess,(state, {association})=>{
        console.log(association)
        return {
            ...state,
            dataState: AssociationStateEnum.LOADED,
            associations: [...state.associations,association]
        };
    }),
    on(createAssociationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(updateAssociation,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(updateAssociationSuccess,(state, {association})=>{
        return {
            ...state,
            dataState: AssociationStateEnum.UPDATED,
            associations: state.associations.map((a) => a.id == association.id ? association : a),
        };
    }),
    on(updateAssociationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),



    on(newAssociation,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(newAssociationSuccess,(state)=>{
        return {
            ...state,
            dataState: AssociationStateEnum.NEW
        };
    }),
    on(newAssociationError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(editAssociation,(state)=>
    {
        return {
            ...state,
            dataState: AssociationStateEnum.LOADING
        };
    }),
    on(editAssociationSuccess,(state, {association})=>{
        return {
            ...state,
            dataState: AssociationStateEnum.EDIT,
            currentAssociation : association
        };
    }),
    on(editAssociationError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:AssociationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),

)

export function associationReducer(state = initialState, actions:Action): AssociationState {
    return reducer(state, actions);
}