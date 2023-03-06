export const localStorageService = {
  get: (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  }
};
