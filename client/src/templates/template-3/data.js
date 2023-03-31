const data = {
  info: {
    id: 1,
    name: "Sourabh Kumar Singh",
    role: "Student",
    description: "I am extremely driven,with	a clear goal to succeed.",
    email: "sourabh.singhdbg1513@gmail.com",
    phone_no: 7004519791,
    location: "Darbhanga,India",
    dob: "11-12-2001",
  },

  education: {
    id: 1,
    educationName: "Graduation",
    institutionName: "NSHM Knowledge Campus Durgapur",
    startingYear: "08/2019 ",
    endingYear: " 07/2023",
    specialization: "BTECH CSE",
    score: "9.26/10",
  },
  skills: [
    {
      id: 1,
      skill: 'JAVA',
      level:3,
    },
    {
      id:2,
      skill:'JavaScript',
      level:3,
    },
    {
      id:3,
      skill:'SQL',
      level:2,
    },
    {
      id:4,
      skill:'HTML/CSS',
      level:3,
    },

  ],
  projects:{
    id:1,
    title:'PROJECTS',
    subTitle:'COVIDTracker Website (01/2022 - 02/2022)',
    point:[
      'The COVIDTracking Website Collects and publish the mostcomplete data available',
      'Fetching Country wise covid19 details and it is updated in every hour.',
      'Added Search feature for searching Country.',
    ] 
  }
};

export default data;
