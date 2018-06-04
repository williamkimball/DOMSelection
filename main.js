//Change the first article header to the read "Welcome William's blog"
document.querySelector(".article__header").textContent = "Welcome William's blog";

//select all article headers
const classes = document.querySelectorAll(".article__header");

console.log(classes)

//add important to all article headers
for (i = 0; i < classes.length; i++) {
    classes[i].classList = "article__header important"
}


