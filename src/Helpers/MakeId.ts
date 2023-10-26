export const makeid = (length: number) => () => {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }

  return result;
};

export const makeid5 = makeid(5);
makeid(5); // makeid(5) возвращает функцию.
makeid(5)(); // эта запись возвращает id длинной пять символов.
makeid(5)(); // и эта запись возвращает id длинной пять символов.

export const makeid7 = makeid(7);
