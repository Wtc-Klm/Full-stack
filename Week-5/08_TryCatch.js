function criticalCode(){
    throw "throwing an exceprion";
}
function logError(theException){
    console.log(theException)
}
console.log("\n*****Try...Catch*****")

try{
    criticalCode();
} catch(ex){
    console.log("Got en error");
    logError(ex);
}

console.log("\n*****Throwring Try...Catch*****")

try{
    throw "An exception that is thrown every time"
}   catch(ex){
    console.log("GOt an error")
    logError(ex);
}

console.log("\n*****Try...Catch..Finally*****")

try {
    criticalCode();
} catch(ex) {
    console.log("Got an error");
    logError(ex);
} finally{
    console.log("Code that always will run");
}
