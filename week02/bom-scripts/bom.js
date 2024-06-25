const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
  // Check if input is not blank
  if (input.value !== '') {
    // Create a new list item (li)
    const li = document.createElement('li');

    // Create a delete button
    const deleteButton = document.createElement('button');

    // Set the content of the list item and delete button
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Add the delete button as a child of the list item
    li.append(deleteButton);

    // Add the list item to the unordered list
    list.append(li);

    // Add click event listener to the delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
      input.focus();
    });

    // Set accessibility label for the delete button (screen reader)
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Clear the input field
    input.value = '';

    // Focus the input field for next entry
    input.focus();
  } else {
    // Optional: Provide message if input is blank
    console.warn("Please enter a book and chapter.");
  }
});
