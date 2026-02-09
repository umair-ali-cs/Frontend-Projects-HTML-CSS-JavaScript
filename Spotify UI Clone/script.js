// Functions
function createSongBox(url, title, singers) {
    let box;
    let spans = ``;

    for (let a = 0; a < singers.length; a++) {
        if (a == singers.length - 1) {
            spans += `<span>${singers[a]}</span>`;
        } else {
            spans += `<span>${singers[a]}</span>, `;
        }
    }

    box = `<div class="box">
            <div class="img">
                <img src="${url}">
                <div class="PlayButton">
                    <img src="Assets/Images/playButton.svg" alt="">
                </div>
            </div>
            <h3 class="title">${title}</h3>
            <div class="info">
            ${spans}
            </div>
        </div>`;

    return box;
}

function createArtistBox(url, name) {
    let box;
    box = `<div class="box">
            <div class="img">
                <img src="${url}" style="border-radius: 100%">
                <div class="PlayButton">
                    <img src="Assets/Images/playButton.svg" alt="">
                </div>
            </div>
            <h3 class="title">${name}</h3>
            <div class="info">
                <span>Artist</span>
            </div>
        </div>`;
    return box;
}

function createCategoryBox(url, description) {
    let box;
    box = `<div class="box">
            <div class="img">
                <img src="${url}">
                <div class="PlayButton">
                    <img src="Assets/Images/playButton.svg" alt="">
                </div>
            </div>
            <div class="info">
                ${description}
            </div>
        </div>`;
    return box;
}

function createSection(SecHeading, arr, boxType) {
    let div = document.createElement("div");
    div.setAttribute("class", "section");
    let NumOfBoxes = arr.length;
    let slider = ``;

    for (let a = 0; a < NumOfBoxes; a++) {
        if (boxType == "song") {
            slider += createSongBox(arr[a].img_url, arr[a].title, arr[a].singers);
        } else if (boxType == "artist") {
            slider += createArtistBox(arr[a].img_url, arr[a].name);
        } else if (boxType == "category") {
            slider += createCategoryBox(arr[a].img_url, arr[a].description);
        }
    }

    div.innerHTML = `<div class="header">
        <h1>${SecHeading}</h1>
        <button class="ShowAllBtn">Show All</button>
    </div>
    <div class="footer">
        <div class="slider" style="width: ${NumOfBoxes * 200}px">
            ${slider}
        </div>
        <div class="ArrowBtn next">
            <img src="Assets/Images/Forward_Previous_Arrow.svg" alt="">
        </div>
        <div class="ArrowBtn prev">
            <img src="Assets/Images/Forward_Previous_Arrow.svg" alt="">
        </div>
    </div>`
    return div;
}

