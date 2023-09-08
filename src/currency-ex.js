export default class CurrencyService {
  static async currencyExchange (number, country) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`);
    }
  }
}