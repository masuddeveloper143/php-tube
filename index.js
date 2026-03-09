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
        
      <div class="card bg-base-100">
                <figure class="relative">
                    <img class="w-full h-[150px] object-cover" src="${video.thumbnail
            } " alt="Shoes" />
                    <span
                        class="absolute bottom-2 right-2 text-gray-400 font-semibold  bg-black p-1 rounded-md text-center ">3hrs
                        56 min ago</span>
                </figure>
                <div class="py-5 px-0 flex gap-4">
                    <div>
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
                                <img src="${video.authors[0].profile_picture}"/>
                            </div>
                        </div>
                    </div>

                    <div>

                        <h2 class="font-bold">${video.title}</h2>
                        <p class="text-gray-400 text-sm flex items-center gap-1">
                            ${video.authors[0].profile_picture.profile_name}

                            <img class="w-5 h-5 " src="https://img.icons8.com/?size=100&id=98A4yZTt9abw&format=png&color=000000" alt="">

                        </p>

                        <span class="text-gray-400">${video.others.views}views</span>
                    </div>
                </div>
            </div>
            </div>
        
        `;

        videosContainer.append(videoCrad);

    });

};



lodCaregories();
