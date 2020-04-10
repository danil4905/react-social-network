export const requiredField = (value) => {
  if (value) return undefined;
  return "Pole is required";
};

export const MaxLengthCreator = (maxLength) => (value) => {
  if (value.length > maxLength)
    return "Max length is " + maxLength + " simbols";
  return undefined;
};
