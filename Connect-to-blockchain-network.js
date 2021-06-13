var express=require('express');
var app=express();
//web3 to interact with the ethereum blockchain 
var Web3=require('web3');
var web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
var contarctAddress="0x51FBF45Fa94e6FDbf2aBE79a52DA4bC47Ba97d0b";
var abi=[
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			}
		],
		"name": "chechstate",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "string",
				"name": "city",
				"type": "string"
			}
		],
		"name": "checkString",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "viewResult",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];
var contract=new web3.eth.Contract(abi,contarctAddress);
//calling Contract funtion
async function contactfunction()
{
    let details=await contract.methods.getResult().call();
    console.log(details);

}
contactfunction();
app.listen(8080,function()
{
    console.log("Listening at port 8080");
})
