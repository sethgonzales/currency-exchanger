import CurrencyService from './currency-service.js';
import {printExchange, printError} from './index.js';

export default async function getCurrencyEx(USDvalue, country) {
  const response = await CurrencyService.currencyExchange(country);
  let exchangeValue = (USDvalue * response.conversion_rates.country).toFixed(1);

  if (response.conversion_rates) {
    printExchange(exchangeValue);
  } else
    printError(response);
}