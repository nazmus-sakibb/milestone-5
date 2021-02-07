const searchFoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // load data
    fetch(url)
        .then(res => res.json())
        .then(data => displayFoods(data.meals))
        .catch(error => displayError('Something went wrong! Please, try again later!!!'));
}

const displayFoods = foods => {
    const foodContainer = document.getElementById('food-container');
    foodContainer.innerHTML = '';
    foods.forEach(food => {
        const foodDiv = document.createElement('div');

        foodDiv.className = 'food-div';
        foodDiv.innerHTML = `
            <a href="#" onclick="displayFoodInfo('${food.strMeal}')">
                <img src="${food.strMealThumb}">
                <h4>${food.strMeal}</h4>
            </a>
        `;

        foodContainer.appendChild(foodDiv);
    });
}


// Meal Info
const displayFoodInfo = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
    fetch(url)
        .then(res => res.json())
        .then(data => renderFoodInfo(data.meals[0]))
        .catch(error => displayError('Sorry! Failed to load data from the server. Please, try again later!!!'));
};


const renderFoodInfo = meals => {
    const mealInfo = document.getElementById('meal-info');
    mealInfo.innerHTML = `
        <img src="${meals.strMealThumb}">
        <h2>${meals.strMeal}</h2>
        <h4>Ingredients</h4>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient1}</p>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient2}</p>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient3}</p>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient4}</p>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient5}</p>
        <p><i class="fas fa-check-square"></i>${meals.strIngredient6}</p>
    `;
}



// Error message
const displayError = error => {
    const errorText = document.getElementById('error-message');
    errorText.innerText = error;
}