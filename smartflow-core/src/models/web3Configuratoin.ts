import * as Web3 from 'web3';
let web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
let executionAccount = 0

const verimanagerabi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getAddressOfVerifyContract",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getDescriptionOfMetadatas",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getMetadatas",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "parameters",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "signature",
						"type": "string"
					}
				],
				"internalType": "struct VerificationManagerContract.Metadatas",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getNameOfMetadatas",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			}
		],
		"name": "getParametersOfMetadatas",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getParametersOfMetadatasByIndex",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "contract_address",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "parameters",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "signature",
				"type": "string"
			}
		],
		"name": "registerEachMetadata",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "addr",
				"type": "address"
			},
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "parameters",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "signature",
						"type": "string"
					}
				],
				"internalType": "struct VerificationManagerContract.Metadatas",
				"name": "metadata",
				"type": "tuple"
			}
		],
		"name": "registerMetadata",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startArr",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "aa",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "MetadatasMap",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "parameters",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "signature",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "registerdAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "result",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];


// [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"name": "MetadatasMap",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "parameters",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "signature",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "aa",
// 		"outputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "",
// 				"type": "bytes32"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getAddressOfVerifyContract",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getDescriptionOfMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getMetadatas",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "description",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "parameters",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "signature",
// 						"type": "string"
// 					}
// 				],
// 				"internalType": "struct VerificationManagerContract.Metadatas",
// 				"name": "",
// 				"type": "tuple"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getNameOfMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "addr",
// 				"type": "address"
// 			}
// 		],
// 		"name": "getParametersOfMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getParametersOfMetadatasByIndex",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "contract_address",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "parameters",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "signature",
// 				"type": "string"
// 			}
// 		],
// 		"name": "registerEachMetadata",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "address",
// 				"name": "addr",
// 				"type": "address"
// 			},
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "description",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "parameters",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "signature",
// 						"type": "string"
// 					}
// 				],
// 				"internalType": "struct VerificationManagerContract.Metadatas",
// 				"name": "metadata",
// 				"type": "tuple"
// 			}
// 		],
// 		"name": "registerMetadata",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "registerdAddress",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "result",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "startArr",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ];


// [
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "MetadatasArray",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "contract_address",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "parameters",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "aa",
// 		"outputs": [
// 			{
// 				"internalType": "bytes32",
// 				"name": "",
// 				"type": "bytes32"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getAddressOfTaskMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "address",
// 				"name": "",
// 				"type": "address"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getDescriptionOfTaskMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getNameOfTaskMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getParametersOfTaskMetadatas",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "uint256",
// 				"name": "index",
// 				"type": "uint256"
// 			}
// 		],
// 		"name": "getTaskMetadatas",
// 		"outputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "contract_address",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "description",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "parameters",
// 						"type": "string"
// 					}
// 				],
// 				"internalType": "struct VerificationManagerContract.Metadatas[]",
// 				"name": "",
// 				"type": "tuple[]"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"internalType": "string",
// 				"name": "name",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "address",
// 				"name": "contract_address",
// 				"type": "address"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "description",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "type_of_task",
// 				"type": "string"
// 			},
// 			{
// 				"internalType": "string",
// 				"name": "parameters",
// 				"type": "string"
// 			}
// 		],
// 		"name": "registerEachTaskMetadata",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [
// 			{
// 				"components": [
// 					{
// 						"internalType": "string",
// 						"name": "name",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "address",
// 						"name": "contract_address",
// 						"type": "address"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "description",
// 						"type": "string"
// 					},
// 					{
// 						"internalType": "string",
// 						"name": "parameters",
// 						"type": "string"
// 					}
// 				],
// 				"internalType": "struct VerificationManagerContract.Metadatas",
// 				"name": "metadata",
// 				"type": "tuple"
// 			}
// 		],
// 		"name": "registerTaskMetadata",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "result",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "view",
// 		"type": "function"
// 	},
// 	{
// 		"inputs": [],
// 		"name": "startArr",
// 		"outputs": [
// 			{
// 				"internalType": "bool",
// 				"name": "",
// 				"type": "bool"
// 			}
// 		],
// 		"stateMutability": "nonpayable",
// 		"type": "function"
// 	}
// ]

