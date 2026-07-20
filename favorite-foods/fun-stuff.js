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

const detailEl = document.getElementById("detail")
const description = document.getElementById("description")

function makeFoodCard(foods) {
    const card = document.createElement("figure");
    card.className = "food-card";

    const img = document.createElement("img");
    img.src = foods.image;
    img.alt = foods.name;

    const description = document.createElement("caption")
    description.textContent = foods.name;

    // 'put this inside of that.' nests image and caption inside card
    card.appendChild(img);
    card.appendChild(description);

    card.addEventListener("click", function () {
        showDetail(foods, card);
    });

    return card;
}

foods.forEach(function (foods) {
    galleryEl.appendChild(makeFoodCard(foods));
});
