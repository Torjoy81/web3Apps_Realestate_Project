// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract RealEstateLaw{

    constructor(){
        AgentAccount = msg.sender;
    }
    address AgentAccount;
    uint agent_commission_fees = 10;
    struct PropertiesForSell{
        address owner;
        string houseTitle;
        string houseAddress;
        uint price;
        bool forSelling;
    }
    struct Sold_properties{
        address Prev_owner;
        address New_owner;
        uint houseID;
    }
    mapping(uint256=>PropertiesForSell) public PropertiesListSeller;
    mapping(address=>Sold_properties) public transfer_ownership_properties;

    function listOfSellProperty(uint houseID,address _owner,string memory _houseTitle,string memory _houseAddress, uint _price,bool _forSelling) public{
        PropertiesListSeller[houseID] = PropertiesForSell(_owner,_houseTitle,_houseAddress,_price,_forSelling); 
    }

    function listOfSoldProperty(address _Prev_owner,address _New_owner,uint _houseID) public { 
        transfer_ownership_properties[_New_owner] = Sold_properties(_Prev_owner,_New_owner,_houseID);
    }

    function buyProperty(address buyer,address sellerID,uint _houseID,uint buyer_funds) public payable {
        require(PropertiesListSeller[_houseID].forSelling ,"This house has no information or be sold");
        PropertiesForSell storage property= PropertiesListSeller[_houseID];
        uint AgentCost = (agent_commission_fees/100)*property.price;
        require(AgentCost+property.price <= buyer_funds,"Buyer's balance is insufficient");
        payable(sellerID).transfer(property.price);
        payable (AgentAccount).transfer(AgentCost);
        listOfSoldProperty(sellerID, buyer, _houseID);
        delete PropertiesListSeller[_houseID];
    }
}