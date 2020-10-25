module.exports = function check(str, bracketsConfig) {
  let matrix = bracketsConfig.map(item => item.join(''));
  for (let i = 0; i < matrix.length; i++){
    if (str.includes(matrix[i])) {
      str = str.replace(matrix[i],'');
      i = -1;
    }
  }
  return !str.length;
}
