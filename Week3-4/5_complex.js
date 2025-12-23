const kvArray = [
    { Key:1, value:10}
    ,{ Key:2, value:20}
    ,{ Key:3, value:30}
];

const reformatted = kvArray.map(
    ({Key,value}) => ({[Key]:value})
)
console.log(reformatted);