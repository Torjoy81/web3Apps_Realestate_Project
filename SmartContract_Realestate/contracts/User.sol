//SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract RealEstateUsers{

   
    struct User{
        string firstName;
        string  lastName;
        string email;
        string password;
        string  phoneNumber;
        uint   dateOfBirth;
        bool isUserLoggedIn; 
    }
    mapping (string => User) public Users;
    mapping(string=>string) public url_documentation;
    

    function createUsers(string memory _firstName,string memory _lastName, string memory _email,
    string memory _phoneNumber,uint _dateOfBirth,string memory _password) public{
       Users[_email] = User(_firstName,_lastName,_email,_password,_phoneNumber,_dateOfBirth,false);
    }

    function add_documentOfUser(string memory email, string memory cid) public{
        url_documentation[email] = cid;
    }

    // function deopsit(address payable  wallateaddress) payable returns(string memory){

    // } 

    function getUser(string memory email) external  view returns (User memory) {
       return Users[email];
    }
    function login(string memory email,string memory password) public  returns(bool){
        if (keccak256(abi.encodePacked(Users[email].password)) == keccak256(abi.encodePacked(password))) {
            Users[email].isUserLoggedIn = true;
            return Users[email].isUserLoggedIn;
        } else {
            return false;
        }
    }
    function logoutUser(string memory email) public {
       Users[email].isUserLoggedIn = false;
    }

}