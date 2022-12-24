function getArray(amount) {
  const mainArr = [];
  let numArr = []
  let it = 0

  for (let i = 1; i <= amount; i++) {
    numArr[i-1] = i;
  }

  for (let i = 1; i <= amount / 3; i++) {
    const innerArr = [];

    for (let j = 0; j < 3; j++) {
      innerArr[j] = +numArr[it++];
    }

    if (innerArr.length <= 3) {
      mainArr[mainArr.length] = innerArr;
    }
  }

  return mainArr;
}

console.log(getArray(9));
