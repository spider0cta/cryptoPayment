# cryptoPayment
Cryptocurrency Payment System That accepts payments in Bitcoin ,Ethereum and Litecoin for any E-commerce type site

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

# Project Development Outline

- Setting-up the Environment 
- Choosing our version of node
- Bitbooks - Our ebook ecommerce site
- Adding Crypto currencies to our payment selection form
___

- Creating an orders endpoint
- Adding a POST route to get an order
- Tying it to our frontend
___


- The Order model schema
- Creating the order schema for the database
- Adding the routes for our API to interact
___

- Querying Cryptocurrencies price data
- Getting price data from coindesk
- Returning and applying it to our orders
___

- Bip39 & HD Wallets
- Looking at Bip39
- Creating a Mnemonic Phrase
- Adding the XPub so we can generate addresses
___

- QR Codes and Bip21
- Looking at Bip21
- Creating a QR Code for use with mobile apps
___

- Socket.io
- Adding websocket support to our frontend

___

- Coin Daemon
- Setting up bitcoind and adding our addresses to watch for
- Wallet and Block Notifications

---

- Notifying our api when we recieve a payment
- Updating the frontend via socket.io
- Updating our database once we've received enough confirmations
- Sending the ebook to our customers process


# Supported Cryptocurrencies
- Bitcoin
- Ethereum 
- Litecoin

> Note: `Configuering the supported coin is  mandatory ` 

# Pre-requisities:

- NodeJS v13.9.0
- Bitcoinlib 
- Docker

# Used Technologies

| Tech | link |
| ------ | ------ |
| nodeJs | https://nodejs.org/en/|
| Docker | https://www.docker.com/|
| coindesk API  | https://www.coindesk.com/coindesk-api |
| Javascript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| MongoDB | https://www.mongodb.com/ |
| Vuejs | https://vuejs.org/ |
| Socket.io | https://socket.io/ |


# Libs
| lib | link |
| ------ | ------ |
| bip39 | https://iancoleman.io/bip39/ |
| bip21 | https://www.npmjs.com/package/bip21|
| Bitcoinlib |https://www.npmjs.com/package/bitcoinjs-lib|
  

  
# features 
- No fees 
- In time payment 
- Supports virtual wallets and pipes 
  
 
