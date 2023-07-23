import { createAction, props } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";

const PREFIX = "[Associations]";

export const getAssociations = createAction(`${PREFIX} Get Associations`);
export const getAssociationsSuccess = createAction(
    `${getAssociations.type} Success`,
    props<{
        associations: Association[];
    }>()
);

export const getAssociationsError = createAction(
    `${getAssociations.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const createAssociation = createAction(
    `${PREFIX} Create Association`,
    props<{
        association: Association;
    }>()
);

export const createAssociationSuccess = createAction(
    `${createAssociation.type} Success`,
    props<{
        association: Association;
    }>()
);

export const createAssociationsError = createAction(
    `${createAssociation.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const updateAssociation = createAction(
    `${PREFIX} Update Association`,
    props<{
        association: Association;
    }>()
);

export const updateAssociationSuccess = createAction(
    `${updateAssociation.type} Success`,
    props<{
        association: Association;
    }>()
);

export const updateAssociationsError = createAction(
    `${updateAssociation.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const newAssociation = createAction(
    `${PREFIX} New Association`);

export const newAssociationSuccess = createAction(
    `${newAssociation.type} Success`);

export const newAssociationError = createAction(
    `${newAssociation.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const editAssociation = createAction(
    `${PREFIX} Edit Association`,
    props<{ id: number }>()
);
export const editAssociationSuccess = createAction(
    `${editAssociation.type} Success`,
    props<{
        association: Association;
    }>()
);

export const editAssociationError = createAction(
    `${editAssociation.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const deleteAssociation = createAction(
    `${PREFIX} Delete Association`,
    props<{
        association: Association;
    }>()
);
export const deleteAssociationSuccess = createAction(
    `${deleteAssociation.type} Success`,
    props<{
        association: Association;
    }>()
);

export const deleteAssociationsError = createAction(
    `${deleteAssociation.type} Error`,
    props<{
        errorMessage: string;
    }>()
);