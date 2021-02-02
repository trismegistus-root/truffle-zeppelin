# truffle-zeppelin  
Truffle box for quick smart contract implementation with React.js & Web3.js

## Purpose  
During the development of my own smart contracts, I used a number of truffle boxes to become familiar with the framework and ganache integration. This truffle box is a sort of "lessons learned" for the newcomer in the world of Ethereum/Truffle development. 

## Features (Planned & Implemented)  
1. OpenZeppelin contracts - package excludes ERC20Detailed
2. Truffle-config.js (for windows users) will send build artifacts to /root and /src directories. /root gives us a smoother transition to Truffle Teams. /src provides web3 access to JSONs within the /src directory, as React does not allow IMPORT to reach beyond its own directory.
3. create-react-app 
4. web3.js - with ComponentDidMount() integration for the below smart contract
5. Practice contract "template.sol", which IMPORTS ERC20, with plenty of comments to walk a beginner through Solidity inheritance.
6. Practice migration for "template.sol" under 2_deploy_contract.js, with plenty of comments to walk a beginner through truffle migrations.
7. Practice test for "template.sol" to show how one can create a test for the internal contracts without much difficulty using Mocha. 
8. Default branch prepped for Truffle Teams

## Assumptions  
1. Dev has installed Ganache from Truffle Suites
2. Dev has no need for Redux or Drizzle
3. Dev is familiar with ERC20/ERC721 standards from Ethereum Foundation
4. Dev plans to build for the Ethereum blockchain (this project is not prepped for Tezos contracts)
5. Dev has JS(ES6), CSS3, HTML5, and JSX knowledge (functional & class type components)
