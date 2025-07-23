const jobs = [
  {
    title: "Frontend Developer",
    company: "TechNova",
    location: "Remote",
    type: "Frontend"
  },
  {
    title: "Backend Engineer",
    company: "DataNest",
    location: "San Francisco",
    type: "Backend"
  },
  {
    title: "Full Stack Developer",
    company: "WebWiz",
    location: "New York",
    type: "Full Stack"
  },
  {
    title: "Frontend Intern",
    company: "PixelWorks",
    location: "Remote",
    type: "Frontend"
  }
];

let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

function renderJobs(filtered = "All") {
  const container = document.getElementById("job-list");
  container.innerHTML = "";

  const displayJobs = filtered === "All" ? jobs : jobs.filter(job => job.type === filtered);

  displayJobs.forEach((job, index) => {
    const isSaved = savedJobs.includes(job.title);
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} – ${job.location}</p>
      <p><strong>${job.type}</strong></p>
      <button onclick="toggleSave('${job.title}')">
        ${isSaved ? "Unsave" : "Save"}
      </button>
    `;
    container.appendChild(jobCard);
  });
}

function toggleSave(title) {
  const index = savedJobs.indexOf(title);
  if (index >= 0) {
    savedJobs.splice(index, 1);
  } else {
    savedJobs.push(title);
  }
  localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
  filterJobs();
}

function filterJobs() {
  const selected = document.getElementById("filter").value;
  renderJobs(selected);
}

renderJobs();
