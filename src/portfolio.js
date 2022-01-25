const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'JS.',
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Moatezz Chabane',
  role: 'Full Stack Web Apps Developer',
  description:
    'Professional full time freelancer  with full set of skills in front-end and back-end development in both Web and Mobile industries. I have a strong background in web development and have worked with many different languages and frameworks. I am a self-motivated and hard-working individual with a strong desire to learn new technologies and improve my skills. I am a team player and I am always willing to learn new things and improve my skills. I am a hard-working individual with a strong desire to learn new technologies and improve my skills. I am a team player and I am always willing to learn new things and improve my skills.',
  resume: 'https://moatezz.com/resume.jpg',
  social: {
    linkedin: 'https://www.linkedin.com/in/moatezz',
    github: 'https://github.com/moatezz',
  },
};

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description: 'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description: 'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description: 'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'moatezzchabane@gmail.com',
};

export { header, about, projects, skills, contact };
