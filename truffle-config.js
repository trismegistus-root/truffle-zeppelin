    const path = require("path")
        module.exports = {
        compilers:{
        solc:{
            version: "0.6.2"
        }
        },
        networks: {
             development: {
              host: "127.0.0.1",     // Localhost (default: none)
              port: 7545,            // Standard Ethereum port (default: none)
              network_id: "5777",       // Any network (default: none)
             },
          },
          // Set default mocha options here, use special reporters etc.
          mocha: {
            // timeout: 100000
          },
    contracts_build_directory: path.join(__dirname, "app/src/contracts"),
    contracts_build_directory: path.join(__dirname, "build")
};
