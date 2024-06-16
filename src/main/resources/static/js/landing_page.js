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
        <div class="flex-item" id="flex-item-custom">
            <!-- Content for section 2 goes here -->
            <div class="container text-center">
                <div>
                    <h1 class="section-subtitle">Menú</h1>
                </div>
            <br>
                 <div class="section-content">
                    <p>Seleccione una CATEGORÍA en el panel de la izquierda para mostrar sus deliciosos platillos</p>
                    <br>
<!--                    insert Menu.png-->
                    <img src="images/Menu.png" alt="Menu" class="menu"> 
                 </div>
            </div>
            
        </div>
        <div class="flex-item" id="flex-item-custom">
            <!-- Content for section 3 goes here -->
            <div class="container text-center">
                <div>
                    <h1 class="section-subtitle">Orden</h1>
                </div>
            <br>
            </div>
        </div>
    </div>
    `
    var rootElement = document.getElementById("page_body");

    rootElement.innerHTML = landing_page;
}