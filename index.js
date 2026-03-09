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

    videos.forEach(video => {
        console.log(videos);

        const videoCrad = document.createElement("div");
        videoCrad.innerHTML = `
        
      <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail} "
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title} </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        
        `;

        videosContainer.append(videoCrad);

    });

};

lodCaregories();
loadVideos();