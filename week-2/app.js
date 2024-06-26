function max(numbers) {
  // find the max number of the passing array of numbers
  let maxN = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxN) {
      maxN = numbers[i];
    }
  }
  return maxN;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

function calculate1(args) {
  //Complete the function below to calculate the result of the passing object
  let result;
  if (args.op === "+") {
    result = args.n1 + args.n2;
  } else if (args.op === "-") {
    result = args.n1 - args.n2;
  } else if (args.op === "*") {
    result = args.n1 * args.n2;
  } else if (args.op === "/") {
    result = args.n1 / args.n2;
  } else {
    result = "Not supported";
  }

  return result;
}
console.log(calculate1({ n1: 2, n2: 3, op: "+" })); // expected output: 5
console.log(calculate1({ n1: 5, n2: 2, op: "-" })); // expected output: 3
console.log(calculate1({ n1: 1, n2: 6, op: "x" })); // expected output: 'Not supported'

function calculate2(data) {
  //Complete the function below to calculate the total price of all products after applying a discount.

  let sum = 0;
  for (let i = 0; i < data.products.length; i++) {
    sum += data.products[i].price;
  }
  let discounted = sum * (1 - data.discount);
  return discounted;
}
const discountedPrice = calculate2({
  discount: 0.1,
  products: [
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 700,
    },
    {
      name: "Product 3",
      price: 250,
    },
  ],
});

console.log(discountedPrice);

function twoSum(nums, target) {
  // your code here
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum === target) {
        let ans = [i, j];
        return ans;
      } else {
        return "Not found";
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9));

//Assignment 4
//1. When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".
const headingChange = document.querySelector(".banner-heading-container");

headingChange.addEventListener("click", () => {
  const headline = document.querySelector(".banner-heading");
  headline.textContent = "Have a Good Time!";
});

//2. Click to Show/Close Menu.
const btnOpenMenu = document.querySelector("#btn-hamburger-menu");
const btnCloseMenu = document.querySelector("#close-side-menu");
const sideMenu = document.querySelector("#side-menu");
let isMenuOpen = false;
btnOpenMenu.addEventListener("click", () => {
  sideMenu.style.transform = "translateX(-240px)"; //打開side-menu
  isMenuOpen = true;
  if (isMenuOpen === true) {
    btnCloseMenu.addEventListener("click", () => {
      sideMenu.style.transform = "translateX(0px)";
    });
  }
});

//3. Click to Show More Content Boxes. 作法一
const btnCreateContent = document.querySelector(".content-btn");

btnCreateContent.addEventListener("click", () => {
  // const button = document.querySelector(".content-btn");
  const content = document.querySelector(".content-box");

  content.insertAdjacentHTML(
    "beforeend",
    `<div class="box box1">
        <p>Content Box 1</p>
      </div>

      <div class="box box2">
        <p>Content Box 2</p>
      </div>`
  );
});
