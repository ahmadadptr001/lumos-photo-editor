import Cookies from 'js-cookie';

// Simpan data (string / object)
export const setCookie = (key, value, days = 30) => {
  Cookies.set(key, JSON.stringify(value), { expires: days });
};

// Ambil data dari cookie
export const getCookie = (key) => {
  const value = Cookies.get(key);
  try {
    return value ? JSON.parse(value) : null;
  } catch {
    return value;
  }
};

// Hapus data dari cookie
export const removeCookie = (key) => {
  Cookies.remove(key);
};
