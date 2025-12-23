const obbook = {
    title: '1984',
    author: "Georage Orwell",
    isAailable: false
};

bookJSON = JSON.stringify(obbook);
console.log(obbook);
console.log(typeof obbook);
console.log(typeof bookJSON);

const recievebookObj = JSON.stringify(bookJSON);
console.log(recievebookObj);
console.log(typeof recievebookObj);
console.log(recievebookObj.title);