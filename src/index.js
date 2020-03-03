// You should implement your task here.

module.exports = function towelSort(matrix) {
    return (
        (matrix &&
            matrix
                .map(function(item, index) {
                    return index % 2 === 0
                        ? item.sort(function(a, b) {
                              return a - b;
                          })
                        : item.sort(function(a, b) {
                              return b - a;
                          });
                })
                .reduce(function(acc, index) {
                    return acc.concat(...index);
                }, [])) ||
        []
    );
};
