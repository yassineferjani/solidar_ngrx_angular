import { Membership } from "src/app/models/Membership.model";
import { MembershipStateEnum } from "./MembershipStore.enum";

export interface MembershipState {
    memberships: Membership[],
    dataState: MembershipStateEnum,
    errorMessage: string,
    currentMembership: Membership | null,
    id : number | null
}