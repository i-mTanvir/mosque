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

export interface FooterDetail {
  icon: string
  label: string
  value: string
  note?: string
}

export const contactDetails: FooterDetail[] = [
  {
    icon: 'P',
    label: 'Hotline',
    value: '1800-123-456-7',
    note: 'Mon - Sat, 9:00 am - 6:00 pm',
  },
  {
    icon: '@',
    label: 'Email',
    value: 'username@domain.com',
  },
  {
    icon: 'L',
    label: 'Address',
    value: 'New Orleans, Jamia Mosque',
  },
]

export const footerLinks: NavigationItem[] = [
  { href: '#top', label: 'Home - Islamic Center' },
  { href: '#pillars', label: 'Salat Timings' },
  { href: '#support', label: 'Travel & Tours' },
  { href: '#contact', label: 'Online Classes' },
  { href: '#contact', label: 'Term Conditions' },
]
