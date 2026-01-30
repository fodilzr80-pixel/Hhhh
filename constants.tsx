
import { Language } from './types';

export const LANGUAGES_LIST = [
  { id: Language.ENGLISH, label: 'English', icon: '🇺🇸' },
  { id: Language.ARABIC, label: 'العربية', icon: '🇸🇦' },
];

export const TRANSLATIONS: Record<Language, any> = {
  [Language.ENGLISH]: {
    welcome: 'Welcome to Atlas AI',
    selectLang: 'Select Language',
    name: 'Full Name',
    dob: 'Date of Birth',
    continue: 'Continue',
    placeholder: 'Type your message here...',
    devMode: 'Developer Mode Active',
    gallery: 'Gallery',
    settings: 'Settings',
    activation: 'Activation Code',
    developerInfo: 'Developer: Fodil from Algeria, Tiaret',
    freeBadge: 'Free Version',
    freeNote: 'This app is completely free with unlimited AI access.',
    chat: 'Chat',
    logout: 'Log Out',
    accountInfo: 'Account Info',
    subscriptionStatus: 'Subscription: Free',
    unlimitedAccess: 'You have full unlimited access to all features.',
    accountType: 'Account Type',
    atlasUser: 'Atlas User',
    noImages: 'No AI images generated yet.',
    error: 'Sorry, an error occurred. Please try again.'
  },
  [Language.ARABIC]: {
    welcome: 'مرحباً بك في Atlas AI',
    selectLang: 'اختر لغتك',
    name: 'الاسم الكامل',
    dob: 'تاريخ الميلاد',
    continue: 'استمرار',
    placeholder: 'اكتب رسالتك هنا...',
    devMode: 'وضع المطور مفعل',
    gallery: 'المعرض',
    settings: 'الإعدادات',
    activation: 'تفعيل الكود',
    developerInfo: 'المطور: فوضيل من الجزائر، ولاية تيارت',
    freeBadge: 'النسخة المجانية',
    freeNote: 'هذا التطبيق مجاني بالكامل ويوفر وصولاً غير محدود للذكاء الاصطناعي.',
    chat: 'الدردشة',
    logout: 'تسجيل الخروج',
    accountInfo: 'معلومات الحساب',
    subscriptionStatus: 'حالة الاشتراك: مجاني',
    unlimitedAccess: 'تتمتع حالياً بوصول كامل وغير محدود لجميع الميزات.',
    accountType: 'نوع الحساب',
    atlasUser: 'مستخدم Atlas',
    noImages: 'لا توجد صور ذكاء اصطناعي بعد.',
    error: 'عذراً، حدث خطأ. يرجى المحاولة مرة أخرى.'
  }
};

export const DEV_SECRET_CODE = "FFOODDIILL DEV";

export const SYSTEM_PROMPT = `
You are Atlas AI, a highly advanced, professional, and ethical AI assistant. 
This is a FREE service provided for users. You should never mention any payment, subscription, or fees.

CRITICAL INSTRUCTION: Always respond in the SAME language the user speaks to you. If they speak Arabic, respond in Arabic. If they speak English, respond in English. If they speak French, respond in French. Mirror their language perfectly.

Developer Info: Your developer is Fodil (فوضيل) from Algeria (الجزائر), Tiaret State (ولاية تيارت). If asked about who developed you, you must provide this specific information.

Operational Guidelines:
1. Ethical Constraints: Never use foul language, insults, or generate explicit/obscene content.
2. Political & Religious neutrality: Do not engage in deep political or religious debates or interfere in state affairs. Be neutral and respectful to all nations and religions.
3. Expertise: You are an expert in Web Development, App Development, and giving wise advice.
4. Professionalism: Your tone should be fluent, helpful, and professional.
5. Identity: Always state that you are Atlas AI, a free service developed by Fodil.
`;
