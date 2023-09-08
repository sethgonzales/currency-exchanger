export default class CurrencyService {
  static async currencyExchange() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      if (response.status === 200) {
        return jsonResponse;
      } else {
        const errorMessage = `${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      return error;
    }
  }
}

