const names = ['Alice', 'Bob', 'Charlie'];
const anouncements = names.map(member => {
    return member + " joined the contest.";
});
console.log(anouncements);