// Side Bars
function openSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:flex !important; ');
}

function closeSidebar() {
  document.getElementById("portfolio-sidebar").setAttribute('style', 'display:none !important;');
}

if (matchMedia("(min-width: 835px)").matches) {
  // the viewport is at least 900 pixels wide
  closeSidebar();
}

const PROJECTS = [
  {
    'title':"Salary Predictor",
    'description':"Salary prediction using linear regression model.",
    'image_src':"assets/images/salary.png",
    'project_link':"https://github.com/aditya-1123/Salary_Prediction_System"
  },
  {
    'title':"ToDo List",
    'description':"Django ToDo list with full CRUD functionality.",
    'image_src':"assets/images/todo2.png",
    'project_link':"https://github.com/aditya-1123/todo"
  },
  {
    'title':"Employee Manager",
    'description':"Office employee system with CRUD operations.",
    'image_src':"assets/images/emp.png",
    'project_link':"https://github.com/aditya-1123/Office_employee_management_system"
  },
  {
    'title':"N-Queens Visualizer",
    'description':"N-Queens solution using backtracking.",
    'image_src':"assets/images/nqueen.png",
    'project_link':"https://github.com/aditya-1123/N-queens-visualiser"
  },
  {
    'title':"Tic-Tac-Toe",
    'description':"Tic-Tac-Toe game using HTML, CSS, JavaScript.",
    'image_src':"assets/images/x-o-game (2).png",
    'project_link':"https://github.com/aditya-1123/codsoft/tree/main/ticTacToe"
  },
  {
    'title':"Rock-Paper-Scissors",
    'description':"Rock-Paper-Scissors with HTML, CSS, JavaScript.",
    'image_src':"assets/images/rock_paper_scissor.png",
    'project_link':"https://github.com/aditya-1123/codsoft/tree/main/rockPaperScissor"
  },
  {
    'title':"Password Generator",
    'description':"Generate passwords using HTML, CSS, JavaScript.",
    'image_src':"assets/images/password_generator.png",
    'project_link':"https://github.com/aditya-1123/codsoft/tree/main/password_generator"
  },
  {
    'title':"Simple Calculator",
    'description':"Simple calculator built with HTML, CSS, JavaScript.",
    'image_src':"assets/images/calci.png",
    'project_link':"https://github.com/aditya-1123/codsoft/tree/main/calci"
  },
]

function createElement(name){
  return document.createElement(name);
}

function addProjects(PROJECTS){
  let otherProjects = document.getElementById("other-projects-container");

  PROJECTS.forEach(project => {
    // console.log(project);
    let card = createElement("div");
    card.classList.add("card");
    card.style.width = "250px";

    let img = createElement("img");
    img.classList.add("card-img-top");
    img.setAttribute("src", project.image_src);
    img.setAttribute("alt", project.title);

    let cardBody = createElement("div");
    cardBody.classList.add("card-body");

    let title = createElement("h5");
    title.classList.add("card-title");
    title.innerHTML = project.title;

    let cardText = createElement("p");
    cardText.classList.add("card-text");
    cardText.innerHTML = project.description;

    let link = createElement("a");
    link.setAttribute("href", project.project_link);
    link.setAttribute("target", "_blank");
    link.classList.add("black", "btn", "btn-outline-primary");
    link.innerHTML = 'GitHub <i class="fa fa-github"></i>'

    cardBody.appendChild(title);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardText);
    cardBody.appendChild(link);

    card.appendChild(img);
    card.appendChild(cardBody);

    otherProjects.appendChild(card);
  });
}

// Call the function to add projects
addProjects(PROJECTS);

function validateForm(event) {
  event.preventDefault(); // Prevent the form from reloading the page
  
  const successMessage = document.querySelector('.success-message');
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Clear previous status
  successMessage.innerHTML = ''; 
  successMessage.style.display = 'none'; 

  // Basic validation
  if (!name || !phone || !email || !message) {
      successMessage.innerHTML = 'All fields are required!';
      successMessage.style.backgroundColor = 'red'; // Set red background for error
      successMessage.style.display = 'block'; // Show the error message
      return;
  }

  // Simulate form submission (you can replace this with an actual server call)
  setTimeout(() => {
      successMessage.innerHTML = 'Details submitted successfully!';
      successMessage.style.backgroundColor = '#28a745'; // Green background for success
      successMessage.style.display = 'block'; // Show the success message
      
      // Clear the form fields after submission
      document.getElementById('contact-form').reset();
  }, 500); // Simulate delay for the submission process
}
