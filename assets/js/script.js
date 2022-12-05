let notificationcounter = document.querySelector(".notificationcounter");
let markasreadbutton = document.querySelector(".markasread");
let notificationcontainers = document.querySelectorAll(".notificationcontainer");

let counter = notificationcontainers.length;

notificationcounter.innerText = counter;

markasreadbutton.addEventListener("click", function (event) {
    event.preventDefault();
    notificationcontainers.forEach((item) => {
        item.classList.remove("unread");
    })
    counter = 0;
    notificationcounter.innerText = counter;
})

notificationcontainers.forEach((item) => {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        item.classList.remove("unread");
        counter -= 1;
        notificationcounter.innerText = counter;}
    , {once:true})
})