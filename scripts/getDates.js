const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;
document.getElementById('copyrightYear').textContent = currentYear;
document.getElementById('lastModifiedDate').textContent = lastModified;