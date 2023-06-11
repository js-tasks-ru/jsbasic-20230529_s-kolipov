function showSalary(users, age) {
  const ageSort = users
    .filter((item) => item.age <= age)
    .map((item) => item.name + ", " + item.balance)
    .join("\n");
  return ageSort;
}
/*
let users = [
  {
    index: 0,
    balance: "$1,825.65",
    picture: "https://placehold.it/32x32",
    age: 21,
    name: "Golden Branch",
    gender: "male",
    greeting: "Hello, Golden Branch! You have 7 unread messages.",
    favouriteFruit: "banana",
  },
  {
    index: 1,
    balance: "$1,490.15",
    picture: "https://placehold.it/32x32",
    age: 26,
    eyeColor: "green",
    name: "Duncan Randall",
  },
  {
    index: 2,
    guid: "2483e252-b0d2-4a26-98e6-513531b320b7",
    isActive: true,
    balance: "$1,664.27",
    picture: "https://placehold.it/32x32",
    age: 37,
    eyeColor: "brown",
    name: "Glass Ray",
  },
  {
    index: 3,
    guid: "51855992-a0e7-4821-8178-92bcd13a1f0c",
    isActive: true,
    balance: "$1,072.95",
    picture: "https://placehold.it/32x32",
    age: 40,
    eyeColor: "brown",
    name: "Helga Nixon",
  },
  {
    index: 4,
    guid: "83405931-c746-4ed6-a05f-10b79b018af2",
    isActive: false,
    balance: "$3,422.96",
    picture: "https://placehold.it/32x32",
    age: 45,
    eyeColor: "blue",
    name: "end of",
  },
];

const salaryOf = showSalary(users, 38);
console.log(salaryOf);
console.log(typeof salaryOf);
*/
