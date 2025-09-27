// Mock data for the karate school website

export interface Instructor {
  id: string;
  name: string;
  rank: string;
  belt: string;
  image: string;
  specialties: string[];
  experience: number;
  bio: string;
}

export type ClassImage = {
  id: string;
  category: 'Karate' | 'MartialArts' | 'KickBoxing';
  image: string;
};

export interface ScheduleItem {
  id: string;
  className: string;
  instructor: string;
  time: string;
  day: string;
  level: string;
  duration: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const instructors: Instructor[] = [
  {
    id: '1',
    name: 'Dr. P. Ashok Chakravarthi',
    rank: 'Grand Master',
    belt: 'Black Belt 10th Dan',
    image: '/images/instructor-1.jpg',
    specialties: ['Traditional Karate', 'Self-Defense', 'Competition Training'],
    experience: 25,
    bio: 'Founder & Chairman of T.M.A.A, Official Examiner certified by WKF with over 25 years of martial arts excellence.',
  },
  {
    id: '2',
    name: 'Dr. Suman',
    rank: 'Hero Hanshi',
    belt: 'Black Belt 8th Dan',
    image: '/images/instructor-2.jpg',
    specialties: ['Youth Training', 'Character Development', 'Kata'],
    experience: 18,
    bio: 'Dedicated to developing young martial artists with focus on discipline, respect, and technical excellence.',
  },
  {
    id: '3',
    name: 'Master Shihan',
    rank: 'Senior Master',
    belt: 'Black Belt 6th Dan',
    image: '/images/instructor-3.jpg',
    specialties: ['Kumite', 'Advanced Techniques', 'Fitness Training'],
    experience: 15,
    bio: 'Specializes in competitive karate training and advanced combat techniques for serious practitioners.',
  },
];

export const classes: ClassImage[] = [
  { id: 'k1', category: 'Karate', image: '/images/gimage1.jpg' },
  { id: 'k2', category: 'Karate', image: '/images/gimage2.jpg' },
  { id: 'k3', category: 'Karate', image: '/images/gimage3.JPG' },
  { id: 'k4', category: 'Karate', image: '/images/gimage4.jpg' },
  { id: 'k5', category: 'Karate', image: '/images/gimage5.jpg' },
  { id: 'k6', category: 'Karate', image: '/images/gimage6.jpg' },
  { id: 'k7', category: 'Karate', image: '/images/gimage7.jpg' },
  { id: 'k8', category: 'Karate', image: '/images/gimage16.jpg' },
  { id: 'k9', category: 'Karate', image: '/images/gimage10.jpg' },
  { id: 'k10', category: 'Karate', image: '/images/gimage17.jpg' },
   { id: 'k11', category: 'Karate', image: '/images/gimage19.jpg' },
  { id: 'k12', category: 'Karate', image: '/images/gimage20.jpg' },
  { id: 'k13', category: 'Karate', image: '/images/gimage23.jpg' },


  { id: 'm1', category: 'MartialArts', image: '/images/gimage25.jpg' },
  { id: 'm2', category: 'MartialArts', image: '/images/gimage26.jpg' },
  { id: 'm3', category: 'MartialArts', image: '/images/gimage27.jpg' },
  { id: 'm4', category: 'MartialArts', image: '/images/gimage28.jpg' },
  { id: 'm5', category: 'MartialArts', image: '/images/gimage30.jpg' },
  { id: 'm6', category: 'MartialArts', image: '/images/gimage32.jpg' },
  { id: 'm7', category: 'MartialArts', image: '/images/karate11.jpg' },
  { id: 'm8', category: 'MartialArts', image: '/images/karate12.jpg' },
  { id: 'm9', category: 'MartialArts', image: '/images/karate21.jpg' },
  { id: 'm10', category: 'MartialArts', image: '/images/karate16.jpg' },
  { id: 'm11', category: 'MartialArts', image: '/images/karate30.jpg' },


  { id: 'b1', category: 'KickBoxing', image: '/images/gimage24.jpg' },
  { id: 'b2', category: 'KickBoxing', image: '/images/gimage21.jpg' },
  { id: 'b3', category: 'KickBoxing', image: '/images/gimage18.jpg' },
  { id: 'b4', category: 'KickBoxing', image: '/images/gimage22.jpg' },
];

export const schedule: ScheduleItem[] = [
  { id: '1', className: 'Little Dragons', instructor: 'Master Shihan', time: '4:00 PM - 4:45 PM', day: 'Monday', level: 'Beginner', duration: '45 min' },
  { id: '2', className: 'Teen Warriors', instructor: 'Dr. Suman', time: '6:15 PM - 7:30 PM', day: 'Monday', level: 'Intermediate', duration: '75 min' },
  { id: '3', className: 'Youth Karate', instructor: 'Master Shihan', time: '5:00 PM - 6:00 PM', day: 'Tuesday', level: 'All Levels', duration: '60 min' },
  { id: '4', className: 'Adult Traditional', instructor: 'Dr. P. Ashok Chakravarthi', time: '7:45 PM - 9:15 PM', day: 'Tuesday', level: 'All Levels', duration: '90 min' },
  { id: '5', className: 'Little Dragons', instructor: 'Dr. Suman', time: '4:00 PM - 4:45 PM', day: 'Wednesday', level: 'Beginner', duration: '45 min' },
  { id: '6', className: 'Teen Warriors', instructor: 'Dr. P. Ashok Chakravarthi', time: '6:15 PM - 7:30 PM', day: 'Wednesday', level: 'Advanced', duration: '75 min' },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh',
    role: 'Parent',
    content:
      'My son has been training here for 3 years and the transformation is incredible. His confidence, discipline, and respect have improved dramatically.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '2',
    name: 'Priya',
    role: 'Adult Student',
    content:
      "The instructors are world-class and the training is authentic. I've learned not just karate, but life lessons that I apply every day.",
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '3',
    name: 'Arjun krishna',
    role: 'Competitive Fighter',
    content:
      'This academy prepared me for national competitions. The technical expertise and mental conditioning here is unmatched.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '4',
    name: 'Sneha Reddy',
    role: 'College Student',
    content:
      'Joining karate boosted my focus and fitness levels. The friendly yet disciplined environment keeps me motivated every session.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '5',
    name: 'Vikram Singh',
    role: 'Working Professional',
    content:
      'After long office hours, training here is my stress-buster. I feel stronger, sharper, and healthier than ever before.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '6',
    name: 'Anjali',
    role: 'Parent',
    content:
      'My daughter has become more disciplined and confident through karate. She now leads her school team with pride and courage.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '7',
    name: 'Rohit',
    role: 'Teen Student',
    content:
      'Training here has given me both strength and confidence. I enjoy every session and look forward to learning new techniques.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '8',
    name: 'pooja',
    role: 'Self Defense Learner',
    content:
      'The women’s self-defense classes are empowering. I feel safer and more prepared to handle real-life situations.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '9',
    name: 'Ramu',
    role: 'Martial Arts Enthusiast',
    content:
      'This dojo combines discipline with fun. The training keeps me fit, while the mentors push me to grow every day.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '10',
    name: 'sapna',
    role: 'School Teacher',
    content:
      'The values of respect, focus, and discipline I learned here also help me in my professional life as a teacher.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '11',
    name: 'Siddharth',
    role: 'College Athlete',
    content:
      'Karate training here improved my stamina and reflexes, which even helps me in other sports like football and athletics.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '12',
    name: 'Aishwarya',
    role: 'Doctor',
    content:
      'With my busy schedule, karate is my way to stay active and relieve stress. It keeps my mind and body in balance.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '13',
    name: 'Chauhan',
    role: 'Young Champion',
    content:
      'Winning my first medal was a proud moment. The coaches supported and believed in me from day one.',
    rating: 5,
    image: '/images/men.png',
  },
  {
    id: '14',
    name: 'Suresh',
    role: 'College Student',
    content:
      'Karate has made me mentally stronger and more confident in facing challenges both in and outside the dojo.',
    rating: 5,
    image: '/images/women.png',
  },
  {
    id: '15',
    name: 'Manish',
    role: 'Engineer',
    content:
      'I joined to improve fitness, but I gained so much more—discipline, focus, and a community that feels like family.',
    rating: 5,
    image: '/images/men.png',
  },
];


