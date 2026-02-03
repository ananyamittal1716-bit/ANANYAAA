// src/config/config.ts

export const getAsset = (path: string) => {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/${path}`;
};

const siteConfig = {
  personal: {
    name: 'ANANYA MITTAL',
    title: 'Branding & Decor Associate | INTERN',
    image: getAsset('IMAGE.PNG'), // Customize or replace with your profile image
    description:
      'I have experience in branding and décor through college clubs and am currently working as an intern at Atelier Enterprises. Alongside this, I am pursuing a BSc in Economics with Data Science.\n' +
      '\n' +
      'Intern at Atelier Enterprises and BSc Economics with Data Science student, interested in building strong brand identities through creative décor and visual design.\n' +
      '\n' +
      'Undergraduate student pursuing a BSc in Economics with Data Science, complemented by hands-on experience in branding and décor gained through college clubs and my role as an intern at Atelier Enterprises.\n' +
      '\n' +
      'As an intern at Atelier Enterprises, I conduct online workshops focused on branding and décor, sharing practical insights in visual styling and brand aesthetics.',
    tagline: 'Visuals that speak before words do.',
    location: 'BANGALORE, INDIA',
  },

  seo: {
    title: 'Ananya – Mittal',
    description: "Portfolio website showcasing your education, research, projects, and experience.",
  },

  animatedText: ['Branding & Decor Associate', 'Where Brands Meet Spaces', 'Creative Visual Storytelling', 'Ideas into Experiences'],

  navigation: [
    { name: 'Home', url: '/home' },
    { name: 'Projects', url: '/projects' },
    { name: 'Research', url: '/research' },
    { name: 'Education', url: '/education' },
    { name: 'Experience', url: '/experience' },
    { name: 'Blogs', url: '/blogs' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
  ],

  // Static blog entries. Use getAsset so the URL respects NEXT_PUBLIC_BASE_PATH / next.config.basePath
  // Add more entries here as you add more static HTML blog files under public/static_page/
  blogs: [
    {
      title: 'Designing Experiences Through Branding & Decor',
      url: getAsset('static_page/branding_and_decor_blog.html'), // Replace with your static HTML page
    },
  ],


  education: [
    {
      institution: 'CHRIST UNIVERSITY BANNERGHATTA ROAD CAMPUS ',
      degree: 'Bachelors in Economics with Data Science',
      year: '2025–2028',
      image: getAsset('images/education/placeholder.png'),
      description: ['description: [
  'Focused on economic analysis using data science tools and quantitative methods.'
]
'],
    },
  
  ],

// ✅ Unified MOOC + Certifications Section
  certifications: [
    {
      title: 'Your Certificate or Specialization',
      specialization: true,
      file: getAsset('images/education/Certifications/download.svg'),
      certificates: [
        { name: 'Course 1', file: getAsset('images/education/Certifications/download.svg') },
        { name: 'Course 2', file: getAsset('images/education/Certifications/download.svg') },
      ],
    },
    {
      title: 'Another Certificate',
      file: getAsset('images/education/Certifications/download.svg'),
    },
  ],



  // ✅ Experience section updated
  experience: [
    {
      title: 'Your Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Your Organization',
      time: '(MMM YYYY – Present)',
      desp: ['Brief responsibility 1', 'Brief responsibility 2'],
    },
    {
      title: 'Previous Role',
      cardImage: getAsset('images/experience/placeholder.png'),
      place: 'Previous Organization',
      time: '(MMM YYYY – MMM YYYY)',
      desp: ['Key contribution 1', 'Key contribution 2'],
    },
  ],


  // ✅ Projects section updated
  projects: [
    {
      title: 'Project Title 1',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Short description of your project and what it does...',
      Githublink: 'https://github.com/your-username/your-project',
    },
    {
      title: 'Project Title 2',
      cardImage: getAsset('images/project/placeholder.png'),
      description: 'Another project summary...',
      Githublink: 'https://github.com/your-username/another-project',
    },
  ],


  research: [
    {
      title: 'Your Paper or Research Title',
      authors: 'Your Name, Collaborator Name',
      conferences: 'Conference or Journal, Publisher',
      researchYr: 2024,
  image: getAsset('images/research/placeholder.png'),
      citation: {
        vancouver:
          'Author A, Author B. Title of the work. Venue, Year. DOI/URL.',
      },
      abstract:
        'One or two sentences summarizing the contribution...',
      link: 'https://example.com/your-publication',
    },
  ],

  books: [
    {
      title: 'Your Book Title',
      description: 'Short description of your book or resource.',
      image: getAsset('images/book_cover_placeholder.png'),
      link: 'https://example.com/your-book',
    },
  ],

  contact: {
    email: 'ananyamittal1243@gmail.com',
    linkedin: 'https://www.linkedin.com/in/your-linkedin/',
    github: 'https://github.com/your-username',
    googleScholar: 'https://scholar.google.com/citations?user=YOURID',
    orcid: 'https://orcid.org/0000-0000-0000-0000',
  },
};

export default siteConfig;
