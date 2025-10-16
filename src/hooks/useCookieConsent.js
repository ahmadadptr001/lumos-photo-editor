import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { setCookie } from '../utils/cookieManager';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(Cookies.get('cookieConsent') || null);

  useEffect(() => {
    if (consent === null) return;
    setCookie("cookieConsent", consent)
  }, [consent]);

  const acceptCookies = () => setConsent('true');
  const rejectCookies = () => setConsent('false');

  return { consent, acceptCookies, rejectCookies };
};
