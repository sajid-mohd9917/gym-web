let mtIconEl = document.getElementById("my-icon-cl");

// let rightParent_navEl = document.getElementsByClassName("rightParent_nav")[0];
let rightParent_navEl = document.getElementById("rightParent_nav");



mtIconEl.addEventListener("click", function () {
    if (rightParent_navEl.style.display = "none") {
        rightParent_navEl.style.display = "flex";
    } else {
        rightParent_navEl.style.display = "none";
    }

    //    rightParent_navEl.classList.toggle("rightParent_nav2");

    if (rightParent_navEl.classList.contains("rightParent_nav2")) {
        rightParent_navEl.classList.remove("rightParent_nav2");
        rightParent_navEl.style.display = "none";

    } else {
        rightParent_navEl.classList.add("rightParent_nav2");
    }
})