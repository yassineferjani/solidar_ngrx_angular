import { createAction, props } from "@ngrx/store";
import { Publication } from "src/app/models/Publication.model";



const PREFIX = "[Publications]";

export const getPublications = createAction(`${PREFIX} Get Publications`);
export const getPublicationsSuccess = createAction(
    `${getPublications.type} Success`,
    props<{
        publications: Publication[];
    }>()
);

export const getPublicationsError = createAction(
    `${getPublications.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const createPublication = createAction(
    `${PREFIX} Create Publication`,
    props<{
        publication: Publication;
    }>()
);

export const createPublicationSuccess = createAction(
    `${createPublication.type} Success`,
    props<{
        publication: Publication;
    }>()
);

export const createPublicationsError = createAction(
    `${createPublication.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const updatePublication = createAction(
    `${PREFIX} Update Publication`,
    props<{
        publication: Publication;
    }>()
);

export const updatePublicationSuccess = createAction(
    `${updatePublication.type} Success`,
    props<{
        publication: Publication;
    }>()
);

export const updatePublicationsError = createAction(
    `${updatePublication.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const newPublication = createAction(
    `${PREFIX} New Publication`);

export const newPublicationSuccess = createAction(
    `${newPublication.type} Success`);

export const newPublicationError = createAction(
    `${newPublication.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const editPublication = createAction(
    `${PREFIX} Edit Publication`,
    props<{ id: number }>()
);
export const editPublicationSuccess = createAction(
    `${editPublication.type} Success`,
    props<{
        publication: Publication;
    }>()
);

export const editPublicationError = createAction(
    `${editPublication.type} Error`,
    props<{
        errorMessage: string;
    }>()
);

export const deletePublication = createAction(
    `${PREFIX} Delete Publication`,
    props<{
        publication: Publication;
    }>()
);
export const deletePublicationSuccess = createAction(
    `${deletePublication.type} Success`,
    props<{
        publication: Publication;
    }>()
);

export const deletePublicationsError = createAction(
    `${deletePublication.type} Error`,
    props<{
        errorMessage: string;
    }>()
);