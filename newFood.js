const foodSection = (search) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
  console.log(url);
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => displayFood(data.meals))
    .catch((error) => console.log(error));
};

foodSection("");

const displayFood = (data) => {
  const foodSection = document.getElementById("foodSection");
  foodSection.innerHTML = ``;
  for (const food of data) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
            <img src="${food.strMealThumb}" class="${"food-image"}">
        </div>
        <div class="${"food-card-text"}">
            <h1>${food.strMeal}</h1>
            <p>${food.strInstructions.slice(0, 200)}</p>
        </div>
        <div>
            <button class="${"food-btn"}">Details</button>
        </div>
    
    `;
    div.classList.add("food-card");
    foodSection.appendChild(div);
    console.log(food);
  }

  const slideCard = document.getElementById("slide-card");
  const divSlide = document.createElement("div");
  slideCard.innerHTML = "";
  divSlide.innerHTML = `
        <div>
            <img src="${data[0].strMealThumb}" class="${"food-image"}">
        </div>
        <div class="${"food-card-text"}">
            <h1>${data[0].strMeal}</h1>
            <p>${data[0].strInstructions.slice(0, 200)}</p>
        </div>
        <div>
            <button class="${"food-btn"}">Details</button>
        </div>
    
    `;
  divSlide.classList.add("food-card");
  slideCard.appendChild(divSlide);
};

const searchFood = () => {
  const searchField = document.getElementById("search");
  const searchText = searchField.value;
  foodSection(searchText);
  searchField.value = "";
};
