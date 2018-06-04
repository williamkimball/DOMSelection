document.querySelector(".article__header").textContent = "Welcome William's blog";

const classes = document.querySelectorAll(".article__header");

console.log(classes)

for (i = 0; i < classes.length; i++) {
    classes[i].classList = "article__header important"
}


