import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AssociationState } from "src/app/store/association/Association.store";


export const selectAssociationState = createFeatureSelector<AssociationState>('Association');
export const selectAssociationList = createSelector(selectAssociationState, (state) => state.associations);
export const selectAssociationIsLoading = createSelector(selectAssociationState, (state) => state.dataState);
export const selectAssociationIsError = createSelector(selectAssociationState, (state) => state.errorMessage);
