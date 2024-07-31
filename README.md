# Loyalty Points Contracts
The Loyalty Points Contracts is an open-source project that provides a framework for creating customizable loyalty point systems on the  blockchain. It is built using the [Hardhat](https://hardhat.org/) framework and consists of three main contracts:
1. LoyaltyPoints: This contract implements the core functionality of the loyalty points system, including point mint, burn, and balance management, following the ERC20 protocol. 
2. LoyaltyPointsFactory: This contract allows users to deploy their own instances of the LoyaltyPoints contract, enabling the creation of customized loyalty point systems.
3. ILoyaltyPointsHook: This interface defines the contract structure for implementing custom hooks that can be attached to the LoyaltyPoints contract.

## Key Features
1. **Customizable Roles**: Each LoyaltyPoints contract instance has two key roles: admin and minter. The admin is the contract owner, with full control over the contract. The minter role can be assigned to one or more addresses, granting them the ability to issue loyalty points.
2. **Custom Minting Logic**: The minter role allows you to implement your own logic for issuing loyalty points, enabling you to integrate the system with your specific business requirements.
3. **Transferable or Non-Transferable Points**: The LoyaltyPoints contract can be configured to allow or restrict the transfer of loyalty points between addresses.
4. **Hooks**: The LoyaltyPoints contract supports the implementation of "hooks", which are additional contracts that can be called whenever the loyalty points balance of an address changes. These hooks allow you to add custom functionality, such as restricting the transfer of points to specific addresses.

## Getting Started
1. **Deploy the LoyaltyPointsFactory Contract:**
   - Set the owner using Hardhat variables([hardhat-configuration-variables](https://hardhat.org/hardhat-runner/docs/guides/configuration-variables)).
   - Deploy the LoyaltyPointsFactory contract using the `npm run deploy:loyaltyPointFactory:gravity` command (modify chain.ts to support other chains).
2. **Deploy a LoyaltyPoints Contract**:
   - Modify the `scripts/deploy_loyaltyPointByFactory.ts` file to specify the factory address, contract name, symbol, and minters. 
   - Deploy the LoyaltyPoints contract using the `npm run deploy:loyaltyPointByFactory:gravity` command. 
3. **Mint Loyalty Points:**
   The minters can use the `mint` function to mint loyalty points to specified addresses.
4. **burn Loyalty Points:**
   The minters can use the `burn` function to burn loyalty points from specified addresses. 
5. **Transfer Loyalty Points:**
   The loyalty points can be transferred between addresses using the `transfer` function.

## Implementing Hooks
1. **Create a Hook Contract:**
   - Develop a contract that implements the ILoyaltyPointsHook interface.(eg: contracts/TestLoyaltyPointHook/LoyaltyPointHook.sol)
2. **Attach the Hook to the LoyaltyPoints Contract:**
   - The admin of the LoyaltyPoints contract can attach the hook contract using the `addHook()` function.
3. **delete the Hook from the LoyaltyPoints Contract:**
   - The admin of the LoyaltyPoints contract can delete the hook contract using the `deleteHook()` function.

Whenever the loyalty points balance of an address changes, the attached hook contracts will be called, allowing you to implement custom functionality, such as restricting the transfer of points to specific addresses.


## License
The Loyalty Points Contracts project is licensed under the MIT License.