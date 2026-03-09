console.log("index is connected");

function lodCaregories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        .then((res) => res.json())
        .then((data) => displayCategories(data.categories));

};


function loadVideos() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((Response) => Response.json())
        .then((data) => displayVideos(data.videos));
}





function displayCategories(categories) {
    // console.log(categories);
    const categoryContiner = document.getElementById('category-continer');

    for (let cat of categories) {
        // console.log(cat);

        const categorieDiv = document.createElement("div");
        categorieDiv.innerHTML = `
        <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category} </button>

        `;

        categoryContiner.append(categorieDiv);
    }
}



const displayVideos = (videos) => {
    const videosContainer = document.getElementById("videos-container");

    videos.forEach(videos => {
    console.log(videos)

    });

};

lodCaregories();
loadVideos();