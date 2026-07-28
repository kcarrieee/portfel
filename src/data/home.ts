
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
    name: 'Karina Litvinova',
    bioIntro: 'Now Product Designer at',
    companyName: 'wildberries',
    bioRest:
      "I'm good at quickly diving into dense domains, turn complexity into clarity and come up with somethings cool.",
    bioPrevious: 'Previously, I worked across fintech products. Check out',
    resumeLabel: 'resume',
    and: 'and',
    socialsLabel: 'socials',
    moreProjectsTitle: 'More projects',
    moreProjectsSubtitle: 'Freelance / commercial / side projects',
    leadershipHeading: 'More about design',
    footer: {
      email: 'My email',
      linkedin: 'LinkedIn',
      telegram: 'Telegram',
      behance: 'Behance',
      xacc: 'X account',
    },
  },
  ru: {
    name: 'Карина Литвинова',
    bioIntro: 'Продуктовый дизайнер в',
    companyName: 'wildberries',
    bioRest:
      'Мне нравится быстро анализировать сложные направления, раскладывать всё по полочкам и реализовывать крутые идей',
    bioPrevious: 'Ранее работала в финтех компаниях. Вот моё ',
    resumeLabel: 'резюме',
    and: 'и',
    socialsLabel: 'соцсети',
    moreProjectsTitle: 'Другие проекты',
    moreProjectsSubtitle: 'Фриланс / коммерческие / сторонние проекты',
    leadershipHeading: 'Больше про дизайн',
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
