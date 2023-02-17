// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;


import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract Escrow is ReentrancyGuard{
    using Counters for Counters.Counter;
    Counters.Counter private _propertyIDs;
    
    address payable owner;
    address public inspector;

    mapping(uint256=>propertyItem) private idToPropertymap;
    mapping(uint256 => bool) public inspectionPassed;
    mapping(uint256 => mapping(address => bool)) public approval;
    mapping(uint256 => address) public buyer;


    constructor(address _inspector){
        owner = payable(msg.sender);
        inspector = _inspector;
    }

      modifier onlyBuyer(uint256 _nftID) {
        require(msg.sender == buyer[_nftID], "Only buyer can call this method");
        _;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only seller can call this method");
        _;
    }


    modifier onlyInspector() {
        require(msg.sender == inspector, "Only inspector can call this method");
        _;
    }

    enum propertyType{ HOUSE, APARTMENT, INDUSTRY, RENT_HOUSE,RENT_APARTMENT }
    enum propertySellingType{ OWNABLE, SHAREABLE }


    struct propertyItem{
        uint propertyID;
        address nftContract;
        uint256 tokenID;
        address  payable owner;
        address payable current_seller;
        address[] previous_seller; 
        uint price;
        bool property_documention;
        propertyType selectPropety;
        propertySellingType selectProcess;
        bool sold;
    }



    event propertyCreated(
        uint indexed propertyID,
        address indexed nftContract,
        uint256 indexed tokenID,
        address  payable owner,
        address payable current_seller,
        address[] previous_seller,
        uint price,
        bool property_documention,
        propertyType selectPropety,
        propertySellingType selectProcess,
        bool sold
    );

    // create property

    function createProperty(address _nftContact,uint256 _tokenID,uint256 _price,bool propertyDocument,address[] memory pv_seller,propertyType selectType,propertySellingType selectsellingProcess) public payable onlyOwner nonReentrant{
        require(_price>10 ether,"we don't count house property");
        require(propertyDocument == false,"Property document is not vaild");
        _propertyIDs.increment();
        uint256 propertyID= _propertyIDs.current();

        idToPropertymap[propertyID] = propertyItem(
            propertyID,
            _nftContact,
            _tokenID,
            payable(msg.sender),
            payable(address(0)),
            pv_seller,
            _price,
            propertyDocument,
            selectType,
            selectsellingProcess,
            false
        );

        IERC721(_nftContact).transferFrom(msg.sender,address(this),_tokenID);

        emit propertyCreated(
            propertyID,
            _nftContact,
            _tokenID,
            payable(msg.sender),
            payable(address(0)),
            pv_seller,
            _price,
            propertyDocument,
            selectType,
            selectsellingProcess,
            false
        );

    } 

    // 
    
    function updateInspectionStatus(uint256 _nftID, bool _passed) public onlyInspector
    {
        inspectionPassed[_nftID] = _passed;
    } 

    function approveSale(uint256 _nftID) public {
        approval[_nftID][msg.sender] = true;
    }
     function cancelSale(uint256 _nftID) public {
        if (inspectionPassed[_nftID] == false) {
            payable(buyer[_nftID]).transfer(address(this).balance);
        } else {
            payable(owner).transfer(address(this).balance);
        }
    }



}