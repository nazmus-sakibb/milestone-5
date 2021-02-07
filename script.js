const mealResults = document.getElementById('meal-results');


// Search meal
const searchBtn = document.getElementById('search-meal').addEventListener('click', function () {
    const inputMeal = document.getElementById('input-meal');
    const input = inputMeal.value;
    // console.log(inputMeal.value);
    if (input == '' || input == null) {
        alert('Please enter a Meal name');
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                mealResults.innerHTML = data.meals.map(meal => `
                        <div class="meal-div" onclick="displayMealInfo('${meal.strMeal}')">
                            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                            <h4 class="meal-name">${meal.strMeal}</h4>
                            <button onclick="displayMealInfo('${meal.strMeal}')">Details</button>
                        </div>
                    `)
                    .join('');
            });
        // Clear search text
        inputMeal.value = '';
    }
})


const displayMealInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderMealInfo(data.meals[0]));
};


const renderMealInfo = meals => {
    const mealInfo = document.getElementById('meal-info');
    mealInfo.innerHTML = `
        <img src="${meals.strMealThumb}">
        <h2>${meals.strMeal}</h2>
        <h4>Ingredients</h4>
        <p>${meals.strIngredient1}</p>
        <p>${meals.strIngredient2}</p>
        <p>${meals.strIngredient3}</p>
        <p>${meals.strIngredient4}</p>
        <p>${meals.strIngredient5}</p>
        <p>${meals.strIngredient6}</p>
    `
}