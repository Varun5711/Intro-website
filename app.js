let btnContainer = document.getElementById("navbar");
let sections = document.querySelectorAll(".section");
let secBtns = document.querySelectorAll(".controls");
let btns = document.getElementsByClassName("control");
let allSections = document.querySelector(".main-contents");

function transitions() {
    for (i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active-btn");
            current[0].className = current[0].className.replace(" active-btn", "");
            this.className += " active-btn active";
        });
    }

    allSections.addEventListener("click", function (e) {
        const id = e.target.dataset.id;
        if (id) {
            secBtns.forEach((element) => {
                element.classList.remove("active");
            });

            e.target.classList.add("active");

            sections.forEach((elements) => {
                elements.classList.remove("active");
            });

            let sec2 = document.querySelector(".sec-2");
            let sec3 = document.querySelector(".sec-3");
            let sec4 = document.querySelector(".sec-4");
            console.log(sec2.classList[4]);

            if (sec2.classList === "active" || sec3.classList === "active") {
                console.log("hello");
            } else if (sec4.classList === "active") {
                s1.classList.remove("display-b");
            }

            const eliment = document.getElementById(id);
            eliment.classList.add("active");
        }
    });

    function updateClock() {
        const element = document.querySelector(".theme-btn");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? "pm" : "am";
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        let strTime = hours + ":" + minutes + " " + ampm;

        element.innerHTML = [strTime].join(" / ");

        setTimeout(updateClock, 1000);
    }
    updateClock();
}

transitions();

function updateType() {
    let typed = new Typed(".auto-input", {
        strings: [
            "I am a Full-Stack Developer",
            "I build full stack websites and apps",
        ],
        typeSpeed: 90,
        backSpeed: 60,
        loop: true,
    });
    $(".typed-cursor").css("visibility", "hidden");
}

setTimeout(updateType, 8000);


function submitForm(event) {
    event.preventDefault();

    alert(
        "This feature is currently unavailable,please send an email to varunhotani@gmail.com"
    );

    document.getElementById("form").reset();
}


function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}

let s1 = document.querySelector(".intro");
let h1 = document.querySelector(".header");
let settings = document.querySelector(".settings");

function change() {
    setTimeout(changed, 5000);
    setTimeout(visi, 4000);
}

function changed() {
    s1.classList.add("display-n");
    $(".controls").addClass("display-op");
    $(".auto-input").addClass("display-block");
    $(".theme-btn").addClass("display-block");
}

function visi() {
    h1.classList.add("display-b");
    settings.classList.add("display-iblock");
    $(".h2").addClass("display-iblock");
}


window.addEventListener("load", function () {
    const colorOptions = document.querySelectorAll(".circle");
    let selectedColor = getComputedStyle(document.documentElement).getPropertyValue('--color-secondary'); // Initialize with the default color

    colorOptions.forEach((option) => {
        const color = option.getAttribute("data-color");

        option.addEventListener("mouseover", () => {
            document.documentElement.style.setProperty('--color-secondary', color);
        });

        option.addEventListener("mouseleave", () => {
            document.documentElement.style.setProperty('--color-secondary', selectedColor);
        });

        option.addEventListener("click", () => {
            selectedColor = color; 
        });
    });
});
