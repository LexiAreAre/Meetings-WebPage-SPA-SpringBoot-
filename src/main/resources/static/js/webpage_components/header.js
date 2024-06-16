document.addEventListener("DOMContentLoaded", show_header);

function show_header() {
    header_content = `
    <nav id="navigation_bar" class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <a id="restaurant-link" class="navbar-brand mx-auto" href="/">
        <img src="/images/logo.png" alt="Logo" class="logo">
        <span class="restaurant-title">El Restaurante</span></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    `;
    var headerElement = document.getElementById("page_header");
    headerElement.innerHTML = header_content;

    document.getElementById("restaurant-link").addEventListener("click", function(event) {
        event.preventDefault();
        fetch('/Restaurant')
            .then(response => response.json())
            .then(data => {
                // Handle the data from the API here
                console.log(data);
            })
            .catch(error => console.error('Error:', error));
    });
}