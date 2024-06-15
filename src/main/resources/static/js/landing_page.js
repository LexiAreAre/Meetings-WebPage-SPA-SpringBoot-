document.addEventListener("DOMContentLoaded", show_landing_page);

function show_landing_page() {
    landing_page = `
    <div class="container text-center">
        <h1>Welcome</h1>
    </div>
    <br>
    <div class="container-lg">
        <img src="https://cdn-images-1.medium.com/v2/resize:fill:1600:480/gravity:fp:0.5:0.4/1*ovn5g7v9UBIzeF727H301w.png" alt="Cozy Home" style="width:100%;max-width:300px">
    </div>
    `
    var rootElement = document.getElementById("page_body");

    rootElement.innerHTML = landing_page;
}