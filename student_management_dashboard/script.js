function updateclock() {
    let now = new Date();
    let time = now.toLocaleTimeString();
    let date = now.toLocaleDateString('en-US',{
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'  }
    );

    document.getElementById('time').innerHTML = time;
    document.getElementById('date').innerHTML = date;

}
//making constructor to updat courses
updateclock();
setInterval(updateclock, 1000);

let courses = [];
function Course(name, status) {
    this.name = name;
    this.status = status;
}
courses.push(new Course("JavaScript", "Learning"));
courses.push(new Course("HTML/CSS", "Completed"));
courses.push(new Course("C++", "Learning"));
courses.push(new Course("SQL", "Learning"));
courses.push(new Course("React", "Learning"));
courses.push(new Course("C#", "Completed"));
 //push is an array method that adds new items to the end of an array. It returns the new length of the array.
function updateCourse() {
    let total = courses.length;
    let learning = courses.filter(course => course.status === "Learning").length;
    let completed = courses.filter(course => course.status === "Completed").length;

    document.querySelector('.total-value').textContent = total;
    document.querySelector('.learning-value').textContent = learning;
    document.querySelector('.completed-value').textContent = completed;
}
   
 updateCourse();
 function renderCourses() {
    
const grid = document.querySelector(".grid");
grid.innerHTML = "";

courses.forEach(course => {
  grid.innerHTML += `
    <div class="course-card">
      <div class="card-top">
       <div class="icon-box">
        <div class="title-block">

          <h3>${course.name}</h3>
          <p>${course.weeks}</p>
        </div>
      </div>

      <div class="tags">
        <span class="tag difficulty">${course.difficulty}</span>
        <span class="tag status-${course.status.toLowerCase()}">
          ${course.status}
        </span>
      </div>
    </div>
  `;
}); 
}
const addBtn = document.querySelector(".add-btn");

addBtn.addEventListener("click", () => {
    const name = document.getElementById("coursename").value.trim();
    const weeks = document.getElementById("weeks").value.trim();
    const difficulty = document.getElementById("difficulty").value;
    const status = document.getElementById("status").value;

    if (!name || !weeks) {
        alert("Please fill in all fields.");
        return;
    }

    courses.push({ name, weeks, difficulty, status });

    updateStats();
    renderCourses();

    document.getElementById("coursename").value = "";
    document.getElementById("weeks").value = "";
    document.getElementById("difficulty").selectedIndex = 0;
    document.getElementById("status").selectedIndex = 0;
});

function updateStats() {
    const total = courses.length;
    const learning = courses.filter(c => c.status === "Learning").length;
    const completed = courses.filter(c => c.status === "Completed").length;

    document.querySelector(".total-value").textContent = total;
    document.querySelector(".learning-value").textContent = learning;
    document.querySelector(".completed-value").textContent = completed;
}

document.getElementById("coursename").value = "";
function updateStats() {
    const total = courses.length;
    const learning = courses.filter(c => c.status === "Learning").length;
    const completed = courses.filter(c => c.status === "Completed").length;

    document.querySelector(".total-value").textContent = total;
    document.querySelector(".learning-value").textContent = learning;
    document.querySelector(".completed-value").textContent = completed;
    document.querySelectorAll('.course-card').length; 
}
const searchBox = document.querySelector(".search-box");

searchBox.addEventListener("input", () => {
  const term = searchBox.value.toLowerCase();

  document.querySelectorAll(".course-card").forEach(card => {
    const title = card.querySelector("h3").textContent.toLowerCase();

    card.style.display = title.includes(term) ? "" : "none";
  });
});
