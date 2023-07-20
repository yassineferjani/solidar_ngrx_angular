import { Action } from "@ngrx/store";
import { Association } from "src/app/models/Association.model";

export enum AssociationActionType {
    /* Get all */
    GET_ALL_ASSOCIATION_SUCCESS = "Get All Association successfully",
    GET_ALL_ASSOCIATION_ERROR = "Get All Association with error",
    GET_ALL_ASSOCIATION = "Get All Association",

    /* Delete All ASSOCIATION */
    DELETE_ASSOCIATION = "[ASSOCIATIONs] Delete ASSOCIATION",
    DELETE_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Delete ASSOCIATION success",
    DELETE_ASSOCIATION_ERROR = "[ASSOCIATIONs] Delete ASSOCIATION error",

    /** New ASSOCIATION */

    NEW_ASSOCIATION = "[ASSOCIATIONs] New ASSOCIATION",
    NEW_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] New ASSOCIATION success",
    NEW_ASSOCIATION_ERROR = "[ASSOCIATIONs] New ASSOCIATION error",

    /** Save ASSOCIATION */

    SAVE_ASSOCIATION = "[ASSOCIATIONs] Save ASSOCIATION",
    SAVE_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Save ASSOCIATION success",
    SAVE_ASSOCIATION_ERROR = "[ASSOCIATIONs] Save ASSOCIATION error",

    /** Edit ASSOCIATION */

    EDIT_ASSOCIATION = "[ASSOCIATIONs] Edit ASSOCIATION",
    EDIT_ASSOCIATION_SUCCESS = "[ASSOCIATIONs] Edit ASSOCIATION success",
    EDIT_ASSOCIATION_ERROR = "[ASSOCIATIONs] Edit ASSOCIATION error",

    /** Update ASSOCIATION */

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

/**Delete Association */

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

/**New Association */

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


/**Save Association */

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

/**Edit Association */

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

/**Update Association */

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

    ;