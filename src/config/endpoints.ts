export const MonobankClient = 'https://api.monobank.ua/';

enum endpointParts {
	Bank = 'bank',
}

export const apiActionUrls = {
	currencyInfo: `${MonobankClient}${endpointParts.Bank}/currency`,
};
