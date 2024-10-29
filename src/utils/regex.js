const phoneRegex = new RegExp(
  "09(0[0-9]|1[0-9]|3[0-9]|2[0-9])-?[0-9]{3}-?[0-9]{4}"
);
const onlyNumberInputRegex = new RegExp("[0-9]|[۰-۹]");
const hashtagAndMentionRegex = new RegExp(
  /([@#][\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF_a-zA-Z0-9۰-۹.]+)/g
);
const eeeRegex = new RegExp(
  /([ ._a-zA-Z0-9]+@[\u04c7-\u0591\u05D0-\u05EA\u05F0-\u05F4\u0600-\u06FF_a-zA-Z0-9۰-۹.]+)/g
);
const boldRegex = new RegExp(/(?:\*\*)([^*]*)(?:\*\*)/g);
const numberRegex = /^([0-9\u0660-\u0669\u06F0-\u06F9]*)$/;
const nameRegex = /^([A-Za-z0-9\u0660-\u0669\u06F0-\u06F9آ-ی ‌()-]*)$/;
const usernameRegex = /^([a-zA-Z][a-zA-Z0-9\u0660-\u0669\u06F0-\u06F9_.]*)$/;
const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9\u0660-\u0669\u06F0-\u06F9]{1,3}\.[0-9\u0660-\u0669\u06F0-\u06F9]{1,3}\.[0-9\u0660-\u0669\u06F0-\u06F9]{1,3}\.[0-9\u0660-\u0669\u06F0-\u06F9]{1,3}\])|(([a-zA-Z\-0-9\u0660-\u0669\u06F0-\u06F9]+\.)+[a-zA-Z]{2,}))$/;

export {
  phoneRegex,
  onlyNumberInputRegex,
  hashtagAndMentionRegex,
  eeeRegex,
  boldRegex,
  numberRegex,
  nameRegex,
  usernameRegex,
  emailRegex,
};
