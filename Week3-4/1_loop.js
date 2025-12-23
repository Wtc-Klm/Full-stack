const names = ['Justin','Sarah','Cristopher'];
for(let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach(name => {
    console.log(name);
});


for (const name of names) {
    console.log(name);
}

const test = [1,2,3,4,5]
test.forEach(myfunction);
function myfunction(test) {
    console.log(test);
} 

