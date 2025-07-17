const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "assets/img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "assets/img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "assets/img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "assets/img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "assets/img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "assets/img/female3.png"
  }
];

// funzione struttura card
const generateCard = (member) => {

  const memberCard = `
    <div class="col-12 col-md-6 col-lg-4 d-flex">
      <div class="d-flex bg-black text-light w-100 p-1">
        <div class="cardleft">
          <img class="img-fluid w-100" src="${member.img}" alt="${member.name}"">
        </div>
        <div class="cardright ms-4">
          <div class="name fs-5 text-uppercase">${member.name}</div>
          <div class="role text-light-emphasis">${member.role}</div>
          <div class="email text-primary">${member.email}</div>
        </div>
      </div>
    </div>
  `;

  return memberCard;
};

// recupero elementi
const teamContainer = document.getElementById('team-members');
const addMember = document.getElementById('add-member');

for (let i = 0; i < teamMembers.length; i++) {
  let card = generateCard(teamMembers[i]);
  teamContainer.innerHTML += card;
}

addMember.addEventListener('click', function (e) { 
  e.preventDefault(); 

  const name = document.getElementById('name').value;
  const role = document.getElementById('role').value;
  const img = document.getElementById('img').value;

  if (name == '' || role == '' || img == '') {
    alert('Tutti i campi sono obbligatori');
    return;
  }

  const newMember = {
    name,
    role,
    img
  };

  teamMembers.push(newMember);

  document.getElementById('name').value = '';
  document.getElementById('role').value = '';
  document.getElementById('img').value = '';
});