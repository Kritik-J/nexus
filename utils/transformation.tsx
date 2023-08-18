export const numberToShortString = (num: number) => {
  //   if num is less than 1,000 then return num
  if (num < 1000) {
    return num.toString();
  }
  //   if num is less than 1,000,000 then return num/1000 + 'K'
  if (num < 1000000) {
    return (num / 1000).toFixed(1) + "K";
  }
  //   if num is less than 1,000,000,000 then return num/1000000 + 'M'
  if (num < 1000000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  //   if num is less than 1,000,000,000,000 then return num/1000000000 + 'B'
  if (num < 1000000000000) {
    return (num / 1000000000).toFixed(1) + "B";
  }
  // if num is greater than 1,000,000,000,000 then return num/1000000000000 + 'T'
  return (num / 1000000000000).toFixed(1) + "T";
};

export const limitString = (str: string, limit: number) => {
  if (str.length > limit) {
    return str.slice(0, limit) + "...";
  }

  return str;
};
