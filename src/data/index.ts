
// Portfolio Data for Anime Edits Maker

export interface PortfolioVideo {
  id: string;
  title: string;
  youtubeId: string;
  thumbnail: string;
  description: string;
  views: string;
  category: 'AMV' | 'Edit' | 'Compilation' | 'Tutorial';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  features: string[];
  icon: string;
  googleFormLink: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface CreatorStats {
  subscribers: number;
  totalViews: number;
  videosCount: number;
  yearsActive: number;
}

// Portfolio Videos - Add your actual YouTube video IDs here
export const portfolioVideos: PortfolioVideo[] = [
  {
    id: '1',
    title: 'How To Make Skull Editz Like Me',
    youtubeId: 'RGS53UqY7Qk', // Replace with actual YouTube video ID
  thumbnail: '/Thumbnails/RGS53UqY7Qk-SD (1).jpg',
    description: 'A Deep Tutorial showcasing the art of Skull editz with perfect timing and transitions',
    views: '18k',
    category: 'Tutorial'
  },
  {
    id: '2',
    title: 'How To Make PFP Like Me',
    youtubeId: 'wFQImZ920uw', // Replace with actual YouTube video ID
  thumbnail: '/Thumbnails/wFQImZ920uw-HD.jpg',
    description: 'An in-depth guide on creating stunning profile pictures with unique styles',
    views: '1.9k',
    category: 'Tutorial'
  },
  {
    id: '3',
    title: 'Best Anime CC Pack Of 2025',
    youtubeId: 'uh9i5UF3JYU', // Replace with actual YouTube video ID
  thumbnail: '/Thumbnails/uh9i5UF3JYU-HD.jpg',
    description: 'Top 50 most epic anime CC compiled Compiled just for you',
    views: '1.3k',
    category: 'Compilation'
  },
  {
    id: '4',
    title: 'Here It Comes | Goku Ultra Instinct Edit',
    youtubeId: '0mmBm_xvRZw', // Replace with actual YouTube video ID
  thumbnail: '/Thumbnails/0mmBm_xvRZw-HD.jpg',
    description: 'AMV on the legendary scene Where Beerus and Goku Aura Farm',
    views: '150',
    category: 'AMV'
  },
  {
    id: '5',
    title: 'Sakuna - Panda Edit',
    youtubeId: 'hKFHmKtt9OE', // Replace with actual YouTube video ID
  thumbnail: '/Thumbnails/hKFHmKtt9OE-HD.jpg',
    description: 'Following Sakuna\'s Aura Farming journey throughout the series',
    views: '117',
    category: 'Edit'
  },

];

// Services offered
export const services: Service[] = [
  {
    id: '1',
    title: 'Custom AMV Creation',
    description: 'Professional anime music videos tailored to your favorite series and songs',
    price: 'Starting at $10',
    features: [
      'High-quality 2k/4K output',
      'Custom music synchronization',
      'Professional color grading',
      '1-2 revisions included',
      'Fast 2 day delivery'
    ],
    icon: 'Video',
    googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaxJZ3N-S0gwFjJFbP6S4ZaV4r3yjAdOcWdyZFgZia9V4bUA/viewform?usp=header_express' // Replace with your Google Form link
  },
  {
    id: '2',
    title: 'Skull Edits',
    description: 'Short-form anime edits perfect for social media and showcasing',
    price: 'Starting at $5',
    features: [
      'Instagram/TikTok optimized',
      'Trending audio integration',
      'Eye-catching transitions',
      'Multiple format exports',
      '7-10 hour delivery'
    ],
    icon: 'Scissors',
    googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaxJZ3N-S0gwFjJFbP6S4ZaV4r3yjAdOcWdyZFgZia9V4bUA/viewform?usp=header_express' // Replace with your Google Form link
  },
  {
    id: '3',
    title: 'PFP Creation',
    description: 'Custom profile pictures designed to stand out on any platform',
    price: 'Starting at $10',
    features: [
      '2 unique designs',
      'Thematic organization',
      'Smooth Texts',
      '10-20 minute duration',
      'High-resolution output'
    ],
    icon: 'Film',
    googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaxJZ3N-S0gwFjJFbP6S4ZaV4r3yjAdOcWdyZFgZia9V4bUA/viewform?usp=header_express' // Replace with your Google Form link
  },
  {
    id: '4',
    title: 'Tutorial & Coaching',
    description: 'Learn professional anime editing techniques with personalized guidance',
    price: 'Starting at $30/hour',
    features: [
      'One-on-one sessions',
      'Software tutorials',
      'Technique breakdowns',
      'Project feedback',
      'Resource sharing'
    ],
    icon: 'GraduationCap',
    googleFormLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdaxJZ3N-S0gwFjJFbP6S4ZaV4r3yjAdOcWdyZFgZia9V4bUA/viewform?usp=header_express' // Replace with your Google Form link
  }
];

// Social media links
export const socialLinks: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@ZenoEditz_444',
    icon: 'Youtube'
  },
  {
    platform: 'Email',
    url: 'zenoedits444@gmail.com',
    icon: 'Mail'
  },
   
];

// Creator statistics
export const creatorStats: CreatorStats = {
  subscribers: 25000, // Replace with your actual subscriber count
  totalViews: 8670000, // Replace with your total view count
  videosCount: 247, // Replace with your video count
  yearsActive: 3 // Replace with years you've been creating content
};

// Personal information
export const personalInfo = {
  name: 'ZenoEditz_444', // Replace with your name/brand
  tagline: 'Faith Don\'t Make Things Easy , It makes them Possible',
  bio: 'Passionate anime editor with over 3 years of experience creating stunning AMVs and edits. Specializing in emotional storytelling through visual artistry and perfect music synchronization.',
  location: 'Pakistan',
  channelName: 'ZenoEditz_444' // Replace with your channel handle
};

// Featured testimonials
export const testimonials = [
  {
    id: '1',
    name: 'Sakura M.',
    text: 'Absolutely incredible work! The AMV captured the exact emotion I wanted. Highly recommended!',
    rating: 5,
    project: 'Custom Naruto AMV'
  },
  {
    id: '2',
    name: 'David L.',
    text: 'Professional quality and fast delivery. The edit exceeded my expectations!',
    rating: 5,
    project: 'Attack on Titan Edit'
  },
  {
    id: '3',
    name: 'Maya K.',
    text: 'The tutorial session was incredibly helpful. Learned so much in just one hour!',
    rating: 5,
    project: 'Editing Tutorial'
  }
];
