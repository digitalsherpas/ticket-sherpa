const config = require('../../config');
const TestRPC = require('ethereumjs-testrpc');

const server = TestRPC.server();
server.listen(process.env.BLOCKCHAIN_PORT || config.BLOCKCHAIN_PORT, (err, blockchain) => {
  console.log(`TEST RPC server running on http://localhost:${config.BLOCKCHAIN_PORT}`);
  console.log('Account Addresses:')
  console.log(Object.keys(blockchain.accounts));
});
