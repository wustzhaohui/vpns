import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageEffect: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    // Optional: Add document.documentElement.dir logic if RTL languages are introduced in the future
    // For example:
    // const currentLangDirection = i18n.dir(i18n.language);
    // document.documentElement.dir = currentLangDirection;
  }, [i18n.language]);

  return null; // This component does not render anything
};

export default LanguageEffect;
