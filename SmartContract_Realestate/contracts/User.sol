//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract RealEstateUsers{

    
    
    enum UserStatus {
        Buyer, Seller
    }
   
   
        struct User{
        address payable wallateaddress;
        string firstName;
        string  lastName;
        string email;
        string  phoneNumber;
        uint   dateOfBirth;
        uint  balance;
        UserStatus  status;
    }
        mapping (address => User) public Users;
    mapping(address=>mapping(string=>string[])) public url_documentation;
    

    function createUsers(address payable  _wallateaddress,string memory _firstName,string memory _lastName, string memory _email,
    string memory _phoneNumber,uint _dateOfBirth,UserStatus _status) public{
       Users[_wallateaddress] = User(_wallateaddress,_firstName,_lastName,_email,_phoneNumber,_dateOfBirth,1, _status);
    }

    function addUrlDocumentOfUser(address account, string memory url_name,string[] memory url_value) public{
        url_documentation[account][url_name] = url_value;
    }

    // function deopsit(address payable  wallateaddress) payable returns(string memory){

    // } 

    function getUser(address userAddress) external  view returns (User memory) {
       return Users[userAddress];
    }

}