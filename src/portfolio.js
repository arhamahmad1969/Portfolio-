/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arham Ahmad",
  title: "Hi all, I'm ARHAM",
  subTitle: emoji(
    "Creative and passionate UI/UX design student with hands-on experience in user-centered design and prototyping tools such as Figma and Sketch. Skilled in wireframing, user research, and creating intuitive, visually appealing interfaces. Eager to apply my design thinking and problem-solving skills in a real-world environment as a UI/UX intern, and contribute to creating seamless user experiences. Looking forward to learning and growing within a dynamic design team"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/arhamahmad1969",
  linkedin: "http://linkedin.com/in/arham-ahmad-143336299",
  gmail: "arhamahmad.02002@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I design intuitive and visually appealing user experiences, enhancing usability and engagement through creative UI/UX solutions.",
  skills: [
    emoji("⚡ Create wireframes, prototypes, and user interfaces using Figma and Sketch"),
    emoji("⚡ Design user-centered experiences for web and mobile applications"),
    emoji("⚡ Develop comprehensive brand identity systems and style guides"),
    emoji("⚡ Optimize user flows and enhance usability through iterative design improvements"),
    emoji("⚡ Work on UI/UX projects like e-commerce, POS systems, and food delivery apps")
  ],

  
  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "Figma",
    fontAwesomeClassname: "fab fa-figma"
  },
  {
    skillName: "Sketch",
    fontAwesomeClassname: "fas fa-pencil-alt" // No specific icon for Sketch, using pencil-alt
  },
  {
    skillName: "Wireframing",
    fontAwesomeClassname: "fas fa-draw-polygon"
  },
  {
    skillName: "Prototyping",
    fontAwesomeClassname: "fas fa-project-diagram"
  },
  {
    skillName: "UI Design",
    fontAwesomeClassname: "fas fa-laptop-code"
  },
  {
    skillName: "User Research",
    fontAwesomeClassname: "fas fa-user"
  },
  {
    skillName: "Responsive Design",
    fontAwesomeClassname: "fas fa-mobile-alt"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  }
],

  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Management & Technology",
      logo: require("./assets/images/umt.png"),
      subHeader: "Bachelor of Computer Science",
      duration: "September 2021 - June 2025",
      desc: "I am studying Computer Science at the University of Management and Technology (UMT), focusing on programming, software development, and UI/UX design.",
      descBullets: [
        "Comprehensive study of programming languages, algorithms, and software development.",
        "Hands-on experience with real-world projects and emerging technologies.",
        "Focus on problem-solving, system design, and computing principles.",
        "Prepares for careers in software engineering, UI/UX design, web development, and more.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "UI/UX Design",
      progressPercentage: "90%" // Reflecting strong proficiency in design tools and principles
    },
    {
      Stack: "Wireframing & Prototyping",
      progressPercentage: "85%" // Skilled in Figma, Sketch, and similar tools
    },
    {
      Stack: "User Research & Testing",
      progressPercentage: "75%" // Reflecting your expertise in creating user-centered designs
    },
    {
      Stack: "Brand Identity Design",
      progressPercentage: "70%" // Highlighting your work on branding and style guides
    }
  ],  
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Designer",
      company: "StoryVerse",
      companylogo: require("./assets/images/storyverse.jpg"),
      date: "June 2024",
      desc: "This prototype is a simple, user-friendly book-reading website with customizable features, easy navigation, and a seamless reading experience.",
         
    },
    {
      role: "Designer",
      company: "ClickHub",
      companylogo: require("./assets/images/clickhub.jpg"),
      date: "Augest 2024",
      desc: "This prototype is a clean, user-friendly web platform designed for seamless navigation and effortless interaction. It features an intuitive interface with streamlined access to key functionalities, providing users with an efficient and smooth browsing experience. The design focuses on simplicity and ease of use, ensuring a hassle-free web experience."
    },
    {
      role: "Designer",
      company: "QuickBite ",
      companylogo: require("./assets/images/quickbite.jpg"),
      date: "Sept 2024",
      desc: "A user-friendly food ordering app that simplifies meal selection and enhances the ordering experience with intuitive navigation and fast delivery options."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/posify.jpg"),
      projectName: "Posify AI",
      projectDesc: "A smart POS system with an intuitive interface designed to streamline transactions and improve operational efficiency.",
      footerLink: [
        {
          name: "Prototype",
          url: "https://www.figma.com/proto/Je1qPlMgE4SfZ8ousjbtvh/FYP-POSifyAI.?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&t=eLc98xxd25g7t3JM-1"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/quickbite.jpg"),
      projectName: "QuickBite",
      projectDesc: "A user-friendly food ordering app that simplifies meal selection and enhances the ordering experience with intuitive navigation and fast delivery options.",
      footerLink: [
        {
          name: "Prototype",
          url: "https://www.figma.com/proto/kypkg0NaQCOTj8MKD5uOrn/Food-App-Wireframe?page-id=147%3A356&node-id=212-339&node-type=canvas&viewport=441%2C387%2C0.33&t=RQgLfJ5la7dTMWNz-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=147%3A357"
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
      title: "UIUX Design",
      subtitle:
        "",
      image: require("./assets/images/UIUXcc.jpg"),
      imageAlt: "Google UIUX Design",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
    {
      title: "Prototype Desing",
      image: require("./assets/images/prototypecc.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1jSSyai_JFyKRtgk0HYqSHnu9gjM5JjV8/view"
        }
      ]
    },

    {
      title: "Scrum Master",
      image: require("./assets/images/agile.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1aGLfndw63MYpdNL3_UBP9-i3rfJpxCWt/view"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
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
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "arhamahmad.02002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
