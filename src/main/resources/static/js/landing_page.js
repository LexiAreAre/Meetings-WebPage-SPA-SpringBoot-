document.addEventListener("DOMContentLoaded", show_landing_page);

function show_landing_page() {
    landing_page = `
    <div class="flex-container">
        <div class="flex-item">
            <!-- Content for section 1 goes here -->
            <h1>Categorías</h1>
            <br>
            <ul class="vertical-menu">
                <li><a href="#">Entradas</a></li>
                <li><a href="#">Carnes</a></li>
                <li><a href="#">Sopas</a></li>
                <li><a href="#">Arroces</a></li>
                <li><a href="#">Bebidas</a></li>
                <li><a href="#">Postres</a></li>
            </ul>
        </div>
        <div class="flex-item">
            <!-- Content for section 2 goes here -->
        </div>
        <div class="flex-item">
            <!-- Content for section 3 goes here -->
        </div>
    </div>
    `
    var rootElement = document.getElementById("page_body");

    rootElement.innerHTML = landing_page;
}