var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { ClientBase } from "./client";
export default class TellerTransactionModule extends ClientBase {
    constructor(axios) {
        super(axios);
    }
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
            });
            return response.data;
        });
    }
    get(_a, options_1) {
        return __awaiter(this, arguments, void 0, function* ({ accountId, id }, options) {
            const response = yield this.axios.get(`/accounts/${accountId}/transactions/${id}`, {
                auth: (options === null || options === void 0 ? void 0 : options.accessToken)
                    ? { username: options.accessToken, password: "" }
                    : undefined,
            });
            return response.data;
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNhY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbW9kdWxlcy90cmFuc2FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBSXRDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sdUJBQXdCLFNBQVEsVUFBVTtJQUM3RCxZQUFZLEtBQVk7UUFDdEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVLLElBQUksQ0FDUixTQUFpQixFQUNqQixPQUFpQzs7O1lBRWpDLE1BQU0sWUFBWSxHQUNoQixDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxNQUFNLEtBQUksT0FBTyxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxLQUFLLENBQUEsS0FBSyxRQUFRO2dCQUNuRCxDQUFDLENBQUMsSUFBSSxlQUFlLENBQUM7b0JBQ2xCLE9BQU8sRUFBRSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsTUFBTTtvQkFDeEIsS0FBSyxFQUFFLE1BQUEsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLEtBQUssMENBQUUsUUFBUSxFQUFFO2lCQUNsQyxDQUFDLENBQUMsUUFBUSxFQUFFO2dCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFFWCxNQUFNLFFBQVEsR0FBRyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUNuQyxhQUFhLFNBQVMsaUJBQWlCLFlBQVksRUFBRSxFQUNyRDtnQkFDRSxJQUFJLEVBQUUsQ0FBQSxPQUFPLGFBQVAsT0FBTyx1QkFBUCxPQUFPLENBQUUsV0FBVztvQkFDeEIsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTtvQkFDakQsQ0FBQyxDQUFDLFNBQVM7YUFDZCxDQUNGLENBQUM7WUFFRixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssR0FBRzs2REFDUCxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQXFDLEVBQ3BELE9BQWlDO1lBRWpDLE1BQU0sUUFBUSxHQUFHLE1BQU0sSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQ25DLGFBQWEsU0FBUyxpQkFBaUIsRUFBRSxFQUFFLEVBQzNDO2dCQUNFLElBQUksRUFBRSxDQUFBLE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxXQUFXO29CQUN4QixDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFO29CQUNqRCxDQUFDLENBQUMsU0FBUzthQUNkLENBQ0YsQ0FBQztZQUVGLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FDRiJ9