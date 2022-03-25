export interface ClientInfo {
  id: string;
  name: string;
  webHookUrl: string;
  accounts: AccountInfo[];
}

export interface AccountInfo {
  id: string;
  balance: number;
  creditLimit: number;
  type: string;
  currencyCode: string;
  cashbackType?: string;
  maskedPan?: string[];
  sendId?: string;
}
