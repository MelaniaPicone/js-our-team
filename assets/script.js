const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

// funzione struttura card
const generateCard = (member) => {

const memberCard = `<div class="col-4 d-flex align-items-start bg-black p-1">
<div class="cardleft">
  <img class="img-fluid" src="${member.img}">
</div>
<div class="cardright ms-5 mt-2 ">
<div class="name text-light fs-5 text-uppercase">${member.name}</div>
<div class="role text-light-emphasis">${member.role}</div>
<div class="email text-primary">${member.email}</div>
</div>
</div>`


return memberCard;

}


// recupero elementi
const teamContainer = document.getElementById('team-members');


// ciclo
for(let i=0 ; i<teamMembers.length; i++) {
let card = generateCard(teamMembers[i]);

teamContainer.innerHTML += card;
}