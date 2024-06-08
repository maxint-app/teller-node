export interface TellerAccount {
    currency: string;
    enrollment_id: string;
    id: string;
    name: string;
    type: "depository" | "credit";
    institution: {
        id: string;
        name: string;
    };
    last_four: string;
    links: {
        self: string;
        details: string;
        balances: string;
        transactions: string;
    };
    subtype: "checking" | "savings" | "money_market" | "certificate_of_deposit" | "treasury" | "sweep" | "credit_card";
    status: "open" | "closed";
}
export interface TellerAccountDetails {
    account_id: string;
    account_number: string;
    links: {
        self: string;
        account: string;
    };
    routing_numbers: {
        ach: string | null;
        wire: string | null;
        bacs: string | null;
    };
}
export interface TellerAccountBalances {
    account_id: string;
    ledger: string;
    available: string;
    links: {
        self: string;
        account: string;
    };
}
//# sourceMappingURL=account.d.ts.map