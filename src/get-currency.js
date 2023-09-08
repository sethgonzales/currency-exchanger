import CurrencyService from './currency-service.js';

export default async function getCurrencyEx(country) {
  const response = await CurrencyService.currencyExchange(country);
  if (response.conversion_rates) {
    printExchange(response);
  } else  
    printError(response);
}