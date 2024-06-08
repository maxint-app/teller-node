import { Axios } from "axios";
import TellerIdentityModule from "./modules/identity";
import https from "https";
import fs from "fs";
import TellerAccountModule from "./modules/account";
import TellerTransactionModule from "./modules/transaction";
export * from "./interfaces/identity";
export * from "./interfaces/account";
export * from "./interfaces/transaction";
export * from "./common/types";
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
        });
        this.identity = new TellerIdentityModule(axios);
        this.account = new TellerAccountModule(axios);
        this.transactions = new TellerTransactionModule(axios);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE9BQU8sQ0FBQztBQUM5QixPQUFPLG9CQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxNQUFNLE9BQU8sQ0FBQztBQUMxQixPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFDcEIsT0FBTyxtQkFBbUIsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLHVCQUF1QixNQUFNLHVCQUF1QixDQUFDO0FBRTVELGNBQWMsdUJBQXVCLENBQUM7QUFDdEMsY0FBYyxzQkFBc0IsQ0FBQztBQUNyQyxjQUFjLDBCQUEwQixDQUFDO0FBQ3pDLGNBQWMsZ0JBQWdCLENBQUM7QUFFL0IsTUFBTSxPQUFPLFlBQVk7SUFVdkIsWUFBWSxFQUNWLGVBQWUsRUFDZixjQUFjLEVBQ2QsV0FBVyxHQUtaO1FBQ0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7UUFDdkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFFL0IsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ2pDLElBQUksRUFBRSxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDM0MsR0FBRyxFQUFFLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFFSCxNQUFNLEtBQUssR0FBRyxJQUFJLEtBQUssQ0FBQztZQUN0QixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDcEIsQ0FBQyxDQUFDO29CQUNFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVztvQkFDMUIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7Z0JBQ0gsQ0FBQyxDQUFDLFNBQVM7WUFDYixVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUNGIn0=