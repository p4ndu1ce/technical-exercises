const solution1 = (obj) => {
  const keysObj = [obj];
  let i = 0;
  let count = 0;
  while (keysObj[i] !== undefined) {
    for (let key in keysObj[i]) {
      if (typeof keysObj[i][key] === 'string') count++;
      else if (
        !Array.isArray(keysObj[i][key]) &&
        typeof keysObj[i][key] === 'object' &&
        typeof keysObj[i][key] !== null
      ) {
        keysObj.push(keysObj[i][key]);
      }
    }
    i++;
  }
  return count;
}

console.log(solution1(
  {
    key1: 60,
    key2: 'soy un string',
    key3: 'soy un string',
    key6: {
      key2: 'soy un string',
      key3: 'soy un string',
      key7: ['Holaaa']
    },
    key4: '',
    key5: false
  }
));