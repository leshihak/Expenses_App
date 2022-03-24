export const MonobankClient = 'https://api.monobank.ua/';

enum endpointParts {
  Bank = 'bank',
  Personal = 'personal',
}

export const apiActionUrls = {
  currencyInfo: `${MonobankClient}${endpointParts.Bank}/currency`,
  clientInfo: `${MonobankClient}${endpointParts.Personal}/client-info`,
};
