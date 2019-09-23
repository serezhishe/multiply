module.exports = function multiply(first, second) {
  let t = [];
  let result = [];
  for (let i = first.length - 1; i >= 0; i--) {
    let stack = [0];
    for (let j = second.length - 1; j >= 0; j--) {
      let tmp = '';
      tmp += +first[i] * +second[j] + +stack.shift();
      if (tmp[1]) stack.unshift(tmp[1]);
      stack.unshift(tmp[0]);
      if (!tmp[1]) stack.unshift(0);
    }
    if (!stack[0]) stack.shift();
    t.unshift(stack);
  }
  while (t[t.length - 1].length) {
    result.push(+t[t.length-1].pop());
  }
  t.pop();
  for (let i = t.length - 1; i >= 0; i--) {
    let j = t.length - 1 - i;
    while (t[i].length) {
      if (result[1 + j]) result[1 + j] += +t[i].pop();
      else result[1 + j] = +t[i].pop();
      j++;
    }
  }
  let tmp = 0;
  for (let i = 0; i < result.length; i++) {
    result[i] += tmp;
    if (result[i] > 9) {
      tmp = Math.floor(result[i]/10);
      result[i] %= 10;
    } else tmp = 0;
  }
  return  result.reverse().join('');
}
