import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { MembershipService } from "src/app/services/membership.service";
import { createMembership, createMembershipSuccess, createMembershipsError, deleteMembership, deleteMembershipSuccess, deleteMembershipsError, editMembership, editMembershipError, editMembershipSuccess, getMemberships, getMembershipsError, getMembershipsSuccess, newMembership, newMembershipSuccess, updateMembership, updateMembershipSuccess, updateMembershipsError } from "./membership.actions";
import { Membership } from "src/app/models/Membership.model";


@Injectable({ providedIn: "root" })
export class MembershipEffects {

    constructor(private readonly actions$: Actions, private service: MembershipService) { }

    getMemberships$ = createEffect(
        () => this.actions$.pipe(
            ofType(getMemberships.type),
            switchMap(() => {
                return this.service.getAllMemberships().pipe(
                    map((membership: Membership[]) => getMembershipsSuccess({ memberships: membership })),
                    catchError((err) => of(getMembershipsError(err.message)))
                )
            })
        )
    );

    deleteMembership$ = createEffect(
        () => this.actions$.pipe(
            ofType(deleteMembership),
            switchMap(({ membership }) => {
                return this.service.deleteMembership((<Membership>membership).id)
                    .pipe(
                        map(() => deleteMembershipSuccess({membership})),
                        catchError((err) => of(deleteMembershipsError(err.message)))
                    )
            })
        )
    );

    createMembership$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createMembership),
      switchMap(({ membership }) =>
        this.service.saveMembership(membership).pipe(
          map((response) => createMembershipSuccess({ membership: response })),
          catchError((error) => of(createMembershipsError({ errorMessage: error.message })))
        )
      )
    )
  );


    /**New Membership */

    newMembership$ = createEffect(
        () => this.actions$.pipe(
            ofType(newMembership),
            map(() => {
                return newMembershipSuccess();
            })
        )
    );

    

    /**Edit Membership */

    editMembership$ = createEffect(
        () => this.actions$.pipe(
            ofType(editMembership),
            switchMap(({ id }) => {
                return this.service.getMembership(id).pipe(
                    map((membership) => editMembershipSuccess({ membership })),
                    catchError((err) => of(editMembershipError(err.message)))
                )
            })
        )
    );

    /**Update Membership */

    updateProduct$ = createEffect(
        () => this.actions$.pipe(
            ofType(updateMembership),
            switchMap(({ membership }) => {
                return this.service.updateMembership(membership).pipe(
                    map((membership) => updateMembershipSuccess({ membership })),
                    catchError((err) => of(updateMembershipsError(err.message)))
                )
            })
        )
    );


}

