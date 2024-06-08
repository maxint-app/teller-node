export interface TellerTransaction {
  account_id: string;
  amount: string;
  date: string;
  description: string;
  details: {
    processing_status: "pending" | "complete";
    category:
      | "accommodation"
      | "advertising"
      | "bar"
      | "charity"
      | "clothing"
      | "dining"
      | "education"
      | "electronics"
      | "entertainment"
      | "fuel"
      | "general"
      | "groceries"
      | "health"
      | "home"
      | "income"
      | "insurance"
      | "investment"
      | "loan"
      | "office"
      | "phone"
      | "service"
      | "shopping"
      | "software"
      | "sport"
      | "tax"
      | "transport"
      | "transportation"
      | "utilities";
    counterparty: {
      name: string | null;
      type: "person" | "organization";
    };
  };
  status: "posted" | "pending";
  id: string;
  links: {
    self: string;
    account: string;
  };
  running_balance: string | null;
  type: string;
}
