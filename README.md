# Node Teller

Nodejs client for [teller.io](https://teller.io) API

## Installation

```bash
$ npm install node-teller
```

or, with yarn

```bash
$ yarn add node-teller
```

## Usage

First, generate certificates and private key from teller.io dashboard.
Then place the files in your project root. Make sure to add them to .gitignore 
to avoid committing them to your repository.

Use in your project:

```typescript
import { TellerClient } from 'node-teller';

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