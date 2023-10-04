// letters, numbers, underscores, dashes, spases
const name = /^[a-zA-Zа-яА-Я0-9]+(([_ -][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/;
// test@test.com // test@test.ua
const email = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
// digits, spaces, dashes, parentheses, can start with +
const phone = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/;
// letters and numbers, start with @
const telegram = /.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$/;
// telegram + phone
const telegramPhone =
  /(.*\B@(?=\w{5,32}\b)[a-zA-Z0-9]+(?:_[a-zA-Z0-9]+)*$)|(^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$)/;
// linkedin
const linkedin =
  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/;
// github
const github = /^(http(s?):\/\/)?(www\.)?github\.com+\/(([_-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/;
// dd-mm-yyyy
const date = /^([0-2^([0-2][0-9]|(3)[0-1])(-)(((0)[0-9])|((1)[0-2]))(-)((19|20)\d{2}$)/;
// letters, numbers, commas, dashes, spases'
const address = /^[a-zA-Zа-яА-Я0-9]+(([ -]|(, )[a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я0-9]*)*$/;

module.exports = {
  name,
  email,
  phone,
  telegram,
  telegramPhone,
  linkedin,
  github,
  date,
  address,
};
