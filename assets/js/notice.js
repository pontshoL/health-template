document.addEventListener('DOMContentLoaded', () => {
    populateDropdowns();
  });
  
  function populateDropdowns() {
    const publications = ["ETHEKWINI WEEKLY BULLETIN", "METRO", "OTHER"];
    const years = ["2024", "2023", "2022"];
    const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
  
    const publicationDropdown = document.getElementById('publicationDropdown');
    const yearDropdown = document.getElementById('yearDropdown');
    const monthDropdown = document.getElementById('monthDropdown');
  
    publications.forEach(pub => {
      const option = document.createElement('option');
      option.value = pub;
      option.textContent = pub;
      publicationDropdown.appendChild(option);
    });
  
    years.forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearDropdown.appendChild(option);
    });
  
    months.forEach(month => {
      const option = document.createElement('option');
      option.value = month;
      option.textContent = month;
      monthDropdown.appendChild(option);
    });
  }
  
  function filterByPressReader() {
    const notices = document.querySelectorAll('.notice');
    notices.forEach(notice => {
      const publication = notice.getAttribute('data-publication');
      if (publication.includes('ETHEKWINI WEEKLY BULLETIN')) {
        notice.style.display = 'block';
      } else {
        notice.style.display = 'none';
      }
    });
  }
  
  function applyFilters() {
    const publicationValue = document.getElementById('publicationDropdown').value;
    const yearValue = document.getElementById('yearDropdown').value;
    const monthValue = document.getElementById('monthDropdown').value;
  
    const notices = document.querySelectorAll('.notice');
    notices.forEach(notice => {
      const noticePublication = notice.getAttribute('data-publication');
      const noticeYear = notice.getAttribute('data-year');
      const noticeMonth = notice.getAttribute('data-month');
  
      if ((publicationValue === 'all' || noticePublication === publicationValue) &&
          (yearValue === 'all' || noticeYear === yearValue) &&
          (monthValue === 'all' || noticeMonth === monthValue)) {
        notice.style.display = 'block';
      } else {
        notice.style.display = 'none';
      }
    });
  }
  