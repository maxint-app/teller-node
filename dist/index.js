import { Axios } from "axios";
import TellerIdentityModule from "./modules/identity.js";
import https from "node:https";
import fs from "node:fs";
import TellerAccountModule from "./modules/account.js";
import TellerTransactionModule from "./modules/transaction.js";
import TellerInstitutionsModule from "./modules/instituions.js";
export * from "./interfaces/identity.js";
export * from "./interfaces/account.js";
export * from "./interfaces/transaction.js";
export * from "./common/types.js";
export class TellerClient {
    constructor({ certificatePath, privateKeyPath, accessToken, }) {
        this.certificatePath = certificatePath;
        this.privateKeyPath = privateKeyPath;
        this.accessToken = accessToken;
        const httpsAgent = new https.Agent({
            cert: fs.readFileSync(this.certificatePath),
            key: fs.readFileSync(this.privateKeyPath),
        });
        const axios = new Axios({
            baseURL: "https://api.teller.io",
            auth: this.accessToken
                ? {
                    username: this.accessToken,
                    password: "",
                }
                : undefined,
            httpsAgent,
            responseType: "json",
        });
        this.identity = new TellerIdentityModule(axios);
        this.account = new TellerAccountModule(axios);
        this.transactions = new TellerTransactionModule(axios);
        this.institutions = new TellerInstitutionsModule(axios);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM5QixPQUFPLG9CQUFvQixNQUFNLHVCQUF1QixDQUFDO0FBQ3pELE9BQU8sS0FBSyxNQUFNLFlBQVksQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFDekIsT0FBTyxtQkFBbUIsTUFBTSxzQkFBc0IsQ0FBQztBQUN2RCxPQUFPLHVCQUF1QixNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sd0JBQXdCLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsY0FBYywwQkFBMEIsQ0FBQztBQUN6QyxjQUFjLHlCQUF5QixDQUFDO0FBQ3hDLGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYyxtQkFBbUIsQ0FBQztBQUVsQyxNQUFNLE9BQU8sWUFBWTtJQVd2QixZQUFZLEVBQ1YsZUFBZSxFQUNmLGNBQWMsRUFDZCxXQUFXLEdBS1o7UUFDQyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDakMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMzQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1NBQzFDLENBQUMsQ0FBQztRQUVILE1BQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDO1lBQ3RCLE9BQU8sRUFBRSx1QkFBdUI7WUFDaEMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUNwQixDQUFDLENBQUM7b0JBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUMxQixRQUFRLEVBQUUsRUFBRTtpQkFDYjtnQkFDSCxDQUFDLENBQUMsU0FBUztZQUNiLFVBQVU7WUFDVixZQUFZLEVBQUUsTUFBTTtTQUNyQixDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksd0JBQXdCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGIn0=