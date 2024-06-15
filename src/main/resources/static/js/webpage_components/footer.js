document.addEventListener("DOMContentLoaded", show_footer);

function show_footer() {
    footer_content = `
    <div class="footer">
        <div class="container text-center">
            <img src="https://icons.veryicon.com/png/o/business/classic-icon/meeting-2.png" alt="Bill Icon" width="30" height="24">
            <p>2024 - Meetings</p>
        </div>
    </div>
    `;

    var footerElement = document.getElementById("page_footer");

    footerElement.innerHTML = footer_content;
}