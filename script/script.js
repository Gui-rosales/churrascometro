// carne - 400 grama por pessoa + de 6 horas - 650
// cerveja - 1200 ml por pessoa + 6 horas - 2000 ml
// refrigerante/ agua - 1000ml por pessoa + 6 horas 1500ml

// crianças valem por 0.5

function meatCalculation(adults, children, hours){
    let meatQuantity = 0;

    if(hours<=6){
        if(children>0){
            meatQuantity = (400 * adults) * (children/2);
        }else if(children <= 0){
            meatQuantity = 400 * adults;
        }
    } else if(hours > 6){
        if(children > 0){
            meatQuantity = (650 * adults) * (children/2);
        }else if(children<=0){
            meatQuantity = 650 * adults;
        }
    }
    return meatQuantity/1000;
}

function beerCalculation(adults, children, hours){
    let beerQuantity = 0;

    if(hours <= 6){
        beerQuantity = 1200 * adults;
    }else if(hours > 6){
        beerQuantity = 2000 * adults
    }
    return beerQuantity/1000;
}

function drinksCalculation(adults, children, hours){
    let drinksQuantity = 0;

    if(hours <= 6){
        if(children > 0){
            drinksQuantity = (1000 * adults) * (children/2);
        }else if(children <= 0){
            drinksQuantity = 1000 * adults;
        }
    }else if (hours > 6){
        if(children > 0){
            drinksQuantity = (1500 * adults) * (children/2);
        }else if(children <= 0){
            drinksQuantity = 1500 * adults;
        } 
    }
    return drinksQuantity/1000;
}

function displayTheValues(meat, beer, drinks){
    let informations = document.getElementById("informations").style.display = "flex";
    let ul = document.getElementById("ingredients_list");
    
    let liMeat = document.createElement("li");
    liMeat.appendChild(document.createTextNode("🥩 - " + meat + " Kg de carne"));
    ul.appendChild(liMeat);

    let liBeer = document.createElement("li");
    liBeer.appendChild(document.createTextNode("🍺 - " + beer + " litros de cerveja"));
    ul.appendChild(liBeer);

    let liDrinks = document.createElement("li");
    liDrinks.appendChild(document.createTextNode("🥤 - " + drinks + " litros de bebidas"));
    ul.appendChild(liDrinks);
    
}

let calcButton = document.getElementById("to_calculate");
calcButton.addEventListener('click', () => {
    let adultNumber = document.getElementById("adultsNumber").value;
    let childrenNumber = document.getElementById("childrenNumber").value;
    let duration = document.getElementById("duration").value
    
    displayTheValues(
        meatCalculation(adultNumber, childrenNumber, duration),
        beerCalculation(adultNumber, childrenNumber, duration),
        drinksCalculation(adultNumber, childrenNumber, duration)
    );
});
