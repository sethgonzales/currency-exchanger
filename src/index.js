import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getCurrencyEx from './get-currency.js';


function handleFormSubmission(event) {
  event.preventDefault();
  const countryInput = document.querySelector('#country').value;
  document.querySelector('#country').value = null;
  getCurrencyEx(countryInput);
}

function printExchange(response) {
  

}

window.addEventListener('load', function () {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});