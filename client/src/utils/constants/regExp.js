export const NAME = {
  msg: 'Only letters, numbers, underscores, dashes, spases',
  regExp: /^[a-zA-Zа-яА-Я0-9]+(([_ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

export const EMAIL = {
  msg: 'Pattern: test@test.com, test@test.ua',
  regExp: /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/,
};

export const PHONE = {
  msg: 'Only digits, spaces, dashes, parentheses, can start with +',
  regExp: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
};

export const TELEGRAM = {
  msg: 'Only letters and numbers,  more than five, start with @',
  regExp: /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/,
};

export const TELEGRAM_PHONE = {
  msg: 'Only letters, digits, spaces, dashes, parentheses, can start with +, @',
  regExp:
    /(.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$)|(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$)/,
};

export const LINKEDIN = {
  msg: 'Starts with https://linkedin.com',
  regExp:
    /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

export const GITHUB = {
  msg: 'Starts with https://...github',
  regExp:
    /^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/,
};

export const DATE = {
  msg: 'Pattern: dd-mm-yyyy',
  regExp:
    /^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/,
};

export const COUNTRY = {
  msg: 'Only letters, more than two',
  regExp: /[a-zA-Z]\w{1}/,
};

export const RANDOM_UUID = {
  msg: 'Only letters, numbers, dashes',
  regExp: /^[a-zA-Zа-яА-Я0-9]+(([-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я0-9]*)*$/,
};
