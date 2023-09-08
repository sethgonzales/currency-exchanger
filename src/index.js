import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import getCurrencyEx from './get-currency.js';


function handleFormSubmission(event) {
  event.preventDefault();
  const country = document.querySelector('#country').value;
  const value = document.querySelector('#value').value;
  document.querySelector('#country').value = null;
  getCurrencyEx(value, country);
}

function printExchange(response) {
  

}

window.addEventListener('load', function () {
  document.querySelector('form').addEventListener('submit', handleFormSubmission);
});