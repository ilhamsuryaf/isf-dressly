const mobileNav = document.querySelector(".nav-item");
const menu = document.querySelector("#hamburger-menu");

menu.onclick = () => {
  mobileNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !mobileNav.contains(e.target)) {
    mobileNav.classList.remove("active");
  }
});

const products = [
  {
    pic: "/img/bs-sneaker.png",
    name: "Sneakers",
    price: "Rp. 1.097.500",
    afterDiscount: "Rp. 965.500",
  },
  {
    pic: "/img/bs-womenrobe.png",
    name: "Women's Robes",
    price: "Rp. 755.000",
  },
  {
    pic: "/img/bs-bag.png",
    name: "Bag",
    price: "Rp. 1.000.500",
    afterDiscount: "Rp. 920.500",
  },
  {
    pic: "/img/bs-menrobe.png",
    name: "Men's Robes",
    price: "Rp. 680.000",
  },
];

const bestSellers = document.querySelector(".bs-products");
renderBestSeller();

function renderBestSeller() {
  bestSellers.innerHTML = "";
  products.forEach((product) => {
    const bestSellerItem = document.createElement("div");
    bestSellerItem.classList.add("bs-card");
    if (product.afterDiscount) {
      bestSellerItem.innerHTML = `
      <img src="${product.pic}" alt="${product.name}" class="bs-img" />
      <p class="bs-name">${product.name}</p>
      <p class="bs-rating"><span>&#x2B50;</span> 4.5 <span>(325)</span></p>
      <p class="bs-price">${product.afterDiscount}<s>${product.price}</s></p>
      `;
    } else {
      bestSellerItem.innerHTML = `
      <img src="${product.pic}" alt="${product.name}" class="bs-img" />
      <p class="bs-name">${product.name}</p>
      <p class="bs-rating"><span>&#x2B50;</span> 4.5 <span>(325)</span></p>
      <p class="bs-price">${product.price}</p>
      `;
    }
    bestSellers.appendChild(bestSellerItem);
  });
}
