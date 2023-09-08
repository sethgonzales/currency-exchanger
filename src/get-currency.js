import CurrencyService from './currency-service.js';

export default async function getCurrencyEx(value, country) {
  const response = await CurrencyService.currencyExchange(country);
  let exchangeValue = value * response.conversion_rates.country;

  
  if (response.conversion_rates) {
    printExchange(exchangeValue);
  } else  
    printError(response);
}