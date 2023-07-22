import { createAction, props } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";

/* export enum AssociationActionType {
    GET_ALL_ASSOCIATION_SUCCESS = "Get All Association successfully",
    GET_ALL_ASSOCIATION_ERROR = "Get All Association with error",
    GET_ALL_ASSOCIATION = "Get All Association",

    DELETE_ASSOCIATION = "[ASSOCIATIONs] Delete ASSOCIATION",
    DELETE_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Delete ASSOCIATION success",
    DELETE_ASSOCIATION_ERROR = "[ASSOCIATIONs] Delete ASSOCIATION error",


    NEW_ASSOCIATION = "[ASSOCIATIONs] New ASSOCIATION",
    NEW_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] New ASSOCIATION success",
    NEW_ASSOCIATION_ERROR = "[ASSOCIATIONs] New ASSOCIATION error",


    SAVE_ASSOCIATION = "[ASSOCIATIONs] Save ASSOCIATION",
    SAVE_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Save ASSOCIATION success",
    SAVE_ASSOCIATION_ERROR = "[ASSOCIATIONs] Save ASSOCIATION error",


    EDIT_ASSOCIATION = "[ASSOCIATIONs] Edit ASSOCIATION",
    EDIT_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Edit ASSOCIATION success",
    EDIT_ASSOCIATION_ERROR = "[ASSOCIATIONs] Edit ASSOCIATION error",


    UPDATE_ASSOCIATION = "[ASSOCIATIONs] Update ASSOCIATION",
    UPDATE_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Update ASSOCIATION success",
    UPDATE_ASSOCIATION_ERROR = "[ASSOCIATIONs] Update ASSOCIATION error",


}

export class GetAllAssociation implements Action {
    type: AssociationActionType = AssociationActionType.GET_ALL_ASSOCIATION;
    constructor(public payload: any) { }
}

export class GetAllAssociationSuccess implements Action {
    type: AssociationActionType = AssociationActionType.GET_ALL_ASSOCIATION_SUCCESS;
    constructor(public payload: Association[]) { }
}

export class GetAllAssociation_Error implements Action {
    type: AssociationActionType = AssociationActionType.GET_ALL_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}


export class DeleteAssociationAction implements Action {
    type: AssociationActionType = AssociationActionType.DELETE_ASSOCIATION;
    constructor(public payload: Association) { }
}

export class DeleteAssociationActionSuccess implements Action {
    type: AssociationActionType = AssociationActionType.DELETE_ASSOCIATION_SUCCESS;
    constructor(public payload: Association) { }
}

export class DeleteAssociationActionError implements Action {
    type: AssociationActionType = AssociationActionType.DELETE_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}


export class NewAssociationAction implements Action {
    type: AssociationActionType = AssociationActionType.NEW_ASSOCIATION;
    constructor(public payload: any) { }
}

export class NewAssociationActionSuccess implements Action {
    type: AssociationActionType = AssociationActionType.NEW_ASSOCIATION_SUCCESS;
    constructor(public payload: any) { }
}

export class NewAssociationActionError implements Action {
    type: AssociationActionType = AssociationActionType.NEW_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}



export class SaveAssociationAction implements Action {
    type: AssociationActionType = AssociationActionType.SAVE_ASSOCIATION;
    constructor(public payload: Association) { }
}

export class SaveAssociationActionSuccess implements Action {
    type: AssociationActionType = AssociationActionType.SAVE_ASSOCIATION_SUCCESS;
    constructor(public payload: Association) { }
}

export class SaveAssociationActionError implements Action {
    type: AssociationActionType = AssociationActionType.SAVE_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}


export class EditAssociationAction implements Action {
    type: AssociationActionType = AssociationActionType.EDIT_ASSOCIATION;
    constructor(public payload: number) { }
}

export class EditAssociationActionSuccess implements Action {
    type: AssociationActionType = AssociationActionType.EDIT_ASSOCIATION_SUCCESS;
    constructor(public payload: Association) { }
}

export class EditAssociationActionError implements Action {
    type: AssociationActionType = AssociationActionType.EDIT_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}


export class UpdateAssociationAction implements Action {
    type: AssociationActionType = AssociationActionType.UPDATE_ASSOCIATION;
    constructor(public payload: Association) { }
}

export class UpdateAssociationActionSuccess implements Action {
    type: AssociationActionType = AssociationActionType.UPDATE_ASSOCIATION_SUCCESS;
    constructor(public payload: Association) { }
}

export class UpdateAssociationActionError implements Action {
    type: AssociationActionType = AssociationActionType.UPDATE_ASSOCIATION_ERROR;
    constructor(public payload: string) { }
}

export type AssociationActions =
    GetAllAssociation | GetAllAssociationSuccess | GetAllAssociation_Error |
    DeleteAssociationAction | DeleteAssociationActionError | DeleteAssociationActionSuccess |
    NewAssociationAction | NewAssociationActionError | NewAssociationActionSuccess |
    SaveAssociationAction | SaveAssociationActionSuccess | SaveAssociationActionError |
    EditAssociationAction | EditAssociationActionSuccess | EditAssociationActionError |
    UpdateAssociationAction | UpdateAssociationActionError | UpdateAssociationActionSuccess

    ; */


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