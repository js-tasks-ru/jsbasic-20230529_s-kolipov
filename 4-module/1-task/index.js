function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  document.body.append(ul);

  for (let elem of friends) {
    let li = document.createElement("li");
    li.textContent = elem.firstName + " " + elem.lastName;
    ul.append(li);
  }
  return ul;
}
