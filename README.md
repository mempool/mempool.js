# Mempool JS API

[![npm version](https://img.shields.io/npm/v/mempool-js.svg?style=flat-square)](https://www.npmjs.org/package/mempool-js)
[![NPM](https://img.shields.io/david/mempool/mempool-js.svg?style=flat-square)](https://david-dm.org/mempool/mempool-js#info=dependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/mempool/mempool-js/badge.svg?style=flat-square)](https://snyk.io/test/github/mempool/mempool-js)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

---

Easy way to add Mempool API to your JS application.

---

## References

- Documentation: [https://mempool.space/api](https://mempool.space/api)

---

## Features

- [Instalation](#installation)
  - [HTML](#installation)
  - [NodeJS](#installation)
- [Usage](#usage)

  - Fees
    - [Get Fees Recommended](#get-fees-recommended)
    - [Get Fees Mempool Blocks](#get-fees-mempool-blocks)
  - Mempool
    - [Get Mempool](#get-mempool)
    - [Get Mempool Recent](#get-mempool-recent)
    - [Get Mempool Txids](#get-mempool-txids)
  - Blocks
    - [Get Block](#get-block)
    - [Get Block Status](#get-block-status)
    - [Get Block Txs](#get-block-txs)
    - [Get Block Txids](#get-block-txids)
    - [Get Block Txid](#get-block-txid)
    - [Get Block Raw](#get-block-raw)
    - [Get Blocks Height](#get-blocks-height)
    - [Get Blocks](#get-blocks)
    - [Get Blocks Tip Height](#get-blocks-tip-height)
    - [Get Blocks Tip Hash](#get-blocks-tip-hash)
  - Transactions
    - [Get Tx](#get-tx)
    - [Get Tx Status](#get-tx-status)
    - [Get Tx Hex](#get-tx-hex)
    - [Get Tx Raw](#get-tx-raw)
    - [Get Tx Merkle Block Proof](#get-tx-merkle-block-proof)
    - [Get Tx Merkle Proof](#get-tx-merkle-proof)
    - [Get Tx Outspend](#get-tx-outspend)
    - [Get Tx Outspends](#get-tx-outspends)
    - [Post Tx Outspends]($post-tx-outspends)
  - Addresses
    - [Get Address](#get-address)
    - [Get Address Txs](#get-address-txs)
    - [Get Address Txs Chain](#get-address-txs-chain)
    - [Get Address Txs Mempool](#get-address-txs-mempool)
    - [Get Address Txs Utxo](#get-address-txs-utxo)
  - [Websocket](#websocket)

- [Contribute](#contribute)
- [License](#license)

<br/>

## Installation

---

### HTML

```html
<script type="text/javascript" src="./mempool.min.js"></script>
<script type="text/javascript">
  const {
    addresses,
    blocks,
    fees,
    mempool: mp,
    transactions,
    websocket,
  } = mempool.default({
    apiEndpoint: 'https://your-local-endpoint/',
  });
</script>
```

<br/>

### NodeJS

Using npm:

```bash
$ npm install @mempool/mempool-js
```

Using yarn:

```bash
$ yarn add @mempool/mempool-js
```

<br/>

## Usage

---

### Get Fees Recommended

Returns our currently suggested fees for new transactions.

[ [NodeJS Example](examples/nodejs/fees.ts) ] [ [HTML Example](examples/html/fees.html) ] [ [Go to Top](#features) ]

```js
const { fees } = mempool();

const feesRecommended = await fees.getFeesRecommended();
console.log(feesRecommended);
```

<br/>

### Get Fees Mempool Blocks

Returns current mempool as projected blocks.

[ [NodeJS Example](examples/nodejs/fees.ts) ] [ [HTML Example](examples/html/fees.html) ] [ [Go to Top](#features) ]

```js
const { fees } = mempool();

const feesMempoolBlocks = await fees.getFeesMempoolBlocks();
console.log(feesMempoolBlocks);
```

<br/>

### Get Mempool

Returns current mempool backlog statistics.

[ [NodeJS Example](examples/nodejs/mempool.ts) ] [ [HTML Example](examples/html/mempool.html) ] [ [Go to Top](#features) ]

```js
const { mempool } = mempool();

const getMempool = await mempool.getMempool();
console.log(getMempool);
```

<br/>

### Get Mempool Txids

Get the full list of txids in the mempool as an array. The order of the txids is arbitrary and does not match bitcoind.

[ [NodeJS Example](examples/nodejs/mempool.ts) ] [ [HTML Example](examples/html/mempool.html) ] [ [Go to Top](#features) ]

```js
const { mempool } = mempool();

const getMempoolTxids = await mempool.getMempoolTxids();
console.log(getMempoolTxids);
```

<br/>

### Get Mempool Recent

Get a list of the last 10 transactions to enter the mempool. Each transaction object contains simplified overview data, with the following fields: txid, fee, vsize, and value.

[ [NodeJS Example](examples/nodejs/mempool.ts) ] [ [HTML Example](examples/html/mempool.html) ] [ [Go to Top](#features) ]

```js
const { mempool } = mempool();

const getMempoolRecent = await mempool.getMempoolRecent();
console.log(getMempoolRecent);
```

<br/>

### Get Block

Returns details about a block. Available fields: id, height, version, timestamp, bits, nonce, merkle_root, tx_count, size, weight, and previousblockhash.

Parameters:

- {string} hash - Hash from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const block = await blocks.getBlock('000000000000000015dc...');
console.log(block);
```

<br/>

### Get Block Status

Returns the confirmation status of a block. Available fields: in_best_chain (boolean, false for orphaned blocks), next_best (the hash of the next block, only available for blocks in the best chain).

Parameters:

- {string} hash - Hash from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockStatus = await blocks.getBlockStatus('000000000000000015dc...');
console.log(blockStatus);
```

<br/>

### Get Block Txs

Returns a list of transactions in the block (up to 25 transactions beginning at start_index). Transactions returned here do not have the status field, since all the transactions share the same block and confirmation status.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block
- {number} params.start_index - Default: 25

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockTxs = await blocks.getBlockTxs({
  hash: '000000000000000015dc...',
});
console.log(blockTxs);
```

<br/>

### Get Block Txids

Returns a list of all txids in the block.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockTxids = await blocks.getBlockTxids('000000000000000015dc...');
console.log(blockTxids);
```

<br/>

### Get Block Txid

Returns the transaction at index :index within the specified block.

Parameters:

- {Object} params - Params object.
- {string} params.hash - Hash from a block
- {number} params.index - Index

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockTxid = await blocks.getBlockTxid({
  hash: '000000000000000015dc...',
  index: 218,
});
console.log(blockTxids);
```

<br/>

### Get Block Raw

Returns the raw block representation in binary.

Parameters:

- {string} hash - Hash from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockRaw = await blocks.getBlockRaw('000000000000000015dc...');
console.log(blockRaw);
```

<br/>

### Get Blocks Height

Returns the hash of the block currently at :height.

Parameters:

- {number} params.height - Height from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blockHeight = await blocks.getBlockHeight(42);
console.log(blockHeight);
```

<br/>

### Get Blocks

Returns the 10 newest blocks starting at the tip or at :start_height if specified.

Parameters:

- {Object} params - Params object.
- {number} params.start_height - Height from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const getBlocks = await blocks.getBlocks({
  start_height: 66666,
});
console.log(getBlocks);
```

<br/>

### Get Blocks Tip Height

Returns the 10 newest blocks starting at the tip or at :start_height if specified.

Parameters:

- {Object} params - Params object.
- {number} params.start_height - Height from a block

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blocksTipHeight = await blocks.getBlocksTipHeight();
console.log(blocksTipHeight);
```

<br/>

### Get Blocks Tip Hash

Returns the hash of the last block.

[ [NodeJS Example](examples/nodejs/blocks.ts) ] [ [HTML Example](examples/html/blocks.html) ] [ [Go to Top](#features) ]

```js
const { blocks } = mempool();

const blocksTipHash = await blocks.getBlocksTipHash();
console.log(blocksTipHash);
```

<br/>

### Get Tx

Returns details about a transaction. Available fields: txid, version, locktime, size, weight, fee, vin, vout, and status.

Parameters:

- {string} txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const tx = await transactions.getTx('15e10745f15593...');
console.log(tx);
```

<br/>

### Get Tx Status

Returns the confirmation status of a transaction. Available fields: confirmed (boolean), block_height (optional), and block_hash (optional).

Parameters:

- {string} txid - Transactions id.

  [ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txStatus = await transactions.getTxStatus('15e10745f15593...');
console.log(txStatus);
```

<br/>

### Get Tx Hex

Returns a transaction serialized as hex.

Parameters:

- {string} txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txHex = await transactions.getTxHex('15e10745f15593...');
console.log(txHex);
```

<br/>

### Get Tx Raw

Returns a transaction as binary data.

Parameters:

- {string} txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txRaw = await transactions.getTxRaw('15e10745f15593...');
console.log(txRaw);
```

<br/>

### Get Tx Merkle Block Proof

Returns a merkle inclusion proof for the transaction using bitcoind's merkleblock format.

Parameters:

- {string} txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txMerkleBlockProof = await transactions.getTxMerkleBlockProof(
  '15e10745f15593...'
);
console.log(txMerkleBlockProof);
```

<br/>

### Get Tx Merkle Proof

Returns a merkle inclusion proof for the transaction using Electrum's blockchain.transaction.get_merkle format.

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txMerkleProof = await transactions.getTxMerkleProof('15e10745f15593...');
console.log(txMerkleProof);
```

<br/>

### Get Tx Outspend

Returns the spending status of a transaction output. Available fields: spent (boolean), txid (optional), vin (optional), and status (optional, the status of the spending tx).

Parameters:

- {Object} params - Params object.
- {string} params.txid - Transactions id.
- {number} params.vout - Vout number.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txOutspend = await transactions.getTxOutspend({
  txid: '15e10745f15593...',
  vout: 3,
});
console.log(txOutspend);
```

<br/>

### Get Tx Outspends

Returns the spending status of all transaction outputs.

Parameters:

- {string} params.txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const txOutspends = await transactions.getTxOutspends('15e10745f15593...');
console.log(txOutspends);
```

<br/>

### Post Tx Outspends

Broadcast a raw transaction to the network. The transaction should be provided as hex in the request body. The txid will be returned on success.

Parameters:

- {string} txid - Transactions id.

[ [NodeJS Example](examples/nodejs/transactions.ts) ] [ [HTML Example](examples/html/transactions.html) ] [ [Go to Top](#features) ]

```js
const { transactions } = mempool();

const postTx = await transactions.postTx('15e10745f15593...');
console.log(postTx);
```

<br/>

### Get Address

Returns details about an address. Available fields: address, chain_stats, and mempool_stats. {chain,mempool}\_stats each contain an object with tx_count, funded_txo_count, funded_txo_sum, spent_txo_count, and spent_txo_sum.

Parameters:

- {string} address - Address id.

[ [NodeJS Example](examples/nodejs/addresses.ts) ] [ [HTML Example](examples/html/addresses.html) ] [ [Go to Top](#features) ]

```js
const { addresses } = mempool();

const address = await addresses.getAddress('15e10745f15593a...');
console.log(address);
```

<br/>

### Get Address Txs

Get transaction history for the specified address/scripthash, sorted with newest first. Returns up to 50 mempool transactions plus the first 25 confirmed transactions. You can request more confirmed transactions using :last_seen_txid (see below).

Parameters:

- {string} address - Address id.

[ [NodeJS Example](examples/nodejs/addresses.ts) ] [ [HTML Example](examples/html/addresses.html) ] [ [Go to Top](#features) ]

```js
const { addresses } = mempool();

const addressTxs = await addresses.getAddressTxs('15e10745f15593a...');
console.log(addressTxs);
```

<br/>

### Get Address Txs Chain

Get confirmed transaction history for the specified address/scripthash, sorted with newest first. Returns 25 transactions per page. More can be requested by specifying the last txid seen by the previous query.

Parameters:

- {string} address - Address id.

[ [NodeJS Example](examples/nodejs/addresses.ts) ] [ [HTML Example](examples/html/addresses.html) ] [ [Go to Top](#features) ]

```js
const { addresses } = mempool();

const addressTxsChain = await addresses.getAddressTxsChain(
  '15e10745f15593a...'
);
console.log(addressTxsChain);
```

<br/>

### Get Address Txs Mempool

Get unconfirmed transaction history for the specified address/scripthash. Returns up to 50 transactions (no paging).

Parameters:

- {string} address - Address id.

[ [NodeJS Example](examples/nodejs/addresses.ts) ] [ [HTML Example](examples/html/addresses.html) ] [ [Go to Top](#features) ]

```js
const { addresses } = mempool();

const addressTxsMempool = await addresses.getAddressTxsMempool(
  '15e10745f15593a...'
);
console.log(addressTxsMempool);
```

<br/>

### Get Address Txs Utxo

Get unconfirmed transaction history for the specified address/scripthash. Returns up to 50 transactions (no paging).

Parameters:

- {string} address - Address id.

[ [NodeJS Example](examples/nodejs/addresses.ts) ] [ [HTML Example](examples/html/addresses.html) ] [ [Go to Top](#features) ]

```js
const { addresses } = mempool();

const addressTxsUtxo = await addresses.getAddressTxsUtxo('15e10745f15593a...');
console.log(addressTxsUtxo);
```

<br/>

### Websocket

```js
const { websocket } = mempool();

const ws = websocket.init({
  options: ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart'],
});

ws.on('message', function incoming(data) {
  const res = JSON.parse(data);
  if (res.blocks) {
    res.blocks.forEach((block: { height }) => {
      console.log(block.height);
    });
  }
  if (res.mempoolInfo) {
    console.log(res.mempoolInfo);
  }
  if (res.transactions) {
    console.log(res.transactions);
  }
  if (res.mempoolBlocks) {
    console.log(res.mempoolBlocks);
  }
});
```

<br/>

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## License [MIT](https://choosealicense.com/licenses/mit/)
