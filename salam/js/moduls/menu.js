$(document).ready(() => {
  $(".menu").html(`<button onclick="createGenrePage('rap')" class="menu-link">
  rap
</button>
<button onclick="createGenrePage('rock')" class="menu-link">
  rock
</button>
<button onclick="createGenrePage('pop')" class="menu-link">
  pop
</button>
<button onclick="createGenrePage('electronics')" class="menu-link">
  electronics
</button>
<button onclick="createGenrePage('metal')" class="menu-link">
  metal
</button>`);
});

let createGenrePage = (genre) => {
  localStorage.setItem("genreName", genre);
  document.location.href = "genre.html";
};
