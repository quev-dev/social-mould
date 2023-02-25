export default function generateBio(word) {
  // Create an object containing arrays of related job titles and skills
  const related = {
    'Technology': {
      jobTitles: ['developer', 'programmer', 'engineer', 'architect', 'analyst'],
      skills: ['web development', 'software engineering', 'data analysis', 'cloud computing', 'cybersecurity']
    },
    'Fashion': {
      jobTitles: ['designer', 'stylist', 'buyer', 'merchandiser', 'model'],
      skills: ['textile design', 'branding', 'trend forecasting', 'retail management', 'fashion journalism']
    },
    'Fitness': {
      jobTitles: ['trainer', 'coach', 'nutritionist', 'therapist', 'instructor'],
      skills: ['exercise physiology', 'sports psychology', 'nutrition', 'rehabilitation', 'motivation']
    },
    'Art': {
      jobTitles: ['artist', 'curator', 'critic', 'gallerist', 'collector'],
      skills: ['painting', 'sculpting', 'photography', 'printmaking', 'curation']
    },
    'Cooking': {
      jobTitles: ['chef', 'sous chef', 'pastry chef', 'food stylist', 'recipe developer'],
      skills: ['culinary arts', 'nutrition', 'menu planning', 'food safety', 'baking']
    },
    'Dancing': {
      jobTitles: ['dancer', 'choreographer', 'dance teacher', 'dance therapist', 'dance historian'],
      skills: ['ballet', 'modern dance', 'tap dance', 'contemporary dance', 'dance therapy']
    },
    'Gaming': {
      jobTitles: ['game designer', 'game developer', 'game artist', 'game tester', 'game writer'],
      skills: ['game programming', 'game art and animation', 'game design', 'game writing', 'game quality assurance']
    },
    'Hiking': {
      jobTitles: ['hiking guide', 'outdoor educator', 'park ranger', 'trail builder', 'conservationist'],
      skills: ['outdoor survival', 'wilderness first aid', 'environmental education', 'trail maintenance', 'wildlife management']
    },
    'Music': {
      jobTitles: ['musician', 'composer', 'producer', 'music teacher', 'music therapist'],
      skills: ['instrumental performance', 'songwriting', 'music production', 'music theory', 'music therapy']
    },
    'Photography': {
      jobTitles: ['photographer', 'photojournalist', 'photo editor', 'photography teacher', 'photo archivist'],
      skills: ['digital photography', 'analog photography', 'studio lighting', 'photo editing', 'photo preservation']
    },
    'Reading': {
      jobTitles: ['librarian', 'bookseller', 'literary agent', 'editor', 'book critic'],
      skills: ['collection development', 'book promotion', 'manuscript evaluation', 'copyediting', 'literary criticism']
    },
    'Sports': {
      jobTitles: ['athlete', 'coach', 'sports journalist', 'sports psychologist', 'sports agent'],
      skills: ['sports performance', 'team management', 'sports reporting', 'mental training', 'athlete representation']
    },
    'Travel': {
      jobTitles: ['travel agent', 'tour guide', 'flight attendant', 'hotel manager', 'cruise ship director'],
      skills: ['destination knowledge', 'itinerary planning', 'customer service', 'foreign language proficiency', 'logistics management']
    },
    'Writing': {
      jobTitles: ['Author', 'Copywriter', 'Editor', 'Journalist', 'Content Strategist'],
      skills: ['Creative Writing', 'Editing', 'Journalism', 'Copywriting', 'Content Marketing']
    },
    'Webdev': {
      jobTitles: ['Web Developer', 'Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', 'UI/UX Designer'],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    'Yoga': {
      jobTitles: ['Yoga Instructor', 'Yoga Therapist', 'Studio Owner', 'Yoga Retreat Leader', 'Yoga Teacher Trainer'],
      skills: ['Asana Practice', 'Meditation', 'Breathwork', 'Yoga Philosophy', 'Anatomy and Physiology']
    }
  };

  // Choose a random job title and skill from the related object
  const jobTitle = related[word].jobTitles[Math.floor(Math.random() * related[word].jobTitles.length)];
  const skill = related[word].skills[Math.floor(Math.random() * related[word].skills.length)];

  // Create the bio using the word, job title, and skill
  const bio = `I'm a ${jobTitle} with a passion for ${word}. My expertise in ${skill} allows me to create innovative solutions that help people achieve their goals. When I'm not working, you can find me practicing what I preach and pushing my own limits. Follow me for tips and inspiration on all things ${word}!`;

  return bio;
}