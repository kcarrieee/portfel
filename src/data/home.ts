
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
    bioGreeting: 'Hey! I am',
    bioGreetingRest: 'a product designer with an eye for details',
    bioRoleIntro: 'Now I design at',
    companyName: 'Wildberries',
    bioRoleRest:
      "I'm good at quickly diving into complex domains, turning complexity into clarity, and using storytelling to move ideas from concept to launch.",
    bioCraft:
      "I care deeply about craft, especially animation and software development. I’m also a strong team player: I listen, support others, and look for solutions that work for everyone.",
    bioPrevious: 'Previously, I worked at Bank Saint Petersburg and a few other companies. Check out my',
    resumeLabel: 'resume / cv',
    and: 'and',
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
    bioGreetingRest: 'дизайнер, которому важны детали',
    bioRoleIntro: 'Сейчас работаю в',
    companyName: 'Wildberries',
    bioRoleRest:
      'Быстро погружаюсь в сложные области, превращаю сложность в ясность и довожу идею от концепции до запуска.',
    bioCraft:
      'Мне очень важно качество мелочей — особенно анимации и техническая реализация продукта. А ещё я люблю работать в команде: стараюсь слушать других, поддерживать и находить решения, которые подходят всем.',
    bioPrevious: 'Ранее работала в Банке Санкт-Петербург и ещё нескольких компаниях. Подробнее в моём',
    resumeLabel: 'резюме / cv',
    and: 'и',
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
