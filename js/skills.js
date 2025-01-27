const devBtn = document.querySelector('.js-dev');
const cadBtn = document.querySelector('.js-cad');
const hobbiesBtn = document.querySelector('.js-hobbies');
const certificatesBtn = document.querySelector('.js-certificates');
const container = document.querySelector('.background-container2');

const skillsList = document.createElement('div');
skillsList.classList.add('js-skills-list');
document.body.appendChild(skillsList);

const skillsData = {
  dev: [
    { name: 'CPP', img: '../images/dev_skills/cpp.png' },
    { name: 'CSS', img: '../images/dev_skills/css-3.png' },
    { name: 'GIT', img: '../images/dev_skills/git.png' },
    { name: 'HTML', img: '../images/dev_skills/html.png' },
    { name: 'JavaScript', img: '../images/dev_skills/java-script.png' },
    { name: 'React', img: '../images/dev_skills/react.png' },
    { name: 'SQL', img: '../images/dev_skills/sql-server.png' },
    { name: 'Python', img: '../images/dev_skills/python.png' },
  ],
  cad: [
    { name: 'Autocad', img: '../images/design_skills/autocad_logo.jpg' },
    { name: 'Catia', img: '../images/design_skills/catia_logo.jpg' },
    { name: 'Cura', img: '../images/design_skills/cura_logo.jpg' },
    { name: 'Enovia', img: '../images/design_skills/enovia_logo.jpg' },
    { name: 'Inventor', img: '../images/design_skills/inventor_logo.jpg' },
    { name: 'MsOffice', img: '../images/design_skills/msoffice_logo.jpg' },
    { name: 'QGis', img: '../images/design_skills/qgis_logo.jpg' },
    { name: 'Solidworks', img: '../images/design_skills/solidworks_logo.jpg' },
  ],
  hobbies: [
    { name: 'Books', img: '../images/hobbies/books.png' },
    { name: 'Festivals', img: '../images/hobbies/festivals.png' },
    { name: 'Movies', img: '../images/hobbies/movies.png' },
    { name: 'Music', img: '../images/hobbies/music.png' },
    { name: 'Photography', img: '../images/hobbies/photography.png' },
    { name: 'Sports', img: '../images/hobbies/sports.png' },
    { name: 'Theatre', img: '../images/hobbies/theatre.png' },
    { name: 'Travels', img: '../images/hobbies/travels.png' },
  ],
  certificates: [
    'JavaScript Certification',
    'Python 3 Certificate',
    'SQL Certificate'

  ],
};

function showSkills(type, hoveredElement) {
   if (hoveredElement.classList.contains('active')) return;
   resetSkills();
 
   hoveredElement.classList.add('active');
   hoveredElement.style.transform = 'translateX(-50px)';
   hoveredElement.style.transition = 'transform 0.3s ease';
 
   document.querySelectorAll('.background-container2 div').forEach((box) => {
     if (!box.classList.contains(`js-${type}`)) {
       box.style.opacity = '0';
       box.style.transition = 'opacity 0.3s ease';
     }
   });
 
   skillsList.innerHTML = '';
   skillsList.style.display = 'grid';
   skillsList.style.gridTemplateColumns = 'repeat(3, 1fr)';
   skillsList.style.gap = '8px';
 
   const rect = hoveredElement.getBoundingClientRect();
   const containerRect = container.getBoundingClientRect();
 
   skillsList.style.top = `${rect.top - containerRect.top}px`; 
   skillsList.style.left = `${rect.right + 20}px`;
 
   if (type === 'certificates') {
     skillsData.certificates.forEach((cert) => {
       const skillItem = document.createElement('div');
       skillItem.textContent = cert;
       skillItem.style.marginBottom = '10px';
       skillItem.style.textAlign = 'center';
       skillsList.appendChild(skillItem);
     });
   } else {
     skillsData[type].forEach((skill) => {
       const skillItem = document.createElement('div');
       skillItem.style.display = 'flex';
       skillItem.style.flexDirection = 'column';
       skillItem.style.alignItems = 'center';
 
       skillItem.innerHTML = `<img src="${skill.img}" alt="${skill.name}" style="width: 40px; height: 40px; margin-bottom: 5px; border-radius: 50%; border: 1px solid #ccc;"> <span>${skill.name}</span>`;
       skillsList.appendChild(skillItem);
     });
   }
 }

function resetSkills() {
  document.querySelectorAll('.background-container2 div').forEach((box) => {
    box.style.transform = 'translateX(0)';
    box.style.opacity = '1';
    box.classList.remove('active');
    box.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
  });

  skillsList.style.display = 'none';
}

devBtn.addEventListener('mouseenter', () => showSkills('dev', devBtn));
cadBtn.addEventListener('mouseenter', () => showSkills('cad', cadBtn));
hobbiesBtn.addEventListener('mouseenter', () => showSkills('hobbies', hobbiesBtn));
certificatesBtn.addEventListener('mouseenter', () => showSkills('certificates', certificatesBtn));

container.addEventListener('mouseleave', resetSkills);
