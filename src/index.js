import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getCurrencyEx from './get-currency.js';

function handleFormSubmission(event) {
  event.preventDefault();
  const supportedCountries = ["EUR", "MXN", "BRL", "JPY", "INR"];
  const USDvalue = document.querySelector('#USD-value').value;
  const country = document.querySelector('#country').value;
  const inputError = "Error: Invalid Input";
  document.querySelector('#USD-value').value = null;
  document.querySelector('#country').value = null;
  if (USDvalue === "" || USDvalue < 0 || !country || !supportedCountries.includes(country)) {
    document.querySelector('#showResponse').innerHTML = `<h2>${inputError}</h2>`;
  } else {
    getCurrencyEx(USDvalue, country);
  }
}

export function printExchange(USDvalue, country, exchangeValue) {
  document.querySelector('#showResponse').innerHTML = `<h2>${USDvalue} USD is worth ${exchangeValue} ${country}</h2>`;

}

export function printError(error) {
  document.querySelector('#showResponse').innerHTML =
    `<h2>There was an error accessing data. ${error}.</h2>`;
}

window.addEventListener('load', function () {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});