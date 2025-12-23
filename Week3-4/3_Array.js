const finalParticipants = ['Alice', 'Bob', 'Charlie', 'David'];
const anouncements = finalParticipants.map(member => {
    return member + " joined the contest.";
});
console.log(anouncements);