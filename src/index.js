import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getCurrencyEx from './get-currency.js';


function handleFormSubmission(event) {
  event.preventDefault();
  const USDvalue = document.querySelector('#USDvalue').value;
  const country = document.querySelector('#country').value;
  document.querySelector('#country').value = null;
  getCurrencyEx(USDvalue, country);
}

export function printExchange(exchangeValue) {
  document.querySelector('#showResponse').innerHTML = `<h2> exchange value${exchangeValue} <h2></br>`;

}

function printError(error) {
  document.querySelector('#showResponse').innerHTML =
    `<h2>There was an error accessing data. ${error}.</h2>`;
}




window.addEventListener('load', function () {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});