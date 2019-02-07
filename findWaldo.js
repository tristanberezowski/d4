function findWaldo(arr, found) /*found is actionwhenfound*/ {
  arr.forEach(function callWhen(name, index) {
    if (name === 'Waldo') {
      found(index);
    }
  })
}

function actionWhenFound(index) {
  console.log("Found him at index " + index + "!");
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);