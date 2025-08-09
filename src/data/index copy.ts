
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
    title: 'Epic Anime AMV - Naruto vs Sasuke',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'An intense AMV showcasing the eternal rivalry between Naruto and Sasuke',
    views: '2.5M',
    category: 'AMV'
  },
  {
    id: '2',
    title: 'Attack on Titan - Final Season Edit',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Emotional tribute to the final season of Attack on Titan',
    views: '1.8M',
    category: 'Edit'
  },
  {
    id: '3',
    title: 'Best Anime Fights Compilation 2024',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Top 10 most epic anime fight scenes compiled with perfect timing',
    views: '3.2M',
    category: 'Compilation'
  },
  {
    id: '4',
    title: 'How to Edit Like a Pro - Tutorial',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Complete guide to creating professional anime edits',
    views: '890K',
    category: 'Tutorial'
  },
  {
    id: '5',
    title: 'Demon Slayer - Tanjiro\'s Journey',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Following Tanjiro\'s emotional journey throughout the series',
    views: '1.5M',
    category: 'AMV'
  },
  {
    id: '6',
    title: 'One Piece - Luffy\'s Gear 5 Edit',
    youtubeId: 'dQw4w9WgXcQ', // Replace with actual YouTube video ID
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg',
    description: 'Epic edit featuring Luffy\'s Gear 5 transformation',
    views: '4.1M',
    category: 'Edit'
  }
];

// Services offered
export const services: Service[] = [
  {
    id: '1',
    title: 'Custom AMV Creation',
    description: 'Professional anime music videos tailored to your favorite series and songs',
    price: 'Starting at $50',
    features: [
      'High-quality 1080p/4K output',
      'Custom music synchronization',
      'Professional color grading',
      '2-3 revisions included',
      'Fast 3-5 day delivery'
    ],
    icon: 'Video',
    googleFormLink: 'https://forms.google.com/your-amv-form' // Replace with your Google Form link
  },
  {
    id: '2',
    title: 'Anime Edit Packages',
    description: 'Short-form anime edits perfect for social media and showcasing',
    price: 'Starting at $25',
    features: [
      'Instagram/TikTok optimized',
      'Trending audio integration',
      'Eye-catching transitions',
      'Multiple format exports',
      '24-48 hour delivery'
    ],
    icon: 'Scissors',
    googleFormLink: 'https://forms.google.com/your-edit-form' // Replace with your Google Form link
  },
  {
    id: '3',
    title: 'Video Compilation',
    description: 'Curated compilations of the best anime moments and scenes',
    price: 'Starting at $75',
    features: [
      'Multiple anime series',
      'Thematic organization',
      'Smooth transitions',
      '10-20 minute duration',
      'Custom thumbnail design'
    ],
    icon: 'Film',
    googleFormLink: 'https://forms.google.com/your-compilation-form' // Replace with your Google Form link
  },
  {
    id: '4',
    title: 'Tutorial & Coaching',
    description: 'Learn professional anime editing techniques with personalized guidance',
    price: 'Starting at $40/hour',
    features: [
      'One-on-one sessions',
      'Software tutorials',
      'Technique breakdowns',
      'Project feedback',
      'Resource sharing'
    ],
    icon: 'GraduationCap',
    googleFormLink: 'https://forms.google.com/your-tutorial-form' // Replace with your Google Form link
  }
];

// Social media links
export const socialLinks: SocialLink[] = [
  {
    platform: 'YouTube',
    url: 'https://youtube.com/@yourusername', // Replace with your YouTube channel
    icon: 'Youtube'
  },
  {
    platform: 'Email',
    url: 'mailto:your.email@example.com', // Replace with your email
    icon: 'Mail'
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/yourusername', // Replace with your Instagram
    icon: 'Instagram'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername', // Replace with your Twitter
    icon: 'Twitter'
  }
];

// Creator statistics
export const creatorStats: CreatorStats = {
  subscribers: 250000, // Replace with your actual subscriber count
  totalViews: 15000000, // Replace with your total view count
  videosCount: 150, // Replace with your video count
  yearsActive: 3 // Replace with years you've been creating content
};

// Personal information
export const personalInfo = {
  name: 'Anime Editor Pro', // Replace with your name/brand
  tagline: 'Creating Epic Anime Experiences',
  bio: 'Passionate anime editor with over 3 years of experience creating stunning AMVs and edits. Specializing in emotional storytelling through visual artistry and perfect music synchronization.',
  location: 'Digital Creator',
  channelName: '@AnimeEditorPro' // Replace with your channel handle
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
