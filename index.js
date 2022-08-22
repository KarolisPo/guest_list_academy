const buttons = document.querySelectorAll(".userInputWrap button");
const guestListWrap = document.querySelector(".guestListWrap");
const guestName = document.querySelector("#name");
const guestLastName = document.querySelector("#lastName");

let guestList = [];

function stopRefresh() {
  const addUserForm = document.querySelector("#addGuestForm");
  addUserForm.addEventListener("submit", (event) => {
    event.preventDefault();
  });
}

function showGuestList(guests) {
  guestListWrap.innerHTML = null;
  for (let i = 0; i < guests.length; i++) {
    const guestDiv = document.createElement("div");
    guestDiv.textContent = `${i + 1}. ${guests[i]}`;
    guestListWrap.appendChild(guestDiv);
  }
  clearInputs(guestName, guestLastName);
}

function clearInputs(name, lastName) {
  name.value = null;
  lastName.value = null;
}

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    const guest = `${guestName.value} ${guestLastName.value}`;
    stopRefresh();
    switch (e.id) {
      case "addToStart":
        if (guestName.value && guestLastName.value) {
          guestList.unshift(guest);
        }
        break;
      case "addToEnd":
        if (guestName.value && guestLastName.value) {
          guestList.push(guest);
        }
        break;
      case "removeFirst":
        guestList.shift(guest);
        break;
      case "removeLast":
        guestList.pop(guest);
        break;
      case "reverseList":
        guestList.reverse();
        break;
    }

    showGuestList(guestList);
  });
});
