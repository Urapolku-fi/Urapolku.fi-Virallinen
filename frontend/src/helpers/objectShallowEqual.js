export default function objectShallowEqual(obj1, obj2) {
  const keys1 = Object.getOwnPropertyNames(obj1);
  const keys2 = Object.getOwnPropertyNames(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let i = 0; i < keys1.length; i++) {
    let key = keys1[i];
    if (
      !Object.prototype.hasOwnProperty.call(obj2, key) ||
      Object.getOwnPropertyDescriptor(obj1, key).value !==
        Object.getOwnPropertyDescriptor(obj2, key).value
    ) {
      return false;
    }
  }

  return true;
}
