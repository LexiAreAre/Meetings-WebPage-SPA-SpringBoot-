document.addEventListener("DOMContentLoaded", show_header);

var api_root = "/Meetings/api";

function show_header() {
    header_content = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Meetings</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#" onclick="handleHomeClick()">Login</a>
                </li>
            </ul>
        </div>
    </nav>

    <!-- Login Modal -->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="loginModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="handleCloseLogin()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form id="loginForm">
                        <div class="form-group">
                            <label for="username">Username</label>
                            <input type="text" class="form-control" id="username" placeholder="Enter username" required>
                        </div>
                        <div class="form-group">
                            <label for="password">Password</label>
                            <input type="password" class="form-control" id="password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-primary" onclick="handleLogin()">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    `;
    var headerElement = document.getElementById("page_header");
    headerElement.innerHTML = header_content;
}

function handleHomeClick() {
    $('#loginModal').modal('show');
}

function handleCloseLogin() {
    $('#loginModal').modal('hide');
}

function handleLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var data = {
        username: username,
        password: password
    };

    fetch(`${api_root}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            if (data.message.includes("Login successful")) {
                window.alert("User logged in successfully");
                handleCloseLogin();
                show_home_page();
            } else {
                window.alert("User is not active");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            window.alert("Error logging in");
        });
}