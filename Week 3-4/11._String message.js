const message = "Hello";
const result =[];
for (const char of message) {
    if (char === 'a' || char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'){
        result.push(char)
    }
}
console.log(result) 