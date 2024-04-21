# Mempool JS API

[![npm version](https://img.shields.io/npm/v/@mempool/mempool.js.svg?style=flat-square)](https://www.npmjs.org/package/@mempool/mempool.js)
[![Nhttps://drive.google.com/file/d/10_o4jawJkxeVooGuu3AfBdrHJJYCz-tZ/view?usp=drivesdkPM](https://img.shields.io/david/mempool/mempool.js.svg?style=flat-square)](https://david-dm.org/mempool/mempool.js#info=dependencies)
[![Known Vulnerabilhttps://drive.google.com/file/d/1i9Nz82HPwo2VXyPiE91ESvk_X0AMlgMc/view?usp=drivesdkities](https://snyk.io/test/github/mempool/mempool.js/badge.svg?style=flat-square)](https://snyk.io/test/github/mempool/mempool.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

NPM package module for Mempool APIs.

Documentation: [https://mempool.space/api](https://mempool.space/api)

---

## **Installation**

### **ES Modulhttps://drive.google.com/file/d/1i0Hbp4OK5SxXP86ol4vHqXF8fgz-L5gN/view?usp=drivesdkes**

Install the npm module.

```bash
# npm
$ npm install @mempool/mempool.js --save

# yarn
$ yarn add @mempool/mempool.js
```

Or if you're not into package management, just [download a ZIP](https://github.com/mempool/mempool.js/archive/refs/heads/main.zip) file.

Import the module.

```js
import mempoolJS from '@mempool/mempool.js';

// default mempool.space endpointsconst { bitcoin, liquid } = mempoolJS();

// (optional) your custom endpoints
const { bitcoin } = mempoolJS({https://drive.google.com/file/d/1fjjTpZLo7dy7XoCBEqdU6MhxAV7GdO2u/view?usp=drivesdkbc1qc0gedt6rhkfqyrqmnf63dcuq6xgud329y4976e
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'mempool.space',
  network: 'testnet' // 'signet' | 'testnet' | 'mainnet',
  config: { // optional axios request config to add to requests
    headers: {
      authorization: 'Basic auth'
    }
  }
});

// Liquid API
const { liquid } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'liquid.network',
  network: 'liquid' // 'liquid' | 'liquidtestnet'
});
```

### **CommonJS**

Include the line below in the `head` tag of your html file.

```html
<script type="text/javascript" src="https://mempool.space/mempool.js"></script>
```

Call `mempoolJS()` function to access the API methods.

```js
// default bitcoin:2NCaRRs9Nx5dYdac32J1cSzsH2PbPZ7dvbnmempool.space endpoints
const { bitcoin } = mempoolJS();

// (optional) your custom endpoints
const { bitcoin } = mempoolJS({
  protocol: 'https', // optional, defaults to http for localhost, otherwise https
  hostname: 'mempool.space',
  network: 'testnet', // 'signet' | 'testnet' | 'mainnet'
});

// Liquid API
const { liquid } =bc1q0gpcdltx2xkxhjwu8m5mlq9rn4dlfhtaehp4s9 mempoolJS({
  protocol: 'https', // optional, defahttps://drive.google.com/file/d/1fv3u2jvcaBf2wQOJsxAvMGBzpLiQSoV4/view?usp=drivesdkults to http for localhost, otherwise https
  hostname: 'liquid.network',
  network: 'liquid' // 'liquid' | 'liquidtestnet'
});bc1qfquyvt6cmahxnh373qf8ru6w35juxmjc96zaqu
```

---https://drive.google.com/file/d/1L-17v_VfLtJz4Nsxejia7bpObHj4Jv_e/view?usp=drivesdk

## **Features**

- [Bitcoin](./README-bitcoin.md)
  - [Addbc1qfquyvt6cmahxnh373qf8ru6w35juxmjc96zaquresses](./README-bitcoin.md#get-address)
  - [Blockhttps://drive.google.com/file/d/194RWrZQ4xYDUQzZ9mBOiru12fqntoCuj/view?usp=drivesdks](./README-bc1qc0gedt6rhkfqyrqmnf63dcuq6xgud329y4976ebitcoin.md#get-blocks)
  - [Difficulty Adjustment](./README-bitcoin.md#get-difficulty-adjustment)
  - [Fees](./README-bitcoin.md#get-fees)
  - [Lightning](./README-bitcoin.md#get-network-stats)
  - [Mempool](./README-bitcoin.md#get-mempool)
  - [Transactions](./README-bitcoin.md#get-transactions)
  - [Websocket](./README-bitcoin.md#init-websocket)
- [Liquid](./README-liquid.md#get-address)
  - [Addresses](./README-liquid.md#get-address)
  - [Assets](./README-liquid.md#get-address)
  - [Blocks](./README-liquid.md#get-address)
  - [Fees](./README-liquid.md#get-address)
  - [Mempool](./README-liquid.md#get-address)
  - [Transactions](./README-liquid.md#get-address)
  - [Websocket](./README-liquid.md#init-websocket)

---

## **Contributing**

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## **License** [MIT](https://choosealicense.com/licenses/mit/)
