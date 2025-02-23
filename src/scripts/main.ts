export { chosenLanguage, reloadWithLanguageOverride, initLanguage, getTranslation } from './jux/language';
export { loginButton } from './login/login-button';
export { loginPage } from './login/login-page';
export { handleMagicLinkRequest, initSession, onMicrosoftSignIn } from './login/session';
export { requestMagicLink } from './api-client';
export { magicLinkModal } from './login/magic-link-modal';

declare global {
  interface Window {
    submitCaptcha: any,
  }
}
