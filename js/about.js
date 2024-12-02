const resultCards = document.querySelector(".result-cards");

function getResults(el) {
  return `<div class="result-card">
     <span>${el.value}</span>
     <h3>${el.title}</h3>
     <p>${el.desc}</p>
    </div>
    `;
}

results.map((el) => {
  resultCards.innerHTML += getResults(el);
});
const latestNews = document.querySelector(".latest-news");

function getLatest(el) {
  return `<div>
     <img src = ${el.img} alt = "da"/>
     <h3>${el.title}</h3>
     <p>${el.desc}</p>
    </div>
    `;
}

latest.map((el) => {
  latestNews.innerHTML += getLatest(el);
});
