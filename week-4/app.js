//assignment 1
function delayedResult(n1, n2, delayTime, callbacks) {
  let sum = n1 + n2;
  setTimeout(callbacks, delayTime, sum);
}

delayedResult(4, 5, 3000, function (result) {
  console.log(result);
});
delayedResult(-5, 10, 2000, function (result) {
  window.alert(result);
});

//assignment 2
function ajax(url) {
  const data = fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return data;
}
function render(data) {
  let card = document.querySelector(".card");
  let print = "";
  for (let product of data) {
    print += `<div class="product-item"><h3 class="product-name">${product.name}</h3>
    <span class="product-price">定價: ${product.price}</span>
    <p class="product-description">${product.description}</p></div>`;
  }
  card.innerHTML = print;
}

const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";

ajax(url).then((data) => {
  render(data);
});
