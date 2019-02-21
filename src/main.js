'use strict';

const filters = [
  {
    name: `all`,
    number: 15,
    isChecked: true,
  },
  {
    name: `overdue`,
    number: 0,
    isChecked: false,
  },
  {
    name: `today`,
    number: 0,
    isChecked: false,
  },
  {
    name: `favorites`,
    number: 7,
    isChecked: false,
  },
  {
    name: `repeating`,
    number: 2,
    isChecked: false,
  },
  {
    name: `tags`,
    number: 10,
    isChecked: false,
  },
  {
    name: `archive`,
    number: 4,
    isChecked: false,
  },
];

const filterContainer = document.querySelector(`.main__filter`);

const makeElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const makeFilter = (filter) => {
  const input = makeElement(`input`, `filter__input`);
  input.classList.add(`visually-hidden`);
  input.id = `filter__${filter.name}`;
  input.type = `radio`;
  input.name = `filter`;

  if (filter.isChecked) {
    input.checked = true;
  }

  if (filter.number === 0) {
    input.disabled = true;
  }

  const label = makeElement(`label`, `filter__label`, `${filter.name} `);
  label.setAttribute(`for`, `filter__${filter.name}`);

  const count = makeElement(`span`, `filter__${filter.name}-count`, filter.number);
  label.appendChild(count);

  return {input, label};
};

for (let i = 0; i < filters.length; i++) {
  const filterElement = makeFilter(filters[i]);
  filterContainer.appendChild(filterElement.input);
  filterContainer.appendChild(filterElement.label);
}
