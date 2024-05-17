const options = {
method: "GET",
headers: {
    accept: "application/json",
    Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmNmOGNiZDlhMDM3ZDM4NGRjYzMyNTBkY2ZmMDUyMyIsInN1YiI6IjY2NDU2MmVmM2Y0NGRjNWUzNzc4MWIyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xHeOvcUmTEQ9TGyj3VHEc7XbjkfctaEraWRneCFPZJk",
},
};

fetch("https://api.themoviedb.org/3/tv/popular?language=es-MX&page=1", options)
.then((response) => response.json())
.then(data => {
    const results = data.results;
    const gridHTML = results.map(item => {
    return `
        <div class="series">
        <img src="https://image.tmdb.org/t/p/w500${item.poster_path}" alt="${item.name}">
        <div>
            <h3>${item.name}</h3>
            <p>${item.first_air_date}</p>
        </div>
        </div>
    `;
    }).slice(0, 20).join(''); // Muestra las primeras 20
    document.getElementById('series-grid').innerHTML = gridHTML;
})
.catch(error => console.error('Error:', error));