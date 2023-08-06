// 1. DOM Manipulation
document.getElementById("btn-manipulate").addEventListener("click", () => {
  const text = document.getElementById("manipulate-text");
  text.innerText = "Button Clicked";
});

// 2. Click Counter
let count = 0;
document.getElementById("btn-click-counter").addEventListener("click", () => {
  count += 1;
  document.getElementById("count-display").innerHTML = count;
});
document.getElementById("btn-click-reset").addEventListener("click", () => {
  count = 0;
  document.getElementById("count-display").innerHTML = count;
});
// 3. Image Switcher

document.getElementById("btn-img-1").addEventListener("click", () => {
  const img = document.getElementById("img-1");
  img.src = "img/img2.jpeg";
});

document.getElementById("btn-img-2").addEventListener("click", () => {
  const img = document.getElementById("img-1");
  img.src = "img/img1.jpeg";
});

// 4. Ajax

const url = "https://jsonplaceholder.typicode.com/posts";
function loadData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayData(data));
}

function displayData(data) {
  data.forEach((user) => {
    const displayData = document.getElementById("display-data");
    const div = document.createElement("div");
    div.classList.add("col-sm-3");
    div.innerHTML = `
    <div class="card">
      <div class="card-body">
        <h6>User Id: ${user.userId}</h6>
        <h6>Id: ${user.id} </h6>
        <h5 class="card-title">${user.title}</h5>
        <p class="card-text">
          ${user.body}
        </p>
      </div>
    </div>`;
    displayData.appendChild(div);
  });
}
