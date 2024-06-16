document.addEventListener("DOMContentLoaded", show_landing_page);

function show_landing_page() {
    landing_page = `
    <div class="flex-container">
        <div class="flex-item">
            <!-- Content for section 1 goes here -->
            <h1>Categorías</h1>
            <br>
            <div>
                 <ul class="vertical-menu" id="vertical-menu-categories">
                 </ul>
            </div>
        </div>
        <div class="flex-item" id="flex-item-custom">
            <!-- Content for section 2 goes here -->
            <div class="container text-center">
                <div>
                    <h1 class="section-subtitle">Menú</h1>
                </div>
            <br>
                 <div class="section-content" id="dishes_menu">
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
    show_menu_categories();

}

function show_menu_categories(){
    var rootElement = document.getElementById("vertical-menu-categories");
    fetch('/api/categories')
        .then(response => response.json())
        .then(categories => {
            var categoriesList = categories.map(category =>
                `<li><a href="#">${category.category_name}</a></li>`
            ).join('');

            menu_categories = `
            <ul class="vertical-menu">
                ${categoriesList}
            </ul>
            `;

            rootElement.innerHTML = menu_categories;

            // Add event listeners to the list items
            var listItems = rootElement.querySelectorAll('li');
            listItems.forEach(item => {
                item.addEventListener('click', function(event) {
                    event.preventDefault();
                    show_menu_based_on_category(event.target.textContent);
                });
            });

        })
        .catch(error => console.error('Error:', error));
}

function show_menu_based_on_category(categoryName){
    var rootElement = document.getElementById("dishes_menu");
    fetch(`/api/dishes?category=${categoryName}`)
        .then(response => response.json())
        .then(dishes => {
            var dishesList = dishes.map(dish =>
                `<div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title
                        ">${dish.name}</h5>
                        <p class="card-text">${dish.description}</p>
                        <p class="card-text">$ ${dish.price}</p>
                        <a href="#" class="btn btn-primary">Ordenar</a>
                    </div>
                </div>`
            ).join('');

            rootElement.innerHTML = dishesList;
        })
        .catch(error => console.error('Error:', error));
}