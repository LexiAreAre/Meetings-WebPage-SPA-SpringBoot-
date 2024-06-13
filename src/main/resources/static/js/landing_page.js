document.addEventListener("DOMContentLoaded", show_landing_page);

function show_landing_page() {
    landing_page = `
    <h1>Hello World</h1>
    `
    var rootElement = document.getElementById("page_body");

    rootElement.innerHTML = landing_page;
}