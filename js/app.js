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
    'project_link':"https://github.com/arunkumar02042002/blog_app_django/"
  },
  {
    'title':"Tic-Tac-Toe",
    'description':"Tic-Tac-Toe game using HTML, CSS, JavaScript.",
    'image_src':"assets/images/x-o-game (2).png",
    'project_link':"https://github.com/arunkumar02042002/Python-Projects/tree/main/8.%20Hangman"
  },
  {
    'title':"Rock-Paper-Scissors",
    'description':"Rock-Paper-Scissors with HTML, CSS, JavaScript.",
    'image_src':"assets/images/rock_paper_scissor.png",
    'project_link':"https://github.com/arunkumar02042002/Flipcart_reveiw_Scrapper"
  },
  {
    'title':"Password Generator",
    'description':"Generate passwords using HTML, CSS, JavaScript.",
    'image_src':"assets/images/password_generator.png",
    'project_link':"https://github.com/arunkumar02042002/Python-Projects/tree/main/4.%20X-O%20Game"
  },
  {
    'title':"Simple Calculator",
    'description':"Simple calculator built with HTML, CSS, JavaScript.",
    'image_src':"assets/images/calci.png",
    'project_link':"https://github.com/arunkumar02042002/blog_api/"
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