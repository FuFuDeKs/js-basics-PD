let people = 
[
    {name: "Anna", age: 17, isStudent: true},
    {name: "Aleksejs", age: 24, isStudent: false},
    {name: "Viktors", age: 16, isStudent: true}
    
]
console.log(people[0])
console.log(people[1])


for(let i = 0; i < people.length; i++)
{
     person = people[i];

        console.log("Vards:" + person.name);
    
}