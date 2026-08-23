export interface NavigationItem {
  href: string
  label: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface FooterDetail {
  icon: string
  label: string
  value: string
  note?: string
}

export const mosqueInfo = {
  name: 'আশ্রাফিয়া জামে মসজিদ',
  established: '২০০৬ ইং',
  phone: '+8801754-919054',
  village: 'দক্ষিণ কেরুয়া',
  postOffice: 'মোল্যারহাট',
  upazila: 'রায়পুর',
  district: 'লক্ষ্মীপুর',
}

export const mosqueLocation = `গ্রাম: ${mosqueInfo.village}, পোস্ট অফিস: ${mosqueInfo.postOffice}, উপজেলা: ${mosqueInfo.upazila}, জেলা: ${mosqueInfo.district}`

export const navigationItems: NavigationItem[] = [
  { href: '#top', label: 'হোম' },
  { href: '#support', label: 'অনুদান' },
  { href: '#contact', label: 'যোগাযোগ' },
]

export const contactDetails: FooterDetail[] = [
  {
    icon: 'P',
    label: 'মোবাইল',
    value: mosqueInfo.phone,
    note: 'প্রয়োজনে সরাসরি যোগাযোগ করতে পারেন',
  },
  {
    icon: 'L',
    label: 'লোকেশন',
    value: mosqueLocation,
    note: `স্থাপিত: ${mosqueInfo.established}`,
  },
]

export const footerLinks: NavigationItem[] = [
  { href: '#top', label: 'হোম' },
  { href: '/support', label: 'অনুদান' },
  { href: '/khutba', label: 'জুমার খুতবা' },
  { href: '#contact', label: 'যোগাযোগ' },
]
