export default (filters) => {
  for (let i = 0; i < filters.length; i++) {
    const filterElement = makeFilter(filters[i]);

    if (i === 0) {
      filterElement.input.checked = true;
    }

    filterContainer.appendChild(filterElement.input);
    filterContainer.appendChild(filterElement.label);
  }
};

const MIN_VALUE_COUNTER = 1;
const MAX_VALUE_COUNTER = 20; // Не включая

const getRandom = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const filterContainer = document.querySelector(`.main__filter`);

const makeFilter = (filter) => {
  const input = makeElement(`input`, `filter__input`);
  input.classList.add(`visually-hidden`);
  input.id = `filter__${filter.name}`;
  input.type = `radio`;
  input.name = `filter`;

  if (filter.number === 0) {
    input.disabled = true;
  }

  const label = makeElement(`label`, `filter__label`, `${filter.name} `);
  label.setAttribute(`for`, `filter__${filter.name}`);

  const count = makeElement(`span`, `filter__${filter.name}-count`, getRandom(MIN_VALUE_COUNTER, MAX_VALUE_COUNTER));
  label.appendChild(count);

  return {input, label};
};
