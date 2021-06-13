pragma solidity ^0.5.0;

contract Testing
{
    
    //function return the value 
    function getResult() view public returns(uint256)
    {
        uint256 a=5;
        uint256 b=6;
        uint256 c=a+b;
        return c;
    }
    //function takes the input and returns the value
    function viewResult(uint256 a,uint256 b) view public  returns(uint256)
    {
        uint256 c=a+b;
        return c;
    }
    //function checks the condition and return the bool value
    function checkstate(uint256 a) view public returns(bool)
    {
        if(a==7)
        {
            return true;
        }
        else
        return false;
    }
    //function checks the string and returns the bool value
    function checkString(string memory city) view public returns(uint256)
    {
        uint256 status=0;
        
        if(keccak256(bytes(city)) == keccak256(bytes("Delhi")))
        {
            status=1;
            return status;
        }
        else
           return status;
    }
    
}
