const name = " Anirach";
const score = 95 ;
console.log(`Welcome ${name}! Your score is ${score}`);

const istatus = 200;

if (istatus === 200) {
    console.log("Ok!");
}
else if (istatus === 400) {
    console.log("Error!");
}
else{
    console.log("Unknown");
}

switch (istatus) {
    case 200:
        console.log("Ok!");
        break;
    case 400:
        console.log("Error!");
        break;
    default:
        console.log("Unknown");
}

const message = (istatus === 200);
{
console.log(message ? "Ok!" : "Error!");
}



