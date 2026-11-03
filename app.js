"use strict";
const cards = [...document.querySelectorAll("#cardsGrid .card")];
const count = document.getElementById("cardCount"), search = document.getElementById("searchInput"), empty = document.getElementById("noResults");
const texts = cards.map(c => c.textContent.toLocaleLowerCase());
function filter() {
  const q = search.value.slice(0, 120).trim().toLocaleLowerCase();
  let visible = 0;
  cards.forEach((c, i) => { c.hidden = !texts[i].includes(q); if (!c.hidden) visible++; });
  count.textContent = visible + " of " + cards.length + " sample profiles";
  empty.hidden = visible !== 0;
}
search.addEventListener("input", filter);
filter();
