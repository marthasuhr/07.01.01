//https://kea-alt-del.dk/t7/api/products

const urlParams = new URLSearchParams(window.location.search);
const cat = urlParams.get("category");
const url = `https://kea-alt-del.dk/t7/api/products?limit=10&category=${cat}`;
document.querySelector("h2").textContent = cat;

console.log("hej");
//1 tage data

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  // loope for hver
  data.forEach(showProduct);
}

getData();

function showProduct(product) {
  console.log(product);

  //tage fat i template

  const template = document.querySelector("#smallProductTemplate").content;

  //klon

  const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  const copy = template.cloneNode(true);

  //skift data
  copy.querySelector("h3").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = product.price + " DKK";

  copy.querySelector("img").src = imagePath;

  // kunne oogså skrives   copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;

  copy.querySelector("a").href = "product.html?id=" + product.id;

  //Hvis produktet er udsolgt tilføj class udsolgt (i css som ændrer oppacity)
  if (product.soldout) {
    copy.querySelector("article").classList.add("udsolgt");
  }

  //hvis produktet er på tilbud. tilføjer ny pris og procent

  if (product.discount) {
    copy.querySelector(".tilbudspris").textContent = "NU " + Math.round(product.price - (product.price * product.discount) / 100) + " DKK";
    copy.querySelector(".procent").textContent = product.discount + "%";
    copy.querySelector(".price").textContent = "FØR " + product.price + " DKK";
    copy.querySelector(".tilbudspris").classList.remove("gem");
    copy.querySelector(".procent").classList.remove("gem");
  }

  // Gør så elementerne er i mit grid

  document.querySelector(".produktliste_grid").appendChild(copy);
}
