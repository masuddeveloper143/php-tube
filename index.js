console.logI("index is connected");

function lodCaregories() {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

        .then((res) => res.json())
        .then((data) => console.log(data));

}