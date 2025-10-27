let elektronika;
let sum = 0;

let products = 
[
    {name: "T-shirt", category: "clothing", daudzums: 20 },
    {name: "Laptop", category: "electronics", daudzums: 17 },
    {name: "jeans", category: "clothing", daudzums: 56 },
    {name: "PS5", category: "electronics", daudzums: 3 },
    {name: "caps", category: "clothing", daudzums: 201 },
    {name: "Xbox", category: "electronics", daudzums: 2 }
]

for(let i = 0; i < products.length; i++)
    { produkti = products[i];
        if(produkti.category == "electronics")
            {
                console.log("Elektronika ir: " + produkti.name);
            }

sum += produkti.daudzums;
    console.log("Kopejais preču daudzums noliktāvā:" + sum)

    }