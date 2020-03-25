const add = (a) => (b) => a + b;
const wrongAdd = (a) => (b) => a - b;

module.exports = {
  add, wrongAdd
}