var students = [{
    id: 1,
    name: "bruce",
    age: 40
  },
  {
    id: 2,
    name: "zoidberg",
    age: 22
  },
  {
    id: 3,
    name: "alex",
    age: 22
  },
  {
    id: 4,
    name: "alex",
    age: 30
  }
];

function sortStudentsName(classList) {
  //sort by name
  classList.sort(function (a, b) {
    if (a.name > b.name)
      return 1
  })
  return classList
}

function sortStudentsAge(classList) {
  //sort by age
  classList.sort((a, b) => a.age - b.age)
  return classList
}
console.log(sortStudentsAge(students))
console.log(sortStudentsName(students))