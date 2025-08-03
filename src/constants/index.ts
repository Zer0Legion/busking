import { NavigationItem } from '@/types';
import InstagramIcon from '@mui/icons-material/Instagram';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export const SITE_CONFIG = {
  name: 'BUSKINGKHAI',
  description: 'Interactive busking platform for song requests and tips',
} as const;

export const NAVIGATION_ITEMS: readonly NavigationItem[] = [
  {
    href: '/aboutme',
    label: 'About Me',
    icon: PersonIcon,
  },
  {
    href: '/requests',
    label: 'Song Requests',
    icon: QuestionMarkIcon,
  },
  {
    href: '/links',
    label: 'My Links',
    icon: InstagramIcon,
  },
  {
    href: '/tip',
    label: 'Tip Me',
    icon: AttachMoneyIcon,
  },
] as const;

export const UI_CONSTANTS = {
  colors: {
    primary: 'bg-light-blue-400',
    secondary: 'bg-light-blue-300',
    accent: 'text-black-900',
    success: 'text-green-700',
    error: 'text-red-900',
    warning: 'text-yellow-900',
    link: 'text-light-blue-900 hover:text-light-blue-300',
  },
  spacing: {
    containerPadding: 'p-6',
    sectionGap: 'gap-3',
    buttonSpacing: 'mb-2',
  },
  typography: {
    heroTitle: 'text-6xl font-semibold font-mono',
    pageTitle: 'text-4xl font-semibold font-mono',
    brandTitle: 'font-mono text-6xl font-semibold text-blue-200',
  },
  components: {
    link: 'underline transition-colors',
  },
} as const;

export const FORM_VALIDATION = {
  minMessageLength: 4,
  requiredFields: {
    songTitle: 'Please enter a song title!',
  },
  messages: {
    songAdded: 'Song added!',
    songAlreadyRequested: 'Hold on, this song is about to be played!',
  },
} as const;
