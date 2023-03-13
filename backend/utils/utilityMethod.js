const isObjectValueofKeysEmpty = (obj) => {
  let isempty = false;
  Object.values(obj).forEach((element) => {
    if (element == "") {
      isempty = true;
    }
  });
  return isempty;
};

module.exports = { isObjectValueofKeysEmpty };
