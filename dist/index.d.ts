import TellerIdentityModule from "./modules/identity";
import TellerAccountModule from "./modules/account";
import TellerTransactionModule from "./modules/transaction";
export * from "./interfaces/identity";
export * from "./interfaces/account";
export * from "./interfaces/transaction";
export * from "./common/types";
export declare class TellerClient {
    private certificatePath;
    private privateKeyPath;
    identity: TellerIdentityModule;
    account: TellerAccountModule;
    transactions: TellerTransactionModule;
    private accessToken;
    constructor({ certificatePath, privateKeyPath, accessToken, }: {
        certificatePath: string;
        privateKeyPath: string;
        accessToken?: string;
    });
}
//# sourceMappingURL=index.d.ts.map