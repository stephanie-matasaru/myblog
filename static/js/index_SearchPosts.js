function searchPosts() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();
    var posts = document.getElementsByClassName("blog-post");

    for (var i = 0; i < posts.length; i++) {
        var title = posts[i].getElementsByTagName("h1")[0].innerText.toLowerCase();

        if (title.includes(searchInput)) {
            posts[i].style.display = "block";
        } else {
            posts[i].style.display = "none";
        }
    }
}