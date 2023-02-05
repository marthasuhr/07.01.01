//https://kea-alt-del.dk/t7/api/products

//1 tage data

async function getData() {
  const response = await fetch("https://kea-alt-del.dk/t7/api/products?limit=10");
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
  console.log(template);

  //klon

  const copy = template.cloneNode(true);

  //skift data
  copy.querySelector("h3").textContent = product.productdisplayname;
  if (product.soldout) {
    copy.querySelector("article").classList.add("soldOut");
  }
  document.querySelector("main").appendChild(copy);
}
