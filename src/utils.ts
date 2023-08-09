const PASSWORD_REGEXP =
  /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
const INVALID_PASSWORD_MESSAGE =
  'Password should have digits, small and big letters';

export const REGEX = {
  PASSWORD: PASSWORD_REGEXP,
};

export const MESSAGE = {
  INVALID_PASSWORD: INVALID_PASSWORD_MESSAGE,
};
