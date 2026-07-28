export const defaultLang = 'en';

export const languages = {
  en: 'English',
  ru: 'Русский',
} as const;

export const ui = {
  en: {
    'site.title': 'Karina Litvinova — Product Design',
    'project.role': 'Role',
    'project.year': 'Year',
    'project.duration': 'Duration',
    'project.platform': 'Platform',
    'project.back': 'Go back',
    'back.home': 'Go back',
    'toc.index': 'Back home',
    'photoStack.expand': 'Expand photo stack',
    'photoStack.collapse': 'Collapse photo stack',
  },
  ru: {
    'site.title': 'Карина Литвинова — Продуктовый дизайн',
    'project.role': 'Роль',
    'project.year': 'Год',
    'project.duration': 'Срок',
    'project.platform': 'Платформа',
    'project.back': 'Назад',
    'back.home': 'Назад',
    'toc.index': 'На главную',
    'photoStack.expand': 'Развернуть стопку фото',
    'photoStack.collapse': 'Свернуть стопку фото',
  },
} as const;
