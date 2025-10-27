let elektronika;
let sum = 0;

let products = 
[
    {name: "T-shirt", category: "clothing", daudzums: 20, cena: 13 },
    {name: "Laptop", category: "electronics", daudzums: 17, cena: 799 },
    {name: "jeans", category: "clothing", daudzums: 56, cena: 25 },
    {name: "PS5", category: "electronics", daudzums: 3, cena: 699 },
    {name: "caps", category: "clothing", daudzums: 201, cena: 10 },
    {name: "Xbox", category: "electronics", daudzums: 2, cena: 500}
]

for(let i = 0; i < products.length; i++)
    { produkti = products[i];
        if(produkti.category == "electronics")
            {
                console.log("Elektronika ir: " + produkti.name);
            }

sum += produkti.cena;
    console.log("KOpeja summa: " + sum);

    }