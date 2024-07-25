document.addEventListener('DOMContentLoaded', function () {
    const baseURL = " https://t-sibanda.github.io/wdd230/chamber/";
    const membersURL = baseURL + "data/members.json";
  
    async function getMembers() {
      const response = await fetch(membersURL);
      const data = await response.json();
      displayMembers(data.members);
    }
  
    function displayMembers(members) {
      const memberDirectory = document.getElementById('member-directory');
      memberDirectory.innerHTML = ''; // Clear existing content
  
      members.forEach(member => {
        const memberCard = document.createElement('div');
        memberCard.classList.add('member-card');
  
        memberCard.innerHTML = `
          <img src="${baseURL + member.image}" alt="${member.name}">
          <h3>${member.name}</h3>
          <p>${member.address}</p>
          <p>${member.phone}</p>
          <a href="${member.website}" target="_blank">${member.website}</a>
          <p>${member.membershipLevel} Member</p>
          <p>${member.description}</p>
        `;
  
        memberDirectory.appendChild(memberCard);
      });
    }
  
    function toggleView() {
      const memberDirectory = document.getElementById('member-directory');
      memberDirectory.classList.toggle('grid-view');
      memberDirectory.classList.toggle('list-view');
    }
  
    document.getElementById('toggleView').addEventListener('click', toggleView);
  
    getMembers();
  });
  