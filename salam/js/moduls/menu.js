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
</button>
`);

  $(".btn-wrapper").click(() => {
    $(".btn-wrapper").toggleClass("btn-close");
    if ($(".btn-wrapper").attr("class").includes("btn-close"))
      $(".menu").css("top", "0");
    else $(".menu").css("top", "-100%");
  });
});

let createGenrePage = (genre) => {
  localStorage.setItem("genreName", genre);
  document.location.href = "genre.html";
};
