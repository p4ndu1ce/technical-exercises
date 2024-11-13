const solution1 = (docs) => {
  const orderedDocuments = [];
  docs.forEach((doc) => {
    if (orderedDocuments[doc[1]] !== undefined) { // También puede ser if (orderedDocuments[doc[1]])
      orderedDocuments[doc[1]].push(doc[0]);
    } else {
      orderedDocuments[doc[1]] = [doc[0]];
    }
  });
  const docNames = orderedDocuments.filter((doc) => doc).reverse().flat();
  return docNames;
};

const solution2 = (docs) => {
  const highPriority = 9;
  const documentsObj = {};
  docs.forEach((doc) => {
    if (documentsObj[doc[1]] !== undefined) { // También puede ser if (orderedDocuments[doc[1]])
      documentsObj[doc[1]].push(doc[0]);
    } else {
      documentsObj[doc[1]] = [doc[0]];
    }
  });
  const result = [];
  for (let i = highPriority; i > 0; i--) {
    if (documentsObj[i]) result.push(...documentsObj[i]);
  }
  return result;
}

console.log(solution1([['Doc2', 1], ['Doc4', 9], ['Doc1', 7], ['Doc3', 1]]));
console.log(solution2([['Doc2', 1], ['Doc4', 9], ['Doc1', 7], ['Doc3', 1]]));
