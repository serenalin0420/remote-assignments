// Assignment 1: Function and Array
function max(numbers) {
  // find the max number of the passing array of numbers
  let maxN = numbers[0]; //初始值已進入比較
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxN) {
      maxN = numbers[i];
    }
  }
  return maxN;
}
console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7

//Assignment 2: Function and Object
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

//Assignment 3: Function, Array, and Object
function calculate2(data) {
  //Complete the function below to calculate the total price of all products after applying a discount.

  let sum = 0;
  for (let i = 0; i < data.products.length; i++) {
    sum += data.products[i].price;
  }
  const discounted = sum * (1 - data.discount);
  return discounted; //因discounted不會再被重新賦值，用const較合適
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

//Assignment 5: Algorithm (Advanced Optional) 寫法一
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        let ans = [i, j];
        return ans;
      }
    }
  }
  return "Not found"; //放在迴圈理會直接跳出來
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 7, 11, 15], 13));
console.log(twoSum([2, 7, 11, 15], 20));

//寫法二
function twoSum1(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i];
    if (nums.includes(num)) {
      return [i, nums.indexOf(num)];
    }
  }
  return "Not found";
}
console.log(twoSum1([3, 7, 11, 15], 14));
console.log(twoSum1([2, 7, 11, 15], 20));

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

//3. Click to Show More Content Boxes.
const addMoreContent = document.querySelector(".content-btn");
const hiddenContentBox = document.querySelector(".hidden");

addMoreContent.addEventListener("click", () => {
  if (hiddenContentBox.classList.contains("hidden")) {
    hiddenContentBox.classList.remove("hidden");
  } else {
    hiddenContentBox.classList.add("hidden");
  }
});

/* 其他做法: Click to Show More Content Boxes. 增加在button上方，像是"查看更多"的功能

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
  
*/
