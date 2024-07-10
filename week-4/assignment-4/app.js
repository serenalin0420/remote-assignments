function ajax(url) {
  const data = fetch(url)
    .then((res) => res.json())
    .catch((error) => console.error(error));
  return data;
}
function render(data) {
  let boxContainer = document.querySelector(".box-container");
  let print = "";

  data.forEach((box) => {
    let topicsHtml = box.topics
      .map((topic) => `<a href="" class="box-topics">${topic}</a>`)
      .join("");
    let visible = box.visibility[0].toUpperCase() + box.visibility.slice(1);

    print += `
    <li class="box-row">
    <div class="name-container">
    <a href="" class="box-reponame">${box.name}</a>
    <span class="box-visibility">${visible}</span></div>
      <p class="box-description">${box.description}</p>
      <div class="topics-container">${topicsHtml}</div>
    </li>`;
  });
  boxContainer.insertAdjacentHTML("beforeend", print);
}

let page = 1;
let url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
ajax(url).then((data) => {
  render(data);
});

function addMoreBoxes() {
  page += 1;
  url = `https://api.github.com/orgs/facebook/repos?per_page=5&page=${page}`;
  ajax(url).then((data) => {
    render(data);
  });
}