// Objects probably will be fetched from Database in future projects
let trendingSongs = [
    { //1
        img_url: `https://i.scdn.co/image/ab67616d0000b273a7e251b543c77a6ed356dfbe`,
        title: `Saiyaara (From "Saiyaara")`,
        singers: ["The Rish", "Jubin Nautiyal"],
    },
    { //2
        img_url: `https://i.scdn.co/image/ab67616d00001e02148a06ae24e68c088d8d2954`,
        title: `Barbaad (From "Saiyaara")`,
        singers: ["The Rish", "Jubin Nautiyal"],
    },
    { //3
        img_url: `https://i.scdn.co/image/ab67616d0000b2730a47bbe7141fdfe0eb2cdba7`,
        title: `Sahiba`,
        singers: ["Aditya Rikhari"],
    },
];
let PopularArtist = [
    {
        img_url: `https://i.scdn.co/image/ab67616100005174cb6926f44f620555ba444fca`,
        name: `Pritam`,
    },
    {
        img_url: `https://bookingagentinfo.com/wp-content/uploads/2025/01/ab6761610000e5eb8f553f96d564d1005a92d131-1.jpg`,
        name: `Shubh`,
    },
    {
        img_url: `https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84`,
        name: `Atif Aslam`,
    },
];
let PopularAlbumsAndSingles = [
    {
        img_url: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8v-Mmk156E9hoNrBvOzx-Hv1AVOUZFMIb-A&s`,
        title: `Pal Pal`,
        singers: ["Afusic", "AliSoomroMusic"]
    },
    {
        img_url: `https://i.scdn.co/image/ab67616d0000b2738e1bd9f2ca754ace0396d72f`,
        title: `Sicario`,
        singers: ["Shubh"]
    },
];
let PopularRadio = [
    {
        img_url: `https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4YRxDV8wJFPHPTeXepOstw/fr`,
        title: ``,
        singers: ["With Sachin-Jigar", "Jeet Gannguli", "Atif Aslam  and more"]
    },
    {
        img_url: `https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/5r3wPya2PpeTTsXsGhQU8O/en`,
        title: ``,
        singers: ["With Karan Aujla, AP Dhillon", "NDS and more"]
    },
];
let FeaturedCharts = [
    {
        img_url: `https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg`,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet eligendi assumenda.`,
    },
    {
        img_url: `https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_pk_default.jpg`,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet eligendi assumenda.`,
    },
];
let DoNotDisturb = [
    {
        img_url: `https://i.scdn.co/image/ab67706f000000026020f2f6476db518ef747da4`,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet eligendi assumenda.`,
    },
    {
        img_url: `https://i.scdn.co/image/ab67706f00000002863b311d4b787ed621f7e696`,
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit eveniet eligendi assumenda.`,
    },
];

const main = document.body.children[1];
let screenHeight = window.screen.availHeight;
main.style.height = (screenHeight - 135) + "px";

// for responsiveness
window.addEventListener('resize', () => {
    screenHeight = window.screen.height;
    main.style.height = (screenHeight - 135) + "px";
})

// Appening Elements
let content = document.querySelector(".content");
content.insertAdjacentElement("beforeend", createSection("Trending songs", trendingSongs, "song"))
content.insertAdjacentElement("beforeend", createSection("Popular artists", PopularArtist, "artist"))
content.insertAdjacentElement("beforeend", createSection("Popular albums and singles", PopularAlbumsAndSingles, "song"))
content.insertAdjacentElement("beforeend", createSection("Popular radio", PopularRadio, "song"))
content.insertAdjacentElement("beforeend", createSection("Featured Charts", FeaturedCharts, "category"))
content.insertAdjacentElement("beforeend", createSection("Do Not Disturb at the Office", DoNotDisturb, "category"))

// PlayButton Animation
let box = document.querySelectorAll(".box");
for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("mouseenter", () => {
        document.querySelectorAll(".PlayButton")[i].style.display = "block";
    });
    box[i].addEventListener("mouseleave", () => {
        document.querySelectorAll(".PlayButton")[i].style.display = "none";
    });
}

// slider Buttons
let footer = document.querySelectorAll(".footer");

let x = [];
for (let i = 0; i < footer.length; i++) {
    x[i] = 0;
}

// Slider next Button Appearance
setInterval(() => {
    for (let a = 0; a < footer.length; a++) {
        sizeOffooter = footer[a].clientWidth;
        sizeOfSlider = footer[a].querySelector(".slider").clientWidth;

        if (sizeOfSlider > sizeOffooter && x[a] < (sizeOfSlider - sizeOffooter)) {
            footer[a].addEventListener("mouseenter", () => {
                footer[a].querySelector(".next").style.display = "flex";
            })
            footer[a].addEventListener("mouseleave", () => {
                footer[a].querySelector(".next").style.display = "none";
            })
        } else {
            footer[a].querySelector(".next").style.display = "none";
        }
    }
}, 100);

// slider prev Button Appearance
setInterval(() => {
    for (let a = 0; a < x.length; a++) {
        if (x[a] > 0) {
            document.querySelectorAll(".prev")[a].style.display = "flex";
        } else {
            document.querySelectorAll(".prev")[a].style.display = "none";
        }
    }
}, 100);

// next button animation
let nextBtn = document.querySelectorAll(".next");
for (let i = 0; i < nextBtn.length; i++) {
    let sliderr = document.querySelectorAll(".slider")[i];
    nextBtn[i].addEventListener("click", () => {
        x[i] += 200;
        sliderr.style.transform = `translateX(-${x[i]}px)`;
        sliderr.style.transitionDuration = "1s";
        sliderr.style.animationTimingFunction = "ease-in";
    });
}

// prev button animation
let prevBtn = document.querySelectorAll(".prev");
for (let i = 0; i < prevBtn.length; i++) {
    let sliderr = document.querySelectorAll(".slider")[i];
    prevBtn[i].addEventListener("click", () => {
        x[i] -= 200;
        sliderr.style.transform = `translateX(-${x[i]}px)`;
        sliderr.style.transitionDuration = "1s";
        sliderr.style.animationTimingFunction = "ease-in";
    });
}

// showAll Functionality
let showAllBtn = document.querySelectorAll(".ShowAllBtn");
for (let a = 0; a < showAllBtn.length; a++) {
    let slider = document.querySelectorAll(".slider");
    showAllBtn[a].addEventListener("click", () => {
        showAllBtn[a].style.display = "none";
        slider[a].style.width = "100%";
        slider[a].style.flexWrap = "wrap";

        for (let b = 0; b < showAllBtn.length; b++) {
            if (b == a) {
                continue;
            } else {
                document.querySelectorAll(".section")[b].style.display = "none";
            }
        }
    })
}

