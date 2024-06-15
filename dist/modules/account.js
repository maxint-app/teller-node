var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ClientBase } from "./client.js";
export default class TellerAccountModule extends ClientBase {
    constructor(axios) {
        super(axios);
    }
    list(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get("/account", {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
                responseType: "json",
            });
            if (typeof response.data === "string") {
                return JSON.parse(response.data);
            }
            return response.data;
        });
    }
    get(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get(`/accounts/${id}`, {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
                responseType: "json",
            });
            if (typeof response.data === "string") {
                return JSON.parse(response.data);
            }
            return response.data;
        });
    }
    remove(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.axios.delete(`/accounts/${id}`, {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
                responseType: "json",
            });
        });
    }
    details(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get(`/accounts/${id}/details`, {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
                responseType: "json",
            });
            if (typeof response.data === "string") {
                return JSON.parse(response.data);
            }
            return response.data;
        });
    }
    balances(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.axios.get(`/accounts/${id}/balances`, {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
                responseType: "json",
            });
            if (typeof response.data === "string") {
                return JSON.parse(response.data);
            }
            return response.data;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3VudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2R1bGVzL2FjY291bnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUl6QyxNQUFNLENBQUMsT0FBTyxPQUFPLG1CQUFvQixTQUFRLFVBQVU7SUFDekQsWUFBWSxLQUFZO1FBQ3RCLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFSyxJQUFJLENBQUMsT0FBMkI7O1lBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO2dCQUNoRCxJQUFJLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVztvQkFDeEIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtvQkFDakQsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFSyxHQUFHLENBQUMsRUFBVSxFQUFFLE9BQTJCOztZQUMvQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxFQUFFLEVBQUU7Z0JBQ3ZELElBQUksRUFBRSxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXO29CQUN4QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO29CQUNqRCxDQUFDLENBQUMsU0FBUztnQkFDYixZQUFZLEVBQUUsTUFBTTthQUNyQixDQUFDLENBQUM7WUFFSCxJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxFQUFVLEVBQUUsT0FBMkI7O1lBQ2xELE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxFQUFFLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVc7b0JBQ3hCLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7b0JBQ2pELENBQUMsQ0FBQyxTQUFTO2dCQUNiLFlBQVksRUFBRSxNQUFNO2FBQ3JCLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVLEVBQUUsT0FBMkI7O1lBQ25ELE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRTtnQkFDL0QsSUFBSSxFQUFFLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVc7b0JBQ3hCLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7b0JBQ2pELENBQUMsQ0FBQyxTQUFTO2dCQUNiLFlBQVksRUFBRSxNQUFNO2FBQ3JCLENBQUMsQ0FBQztZQUVILElBQUksT0FBTyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVUsRUFBRSxPQUEyQjs7WUFDcEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFO2dCQUNoRSxJQUFJLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVztvQkFDeEIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtvQkFDakQsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FBQyxDQUFDO1lBRUgsSUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDRiJ9