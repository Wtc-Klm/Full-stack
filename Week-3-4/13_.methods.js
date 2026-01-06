const book = {
    title: '1984',
    author: "Georage Orwell",
    isAailable: true,
    checkOut: function() {
        this.isAailable = false;
    },
    checkIn: function() {
        this.isAailable = true;
    }
};
console.log(book.isAailable);
book.checkOut();
console.log(book.isAailable);
book.checkIn();
console.log(book.isAailable);