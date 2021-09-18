/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Ravinder Mengal",
  title: "Hi all, I'm Ravinder ",
  subTitle: emoji(
    "A passionate Front End  Developer 🚀 having an experience of designing and building Web with JavaScript / Reactjs and some other cool libraries and frameworks."
  ),
  resumeLink:
    " ",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ravimengal",
  linkedin: "https://www.linkedin.com/in/ravindra-mengal-2b8180191",
  gmail: "mengal22ravi@gmail.com",
  // gitlab: "https://gitlab.com/",
  // facebook: "https://www.facebook.com/",
  // medium: "https://medium.com/@davidrakosi",
  // stackoverflow: "https://stackoverflow.com/users/13263979/drakosi",
  instagram: 'https://www.instagram.com/ravimengal25/',
  twitter: 'https://twitter.com/DevTechAvi',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH ",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    )
   
    
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "redux",
      fontAwesomeClassname: "fab fa-react"
    },
    // {
    //   skillName: "nodejs",
    //   fontAwesomeClassname: "fab fa-node"
    // },
    // {
    //   skillName: "swift",
    //   fontAwesomeClassname: "fab fa-swift"
    // },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    // {
    //   skillName: "sql-database",
    //   fontAwesomeClassname: "fas fa-database"
    // },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CBSE",
      logo: require("./assets/images/kvs.png"),
      subHeader: "Secondary School Certificate",
      duration: "May 2012 - May 2013",
      desc: "",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "CBSE",
      logo: require("./assets/images/kvs.png"),
      subHeader: "Higher Secondary School Certificate",
      duration: "March 2014 - March 2015",
      desc: "Completed my Higher Secondary School Certificate with specialization in Computer Science",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "PUNE UNIVERSITY",
      logo: require("./assets/images/puneuniversity.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "May 2015 - April 2018",
      desc: "BCS, full form Bachelor of Computer Science, is a 3 year undergraduate course with a specialization in the domain of computer science, software and hardware related aspects.",
      // descBullets: [
      //   ""
      // ]
    }
    // {
    //   schoolName: "Stanford University",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: "Bachelor of Science in Computer Science",
    //   duration: "September 2013 - April 2017",
    //   desc:
    //     "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
    //   descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "HTML", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "JAVASCRIPT",
      progressPercentage: "60%"
    },
    {
      Stack: "BOOTSTRAP",
      progressPercentage: "80%"
    },
    {
      Stack: "CSS",
      progressPercentage: "75%"
    },
   
    {
      Stack: "REACT",
      progressPercentage: "60%"
    }
   
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Front-End Developer Internship",
      company: "CaSSa Kitchen",
      companylogo: require("./assets/images/logo.png"),
      date: "March 2021 – Aug 2021",
      desc:"Start-up CaSSa Kitchens MODULAR FURNISHING DISTINCTIVE DESIGNS FOR DISTINCTIVE INTERIORS",
      descBullets: [
        "On-Field Work",
        "Custom building applications",
        "Coaching",
      ]
    }
    // {
    //   role: "Product Owner (PSD2)",
    //   company: "Erste Bank",
    //   companylogo: require("./assets/images/ersteLogo.jpg"),
    //   date: "July 2019 – September 2020",
    //   desc:
    //     "I lead software developers building the API for the bank in order to fulfil the PSD2 regulation requirements."
    // },
    // {
    //   role: "Junior Information Security & Systems Representative",
    //   company: "Vodafone",
    //   companylogo: require("./assets/images/vodafoneLogo.png"),
    //   date: "November 2018 – July 2019",
    //   desc:
    //     "I've conducted internal audit making sure the organization is compliant with the GDPR."
    // }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  // githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ravimengal", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND PERSONAL PROJECTS THAT I HAVE CREATED TO ENHANCE MY PROGRAMMING SKILLS ",
  projects: [
    {
      image: require("./assets/images/logo.png"),
      projectName: "CaSSa Kitchens MODULAR FURNISHING",
      projectDesc: "I have created demo site for cassa kitchen modular furnishing interior designer. Using some basic javascript , html , css created demo site for startup that help them to create business ready website",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://cassakitchen.netlify.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Password.png"),
      projectName: "Password Generator",
      projectDesc: "Strong Password Generator to create secure passwords that are impossible to crack ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://pickpassword.netlify.app"
        }
        
      ]
    },
    {
      image: require("./assets/images/net.png"),
      projectName: "Netflix Clone",
      projectDesc: "Netflix Clone using react using TMDB API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://netliyflix.netlify.app"
        }
        
      ]
    },
    {
      image: require("./assets/images/firebase1.png"),
      projectName: "Firebase authentication",
      projectDesc: "Using React and firebase created simple authentication page",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://reactauthentication.netlify.app"
        }
        
      ]
    },
    {
      image: require("./assets/images/to.png"),
      projectName: "To Do",
      projectDesc: "Using React and Firebase created todo app with authentication . User must login first to create todo list.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://makemyworkeasy.netlify.app"
        }
        
      ]
    },
    {
      image: require("./assets/images/weather1.png"),
      projectName: "Weather app",
      projectDesc: "Weather app using openweather API, Axios User can search weather by entering city , state, country name. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://weathernearme.netlify.app/"
        }
        
      ]
    },
    {
      image: require("./assets/images/calc1.png"),
      projectName: "Calculator",
      projectDesc: "Simple calculator for practice",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecmacalculator.netlify.app"
        }
        
      ]
    },
    {
      image: require("./assets/images/j.png"),
      projectName: "Joke fetching app",
      projectDesc: "Joke fetching app using free joke api,axios for practice .",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://jokelify.netlify.app"
        }
        
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url:
            ""
        },
        {
          name: "Award Letter",
          url:
            ""
        },
        {
          name: "Google Code-in Blog",
          url:
            ""
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            ""
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 898380912",
  email_address: "mengal22ravi@.com"
};

// Twitter Section

const twitterDetails = {
  userName: "DevTechAvi", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
