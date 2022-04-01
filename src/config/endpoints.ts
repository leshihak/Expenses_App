export const MonobankClient = 'https://api.monobank.ua';
export const PrivateBankClient = 'https://api.privatbank.ua/p24api';

enum endpointParts {
  Bank = 'bank',
  Personal = 'personal',
  PublicInfo = 'pubinfo',
}

export const apiActionUrls = {
  monobankCurrencyInfo: `${MonobankClient}/${endpointParts.Bank}/currency`,
  privateBankCurrencyInfo: `${PrivateBankClient}/${endpointParts.PublicInfo}?json&exchange`,
  clientInfo: `${MonobankClient}/${endpointParts.Personal}/client-info`,
  statementList: `${MonobankClient}/${endpointParts.Personal}/statement`,
};
