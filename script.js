// const searchMeal = document.getElementById('search-meal');
// const inputMeal = document.getElementById('input-meal');
const mealResults = document.getElementById('meal-results');


// Search meal
const searchBtn = document.getElementById('search-meal').addEventListener('click', function () {
    const inputMeal = document.getElementById('input-meal');
    const input = inputMeal.value;
    // console.log(inputMeal.value);
    if (input == '' || input == null) {
        alert('Please enter a Meal name');
    } 
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                console.log(data.meals[0]);
                mealResults.innerHTML = data.meals.map(meal => `
                        <div class="meal-div">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h4 class="meal-name">${meal.strMeal}</h4>
                        </div>
                    `)
                    .join('');
            });
        // Clear search text
        inputMeal.value = '';
    }

})




// Meal result show
// const getMeal = name => {
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
//     fetch(url)
//         .then(res => res.json())
//         .then(data => displayMeals(data.meals[0]));
// }


// const displayMeals = meals => {
//     // console.log(meals.strMeal);

//     const mealResults = document.getElementById('meal-results');
//     mealResults.innerHTML = `
//         <div class="meal-div">
//             <img src="${meals.strMealThumb}">
//             <h4>${meals.strMeal}</h4>
//         </div>
//     `;
// }