export default class CurrencyService {
  static async currencyExchange() {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
      const jsonResponse = await response.json();
      if (jsonResponse.status === 200) {
        return jsonResponse;
      } else {
        const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.message}`;
        throw new Error(errorMessage);
      }
    } catch (error) {
      return error;
    }
  }
}

