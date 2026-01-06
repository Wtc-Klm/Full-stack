const gust = ['Alice', 'Bob','Charlie', 'David'];
let i = 0;
while(i < gust.length){  
    const name = gust[i];
    i++;
    if (name === 'Charlie') {
        console.log('Found Charlie!');
    }
}