import hackerrank from './image/icon/hackerrank.svg';
import leetcode from './image/icon/leetcode.svg';
import linkedin from './image/icon/linkedin.svg';

const data = {
  info: {
    id: 1,
    name: 'Sourabh Kumar Singh',
    role: 'Student',
    description: 'I am extremely driven,with	a clear goal to succeed.',
    email: 'sourabh.singhdbg1513@gmail.com',
    phone_no: 7004519791,
    location: 'Darbhanga,India',
    dob: '11-12-2001',
  },

  education: [
    {
      id: 1,
      educationName: 'Graduation',
      institutionName: 'NSHM Knowledge Campus Durgapur',
      startingYear: '08/2019 ',
      endingYear: ' 07/2023',
      specialization: 'BTECH CSE',
      score: 'Score: 9.26/10',
    },
    {
      id: 2,
      educationName: 'Class XII',
      institutionName: 'Jesus & Mary Academy , Darbhanga',
      startingYear: '04/2017 ',
      endingYear: ' 04/2018',
      board: 'CBSE',
      percentage: 'Percentage: 67.6%',
    },
    {
      id: 3,
      educationName: 'Class X',
      institutionName: 'Jesus & Mary Academy , Darbhanga',
      startingYear: '04/2015 ',
      endingYear: ' 04/2016',
      board: 'CBSE',
      percentage: 'Percentage: 87.5%',
    },
  ],
  language: [
    {
      language: 'English',
      level: 'Intermediate',
    },
    {
      language: 'Hindi',
      level: 'Expert',
    },
    {
      language: 'Maithli',
      level: 'Expert',
    },
  ],
  skills: [
    {
      id: 1,
      skill: 'JAVA',
      level: 3,
    },
    {
      id: 2,
      skill: 'JavaScript',
      level: 3,
    },
    {
      id: 3,
      skill: 'SQL',
      level: 2,
    },
    {
      id: 4,
      skill: 'HTML/CSS',
      level: 3,
    },
  ],
  experience:[
    {
      id:1,
      companyName:"Company name",
      role:"Front End Developer",
      startingYear: '04/2015 ',
      endingYear: ' 04/2016',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
    },
    {
      id:1,
      companyName:"Company name",
      role:"Freelance,Web Designer",
      startingYear: '04/2015 ',
      endingYear: ' 04/2016',
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a elit facilisis, adipiscing leo in, dignissim magna.",
    },
  ],

  projects: {
    id: 1,
    title: 'PROJECTS',
    subTitle: 'COVIDTracker Website (01/2022 - 02/2022)',
    point: [
      'The COVIDTracking Website Collects and publish the mostcomplete data available',
      'Fetching Country wise covid19 details and it is updated in every hour.',
      'Added Search feature for searching Country.',
    ],
  },
  internship: {
    id: 1,
    title: 'INTERNSHIP',
    subTitle: 'ExposysData Lab (01/2022 - 02/2022)',
    point: [
      'I feel that it was an enriching experienceto be part of ExposysData Lab.',
    ],
  },
  certificate: {
    id: 1,
    title: 'CERTIFICATE',
    point: [
      'Web Design For Everybody-Basicof Web Development & Coding Specialization',
      'Problem Solving Through Programming in C- NPTEL(Jan-Apr 2022)',
      'Soft Skill Development - NPTEL(Jan-Mar 2020)',
    ],
  },
  link:[
      {
        id:1,
        name:'Linkedin',
        profileName:'@sourabh754',
        url:'www.linkedin.com/in/sourabhsingh754',
        img:linkedin,
      },
      {
        id:2,
        name:'Hackerrank',
        profileName:'@sourabh754',
        url:'https://www.hackerrank.com/sourabh_singhdb1',
        img:hackerrank,
      },
      {
        id:2,
        name:'Leetcode',
        profileName:'@sourabh754',
        url:'https://leetcode.com/Sourabh_Singh_754/',
        img:leetcode,
      },
    ]
};

export default data;
