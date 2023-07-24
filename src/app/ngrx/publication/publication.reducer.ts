import { Action, createReducer, on } from "@ngrx/store";
import { PublicationState } from "src/app/store/publication/Publication.store";
import { PublicationStateEnum } from "src/app/store/publication/PublicationStore.enum";
import { createPublication, createPublicationSuccess, createPublicationsError, deletePublication, deletePublicationSuccess, deletePublicationsError, editPublication, editPublicationError, editPublicationSuccess, getPublications, getPublicationsError, getPublicationsSuccess, newPublication, newPublicationError, newPublicationSuccess, updatePublication, updatePublicationSuccess, updatePublicationsError } from "./publication.actions";


const initialState: PublicationState = {
    publications: [],
    dataState: PublicationStateEnum.INITIAL,
    errorMessage: "",
    currentPublication: null,
    id : null
}


const reducer = createReducer<PublicationState>(
    initialState,
    on(getPublications,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(getPublicationsSuccess,(state, {publications})=>{
        return {
            ...state,
            dataState: PublicationStateEnum.LOADED,
            publications: publications
        };
    }),
    on(getPublicationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(deletePublication,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(deletePublicationSuccess,(state, {publication})=>{
        return {
            ...state,
            dataState: PublicationStateEnum.LOADED,
            publications : [...state.publications.filter((a) => a.id !== publication.id)]
        };
    }),
    on(deletePublicationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(createPublication,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(createPublicationSuccess,(state, {publication})=>{
        return {
            ...state,
            dataState: PublicationStateEnum.LOADED,
            publications: [...state.publications,publication]
        };
    }),
    on(createPublicationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(updatePublication,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(updatePublicationSuccess,(state, {publication})=>{
        return {
            ...state,
            dataState: PublicationStateEnum.UPDATED,
            publications: state.publications.map((a) => a.id == publication.id ? publication : a),
        };
    }),
    on(updatePublicationsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),



    on(newPublication,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(newPublicationSuccess,(state)=>{
        return {
            ...state,
            dataState: PublicationStateEnum.NEW
        };
    }),
    on(newPublicationError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(editPublication,(state)=>
    {
        return {
            ...state,
            dataState: PublicationStateEnum.LOADING
        };
    }),
    on(editPublicationSuccess,(state, {publication})=>{
        return {
            ...state,
            dataState: PublicationStateEnum.EDIT,
            currentPublication : publication
        };
    }),
    on(editPublicationError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:PublicationStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),

)

export function publicationReducer(state = initialState, actions:Action): PublicationState {
    return reducer(state, actions);
}