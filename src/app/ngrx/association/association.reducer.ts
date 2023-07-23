import { Action, createReducer, on } from "@ngrx/store";
import { createAssociation, createAssociationSuccess, createAssociationsError, deleteAssociation, deleteAssociationSuccess, deleteAssociationsError, editAssociation, editAssociationError, editAssociationSuccess, getAssociations, getAssociationsError, getAssociationsSuccess, newAssociation, newAssociationError, newAssociationSuccess, updateAssociation, updateAssociationSuccess, updateAssociationsError } from "./association.actions";
import { AssociationState } from "src/app/store/association/Association.store";
import { AssociationStateEnum } from "src/app/store/association/AssociationStore.enum";


const initialState: AssociationState = {
    associations: [],
    dataState: AssociationStateEnum.INITIAL,
    errorMessage: "",
    currentAssociation: null,
    id : null
}

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