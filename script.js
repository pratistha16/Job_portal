// Sample job data to simulate fetching from a database
const jobs = [
    {
        title: 'Sales Officer',
        company: 'Janaki Polychem Pvt. Ltd.',
        location: 'Butwal',
        type: 'Full Time',
        level: 'Mid/Senior Level'
    },
    {
        title: 'Receptionist',
        company: 'Biraj Developer',
        location: 'Lazimpat Metro Park',
        type: 'Mid Level',
        level: 'Mid Level'
    },
    {
        title: 'Regional Fiber Manager',
        company: 'Classic Tech Pvt. Ltd.',
        location: 'New Baneshwor',
        type: 'Full Time',
        level: 'Mid/Senior Level'
    },
    {
        title: 'Operation Manager',
        company: 'Oriflame Swedish Cosmetics',
        location: 'New Baneshwor',
        type: 'Full Time',
        level: 'Mid/Senior Level'
    }
];

// Function to render jobs
function renderJobs(jobList) {
    const jobGrid = document.querySelector('.job-grid');
    jobGrid.innerHTML = '';  // Clear the job grid

    jobList.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.classList.add('job-card');
        
        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>${job.location}</p>
            <span>${job.type} | ${job.level}</span>
        `;

        jobGrid.appendChild(jobCard);
    });
}

// Function to filter jobs based on search input
function searchJobs() {
    const searchInput = document.querySelector('.search-bar input').value.toLowerCase();
    
    const filteredJobs = jobs.filter(job => 
        job.title.toLowerCase().includes(searchInput) ||
        job.company.toLowerCase().includes(searchInput) ||
        job.location.toLowerCase().includes(searchInput)
    );

    renderJobs(filteredJobs);
}

// Add event listener to search button
document.querySelector('.search-bar button').addEventListener('click', searchJobs);

// Employer form submission handling
function submitEmployerForm() {
    const companyName = document.querySelector('.employer-section input').value;
    if (companyName) {
        alert(`Thank you for submitting, ${companyName}! We will get in touch soon.`);
        document.querySelector('.employer-section input').value = '';  // Clear the input field
    } else {
        alert('Please enter a company name.');
    }
}

// Add event listener to employer form button
document.querySelector('.employer-section button').addEventListener('click', submitEmployerForm);

// Load initial jobs when page loads
window.onload = function() {
    renderJobs(jobs);
};
