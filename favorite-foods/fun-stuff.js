const foods = [
    {
        name: "Tirimisu",
        image: "./images/tirimisu.jpg",
        description: "an Italian dessert made with coffee-soaked ladyfingers covered with a cream of egg yolks, sugar, mascarpone, and cocoa powder. It originated in northeastern Italy, and modern versions were popularized in restaurants from the late 1960s."
    },
    {
        name: "Curried Goat",
        image: "./images/curried-goat.jpg",
        description: "a curry dish prepared with goat meat, originating from the Indian subcontinent. The dish is a staple in Southeast Asian cuisine, Caribbean cuisine, and the cuisine of the Indian subcontinent."
    }
];

const galleryEl = document.getElementById("gallery");
const headerSubtitle = document.querySelector("header");

const detailEl = document.getElementById("detail");
const descriptionEl = document.getElementById("description");

function makeFoodCard(foods) {
    const card = document.createElement("figure");
    card.className = "food-card";

    const img = document.createElement("img");
    img.src = foods.image;
    img.alt = foods.name;

    const caption = document.createElement("figcaption")
    description.textContent = foods.name;

    // 'put this inside of that.' nests image and caption inside card
    card.appendChild(img);
    card.appendChild(description);

    card.addEventListener("click", function () {
        showDetail(foods, card);
    });

    return card;
}
function showDetail(food, card) {
    // innerHTML - actually renders the HTML tags
    detailEl.innerHTML = `<h2>${food.name}</h2><img src ="${foods.image}"
     alt ="${food.name}">`;

    descriptionEl.textContent = food.description;

    const allCards = document.querySelectorAll(".food-card");
    allCards.forEach(function (c) {
        c.classList.remove("selected");
    });
    card.classList.add("selected");
}
foods.forEach(function (food) {
    galleryEl.appendChild(makeFoodCard(food));
});
