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
            var _a;
            const searchParams = (options === null || options === void 0 ? void 0 : options.cursor) && typeof (options === null || options === void 0 ? void 0 : options.limit) === "number"
                ? new URLSearchParams({
                    from_id: options === null || options === void 0 ? void 0 : options.cursor,
                    count: (_a = options === null || options === void 0 ? void 0 : options.limit) === null || _a === void 0 ? void 0 : _a.toString(),
                }).toString()
                : null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBSXpDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtJQUN2RCxJQUFJLENBQ1IsU0FBaUIsRUFDakIsT0FBaUM7OztZQUVqQyxNQUFNLFlBQVksR0FDaEIsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTSxLQUFJLE9BQU8sQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsS0FBSyxDQUFBLEtBQUssUUFBUTtnQkFDbkQsQ0FBQyxDQUFDLElBQUksZUFBZSxDQUFDO29CQUNsQixPQUFPLEVBQUUsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLE1BQU07b0JBQ3hCLEtBQUssRUFBRSxNQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLDBDQUFFLFFBQVEsRUFBRTtpQkFDbEMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtnQkFDZixDQUFDLENBQUMsSUFBSSxDQUFDO1lBRVgsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FDbkMsYUFBYSxTQUFTLGlCQUFpQixZQUFZLEVBQUUsRUFDckQ7Z0JBQ0UsSUFBSSxFQUFFLENBQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLFdBQVc7b0JBQ3hCLENBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUU7b0JBQ2pELENBQUMsQ0FBQyxTQUFTO2dCQUNiLFlBQVksRUFBRSxNQUFNO2FBQ3JCLENBQ0YsQ0FBQztZQUVGLElBQUksT0FBTyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRSxDQUFDO2dCQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25DLENBQUM7WUFFRCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssR0FBRzs2REFDUCxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQXFDLEVBQ3BELE9BQWlDO1lBRWpDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25DLGFBQWEsU0FBUyxpQkFBaUIsRUFBRSxFQUFFLEVBQzNDO2dCQUNFLElBQUksRUFBRSxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXO29CQUN4QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO29CQUNqRCxDQUFDLENBQUMsU0FBUztnQkFDYixZQUFZLEVBQUUsTUFBTTthQUNyQixDQUNGLENBQUM7WUFFRixJQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUUsQ0FBQztnQkFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuQyxDQUFDO1lBRUQsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtDQUNGIn0=