
export const links = {
  wildberries: 'https://wildberries.ru',
  resume: {
    en: '/Resume.pdf',
    ru: '/Резюме.pdf',
  },
  email: 'carriestylesf4@gmail.com',
  linkedin: 'https://www.linkedin.com/in/karina-litvinova-018b89386/',
  telegram: 'https://t.me/kcarriek',
  behance: 'https://www.behance.net/carriestyl7955',
  xacc: 'https://x.com/kcarrieee',
};

export const homeContent = {
  en: {
    firstName: 'Karina',
    bioGreeting: 'Hello! I am',
    bioGreetingRest: 'a product designer with an eye for details',
    bioRoleIntro: 'Now I design at',
    companyName: 'wildberries',
    bioRoleRest:
      "I'm good at quickly diving into complex domains, turning complexity into clarity, overall building 0 -> 1 products and experiences across visual design, immersive interactions and front-end engineering.",
    bioCraft:
      "I care deeply about craft, especially animation and software development. I’m also a strong team player: I listen, support others, and leave no stone unturned.",
    bioPrevious: 'Check out my',
    resumeLabel: 'resume / cv',
    and: 'and links to',
    socialsLabel: 'other socials',
    moreProjectsTitle: 'More projects',
    moreProjectsSubtitle: 'Freelance / commercial / side projects',
    leadershipHeading: 'More about design',
    localTimePrefix: "It's",
    localTimeSuffix: 'where I am',
    footer: {
      email: 'Email',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      behance: 'Behance',
      xacc: 'X account',
    },
  },
  ru: {
    firstName: 'Карина',
    bioGreeting: 'Привет! Я',
    bioGreetingRest: 'дизайнер, которому очень важны детали',
    bioRoleIntro: 'Сейчас работаю в',
    companyName: 'wildberries',
    bioRoleRest:
      'Быстро погружаюсь в сложные области, превращаю сложность в ясность, создаю продукты (опыт с нуля до запуска), работая на стыке дизайна, интерактива и фронтенд-разработки.',
    bioCraft:
      'Мне очень важно качество мелочей особенно анимации и техническая реализация. А ещё я люблю работать в команде, искать вместе решения.',
    bioPrevious: 'Подробнее обо мне в ',
    resumeLabel: 'резюме / cv',
    and: 'и ссылки на ',
    socialsLabel: 'остальные соцсети',
    moreProjectsTitle: 'Другие проекты',
    moreProjectsSubtitle: 'Фриланс / коммерческие / сторонние проекты',
    leadershipHeading: 'Больше про дизайн',
    localTimePrefix: 'Сейчас у меня',
    localTimeSuffix: '',
    footer: {
      email: 'Почта',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      behance: 'Behance',
      xacc: 'X account',
    },
  },
} as const;

export type Lang = keyof typeof homeContent;
