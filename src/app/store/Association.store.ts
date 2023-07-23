import { Association } from "../models/Association.model";
import { AssociationStateEnum } from "./AssociationStore.enum";

export interface AssociationState {
    associations: Association[],
    dataState: AssociationStateEnum,
    errorMessage: string,
    currentAssociation: Association | null,
    id : number | null
}