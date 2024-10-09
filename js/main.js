const compainesCards = document.querySelector(".compaines-cards");
function getCompainesCards(el) {
  const compainesCard = document.createElement("div");
  compainesCard.classList.add("compaines-card");

  const compainesImg = document.createElement("img");
  compainesImg.alt = "Hello World";
  compainesImg.src = el.img;

  const compainesTitle = document.createElement("h3");
  compainesTitle.textContent = el.title;

  const compainesDesc = document.createElement("p");
  compainesDesc.textContent = el.desc;

  const compainesLink = document.createElement("a");
  compainesLink.href = "#";
  compainesLink.textContent = "Read more ->";
  compainesCard.append(
    compainesImg,
    compainesTitle,
    compainesDesc,
    compainesLink
  );

  return compainesCard;
}

dataCard.map((el) => {
  let data = getCompainesCards(el);
  compainesCards.append(data);
});

// solutions cards maping

const solutionsCards = document.querySelector(".solution-cards");

function getSolutionsCards(el) {
  const solutionsCard = document.createElement("div");
  solutionsCard.classList.add("solution-card");

  const solutionsImg = document.createElement("img");
  solutionsImg.src = el.img;
  solutionsImg.alt = el.name;
  const solutionsTitle = document.createElement("h3");
  solutionsTitle.textContent = el.name;

  const solutionsDesc = document.createElement("p");
  solutionsDesc.textContent = el.desc;
  solutionsCard.append(solutionsImg, solutionsTitle, solutionsDesc);

  return solutionsCard;
}

data.map((el) => {
  let data = getSolutionsCards(el);
  solutionsCards.append(data);
});
