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
<!--            Content of Modal form-->
               <div id="myModal" class="modal">
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2 id="modal-title">Dish Name</h2>
                        <p id="modal-description">Dish Description</p>
                    <div>
                    <input type="radio" id="regular" name="size" value="Regular" checked>
                    <label for="regular">Regular</label><br>
                    <input type="radio" id="big" name="size" value="Big">
                    <label for="big">Grande</label><br>
                </div>
                    <div>
                        <label for="quantity">Quantity (Max 10):</label>
                        <input type="number" id="quantity" name="quantity" min="1" max="10">
                    </div>
                    <br>
                <div class="btn-group" role="group" aria-label="Modal actions">
                    <button id="add-button" class="btn btn-primary">Agregar a la orden</button>
                </div>
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
                        <h5 class="card-title">${dish.name}</h5>
                        <p class="card-text">${dish.description}</p>
                        <p class="card-text">$ ${dish.price}</p>
                        <a href="#" class="btn btn-primary order-button" data-name="${dish.name}" data-description="${dish.description}">Ordenar</a>
                    </div>
                </div>`
            ).join('');

            rootElement.innerHTML = dishesList;

            // Get the modal
            var modal = document.getElementById("myModal");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            }

            // Add event listeners to the "Ordenar" buttons
            var orderButtons = rootElement.querySelectorAll('.order-button');
            orderButtons.forEach(button => {
                button.addEventListener('click', function(event) {
                    event.preventDefault();
                    // When the user clicks the button, open the modal
                    modal.style.display = "block";

                    // Set the title and description of the modal to the name and description of the selected dish
                    document.getElementById('modal-title').textContent = event.target.getAttribute('data-name');
                    document.getElementById('modal-description').textContent = event.target.getAttribute('data-description');
                });
            });
        })
        .catch(error => console.error('Error:', error));


    // Function to add an order to the order list
    document.getElementById('add-button').addEventListener('click', function() {
        var title = document.getElementById('modal-title').textContent;
        var size = document.querySelector('input[name="size"]:checked').value;
        var quantity = document.getElementById('quantity').value;

        fetch('/api/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                size: size,
                quantity: quantity,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Here you can handle the response from the server
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
}