const contains = (value, pattern) => value.search(pattern) >= 0;
export const isValidName = (value) => contains(value, /[a-zA-z]{3,}\s[a-zA-z]{3,}/g);
export const isValidEmail = (value) => contains(value, /\w{1,}@\w{1,}\.\w{1,}/g);
export const isValidPassword= (value) => contains(value, /[a-z]{3,}/g);
export const isValidRepeatPasswod = (value1, value2) => (value1 === value2)

/* export const isValidPassword= (value) => contains(value, /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g); */