export const BRAND = {
  name: '[Your Dojo Name]',
  city: '[Your City]',
  phone: '[Your Phone]',
  whatsapp: '[Your WhatsApp Number]',
  email: '[Your Email]',
  address: '[Full Address]',
  hours: {
    weekdays: '6:00 AM - 10:00 PM',
    saturday: '7:00 AM - 8:00 PM',
    sunday: '8:00 AM - 6:00 PM',
  },
}

export const beltRanks = [
  { name: 'White Belt', color: '#FFFFFF', level: 1 },
  { name: 'Yellow Belt', color: '#FFD700', level: 2 },
  { name: 'Orange Belt', color: '#FFA500', level: 3 },
  { name: 'Green Belt', color: '#008000', level: 4 },
  { name: 'Blue Belt', color: '#0000FF', level: 5 },
  { name: 'Maroon Belt', color: '#800000', level: 6 },
  { name: 'Brown Belt-1', color: '#8B4513', level: 7 },
  { name: 'Brown Belt-2', color: '#8B4513', level: 8 },
  { name: 'Brown Belt-3', color: '#8B4513', level: 9 },
  { name: 'Black Belt-1', color: '#353935', level: 10 },
  { name: 'Black Belt-2', color: '#353935', level: 11 },
  { name: 'Black Belt-3', color: '#353935', level: 12 },
  { name: 'Black Belt-4', color: '#353935', level: 13 },
];


export const pricingPlans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '₹2999',
    period: '/month',
    description: 'Perfect for beginners starting their martial arts journey',
    features: [
      '2 classes per week',
      'Basic equipment included',
      'Progress tracking',
      'Online resources access',
      'Belt testing eligibility',
    ],
    popular: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: '₹4999',
    period: '/month',
    description: 'Most popular choice for serious practitioners',
    features: [
      '3 classes per week',
      'All equipment included',
      'Personal progress coaching',
      'Competition preparation',
      'Workshop access',
      'Family discount available',
    ],
    popular: true,
  },
  {
    id: 'elite',
    name: 'Elite',
    price: '₹7999',
    period: '/month',
    description: 'Unlimited training for dedicated martial artists',
    features: [
      'Unlimited classes',
      'Premium equipment set',
      'One-on-one sessions',
      'Competition team access',
      'Master class workshops',
      'Priority scheduling',
      'Nutrition guidance',
    ],
    popular: false,
  },
];