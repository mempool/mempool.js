# mempool**JS** - Bitcoin API

Interface to access Bitcoin `mainet`, `testnet`, `signet` APIs.

[Back to home](./README.md)

---

## **Features**

- Addresses
  - [Get Address](#get-address)
  - [Get Address Txs](#get-address-txs)
  - [Get Address Txs Chain](#get-address-txs-chain)
  - [Get Address Txs Mempool](#get-address-txs-mempool)
  - [Get Address Txs Utxo](#get-address-txs-utxo)
- Assets
  - [Get Asset](#get-asset)
  - [Get Asset Txs](#get-asset-txs)
  - [Get Asset Supply](#get-asset-supply)
- Blocks
  - [Get Block](#get-block)
  - [Get Block Status](#get-block-status)
  - [Get Block Txs](#get-block-txs)
  - [Get Block Txids](#get-block-txids)
  - [Get Block Txid](#get-block-txid)
  - [Get Block Raw](#get-block-raw)
  - [Get Blocks Header](#get-blocks-header)
  - [Get Blocks Height](#get-blocks-height)
  - [Get Blocks](#get-blocks)
  - [Get Blocks Tip Height](#get-blocks-tip-height)
  - [Get Blocks Tip Hash](#get-blocks-tip-hash)
- Difficulty
  - [Get Difficulty Adjustment](#get-difficulty-adjustment)
- Fees
  - [Get Fees Recommended](#get-fees-recommended)
  - [Get Fees Mempool Blocks](#get-fees-mempool-blocks)
- Lightning
  - [Get Network Stats](#get-network-stats)
  - [Get Nodes In Country](#get-nodes-in-country)
  - [Get Nodes Stats Per Country](#get-nodes-stats-per-country)
  - [Get Nodes Hosted by ISP](#get-nodes-hosted-by-isp)
  - [Get ISP Ranking](#get-isp-ranking)
  - [Get Liquidity Ranking](#get-liquidity-ranking)
  - [Get Connectivity Ranking](#get-connectivity-ranking)
  - [Get Oldest Nodes](#get-oldest-nodes)
  - [Get Node Stats](#get-node-stats)
  - [Get Historical Node Stats](#get-historical-node-stats)
  - [Get Channel](#get-channel)
  - [Get Channels From Transaction IDs](#get-channels-from-transaction-ids)
  - [Get Channels From Node Public Key](#get-channels-from-node-public-key)
  - [Get Channels Geodata](#get-channels-geodata)
  - [Get Channels Geodata By Public Key](#get-channels-geodata-by-public-key)
- Mempool
  - [Get Mempool](#get-mempool)
  - [Get Mempool Recent](#get-mempool-recent)
  - [Get Mempool Txids](#get-mempool-txids)
- Transactions
  - [Get Tx](#get-tx)
  - [Get Tx Status](#get-tx-status)
  - [Get Tx Hex](#get-tx-hex)
  - [Get Tx Raw](#get-tx-raw)
  - [Get Tx Merkle Block Proof](#get-tx-merkle-block-proof)
  - [Get Tx Merkle Proof](#get-tx-merkle-proof)
  - [Get Tx Outspend](#get-tx-outspend)
  - [Get Tx Outspends](#get-tx-outspends)
  - [Post Tx](#post-tx)
- Websocket
  - [Init Websocket](#init-websocket)
  - [Want Data](#want-data)
  - [Stop Want Data](#stop-want-data)
  - [Track Address](#track-address)
  - [Stop Track Address](#stop-track-address)
  - [Track Addresses](#track-addresses)
  - [Stop Track Addresses](#stop-track-addresses)
  - [Track Transaction](#track-transaction)
  - [Stop Track Transaction](#stop-track-transaction)
  - [Track Rbf Summary](#track-rbf-summary)
  - [Stop Track Rbf Summary](#stop-track-rbf-summary)
  - [Track Rbf](#track-rbf)
  - [Stop Track Rbf](#stop-track-rbf)
  - [Track Mempool Block](#track-mempool-block)
  - [Stop Track Mempool Block](#stop-track-mempool-block)


---

### **Get Address**

Returns details about an address. Available fields: `address`, `chain_stats`, and `mempool_stats`. `{chain,mempool}\_stats` each contain an object with `tx_count`, `funded_txo_count`, `funded_txo_sum`, `spent_txo_count`, and `spent_txo_sum`.

**Parameters:**

- {string} address

[ [NodeJS Example](examples/nodejs/bitcoin/addresses.ts) ] [ [HTML Example](examples/html/bitcoin/addresses.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { addresses },
} = mempoolJS();

const address = '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC';

const myAddress = await addresses.getAddress({ address });
console.log(myAddress);
```

### **Get Address Txs**

Get transaction history for the specified address/scripthash, sorted with newest first. Returns up to 50 mempool transactions plus the first 25 confirmed transactions. You can request more confirmed transactions using `:last_seen_txid`.

**Parameters:**

- {string} address

[ [NodeJS Example](examples/nodejs/bitcoin/addresses.ts) ] [ [HTML Example](examples/html/bitcoin/addresses.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { addresses },
} = mempoolJS();

const address = '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC';

const addressTxs = await addresses.getAddressTxs({ address });
console.log(addressTxs);
```

### **Get Address Txs Chain**

Get confirmed transaction history for the specified address/scripthash, sorted with newest first. Returns 25 transactions per page. More can be requested by specifying the last txid seen by the previous query.

**Parameters:**

- {string} address

[ [NodeJS Example](examples/nodejs/bitcoin/addresses.ts) ] [ [HTML Example](examples/html/bitcoin/addresses.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { addresses },
} = mempoolJS();

const address = '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC';

const addressTxsChain = await addresses.getAddressTxsChain({ address });
console.log(addressTxsChain);
```

### **Get Address Txs Mempool**

Get unconfirmed transaction history for the specified `address/scripthash`. Returns up to 50 transactions (no paging).

**Parameters:**

- {string} address

[ [NodeJS Example](examples/nodejs/bitcoin/addresses.ts) ] [ [HTML Example](examples/html/bitcoin/addresses.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { addresses },
} = mempoolJS();

const address = '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC';

const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
console.log(addressTxsMempool);
```

### **Get Address Txs Utxo**

Get the list of unspent transaction outputs associated with the `address/scripthash`. Available fields: `txid`, `vout`, `value`, and `status` (with the status of the funding tx).

**Parameters:**

- {string} address

[ [NodeJS Example](examples/nodejs/bitcoin/addresses.ts) ] [ [HTML Example](examples/html/bitcoin/addresses.html) ] [ [Top](#features) ]

```js
const { addresses } = mempoolJS();

const addressTxsUtxo = await addresses.getAddressTxsUtxo('15e10745f15593a...');
console.log(addressTxsUtxo);
```

### **Get Block**

Returns details about a block. Available fields: `id`, `height`, `version`, `timestamp`, `bits`, `nonce`, `merkle_root`, `tx_count`, `size`, `weight`, and `previousblockhash`.

**Parameters:**

- {string} hash

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const block = await blocks.getBlock({ hash });
console.log(block);
```

### **Get Block Status**

Returns the confirmation status of a block. Available fields: `in_best_chain` (boolean, false for orphaned blocks), `next_best` (the hash of the next block, only available for blocks in the best chain).

**Parameters:**

- {string} hash

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const blockStatus = await blocks.getBlockStatus({ hash });
console.log(blockStatus);
```

### **Get Block Txs**

Returns a list of transactions in the block (up to 25 transactions beginning at start_index). Transactions returned here do not have the status field, since all the transactions share the same block and confirmation status.

**Parameters:**

- {string} params.hash
- {number} params.start_index

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const blockTxs = await blocks.getBlockTxs({ hash });
console.log(blockTxs);
```

### **Get Block Txids**

Returns a list of all txids in the block.

**Parameters:**

- {string} hash

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const blockTxids = await blocks.getBlockTxids({ hash });
console.log(blockTxids);
```

### **Get Block Txid**

Returns the transaction at index :index within the specified block.

**Parameters:**

- {string} params.hash
- {number} params.index

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const blockTxid = await blocks.getBlockTxid({ hash, index: 218 });
console.log(blockTxid);
```

### **Get Block Raw**

Returns the raw block representation in binary.

**Parameters:**

- {string} hash

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const hash = '000000000000000015dc777b3ff2611091336355d3f0ee9766a2cf3be8e4b1ce';

const blockRaw = await blocks.getBlockRaw({ hash });
console.log(blockRaw);
```

### **Get Blocks Header**

Returns the hex-encoded block header.

**Parameters:**

- {string} hash

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const blockHeader = await blocks.getBlockHeader({ hash: '0000000000000000000065bda8f8a88f2e1e00d9a6887a43d640e52a4c7660f2' });
console.log(blockHeader);
```

### **Get Blocks Height**

Returns the hash of the block currently at `:height`.

**Parameters:**

- {number} height

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const blockHeight = await blocks.getBlockHeight({ height: 0 });
console.log(blockHeight);
```

### **Get Blocks**

Returns the 10 newest blocks starting at the tip or at `:start_height` if specified.

**Parameters:**

- {number} params.start_height

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const getBlocks = await blocks.getBlocks({ start_height: 9999 });
console.log(getBlocks);
```

### **Get Blocks Tip Height**

Returns the 10 newest blocks starting at the tip or at `:start_height` if specified.

**Parameters:**

- {number} params.start_height

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const blocksTipHeight = await blocks.getBlocksTipHeight();
console.log(blocksTipHeight);
```

### **Get Blocks Tip Hash**

Returns the hash of the last block.

[ [NodeJS Example](examples/nodejs/bitcoin/blocks.ts) ] [ [HTML Example](examples/html/bitcoin/blocks.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { blocks },
} = mempoolJS();

const blocksTipHash = await blocks.getBlocksTipHash();
console.log(blocksTipHash);
```

### **Get Difficulty Adjustment**

Returns the hash of the last block.

[ [NodeJS Example](examples/nodejs/bitcoin/difficulty.ts) ] [ [HTML Example](examples/html/bitcoin/difficulty.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { difficulty },
} = mempoolJS();

const difficultyAdjustment = await difficulty.getDifficultyAdjustment();
console.log(difficultyAdjustment);
```

### **Get Fees Recommended**

Returns our currently suggested fees for new transactions.

[ [NodeJS Example](examples/nodejs/bitcoin/fees.ts) ] [ [HTML Example](examples/html/bitcoin/fees.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { fees },
} = mempoolJS();

const feesRecommended = await fees.getFeesRecommended();
console.log(feesRecommended);
```

### **Get Fees Mempool Blocks**

Returns current mempool as projected blocks.

[ [NodeJS Example](examples/nodejs/bitcoin/fees.ts) ] [ [HTML Example](examples/html/bitcoin/fees.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { fees },
} = mempoolJS();

const feesMempoolBlocks = await fees.getFeesMempoolBlocks();
console.log(feesMempoolBlocks);
```

### **Get Network Stats**

Returns network-wide stats such as total number of channels and nodes, total capacity, and average/median fee figures.

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const networkStats = await lightning.getNetworkStats();
console.log(networkStats);
```

### **Get Nodes In Country**

Returns a list of Lightning nodes running on clearnet in the requested `:country`, where `:country` is an ISO Alpha-2 country code.

**Parameters:**

- {string} country

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const nodesInCountry = await lightning.getNodesInCountry({ country: 'US' });
console.log(nodesInCountry);
```

### **Get Nodes Stats Per Country**

Returns aggregate capacity and number of clearnet nodes per country. Capacity figures are in satoshis.

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const nodesStatsPerCountry = await lightning.getNodesStatsPerCountry();
console.log(nodesStatsPerCountry);
```

### **Get Nodes Hosted by ISP**

Returns a list of nodes hosted by a specified `:isp`, where `:isp` is an ISP's ASN.

**Parameters:**

- {number} isp

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const nodesHostedByISP = await lightning.getNodesHostedByISP({ isp: 16509 });
console.log(nodesHostedByISP);
```

### **Get ISP Ranking**

Returns aggregate capacity, number of nodes, and number of channels per ISP. Capacity figures are in satoshis.

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const ispRanking = await lightning.getISPRanking();
console.log(ispRanking);
```

### **Get Liquidity Ranking**

Returns a list of the top 100 nodes by liquidity (aggregate channel capacity).

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const liquidityRanking = await lightning.getLiquidityRanking();
console.log(liquidityRanking);
```

### **Get Connectivity Ranking**

Returns a list of the top 100 nodes by connectivity (number of open channels).

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const connectivityRanking = await lightning.getConnectivityRanking();
console.log(connectivityRanking);
```

### **Get Oldest Nodes**

Returns a list of the top 100 oldest nodes.

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const oldestNodes = await lightning.getOldestNodes();
console.log(oldestNodes);
```

### **Get Node Stats**

Returns details about a node with the given `:public_key`.

**Parameters:**

- {string} public_key

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const nodeStats = await lightning.getNodeStats({ public_key });
console.log(nodeStats);
```

### **Get Historical Node Stats**

Returns historical stats for a node with the given `:public_key`.

**Parameters:**

- {string} public_key

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const historicalNodeStats = await lightning.getHistoricalNodeStats({ public_key });
console.log(historicalNodeStats);
```

### **Get Channel**

Returns details about a channel with the given `:id`.

**Parameters:**

- {string} id

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const channel = await lightning.getChannel({ id });
console.log(channel);
```

### **Get Channels From Transaction IDs**

Returns channels that correspond to the given `:txId` (multiple transaction IDs can be specified).

**Parameters:**

- {[]string} txId

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const channelsFromTransactionIDs = await lightning.getChannelsFromTransactionIDs({ txId });
console.log(channelsFromTransactionIDs);
```

### **Get Channels From Node Public Key**

Returns a list of a node's channels given its `:public_key`. Ten channels are returned at a time. Use `:index` for paging. `:status` can be `open`, `active`, or `closed`.

**Parameters:**

- {string} public_key
- {string} status
- {number} index

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js

const {
  bitcoin: { lightning },
} = mempoolJS();

const channelsFromNodePublicKey = await lightning.getChannelsFromNodePublicKey({ public_key, status, index });
console.log(channelsFromNodePublicKey);
```

### **Get Channels Geodata**

Returns a list of channels with corresponding node geodata.

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const channelsGeodata = await lightning.getChannelsGeodata();
console.log(channelsGeodata);
```

### **Get Channels Geodata By Public Key**

Returns a list of channels with corresponding geodata for a node with the given `:public_key`.

**Parameters:**

- {string} public_key

[ [NodeJS Example](examples/nodejs/bitcoin/lightning.ts) ] [ [HTML Example](examples/html/bitcoin/lightning.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { lightning },
} = mempoolJS();

const channelsGeodataByPublicKey = await lightning.getChannelsGeodataByPublicKey({ public_key });
console.log(channelsGeodataByPublicKey);
```


### **Get Children Pay for Parent**

Returns current mempool as projected blocks.

[ [NodeJS Example](examples/nodejs/bitcoin/fees.ts) ] [ [HTML Example](examples/html/bitcoin/fees.html) ] [ [Top](#features) ]

```js
  const { 
    bitcoin: { fees },
  } = mempoolJS();
  const txid = 'txid';

  const feesCPFP = await fees.getCPFP({ txid });
  console.log(feesCPFP);
```

### **Get Mempool**

Returns current mempool backlog statistics.

[ [NodeJS Example](examples/nodejs/bitcoin/mempool.ts) ] [ [HTML Example](examples/html/bitcoin/mempool.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { mempool },
} = mempoolJS();

const getMempool = await mempool.getMempool();
console.log(getMempool);
```

### **Get Mempool Recent**

Get a list of the last 10 transactions to enter the mempool. Each transaction object contains simplified overview data, with the following fields: `txid`, `fee`, `vsize`, and `value`.

[ [NodeJS Example](examples/nodejs/bitcoin/mempool.ts) ] [ [HTML Example](examples/html/bitcoin/mempool.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { mempool },
} = mempoolJS();

const getMempoolRecent = await mempool.getMempoolRecent();
console.log(getMempoolRecent);
```

### **Get Mempool Txids**

Get the full list of txids in the mempool as an array. The order of the `txids` is arbitrary and does not match bitcoind.

[ [NodeJS Example](examples/nodejs/bitcoin/mempool.ts) ] [ [HTML Example](examples/html/bitcoin/mempool.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { mempool },
} = mempoolJS();

const getMempoolTxids = await mempool.getMempoolTxids();
console.log(getMempoolTxids);
```

### **Get Tx**

Returns details about a transaction. Available fields: `txid`, `version`, `locktime`, `size`, `weight`, `fee`, `vin`, `vout`, and `status`.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const tx = await transactions.getTx({ txid });
console.log(tx);
```

### **Get Tx Status**

Returns the confirmation status of a transaction. Available fields: `confirmed` (boolean), `block_height` (optional), and `block_hash` (optional).

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txStatus = await transactions.getTxStatus({ txid });
console.log(txStatus);
```

### **Get Tx Hex**

Returns a transaction serialized as hex.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txHex = await transactions.getTxHex({ txid });
console.log(txHex);
```

### **Get Tx Raw**

Returns a transaction as binary data.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txRaw = await transactions.getTxRaw({ txid });
console.log(txRaw);
```

### **Get Tx Merkle Block Proof**

Returns a merkle inclusion proof for the transaction using bitcoind's merkleblock format.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txMerkleBlockProof = await transactions.getTxMerkleBlockProof({ txid });
console.log(txMerkleBlockProof);
```

### **Get Tx Merkle Proof**

Returns a merkle inclusion proof for the transaction using Electrum's blockchain.transaction.get_merkle format.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txMerkleProof = await transactions.getTxMerkleProof({ txid });
console.log(txMerkleProof);
```

### **Get Tx Outspend**

Returns the spending status of a transaction output. Available fields: `spent` (boolean), `txid` (optional), `vin` (optional), and `status` (optional, the status of the spending tx).

**Parameters:**

- {string} params.txid
- {number} params.vout

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txOutspend = await transactions.getTxOutspend({
  txid,
  vout: 3,
});
console.log(txOutspend);
```

### **Get Tx Outspends**

Returns the spending status of all transaction outputs.

**Parameters:**

- {string} txid

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txid = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const txOutspends = await transactions.getTxOutspends({ txid });
console.log(txOutspends);
```

### **Post Tx **

Broadcast a raw transaction to the network. The transaction should be provided as hex in the request body. The `txid` will be returned on success.

**Parameters:**

- {string} txhex

[ [NodeJS Example](examples/nodejs/bitcoin/transactions.ts) ] [ [HTML Example](examples/html/bitcoin/transactions.html) ] [ [Top](#features) ]

```js
const {
  bitcoin: { transactions },
} = mempoolJS();

const txhex = '15e10745f15593a899cef391191bdd3d7c12412cc4696b7bcb669d0feadc8521';

const postTx = await transactions.postTx({ txhex });
console.log(postTx);
```

### **Init Websocket**

Initializes a websocket connection.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
const { bitcoin: { websocket } } = mempoolJS();
const ws = websocket.wsInit(); // for in-browser websocket, use websocket.wsInitBrowser
ws.addEventListener('message', function incoming({data}) {
  console.log(JSON.parse(data.toString()));
});
```

### **Want Data**

Subscribe to `want` data. Available: `blocks`, `mempool-block`, `live-2h-chart`, and `stats`.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsWantData(ws, ['blocks', 'stats', 'mempool-blocks', 'live-2h-chart']); // for in-browser websocket, use websocket.wsWantDataBrowser
```

### **Stop Want Data**

Unsubscribe from `want` data.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopData(ws); // for in-browser websocket, use websocket.wsStopDataBrowser
```

### **Track Address**

Subscribe to address updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackAddress(ws, '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC'); // for in-browser websocket, use websocket.wsTrackAddressBrowser
```

### **Stop Track Address**

Unsubscribe from address updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopTrackingAddress(ws, '1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC'); // for in-browser websocket, use websocket.wsStopTrackingAddressBrowser
```

### **Track Addresses**

Subscribe to multiple address updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackAddresses(ws, ['1wizSAYSbuyXbt9d8JV8ytm5acqq2TorC']); // for in-browser websocket, use websocket.wsTrackAddressesBrowser
```

### **Stop Track Addresses**

Unsubscribe from multiple address updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopTrackingAddresses(ws); // for in-browser websocket, use websocket.wsStopTrackingAddressesBrowser
```

### **Track Transaction**

Subscribe to transaction updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackTransaction(ws, '01313ca0148a1bbe5676e5dd6a84e76f8b39038658bd8c333d3b2d3f7ea6dd08'); // for in-browser websocket, use websocket.wsTrackTransactionBrowser
```

### **Stop Track Transaction**

Unsubscribe from transaction updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopTrackingTransaction(ws); // for in-browser websocket, use websocket.wsStopTrackingTransactionBrowser
```

### **Track Rbf Summary**

Subscribe to RBF summary updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackRbfSummary(ws); // for in-browser websocket, use websocket.wsTrackRbfSummaryBrowser
```

### **Stop Track Rbf Summary**

Unsubscribe from RBF summary updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopTrackingRbfSummary(ws); // for in-browser websocket, use websocket.wsStopTrackingRbfSummaryBrowser
```

### **Track Rbf**

Subscribe to RBF updates. Set the second parameter to `true` to track Full RBF.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackRbf(ws, true); // for in-browser websocket, use websocket.wsTrackRbfBrowser
```

### **Stop Track Rbf**

Unsubscribe from RBF updates.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsStopTrackingRbf(ws); // for in-browser websocket, use websocket.wsStopTrackingRbfBrowser
```

### **Track Mempool Block**

Subscribe to mempool blocks.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js
websocket.wsTrackMempoolBlock(ws, 1); // for in-browser websocket, use websocket.wsTrackMempoolBlockBrowser
```

### **Stop Track Mempool Block**

Unsubscribe from mempool blocks.

[ [NodeJS Example](examples/nodejs/bitcoin/websocket.ts) ] [ [HTML Example](examples/html/bitcoin/websocket.html) ] [ [Top](#features) ]

```js

websocket.wsStopTrackingMempoolBlock(ws); // for in-browser websocket, use websocket.wsStopTrackingMempoolBlockBrowser
```
