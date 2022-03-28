export interface StatementItem {
  id: string;
  time: number;
  description: string;
  mcc: number;
  hold: false;
  amount: number;
  operationAmount: number;
  currencyCode: number;
  commissionRate: number;
  cashbackAmount: number;
  balance: number;
  comment: string;
  receiptId: string;
  counterEdrpou: string;
  counterIban: string;
}
