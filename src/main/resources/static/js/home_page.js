document.addEventListener("DOMContentLoaded", show_home_page);

function show_home_page() {
    home_page = `
    <div class="container text-center">
        <h1>Welcome</h1>
    </div>
    `
    var rootElement = document.getElementById("page_body");

    rootElement.innerHTML = home_page;
}
