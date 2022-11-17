
export const isFunctionOrObject = (fakerKey: { value: () => void, args: string }) => {
  if (typeof fakerKey === 'function') {
    return "function";
  } else if (typeof fakerKey === 'object') {
    if (!fakerKey.hasOwnProperty("value")) {
      throw new Error("value key is must for fakermap object type");
    }
    return "object";
  } else {
    throw new Error("fakerMap key must be function or object");
  }
}

export const handleOptionsValues = (arrayOfObject: { name: string, value: string }[]) => {
  const optionsArray: string[] = [];
  arrayOfObject.forEach((option: { name: string, value: string }) => {
    optionsArray.push(option.value);
  })
  return optionsArray;
}
