const cars = [
    {
        name: "Lamborghini Aventador",
        speed: "350 km/h",
        price: "$393,000",
        img: "760x470xc.webp"
    },
    {
        name: "Ferrari LaFerrari",
        speed: "350 km/h",
        price: "$1.4M",
        img: "SpiderFerrariHP.webp"
    },
    {
        name: "Bugatti Chiron",
        speed: "420 km/h",
        price: "$3M",
        img: "2022-bugatti-chiron-pur-sport.jpeg"
    },
    {
        name: "Porsche 911 Turbo S",
        speed: "330 km/h",
        price: "$204,000",
        img: "Porsche-911-992-TurboS.jpg"
    },
    {
        name: "McLaren 720S",
        speed: "341 km/h",
        price: "$299,000",
        img: "89.jpg"
    },
    {
        name: "BMW i8",
        speed: "250 km/h",
        price: "$147,500",
        img: "gallery_phphvUaXu1641332213.jpg"
    },
    {
        name: "Audi R8",
        speed: "330 km/h",
        price: "$142,700",
        img: "audir8.webp"
    },
    {
        name: "Nissan GTR",
        speed: "315 km/h",
        price: "$113,540",
        img: "HD-wallpaper-nissan-gtr-skyline-nissan-skyline-car-auto-gtr.jpg"
    },
    {
        name: "Ford Mustang GT",
        speed: "250 km/h",
        price: "$55,000",
        img: "ford-mustang-gt-jazda-za-kierownica-mustanga_1.jpg"
    },
    {
        name: "Chevrolet Camaro",
        speed: "250 km/h",
        price: "$63,000",
        img: "hq720.jpg"
    },
    {
        name: "Rolls Royce Phantom",
        speed: "250 km/h",
        price: "$450,000",
        img: "maxresdefault.jpg"
    },
    {
        name: "Mercedes AMG GT",
        speed: "318 km/h",
        price: "$118,600",
        img: "AMG_GT_R_Exterior_3-20170627155641-618x464.webp"
    }
];

const container = document.getElementById("carList");

function displayCars(list) {
    container.innerHTML = "";

    list.forEach((car, i) => {
        const card = document.createElement("div");
        card.className = "car-card";

        card.innerHTML = `
            <img src="${car.img}" class="car-img">
            <h3>${car.name}</h3>
        `;

        card.onclick = () => openModal(i);
        container.appendChild(card);
    });
}

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

function openModal(i) {
    modal.style.display = "flex";
    document.getElementById("modalImg").src = cars[i].img;
    document.getElementById("modalName").textContent = cars[i].name;
    document.getElementById("modalDetails").innerHTML = `
        <strong>Top Speed:</strong> ${cars[i].speed}<br>
        <strong>Price:</strong> ${cars[i].price}
    `;
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

document.getElementById("searchBtn").onclick = () => {
    const query = document.getElementById("searchInput").value.toLowerCase();

    const filtered = cars.filter(car =>
        car.name.toLowerCase().includes(query)
    );

    displayCars(filtered);
};

displayCars(cars);
