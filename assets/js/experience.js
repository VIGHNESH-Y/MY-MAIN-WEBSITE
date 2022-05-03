AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mystic Development",
    cardImage: "assets/images/experience-page/MYSTIC.png",
    place: "Managing Director",
    time: "(Dec,2021 - Till Date)",
    desp: "<li>Mystic Development was established in order to provide the best discord bots.</li> <li>Mystic Warrior was discovered. A multi-purpose Discord bot that performs a variety of functions.</li> <li>Mystic Warrior was released to the public, and already has over 80k users and counting.</li>",
  },
  {
    title: "Mystic Warrior",
    cardImage: "assets/images/experience-page/MYSTIC.png",
    place: "Founder",
    time:  "(Dec,2021 - Till Date)",
    desp: "<li>Worked with Mystic Development as a part of Mystic Warrior.</li><li>Worked on Mystic Warrior Discord Bot which can do a wide range of features and currently has 200+ Commands.</li><li>We also have Economy and Exp for message feature along with rankcards.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Official British Army [Roblox]",
    cardImage: "assets/images/experience-page/1.gif",
    description:
      "Responsible for handling the discord bot which promotes and makes the lives of HR easier.",
  },
  {
    title: "New Zealand Army[Roblox]",
    cardImage: "assets/images/experience-page/2.png",
    description:
      "Responsible for handling the discord bot which promotes and makes the lives of HR easier.Also helped them in Scripting the Roblox Game using LUA.",
  },
  {
    title: "Mystic Warrior",
    cardImage: "assets/images/experience-page/MYSTIC.png",
    description:
      "'A Multi-Functional Discord Bot for the People.' It now has over 80k users and is continuously expanding.",
  },

];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section


document.addEventListener("DOMContentLoaded", showCards3);
