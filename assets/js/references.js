/*Reference Details Table*/
// Changes made 10/1/2021:
// Added reviewphoto1 - reviewphoto5 in assets/references-page
// Changed names and descriptions of references
const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1 : "Dr.Bot",
        designation1 : "Chief Executive Officer, Mystic Warrior",
        image1 : "https://avatars.githubusercontent.com/u/84830141?v=4",
        message1 : "Dr.Bot is a conscientious individual whom I met during the starting phase of Mystic Warrior. His maturity and skill-sets towards discord.js module are remarkable. His  nature and knowledge abilities make him stand out of the crowd.",
        

        sl2:2,
        name2 : "Saplex",
        designation2 : "Founder,SaplexG 2.0", 
        image2: "https://avatars.githubusercontent.com/u/89736361?v=4",
        message2 : "Saplex could be called as one of my Co-Developers for my bot. We both help each other and learn together. Saplex still remains as an inspriration for why this bot is up and running till now. His Discord Skill sets is the big advantage for him.",
        
        
    },

    {
        sl1:3,
        name1 : "Nikolipo",
        designation1 : "Founder, Joe Biden Discord Bot",
        image1 : "https://media-exp1.licdn.com/dms/image/C5603AQGEV-kzawPxjw/profile-displayphoto-shrink_800_800/0/1588602102622?e=1651708800&v=beta&t=8nxhFoR-WB4OKVltyYaVjmRpig_kQcvFsoa-eLjJPBQ",
        message1 : "nikolipo is a kind of kid who cries for everything every for imaginary things like 'discord.py' is better than 'discord.js'. It may seem funny but his sole criticism has helped me make Mystic Warrior better. P.s It is still better than Joe Biden. ",
        

        sl2:4,
        name2 : "Lengo",
        designation2 : "Founder, Lengo Labs and Q Bot",
        image2 : "https://avatars.githubusercontent.com/u/28582329?v=4",
        message2 : "Lengo was one of the reason I started to code Roblox and Discord Bots.You could approach his server if you have any kind of doubts and you could get it clarified. He also inspired me to code stuff which I do now. If I am standing here it is all due to Lengo's Bot which inspired me to code a bot which now I do for a living.",
  },
];

AOS.init();
const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      absbox_for_linkedin1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
      absbox_for_linkedin2,
    }) =>
      (output += `<tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image1}" class="rImg"></td>
                <td class = "referenceTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image1}" class="imgRes">
                        </span>
                    </div>
                    <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                    <a href="#0" class="paperTitle"> ${name1} </a> 
                    <div> ${designation1} </div> <div class="rConferences">  
                        <div class="referenceY">${message1}</div>
                    </div>  
                </td>
            </tr> 
            
            <tr data-aos="zoom-in-left"> 
                       
                        <td class = "referenceTitleName">
                            <div>
                                <span class="imgResponsive">
                                    <img src="${image2}" class="imgRes">
                                </span>
                            </div>
                            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
                            <a href="#0" class="paperTitle">${name2} </a> 
                            <div> ${designation2} </div> <div class="rConferences">
                                <div class="referenceY">${message2}</div>
                            </div>
                
                            
                            
                           
                        </td>
                        <td class="imgCol"><img src="${image2}" class="rImg1"></td>
                    </tr>`)
  );
  referenceTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
