import type { TellerAccount } from "./account.js";
export interface TellerAddress {
    primary: boolean;
    street: string;
    city: string;
    region: string;
    postal_code: string;
    country_code: string;
}
export interface TellerOwner {
    type: "person" | "business";
    names: {
        type: string;
        data: string;
    }[];
    addresses: TellerAddress[];
    phone_numbers: {
        type: "mobile" | "home" | "work" | "unknown";
        data: string;
    }[];
    emails: {
        data: string;
    }[];
}
export interface TellerIdentity {
    account: TellerAccount;
    owners: TellerOwner[];
}
//# sourceMappingURL=identity.d.ts.map