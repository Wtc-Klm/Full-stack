let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true,'Apple'];
let value3 = ['Mar',9,false];
let result = [];

for (val1 of value1) {
    for (val2 of value2) {
        for (val3 of value3) { 
            if (val1 === val2 && val1 === val3) {
                result.push(val1);
            }}}}            
console.log(result);