const VerificationManagerContract = web3.eth.contract(verimanagerabi);
// const businessContract = web3.eth.contract(jsonabi);
const atcontract = VerificationManagerContract.at("0x3673871Eab04CA8E5f795e035d21805Dd5fa6523")

export let findParametersOfVerificationFunc = (addr: String):String => {

  // const bizcontract = businessContract.at("0x18102C8E4c0E5eDC777af40d63C0bfe7117A864E")
  // console.log(atcontract)
  // .new({
  //   gasLimit: "1000000"
  // });
  // 0x0604E07885C2518a7c7C500f29aE5700746f5F8a
  // console.log("testcontract!!")

  // console.log(atcontract.getParametersOfTaskMetadatas.call());
  // console.log(atcontract.getParametersOfTaskMetadatas.sendTransaction);
  // var getData = atcontract.teststring.getData("function_parameters");
  // console.log(getData);
  // console.log("-------------------------");

  var gasLimit = web3.eth.estimateGas({ 
    // to: toAddress, 
    from: web3.eth.accounts[executionAccount], 
    value: 4700000
  }); // the used gas for the simulated call/transaction (,,21000) 

  // console.log(gasLimit);

  // mySmartContract.methods.addinfo(value).send({"from":myAddress})

  var txObject = { 
    // data: ["testdata"],
    // data: getData,
    from: web3.eth.accounts[executionAccount],
    to: "0x99eD19692695f67CEd509c081C97badA7766e586",
    gas:3000000
    // value: 4700000 
  };
  var personstruct = {
    name: "test",
    wallet: "0x0604E07885C2518a7c7C500f29aE5700746f5F8a"
  }
  // console.log("-------------------------");
  // console.log(atcontract.teststring("test str"));
  // console.log(atcontract.getParametersOfTaskMetadatas.call(0));

  // console.log("-------------------------");
  // const testresult = atcontract.teststring.sendTransaction("tttttttt",txObject);
  // const testresult1 = bizcontract.testverify.sendTransaction("name123","0x01","Driverlicense","ID Card",1,0x01,0x03,2,0x02,0x04,txObject);
  // const testresult = atcontract.checkissuer.sendTransaction("holder1","0x01","Driverlicense",1,0x01,0x03,txObject);
  const testresult = atcontract.registerEachMetadata.sendTransaction(0x00,"name0","description0","params0","string",txObject);
  // console.log(testresult1);
  // console.log(testresult);
  // console.log("-------------------------");
  // atcontract.testfunc("hello", [ 1, 2 ],{ 
  //   from: web3.eth.accounts[executionAccount], 
  //   gas:3000000
  // })

  // console.log(atcontract.getParametersOfTaskMetadatas(0,{ 
  //   from: web3.eth.accounts[executionAccount], 
  //   gas:3000000
  // })
  // )

  // console.log("func directly");
  // console.log(atcontract.getParametersOfTaskMetadatas.call(1));

  let parameterString: String = atcontract.getParametersOfMetadatas.call(addr);
  console.log("parameters?");
  console.log(parameterString);
  
  
  // Trying to somehow create with array of users like [{name: "John", age: 26}, {name: "Doe", age: 99}]
  // const payload = web3.eth.abi.encodeParameter(
  //   {
  //     User: {
  //       name: "string",
  //       age: "uint256",
  //     },
  //   },
  //   {
  //     name: "John",
  //     age: 26,
  //   }
  // );



  // This one working fine
  // console.log(web3.eth);
  // console.log(web3.eth.abi);
  return parameterString;
}



export let findSigOfVerificationFunc = (index: String):String => {

  let parameterString: String = atcontract.getParametersOfMetadatas.call(index);
  
  let paramArr = parameterString.split(",");

  let parsedparamArr = paramArr.map((el) =>{
    let elem = el.split(" ");
    return elem.filter(e => e !== "");
  });

  let signatureArr = parsedparamArr.map(e => e[0]);
    
  let sig = signatureArr.toString();

  return sig;
}

export let findArgsOfVerificationFunc = (index: String):String => {

  
  let parameterString: String = atcontract.getParametersOfMetadatas.call(index);
    
  let paramArr = parameterString.split(",");

  let parsedparamArr = paramArr.map((el) =>{
    let elem = el.split(" ");
    return elem.filter(e => e !== "");
  });

  let oddElem = parsedparamArr.map(e => e[1]);
  let args = oddElem.toString();

  return args;
}


