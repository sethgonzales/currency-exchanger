import CurrencyService from './currency-service.js';
import {printExchange, printError} from './index.js';


export default async function getCurrencyEx(USDvalue, country) {
  try {
    const response = await CurrencyService.currencyExchange();
    const exchangeValue = (USDvalue * response.conversion_rates[country]).toFixed(2);
    printExchange(exchangeValue);
  } catch (error) {
    printError(error.message);
  }
}
