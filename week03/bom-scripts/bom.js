const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize chapters array with localStorage data or an empty array
let chaptersArray = getChapterList() || [];

// Function to populate chapters from localStorage or empty array
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

// Function to update localStorage with chapters array
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to display chapters in the list
function displayList(item) {
  let li = document.createElement('li');
  let deleteButton = document.createElement('button');
  li.textContent = item;
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  deleteButton.setAttribute('aria-label', `Remove ${item}`);
}

// Function to remove chapter from array and localStorage
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1); // Remove '❌' from chapter string
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Button click event listener
button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  } else {
    console.warn("Please enter a chapter.");
  }
});

// Display chapters from localStorage on page load
window.onload = function () {
  chaptersArray.forEach(chapter => displayList(chapter));
};
