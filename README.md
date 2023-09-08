# Currency Exchanger

#### This currency exchanger can determine the value of the US Dollar (USD) in five different currencies.

#### By Seth Gonzales

## Technologies Used

* HTML
* CSS 
* JavaScript
* Node v16.13.1
* npm v8.1.2

## Description

#### This application allows you to convert any USD value into either the European Euro, Mexican Peso, Brazilian Real, Japanese Yen, or Indian Rupee by connecting to the ExchangeRate API. This API keeps up-to-date information on the conversion rates between the USD and these (and many more!) countries. Enter any USD value and choose one of the five currency options to compare it to! 

## Setup/Installation Requirements

* Navigate to the currency-exchanger repository on [GitHub](https://github.com/sethgonzales/currency-exchanger).
* Clone the repository down using `$ git clone https://github.com/sethgonzales/currency-exchanger.git` in your terminal.
* Open the repository and create a `.env` file in the top level of your directory. 
  * If `.env` is not already located in your `.gitignore`, please be sure to add it and commit your `.gitignore` before moving on.
* Get your API Key from [ExchangeRate](https://www.exchangerate-api.com/). If needed, create an account follow the provided [documentation](https://www.exchangerate-api.com/docs/overview) for navigating the API.
* Add your API Key into the `.env` file as `"API_KEY=Your-API-Key-Goes-Here"`.
* Follow the next steps in your terminal for the identified npm commands...
  * Run `$ npm install` from the root directory to install all npm packages.
  * Build the project using webpack with `$ npm run build`.
  * Lint JavaScript files with `$ npm run lint`.
  * Deploy a development server with `$ npm run start`.

## Known Bugs

* Only supports five pre-determined countries.
* Is not user friendly on mobile screens or tablets.

## License

MIT License

Copyright (c) 2023 Seth Gonzales

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

If you run into any issues, or would like to contribute to our code, please email: sethgonzales157@gmail.com.