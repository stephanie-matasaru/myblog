document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("menu-toggle");
    const dropdown = document.getElementById("dropdown-content");

    // Highlight current page
    const currentPage = window.location.pathname.split("/").pop();
    const menuLinks = dropdown.querySelectorAll("a");
    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("disabled");
            link.style.backgroundColor = "#4CAF50"; 
            link.style.color = "white";
        }
    });

    // Toggle dropdown on button click
    toggleButton.addEventListener("click", function () {
        dropdown.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
        if (!event.target.closest(".dropdown")) {
            dropdown.classList.remove("show");
        }
    });
});