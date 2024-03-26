import inquirer from "inquirer";

let myBalance = 10000; //dollar
let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
        name: "pin",
        message:"enter your pin",
        type:"number"
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log ("correct pin!");

     let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",
                choices:[ "withdraw","check balance"]
            }
        ]
     );
    
    console.log(operationAns);
     
    if (operationAns.operation  === "withdraw"){
        let withdrawamount = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message:"enter your amount",
                    type:"number"
                }
            ]
        )
        myBalance -= withdrawamount.amount;
        console.log("your remaining lalance is:" + myBalance)
    } else if (operationAns.operation ==="check balance") {
        console.log("your balance is" + myBalance)

    }

    

      


    } 
     else { 
        console.log("incorrect pin")
    }

