const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

function zipList(list1, list2) {
  if (list1.length !== list2.length) {
    return 'Error, array sizes need to be equal';
  }
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i]);
    result.push(list2[i]);
  }
  return result;
}

console.log(zipList(arr1, arr2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(arr1, arr2));
