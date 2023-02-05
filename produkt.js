const id = 1541;
const url = `https://kea-alt-del.dk/t7/api/products/${id}`;

/*const pruductid = 123456;*/
const imagePath = `https://kea-alt-del.dk/t7/images/webp/640/${id}.webp`;

function hentData() {
  fetch(url)
    .then((res) => res.json())
    .then(visProdukt);
}

function visProdukt(produkt) {
  console.log(produkt);
  document.querySelector("#model").textContent = produkt.productdisplayname;
  document.querySelector("#farve").textContent = produkt.basecolour;
  document.querySelector("#produktnummer").textContent = produkt.id;
  document.querySelector("#brandname").textContent = produkt.brandname;
  document.querySelector("#variantname").textContent = produkt.variantname;
  document.querySelector("img").src = imagePath;
}

hentData();
