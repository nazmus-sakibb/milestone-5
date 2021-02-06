const searchMeal = document.getElementById('search-meal');
const inputMeal = document.getElementById('input-meal');
const mealResults = document.getElementById('meal-results');

// Event listener
searchMeal.addEventListener('click', getInput);

function getInput(){
    const input = inputMeal.value;

    //Empty value check
    if(input == '' || input == Number){
        alert('Please enter a Meal name');
    }
    else{
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            mealResults.innerHTML = data.meals.map(meal => `
                <div class="mealDiv">
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h4 class="meal-name">${meal.strMeal}</h4>
                </div>
            `)
            .join('');
        });
        // Clear search text
        inputMeal.value = '';
    }
}