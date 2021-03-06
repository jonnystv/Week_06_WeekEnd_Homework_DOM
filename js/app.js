document.addEventListener('DOMContentLoaded', () => {
    const dictatorDetailsForm = document.querySelector('#dictator-details-form');
    dictatorDetailsForm.addEventListener('submit', handleDDFormSubmit);

    const dictatorDeleteButton = document.querySelector('#delete-all');
    dictatorDeleteButton.addEventListener('click', handleDictatorDeleteButtonClick);
});

const handleDDFormSubmit = function (event) {
    event.preventDefault();
    
    const dictatorListItem = createDictatorListItem(event.target);
    const dictatorList = document.querySelector('#dictator-list');
    dictatorList.appendChild(dictatorListItem);

    event.target.reset();
};

const createDictatorListItem = function (form) {
    const dictatorListItem = document.createElement('li');
    dictatorListItem.classList.add('dictator-list-item');

    const title = document.createElement('h3');
    title.textContent = form.title.value;
    dictatorListItem.appendChild(title);
    title.classList.add('dictator-name');

    const firstName = document.createElement('h3');
    firstName.textContent = form.firstName.value;
    dictatorListItem.appendChild(firstName);
    title.classList.add('dictator-name');

    const surname = document.createElement('h3');
    surname.textContent = form.surname.value;
    dictatorListItem.appendChild(surname);
    title.classList.add('dictator-name');

    const dictatorType = document.createElement('h4');
    dictatorType.textContent = form.dictatorType.value;
    dictatorListItem.appendChild(dictatorType);
    title.classList.add('dictator-type');

    return dictatorListItem;
};

const handleDictatorDeleteButtonClick = function(event) {
    const dictatorList = document.querySelector('#dictator-list');
    dictatorList.innerHTML = '';
};