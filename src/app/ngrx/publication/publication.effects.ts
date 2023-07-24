import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PublicationService } from "src/app/services/publication.service";
import { createPublication, createPublicationSuccess, createPublicationsError, deletePublication, deletePublicationSuccess, deletePublicationsError, editPublication, editPublicationError, editPublicationSuccess, getPublications, getPublicationsError, getPublicationsSuccess, newPublication, newPublicationSuccess, updatePublication, updatePublicationSuccess, updatePublicationsError } from "./publication.actions";
import { catchError, map, of, switchMap } from "rxjs";
import { Publication } from "src/app/models/Publication.model";


@Injectable({ providedIn: "root" })
export class PublicationEffects {

    constructor(private readonly actions$: Actions, private service: PublicationService) { }

    getPublications$ = createEffect(
        () => this.actions$.pipe(
            ofType(getPublications.type),
            switchMap(() => {
                return this.service.getAllPublications().pipe(
                    map((publication: Publication[]) => getPublicationsSuccess({ publications: publication })),
                    catchError((err) => of(getPublicationsError(err.message)))
                )
            })
        )
    );

    deletePublication$ = createEffect(
        () => this.actions$.pipe(
            ofType(deletePublication),
            switchMap(({ publication }) => {
                return this.service.deletePublication((<Publication>publication).id)
                    .pipe(
                        map(() => deletePublicationSuccess({publication})),
                        catchError((err) => of(deletePublicationsError(err.message)))
                    )
            })
        )
    );

    createPublication$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPublication),
      switchMap(({ publication }) =>
        this.service.savePublication(publication).pipe(
          map((response) => createPublicationSuccess({ publication: response })),
          catchError((error) => of(createPublicationsError({ errorMessage: error.message })))
        )
      )
    )
  );


    /**New Publication */

    newPublication$ = createEffect(
        () => this.actions$.pipe(
            ofType(newPublication),
            map(() => {
                return newPublicationSuccess();
            })
        )
    );

    

    /**Edit Publication */

    editPublication$ = createEffect(
        () => this.actions$.pipe(
            ofType(editPublication),
            switchMap(({ id }) => {
                return this.service.getPublication(id).pipe(
                    map((publication) => editPublicationSuccess({ publication })),
                    catchError((err) => of(editPublicationError(err.message)))
                )
            })
        )
    );

    /**Update Publication */

    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(updatePublication),
            switchMap(({ publication }) => {
                return this.service.updatePublication(publication).pipe(
                    map((publication) => updatePublicationSuccess({ publication })),
                    catchError((err) => of(updatePublicationsError(err.message)))
                )
            })
        )
    );


}

