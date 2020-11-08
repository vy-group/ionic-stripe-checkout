<h1 align="center">Ionic Stripe Checkout</h1>
<p>
  <img src="https://img.shields.io/badge/version-0.0.6-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/vy-group/ionic-stripe-checkout#readme">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" target="_blank" />
  </a>
  <a href="https://github.com/RodainaMohamed/ionic-rating/graphs/commit-activity">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" target="_blank" />
  </a>
  <a href="https://github.com/RodainaMohamed/ionic-rating/blob/master/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

> A simple Ionic 5 Stripe Checkout component using Angular.

<!-- ### 🏠 [Homepage](https://github.com/vy-group/ionic-stripe-checkout) -->

## 📝 Table of Contents

- [Prerequisites](#prerequisites)
- [Install](#install)
- [Setup](#setup)
- [Usage](#usage)
- [Author](#author)
- [Contributing](#contributing)
- [Show your support](#support)
- [License](#license)

## ✅ Prerequisites <a name = "prerequisites"></a>

The current version of the library is compatible with Ionic 4.

## ⬇️ Install <a name = "install"></a>

Using npm

```sh
npm install --save @vyconsulting/ionic-stripe-checkout
```

Using yarn

```sh
yarn add @vyconsulting/ionic-stripe-checkout
```

## 🛠 Setup <a name = "setup"></a>

Once installed you need to import our module firstly in `AppModule` :

```js
import { IonicStripeCheckoutModule } from '@vyconsulting/ionic-stripe-checkout';

@NgModule({
  ...
  imports: [IonicStripeCheckoutModule.forRoot({
    stripe_secret_key: "YOUR_STRIPE_SECRET_KEY",
  }), ...],
  ...
})
export class AppModule {
}
```

After do this, in your page where you want to use this component, you will do this:

```js
import { IonicStripeCheckoutModule } from '@vyconsulting/ionic-stripe-checkout';

@NgModule({
  ...
  imports: [IonicStripeCheckoutModule, ...],
  ...
})
export class YourModule {
}
```

## Usage <a name = "usage"></a>

Include the component on page template, like the example below:

```
  <ion-stripe-checkout
    [amount]="100"
    [currency]="'EUR'"
    (checkout)="onPay($event)"
  >
  </ion-stripe-checkout>
```

In your `tsconfig.json` file, if you use `Angular Language Service` extension, add this line :

```
{
      "compilerOptions": {
       .
       .
       .
        "paths": {
          "@vyconsulting/ionic-stripe-checkout": ["node_modules/@vyconsulting/ionic-stripe-checkout"]
        },
```

### API

### Properties

- amount: `number` it is the price of your product.
- currency: `string` it is the currency of your price. Check [Stripe Currency Normalized](https://stripe.com/docs/currencies)

### Events

- checkout: `EventEmitter<ICreatePaymentCharge | HttpErrorResponse>, the only event dedicated to payment. When the payment is successful, it returns all informations about user checkout. Otherwise it returns HttpErrorResponse from HttpClient.`

## Features which coming soon

- [ ] Integrate 3D Secure payment

## Author <a name = "author"></a>

👤 **Vyconsulting**

- Github: [@vy-group](https://github.com/vy-group)

## 🤝 Contributing <a name = "contributing"></a>

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/vy-group/ionic-stripe-checkout/issues).

## Show your support <a name = "support"></a>

Give a ⭐️ if this project helped you!

## 📝 License <a name = "license"></a>

Copyright © 2020 [Vyconsulting](https://github.com/vy-group).<br />
This project is [MIT](https://github.com/vy-group/ionic-stripe-checkout/blob/master/LICENSE) licensed.
