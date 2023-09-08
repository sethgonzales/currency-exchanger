export default class CurrencyService {
  static async currencyExchange(country) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${country}`);
      const jsonResponse = await response.json();
      if (response.result === 'success') {
        return jsonResponse;
      }
      const errorMessage = `${response.status} ${response.statusText} ${jsonResponse.error - type}`;
      throw new Error(errorMessage);
    } catch (error) {
      return error;
    }
  }
}