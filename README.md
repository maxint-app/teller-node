# @maxint/teller

Nodejs client for [teller.io](https://teller.io) API by [maxint.com](https://maxint.com/)

## Installation

```bash
$ npm install @maxint/teller
```

```bash
$ yarn add @maxint/teller
```
```bash
$ pnpm add @maxint/teller
```

## Usage

Go to https://teller.io/dashboard > Certificates > Create a new certificate.

Save certificate files `certificate.pem` and `private_key.pem` in project root.

Add `.pem` to `.gitignore`, to tell Git to ignore certificate files when you make a commit.

Use in your project:

```typescript
import { TellerClient } from '@maxint/teller';

const teller = new TellerClient({
  certificatePath: "./certificate.pem",
  privateKeyPath: "./private_key.pem",
  // optional. You will most likely will need to pass it in each request
  accessToken: "your_access_token_from_teller_connect"
});

teller.identity.get().then((identity) => {
  console.log(identity);
})

```

> Follow the teller.io [docs](https://teller.io/docs/api) for more information.

## License

MIT