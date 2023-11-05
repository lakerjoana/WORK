function calculate(num1, num2, operator) {
    let result;
   
    switch (operator) {
       case '+':
         result = num1 + num2;
         break;
       case '-':
         result = num1 - num2;
         break;
       case '*':
         result = num1 * num2;
         break;
       case '/':
         if (num2 === 0) {
           return 'Error: Division by zero is not allowed.';
         } else {
           result = num1 / num2;
         }
         break;
       default:
         return 'Error: Invalid operator.';
    }
   
    return result;
   }
   
   console.log(calculate(5, 2, '+')); // 7
   console.log(calculate(5, 2, '-')); // 3
   console.log(calculate(5, 2, '*')); // 10
   console.log(calculate(5, 2, '/')); // 2.5
   console.log(calculate(5, 0, '/')); // Error: Division by zero is not allowed.
   console.log(calculate(5, 2, '%')); // Error: Invalid operator.
 
