## Getting Started With Smart Contracts

At the core of Web3 decentralized apps (Dapps) are wallets.

A wallet is simply a container holding all of the transactions performed by an account.

### What's an account?

An account is an entity (human) or code that can perform a transaction on a blockchain. They can receive, hold or send `$eth` or tokens to other accounts.

### What is a Smart Contract?

A Smart Contract is an autonomous piece of code that is *NOT* user-controlled. Think of them as middlemen or programmatic escrows that interface between the dealings of several accounts without sentiments, partiality, or human influence.

Similar to a user-controlled account, a Smart Contract has the following properties:

**nonce**: A nonce is a counter that records the total number of transactions sent from an account. This is used to avoid duplication of transactions.

**balance**: The number of Wei owned by this address. Wei is a denomination of `$eth`.

**codeHash**: Every code in the contract is hashed and stored in the Ethereum Virtual Machine (EVM). Each has its unique and gets executed when a contract gets a message call. A contract's codeHash cannot be changed.

**storageRoot**: Every contract has content that gets hashed and stored in the storageRoot. This is empty by default.


Now, that we know the properties of a smart contract, let's see...

### Some Use-cases of a Smart Contract 
- Automatic payment and remittance
- Stock splitting
- Automating claims and disputes with proofs
- Trustless trading with intermediaries 
- Automate supply chain process
- And more

Since we have a basic understanding of what a smart contract is, how do we create them? How do we write a piece of contract for a simple use-case that connects to the Ethereum network or Ethereum Virtual Machine (EVM)?

In the next article, we are going to take a look at a programming language designed for creating Smart Contracts ~ Solidity.


Kind share your thoughts, comments, and opinions.





