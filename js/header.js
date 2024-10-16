const burgerBtn = document.querySelector(".burger-btn");
const listItem = document.querySelector(".list");
const imgBtn = document.querySelector(".imgBtn");

// Eski va yangi rasmlar
const imgOpen =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAARlJREFUSEvt1M8qxUEYxvHP2SrZEMpCUlyD/Cls5TZkq9yJzsZKuQG5AmSFbP3JmiVX4PfWqF/6nZlx6mRzZjm98zzv8513pmfEqzdifWODIuF/R3SMM7wPaHUFGzgdFCWX4BAneMFmh8kyrjGHfVx0meQM4mAIhNBr6vQnyRJuMYtHbOHrrwZR32UyUSseAjWXPI+rlOQJU8n4vkm4g8/cKNUYxPmFhGsxiWWxtA1rDYJ1MA/2sR6aVNul7msRhfhNQvScEMXeXbO/WzIpJWh3/oY1TLbGs5gkZ9Al/pEQxegGspkSrpzBQTPnfQSWmPPfr3k1JZnGHi6HeQdHOM98FWGyPuxXUfwpawpKl1yjka0ZGxQRjhzRNxi0NBmpupZSAAAAAElFTkSuQmCC";
const imgClose =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="; // eski rasm manzili

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("burger-show"); // Burger tugmachasining o'zgarishi
  if (listItem.style.display === "none" || listItem.style.display === "") {
    listItem.style.display = "flex"; // Menyuni ochish
    imgBtn.src = imgOpen; // Eski rasmga qaytarish
  } else {
    listItem.style.display = "none"; // Menyuni yopish
    imgBtn.src = imgClose; // Yangi rasm
  }
});
