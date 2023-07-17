const allstudents = [
    {
        name: "John",
        age: 30,
    },
    {
        name: "Bob",
        age: 31,
    },
    {
        name: "Charlie",
        age: 25,
    },
    {
        name: "David",
        age: 24,
    },
];
const answer = allstudents.reduce((finalResult, allstudents) => {
    const age = allstudents.age;
    if (!finalResult[age]) {
        finalResult[age] = [];
    }
    finalResult[age].push(allstudents);
    return finalResult;
}, {});
console.log(answer);







