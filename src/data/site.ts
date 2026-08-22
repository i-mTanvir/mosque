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
  { href: '#top', label: 'হোম' },
  { href: '#support', label: 'অনুদান' },
  { href: '#services', label: 'কার্যক্রম' },
  { href: '#pillars', label: 'ইসলামের স্তম্ভ' },
  { href: '#contact', label: 'যোগাযোগ' },
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
    label: 'হটলাইন',
    value: '1800-123-456-7',
    note: 'শনি - বৃহস্পতি, সকাল ৯টা - সন্ধ্যা ৬টা',
  },
  {
    icon: '@',
    label: 'ই-মেইল',
    value: 'username@domain.com',
  },
  {
    icon: 'L',
    label: 'ঠিকানা',
    value: 'আশরাফিয়া জামে মসজিদ প্রাঙ্গণ',
  },
]

export const footerLinks: NavigationItem[] = [
  { href: '#top', label: 'হোম - ইসলামিক কেন্দ্র' },
  { href: '#pillars', label: 'নামাজের সময়সূচি' },
  { href: '#support', label: 'ভ্রমণ ও সফর' },
  { href: '#contact', label: 'অনলাইন ক্লাস' },
  { href: '#contact', label: 'শর্তাবলি' },
]
