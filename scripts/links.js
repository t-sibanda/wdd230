const baseURL = "https://t-sibanda.github.io/wdd230/";
const linksURL = baseURL + "data/links.json";

async function getLinks() {
  try {
    const response = await fetch(linksURL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    displayLinks(data.weeks);
  } catch (error) {
    console.error('Error fetching links:', error);
  }
}

function displayLinks(weeks) {
  const courseList = document.querySelector('.course-list');
  courseList.innerHTML = ''; // Clear existing content

  weeks.forEach(week => {
    const weekHeader = document.createElement('h3');
    weekHeader.textContent = week.week;
    courseList.appendChild(weekHeader);

    const linkList = document.createElement('ul');

    week.links.forEach(link => {
      const listItem = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = baseURL + link.url;
      anchor.textContent = link.title;
      listItem.appendChild(anchor);
      linkList.appendChild(listItem);
    });

    courseList.appendChild(linkList);
  });
}

// Fetch and display the links when the page loads
document.addEventListener('DOMContentLoaded', getLinks);
