console.log("index is connected");

function lodCaregories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));

};

function displayCategories(categories) {
    // console.log(categories);
    const categoryContiner = document.getElementById('category-continer');

    for (let cat of categories) {
        console.log(cat);

        const categorieDiv = document.createElement("div");
        categorieDiv.innerHTML = `
        <button class="btn btn-sm">${cat.category} </button>

        `;

        categoryContiner.append(categorieDiv);
    }
}

lodCaregories();