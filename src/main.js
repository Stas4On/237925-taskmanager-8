import makeFilter from '../src/make-filter';
import makeCard from '../src/make-card';

const filters = [
  {
    name: `all`,
  },
  {
    name: `overdue`,
  },
  {
    name: `today`,
  },
  {
    name: `favorites`,
  },
  {
    name: `repeating`,
  },
  {
    name: `tags`,
  },
  {
    name: `archive`,
  },
];

const filterContainer = document.querySelector(`.main__filter`);
const filterElements = makeFilter(filters);

for (const filter of filterElements) {
  filterContainer.insertAdjacentElement(`beforeend`, filter);
}

const BEGIN_COUNTER = 7;

const renderCard = (dist, count) => {
  const tasks = new Array(count)
    .fill()
    .map(makeCard);
  dist.insertAdjacentHTML(`beforeend`, tasks.join(``));
};

const cardsContainer = document.querySelector(`.board__tasks`);

renderCard(cardsContainer, BEGIN_COUNTER);

const filterList = document.querySelectorAll(`.filter__label`);

for (let i = 0; i < filterList.length; i++) {
  filterList[i].addEventListener(`click`, () => {
    const input = filterList[i].previousElementSibling;
    const countCard = filterList[i].firstElementChild.textContent;

    if (!input.checked) {
      cardsContainer.innerHTML = ``;
      renderCard(cardsContainer, +countCard);
    }
  });
}
