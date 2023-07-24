import { Action, createReducer, on } from "@ngrx/store";
import { MembershipState } from "src/app/store/membership/Membership.store";
import { MembershipStateEnum } from "src/app/store/membership/MembershipStore.enum";
import { createMembership, createMembershipSuccess, createMembershipsError, deleteMembership, deleteMembershipSuccess, deleteMembershipsError, editMembership, editMembershipError, editMembershipSuccess, getMemberships, getMembershipsError, getMembershipsSuccess, newMembership, newMembershipError, newMembershipSuccess, updateMembership, updateMembershipSuccess, updateMembershipsError } from "./membership.actions";


const initialState: MembershipState = {
    memberships: [],
    dataState: MembershipStateEnum.INITIAL,
    errorMessage: "",
    currentMembership: null,
    id : null
}


const reducer = createReducer<MembershipState>(
    initialState,
    on(getMemberships,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(getMembershipsSuccess,(state, {memberships})=>{
        return {
            ...state,
            dataState: MembershipStateEnum.LOADED,
            memberships: memberships
        };
    }),
    on(getMembershipsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(deleteMembership,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(deleteMembershipSuccess,(state, {membership})=>{
        return {
            ...state,
            dataState: MembershipStateEnum.LOADED,
            memberships : [...state.memberships.filter((a) => a.id !== membership.id)]
        };
    }),
    on(deleteMembershipsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(createMembership,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(createMembershipSuccess,(state, {membership})=>{
        return {
            ...state,
            dataState: MembershipStateEnum.LOADED,
            memberships: [...state.memberships,membership]
        };
    }),
    on(createMembershipsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),




    on(updateMembership,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(updateMembershipSuccess,(state, {membership})=>{
        return {
            ...state,
            dataState: MembershipStateEnum.UPDATED,
            memberships: state.memberships.map((a) => a.id == membership.id ? membership : a),
        };
    }),
    on(updateMembershipsError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),



    on(newMembership,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(newMembershipSuccess,(state)=>{
        return {
            ...state,
            dataState: MembershipStateEnum.NEW
        };
    }),
    on(newMembershipError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),


    on(editMembership,(state)=>
    {
        return {
            ...state,
            dataState: MembershipStateEnum.LOADING
        };
    }),
    on(editMembershipSuccess,(state, {membership})=>{
        return {
            ...state,
            dataState: MembershipStateEnum.EDIT,
            currentMembership : membership
        };
    }),
    on(editMembershipError,(state, {errorMessage})=>{
        return {
            ...state,
            dataState:MembershipStateEnum.ERROR,
            errorMessage: errorMessage
        };
    }),

)

export function membershipReducer(state = initialState, actions:Action): MembershipState {
    return reducer(state, actions);
}