
export const links = {
  wildberries: 'https://wildberries.ru',
  resume: '#',
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
    companyName: 'wildberries',
    bioRoleRest:
      "I'm good at quickly diving into dense domains, turn complexity into clarity and use storytelling to move ideas from concept to launch.",
    bioCraft:
      "I care about craft very much, especially animations end software development. Also I am a good team player, so always try to listen, support others, and find solutions that work for everyone around me. ",
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
    bioGreetingRest: 'продуктовый дизайнер, которому важны детали',
    bioRoleIntro: 'Сейчас работаю в',
    companyName: 'wildberries',
    bioRoleRest:
      'Быстро погружаюсь в сложные области, превращаю сложность в ясность и довожу идею от концепции до запуска.',
    bioCraft:
      'Мне очень важно качество мелочей — особенно анимации и техническая реализация продукта. А ещё я люблю работать в команде: стараюсь слушать других, поддерживать и находить решения, которые подходят всем. ',
    bioPrevious: 'Ранее работала в Банке Санкт-Петербург и еще нескольких компаниях. Подробнее в моём',
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
