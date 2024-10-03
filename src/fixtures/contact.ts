interface Link {
  text: string
  url: string
}
interface Contact {
  title: string
  info: string
  src: string
  links: Link[]
}

export const contacts: Contact[] = [
  {
    title: 'Customer Support',
    info: 'Send a mail to our team',
    src: '/assets/icons/headset.svg',
    links: [
      {
        text: 'support@xnd.com',
        url: 'mailto:support@exchangenextdoor.com'
      },
    ]
  },
  {
    title: 'Call Us',
    info: 'Speak to someone',
    src: '/assets/icons/phone.svg',
    links: [
      {
        text: '+234 (801) 444 5555',
        url: '+234 (801) 444 5555'
      }
    ]
  },
  {
    title: 'Visit Us',
    info: 'Visit our HQ',
    src: '/assets/icons/map.svg',
    links: [
      {
        text: 'View on Google Maps',
        url: 'tel:+1(XXX)XXX-XXXX'
      }
    ]
  },
  {
    title: 'Social media',
    info: 'Have a chat with us',
    src: '/assets/icons/message.svg',
    links: [
      {
        text: 'X',
        url: 'https://twitter.com/exchangenextdoor'
      },
      {
        text: 'Facebook',
        url: 'https://facebook.com/exchangenextdoor'
      },
      {
        text: 'Instagram',
        url: 'https://instagram.com/exchangenextdoor'
      }
    ]
  }
]
