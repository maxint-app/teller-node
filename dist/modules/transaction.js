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
export default class TellerTransactionModule extends ClientBase {
    list(accountId, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const searchParams = (() => {
                if (options == null)
                    return "";
                return new URLSearchParams({
                    from_id: options.from_id,
                    count: options.count.toString(),
                });
            })();
            const response = yield this.axios.get(`/accounts/${accountId}/transactions?${searchParams}`, {
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
    get(_a, options_1) {
        return __awaiter(this, arguments, void 0, function* ({ accountId, id }, options) {
            const response = yield this.axios.get(`/accounts/${accountId}/transactions/${id}`, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXpDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtJQUN2RCxJQUFJLENBQ1IsU0FBaUIsRUFDakIsT0FBaUM7O1lBRWpDLE1BQU0sWUFBWSxHQUFHLENBQUMsR0FBRyxFQUFFO2dCQUN6QixJQUFJLE9BQU8sSUFBSSxJQUFJO29CQUFFLE9BQU8sRUFBRSxDQUFDO2dCQUUvQixPQUFPLElBQUksZUFBZSxDQUFDO29CQUN6QixPQUFPLEVBQUUsT0FBTyxDQUFDLE9BQU87b0JBQ3hCLEtBQUssRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtpQkFDaEMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUVMLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25DLGFBQWEsU0FBUyxpQkFBaUIsWUFBWSxFQUFFLEVBQ3JEO2dCQUNFLElBQUksRUFBRSxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXO29CQUN4QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO29CQUNqRCxDQUFDLENBQUMsU0FBUztnQkFDYixZQUFZLEVBQUUsTUFBTTthQUNyQixDQUNGLENBQUM7WUFFRixJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtJQUVLLEdBQUc7NkRBQ1AsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFxQyxFQUNwRCxPQUFpQztZQUVqQyxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNuQyxhQUFhLFNBQVMsaUJBQWlCLEVBQUUsRUFBRSxFQUMzQztnQkFDRSxJQUFJLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVztvQkFDeEIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtvQkFDakQsQ0FBQyxDQUFDLFNBQVM7Z0JBQ2IsWUFBWSxFQUFFLE1BQU07YUFDckIsQ0FDRixDQUFDO1lBRUYsSUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFLENBQUM7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsQ0FBQztZQUVELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDRiJ9