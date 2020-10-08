const todoUtils = {
  uniqueId: () => {
    return new Date().getTime();
  }
}


// console.log(todoUtils.uniqueId());
// console.log(todoUtils.uniqueId());
// console.log(todoUtils.uniqueId());

module.exports = {todoUtils};