const lastModifiedElement = document.getElementById('last-modified');

// Get the current date and format it nicely
const today = new Date();
const formattedDate = today.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Update the "Last Modified" text content
lastModifiedElement.textContent = formattedDate;
