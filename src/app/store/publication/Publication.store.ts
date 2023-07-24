import { Publication } from "src/app/models/Publication.model";
import { PublicationStateEnum } from "./PublicationStore.enum";

export interface PublicationState {
    publications: Publication[],
    dataState: PublicationStateEnum,
    errorMessage: string,
    currentPublication: Publication | null,
    id : number | null
}