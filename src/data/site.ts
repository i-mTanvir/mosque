export interface NavigationItem {
  href: string
  label: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export const navigationItems: NavigationItem[] = [
  { href: '#top', label: 'Home' },
  { href: '#support', label: 'Charity' },
  { href: '#services', label: 'Events' },
  { href: '#pillars', label: 'Scholars' },
  { href: '#contact', label: 'Contact' },
]

export interface PrayerTime {
  name: string
  begins: string
  iqamah: string
}

export interface StatItem {
  value: string
  label: string
  description: string
}

export interface FooterDetail {
  label: string
  value: string
}

export const welcomeHighlights: FeatureItem[] = [
  {
    icon: '01',
    title: 'Our Vision',
    description:
      'We build a welcoming place for salah, reflection, and service rooted in mercy and sincerity.',
  },
  {
    icon: '02',
    title: 'Our Mission',
    description:
      'We nurture hearts through learning, support local families, and strengthen community bonds.',
  },
]

export const prayerTimes: PrayerTime[] = [
  {
    name: 'Fajr',
    begins: 'Begins 5:37 AM',
    iqamah: 'Iqamah 6:45 AM',
  },
  {
    name: 'Zuhr',
    begins: 'Begins 1:07 PM',
    iqamah: 'Iqamah 1:30 PM',
  },
  {
    name: 'Asr',
    begins: 'Begins 5:08 PM',
    iqamah: 'Iqamah 5:45 PM',
  },
  {
    name: 'Maghrib',
    begins: 'Begins 6:28 PM',
    iqamah: 'Iqamah 6:32 PM',
  },
  {
    name: 'Isha',
    begins: 'Begins 8:19 PM',
    iqamah: 'Iqamah 8:30 PM',
  },
  {
    name: 'Jummah',
    begins: 'Begins 1:20 PM',
    iqamah: 'Iqamah 1:30 PM',
  },
]

export const services: FeatureItem[] = [
  {
    icon: 'A',
    title: 'Quran Learning',
    description:
      'Provide adults and children with tajweed, memorization, and guided study circles.',
  },
  {
    icon: 'B',
    title: 'Mosque Renovation',
    description:
      'Support the house of Allah with maintenance, expansion, and prayer space improvements.',
  },
  {
    icon: 'C',
    title: 'Funeral Service',
    description:
      'Offer practical family support, prayer arrangements, and compassionate guidance.',
  },
  {
    icon: 'D',
    title: 'Help Poor',
    description:
      'Distribute food, zakat, and emergency relief for neighbors facing difficult times.',
  },
]

export const stats: StatItem[] = [
  {
    value: '62',
    label: 'Diverse',
    description: 'Communities with more than 62 nationalities represented.',
  },
  {
    value: '12 K',
    label: 'Growing',
    description: 'Over 12,000 young and proven voices serve and learn each year.',
  },
  {
    value: '80 %',
    label: 'People',
    description: 'Positive engagement from families supporting local community work.',
  },
]

export const pillars: FeatureItem[] = [
  {
    icon: '1',
    title: 'Shahadah',
    description: 'To believe in one God and that Muhammad is His messenger.',
  },
  {
    icon: '2',
    title: 'Salah',
    description: 'To establish the five daily prayers with sincerity and devotion.',
  },
  {
    icon: '3',
    title: 'Sawm',
    description: 'To fast in Ramadan with discipline, gratitude, and patience.',
  },
  {
    icon: '4',
    title: 'Zakat',
    description: 'To purify wealth by giving to those in need and strengthening justice.',
  },
  {
    icon: '5',
    title: 'Hajj',
    description: 'To journey to Makkah for pilgrimage when able and prepared.',
  },
]

export const contactDetails: FooterDetail[] = [
  { label: 'Phone', value: '+880 1555-555-555' },
  { label: 'Email', value: 'support@annurmosque.org' },
  { label: 'Address', value: 'New Dhaka, Jamea Mosque Road' },
]

export const footerLinks: NavigationItem[] = [
  { href: '#top', label: 'Home' },
  { href: '#services', label: 'Our Services' },
  { href: '#support', label: 'Donate' },
  { href: '#contact', label: 'Contact' },
]
