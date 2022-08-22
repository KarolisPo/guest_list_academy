const buttons = document.querySelectorAll(".userInputWrap button");
const guestListWrap = document.querySelector(".guestListWrap");
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
}

function clearInputs(name, lastName) {
  name.value = null;
  lastName.value = null;
}

buttons.forEach((e) => {
  e.addEventListener("click", () => {
    const guestName = document.querySelector("#name");
    const guestLastName = document.querySelector("#lastName");
    const guest = `${guestName.value} ${guestLastName.value}`;
    clearInputs(guestName, guestLastName);

    switch (e.id) {
      case "addToStart":
        if (guestName.value && guestLastName.value) {
          stopRefresh();
          guestList.unshift(guest);
          showGuestList(guestList);
        }
        break;
      case "addToEnd":
        if (guestName.value && guestLastName.value) {
          stopRefresh();
          guestList.push(guest);
          showGuestList(guestList);
        }
        break;
      case "removeFirst":
        stopRefresh();
        guestList.shift(guest);
        showGuestList(guestList);
        break;
      case "removeLast":
        stopRefresh();
        guestList.pop(guest);
        showGuestList(guestList);
        break;
      case "reverseList":
        stopRefresh();
        guestList.reverse();
        showGuestList(guestList);
        break;
    }
  });
});
