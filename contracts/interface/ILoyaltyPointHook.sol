// SPDX-License-Identifier: MIT

pragma solidity ^0.8.24;

/**
 * @title ILoyaltyPointHook
 * @author Galxe
 *
 * Interface for hook on loyalty point contract.
 */
interface ILoyaltyPointHook {
  function onUpdate(address from, address to, uint256 value) external returns (bool);
}
