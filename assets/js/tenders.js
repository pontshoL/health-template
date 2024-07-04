const courses = [
    {
        title: "Course 1",
        description: "Description for course 1",
        details: [
            {
                tableHeaders: ["Header 1", "Header 2", "Header 3"],
                tableRows: [
                    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"],
                    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"]
                ]
            }
        ]
    },
    {
        title: "Course 2",
        description: "Description for course 2",
        details: [
            {
                tableHeaders: ["Header 1", "Header 2", "Header 3"],
                tableRows: [
                    ["Row 1 Col 1", "Row 1 Col 2", "Row 1 Col 3"],
                    ["Row 2 Col 1", "Row 2 Col 2", "Row 2 Col 3"]
                ]
            }
        ]
    },
    // Add more courses as needed
];

const coursesPerPage = 2;
let currentPage = 1;
const totalPages = Math.ceil(courses.length / coursesPerPage);

function renderCourses() {
    const courseList = document.querySelector('.course-list');
    courseList.innerHTML = '';

    const startIndex = (currentPage - 1) * coursesPerPage;
    const endIndex = startIndex + coursesPerPage;
    const coursesToRender = courses.slice(startIndex, endIndex);

    coursesToRender.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h2>${course.title}</h2>
            <p>${course.description}</p>
            ${course.details.map(detail => `
                <table>
                    <thead>
                        <tr>
                            ${detail.tableHeaders.map(header => `<th>${header}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${detail.tableRows.map(row => `
                            <tr>
                                ${row.map(cell => `<td>${cell}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            `).join('')}
        `;
        courseList.appendChild(courseElement);
    });
}

function renderPageNumbers() {
    const pageNumbers = document.getElementById('page-numbers');
    pageNumbers.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const pageNumber = document.createElement('div');
        pageNumber.classList.add('page-number');
        if (i === currentPage) {
            pageNumber.classList.add('active');
        }
        pageNumber.textContent = i;
        pageNumber.addEventListener('click', () => {
            currentPage = i;
            renderCourses();
            renderPageNumbers();
        });
        pageNumbers.appendChild(pageNumber);
    }
}

document.getElementById('prev-btn').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderCourses();
        renderPageNumbers();
    }
});

document.getElementById('next-btn').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        renderCourses();
        renderPageNumbers();
    }
});

renderCourses();
renderPageNumbers();
