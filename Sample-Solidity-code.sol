pragma solidity ^0.5.0;

contract Testing
{
    uint256 arrayvalue=[3];
    
    function getResult() view public returns(uint256)
    {
        uint256 a=5;
        uint256 b=6;
        uint256 c=a+b;
        return c;
    }
    
    function viewResult(uint256 a,uint256 b) view public  returns(uint256)
    {
        uint256 c=a+b;
        return c;
    }
    function checkstate(uint256 a) view public returns(bool)
    {
        if(a==7)
        {
            return true;
        }
        else
        return false;
    }
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
    function returnarray()  view public returns(unit)
    {
        for(int256 i=0;i<3;i++)
        {
            arrayvalue.push(i);
        }
        return arrayvalue;
    }
}