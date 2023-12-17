const scrollContainer = document.querySelector(".scroll-card-container");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

// Function to scroll left
function scrollLeft() {
  scrollContainer.scrollBy({
    left: -200, // Adjust this value to scroll by desired amount
    behavior: "smooth",
  });
}

// Function to scroll right
function scrollRight() {
  scrollContainer.scrollBy({
    left: 200, // Adjust this value to scroll by desired amount
    behavior: "smooth",
  });
}
// Function to scroll left
function scrollLeftBusiness() {
  scrollContainerBusiness.scrollBy({
    left: -200, // Adjust this value to scroll by desired amount
    behavior: "smooth",
  });
}

// Function to scroll right
function scrollRightBusiness() {
  scrollContainerBusiness.scrollBy({
    left: 200, // Adjust this value to scroll by desired amount
    behavior: "smooth",
  });
}

// Event listeners for previous and next buttons
prevButton.addEventListener("click", scrollLeft);
nextButton.addEventListener("click", scrollRight);

const products = [
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H64a3e6d219c64dc892e97580f62365efU.jpg_250x250xz.jpg",
    title: "Product 1",
    subTitle: "High Glossy PVC",
    priceRange: "$0.73 - $0.80",
    orders: "High Glossy PVC Imitation Marble Look Wall Panels",
    minOrder: "Min. order: 5 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf8f5a5a69193401ab2bf0d030c3530eb6.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://images.khmer24.co/23-04-19/s-sell-anern-hybrid-mppt-solar-inverter-5-5kw-404356168191616150227009-b.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Haa8e85f53a864771821dab1d59c73b48o.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hc8d96d2957d74974a840b67191c9d59fx.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },

  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hba924f275d894b80803169fdaebef38ei.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H26be3d543af5499cbf602609df86eea9j.png_720x720q50.png",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQacHDn4VsKWDkqm3-1jWbE7Gjo4ASCf13xN6i2oEjiYgr7PIuj",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H96a8e2db42ad4f379c63b73c1552c6a0e.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Ha0d1a911dd6649d080b06e7b0e1457f3h.png_720x720q50.png",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hc8d96d2957d74974a840b67191c9d59fx.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H6a7c476e66dd438ca447a112b56aa058l.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/HTB1PQOLSpXXXXXoXXXXq6xXFXXXy.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hba924f275d894b80803169fdaebef38ei.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf3c4450cf362408881cedb2d01bae1d6W.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hcab3142b51824f4bb442d7ad5d17ed47t.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H9836026aed5244a7aefb7d46fc857707B.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf92138b961964feea471ee8b323510934.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H98e929c683914ec5b19507ba2b0f4094D.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H7af6fa2507be41a2b9c35d6f44113361i.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H61d4ff1a7e34436fbb2d2fbc3faddf63Q.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b3655b8c35a47908dc82997122161feJ.jpg_350x350.jpg?hasNWGrade=1",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H64a3e6d219c64dc892e97580f62365efU.jpg_250x250xz.jpg",
    title: "Product 1",
    subTitle: "High Glossy PVC",
    priceRange: "$0.73 - $0.80",
    orders: "High Glossy PVC Imitation Marble Look Wall Panels",
    minOrder: "Min. order: 5 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf8f5a5a69193401ab2bf0d030c3530eb6.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://images.khmer24.co/23-04-19/s-sell-anern-hybrid-mppt-solar-inverter-5-5kw-404356168191616150227009-b.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Haa8e85f53a864771821dab1d59c73b48o.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hc8d96d2957d74974a840b67191c9d59fx.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/HTB1PQOLSpXXXXXoXXXXq6xXFXXXy.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality wallpaper ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hba924f275d894b80803169fdaebef38ei.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H26be3d543af5499cbf602609df86eea9j.png_720x720q50.png",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQacHDn4VsKWDkqm3-1jWbE7Gjo4ASCf13xN6i2oEjiYgr7PIuj",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.30 - $0.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H96a8e2db42ad4f379c63b73c1552c6a0e.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Ha0d1a911dd6649d080b06e7b0e1457f3h.png_720x720q50.png",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hc8d96d2957d74974a840b67191c9d59fx.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H6a7c476e66dd438ca447a112b56aa058l.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/HTB1PQOLSpXXXXXoXXXXq6xXFXXXy.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hba924f275d894b80803169fdaebef38ei.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf3c4450cf362408881cedb2d01bae1d6W.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hcab3142b51824f4bb442d7ad5d17ed47t.jpg_720x720q50.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H9836026aed5244a7aefb7d46fc857707B.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/Hf92138b961964feea471ee8b323510934.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H98e929c683914ec5b19507ba2b0f4094D.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H7af6fa2507be41a2b9c35d6f44113361i.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H61d4ff1a7e34436fbb2d2fbc3faddf63Q.jpg_250x250xz.jpg",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
  {
    imageUrl:
      "https://s.alicdn.com/@sc04/kf/H5b3655b8c35a47908dc82997122161feJ.jpg_350x350.jpg?hasNWGrade=1",
    subTitle: "modern 3d non woven wallpaper",
    priceRange: "$0.60 - $2.40",
    orders: "High quality ",
    minOrder: "Min. order: 10 pieces",
  },
];
function clickCategory() {
  const activeCategory = document.querySelector("#active-category");
  if (event.target.id === "active-category") return;
  activeCategory.id = null;
  event.target.id = "active-category";
  implementProducts();
}
function getRandomIndex(max) {
  return Math.floor(Math.random() * max);
}
function swapRandomElements(arr) {
  const indexA = getRandomIndex(arr.length);
  let indexB = getRandomIndex(arr.length);

  // Ensure indexB is different from indexA
  while (indexB === indexA) {
    indexB = getRandomIndex(arr.length);
  }

  // Swap elements at indexA and indexB
  const temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
}

// const justForYouContainer = document.querySelector("#just-for-you-card");
function createProductCard(product) {
  const colDiv = document.createElement("div");
  colDiv.classList.add("col", "mt-2");

  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const img = document.createElement("img");
  img.src = product.imageUrl;
  img.alt = "Card image cap";

  const cardBodyDiv = document.createElement("div");
  cardBodyDiv.classList.add("card-body");

  const smallText = document.createElement("small");
  smallText.classList.add("text-danger", "fw-light");
  smallText.textContent = product.subTitle;

  const h6Title = document.createElement("h6");
  h6Title.classList.add("card-title", "d-flex", "align-items-center");

  const spanPrice = document.createElement("span");
  spanPrice.textContent = product.priceRange;

  const pOrders = document.createElement("p");
  pOrders.classList.add("card-text");
  pOrders.textContent = product.orders;

  const pMinOrder = document.createElement("p");
  pMinOrder.classList.add("card-text");
  pMinOrder.textContent = product.minOrder;

  h6Title.appendChild(spanPrice);

  cardBodyDiv.appendChild(smallText);
  cardBodyDiv.appendChild(pOrders);
  cardBodyDiv.appendChild(h6Title);
  cardBodyDiv.appendChild(pMinOrder);

  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  colDiv.appendChild(cardDiv);

  return colDiv;
}

// Get the container element where the cards will be appended
const container = document.getElementById("just-for-you-card");

// Loop through the products array and create cards for each product
function implementProducts() {
  container.innerHTML = "";
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  swapRandomElements(products);
  products.forEach((product) => {
    const productCard = createProductCard(product);
    container.appendChild(productCard);
  });
}
implementProducts();
