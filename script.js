const cars = [
    { name: "Lamborghini Aventador", speed: "350 km/h", price: "$393,000", img: "images/lamborghini.webp" },
    { name: "Ferrari LaFerrari", speed: "350 km/h", price: "$1.4M", img: "images/ferrari.webp" },
    { name: "Bugatti Chiron", speed: "420 km/h", price: "$3M", img: "images/bugatti.jpeg" },
    { name: "Porsche 911 Turbo S", speed: "330 km/h", price: "$204,000", img: "images/porsche.jpg" },
    { name: "McLaren 720S", speed: "341 km/h", price: "$299,000", img: "images/mclaren.jpg" },
    { name: "BMW i8", speed: "250 km/h", price: "$147,500", img: "images/bmw.jpg" },
    { name: "Audi R8", speed: "330 km/h", price: "$142,700", img: "images/audi.webp" },
    { name: "Nissan GTR", speed: "315 km/h", price: "$113,540", img: "images/nissan.jpg" },
    { name: "Ford Mustang GT", speed: "250 km/h", price: "$55,000", img: "images/ford.jpg" },
    { name: "Chevrolet Camaro", speed: "250 km/h", price: "$63,000", img: "images/camaro.jpg" },
    { name: "Rolls Royce Phantom", speed: "250 km/h", price: "$450,000", img: "images/rollsroyce.jpg" },
    { name: "Mercedes AMG GT", speed: "318 km/h", price: "$118,600", img: "images/mercedes.webp" }
];

const container = document.getElementById("carList");

function displayCars(list) {
    container.innerHTML = "";
    list.forEach((car, i) => {
        const card = document.createElement("div");
        card.className = "car-card";
        card.innerHTML = `<img src="${car.img}" class="car-img"><h3>${car.name}</h3>`;
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
    document.getElementById("modalDetails").innerHTML = `<strong>Top Speed:</strong> ${cars[i].speed}<br><strong>Price:</strong> ${cars[i].price}`;
}

closeModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

document.getElementById("searchBtn").onclick = () => {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const filtered = cars.filter(car => car.name.toLowerCase().includes(query));
    displayCars(filtered);
};

displayCars(cars);
