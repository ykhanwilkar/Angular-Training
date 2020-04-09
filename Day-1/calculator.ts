//Create a simple Calculator using TypeScript.Implement Add,Multiply,Subtract and Division operation on two numbers.
function calculator(x:number, y:number, op:string) { 
    switch (op) { 
        case '+':
            console.log(x + y);
            break;
        case '-':
            console.log(x - y);
            break;
        case '*':
            console.log(x * y);
            break;
        case '/':
            y==0?console.log('Cannot divide by 0'):console.log(x / y);
            break;
        case '%':
            y==0?console.log('Cannot divide by 0'):console.log(x % y);
            break;
        default:
            console.log('Invalid operator');
            break;

    }
}

calculator(4, 5, "*");
calculator(9, 10, "+");
calculator(15,0,"/");
calculator(4,2,'-');