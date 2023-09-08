import CurrencyService from './currency-service.js';
import { printExchange, printError } from './index.js';

export default async function getCurrencyEx(USDvalue, country) {
  const response = await CurrencyService.currencyExchange();
  if (response.result === 'success') {
    const exchangeValue = (USDvalue * response.conversion_rates[country]).toFixed(2);
    printExchange(USDvalue, country, exchangeValue);
  } else {
    printError(response);
  }
}

