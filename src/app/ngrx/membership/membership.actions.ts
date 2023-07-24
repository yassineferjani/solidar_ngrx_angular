import { createAction, props } from "@ngrx/store";
import { Membership } from "src/app/models/Membership.model";




const PREFIX = "[Memberships]";

export const getMemberships = createAction(`${PREFIX} Get Memberships`);
export const getMembershipsSuccess = createAction(
    `${getMemberships.type} Success`,
    props<{
        memberships: Membership[];
    }>()
);

export const getMembershipsError = createAction(
    `${getMemberships.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const createMembership = createAction(
    `${PREFIX} Create Membership`,
    props<{
        membership: Membership;
    }>()
);

export const createMembershipSuccess = createAction(
    `${createMembership.type} Success`,
    props<{
        membership: Membership;
    }>()
);

export const createMembershipsError = createAction(
    `${createMembership.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const updateMembership = createAction(
    `${PREFIX} Update Membership`,
    props<{
        membership: Membership;
    }>()
);

export const updateMembershipSuccess = createAction(
    `${updateMembership.type} Success`,
    props<{
        membership: Membership;
    }>()
);

export const updateMembershipsError = createAction(
    `${updateMembership.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const newMembership = createAction(
    `${PREFIX} New Membership`);

export const newMembershipSuccess = createAction(
    `${newMembership.type} Success`);

export const newMembershipError = createAction(
    `${newMembership.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const editMembership = createAction(
    `${PREFIX} Edit Membership`,
    props<{ id: number }>()
);
export const editMembershipSuccess = createAction(
    `${editMembership.type} Success`,
    props<{
        membership: Membership;
    }>()
);

export const editMembershipError = createAction(
    `${editMembership.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const deleteMembership = createAction(
    `${PREFIX} Delete Membership`,
    props<{
        membership: Membership;
    }>()
);
export const deleteMembershipSuccess = createAction(
    `${deleteMembership.type} Success`,
    props<{
        membership: Membership;
    }>()
);

export const deleteMembershipsError = createAction(
    `${deleteMembership.type} Error`,
    props<{
        errorMessage: string;
    }>()
);