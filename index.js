const buttons = document.querySelectorAll(".userInputWrap button");
const guestListWrap = document.querySelector(".guestListWrap");
const guestName = document.querySelector("#name");
const guestLastName = document.querySelector("#lastName");
const specificNum = document.querySelector("#specificNum");

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
  clearInputs(guestName, guestLastName, specificNum);
}

function clearInputs(value1, value2, value3) {
  value1.value = null;
  value2.value = null;
  value3.value = null;
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
      case "removeFromTo":
        const removeFrom = Number(document.querySelector("#removeFrom").value);
        const removeTo = Number(document.querySelector("#removeTo").value);
        if (removeFrom > 0 && removeTo > 0) {
          guestList.splice(removeFrom - 1, removeTo);
        }
        break;
      case "addSpecific":
        const guestLineNumber = Number(specificNum.value);
        if (0 < guestLineNumber) {
          guestList.splice(guestLineNumber - 1, 0, guest);
        }
        break;
      case "lastToFirst":
        const lastGuest = guestList.pop();
        guestList.unshift(lastGuest);
        break;
      case "firstToLast":
        const firstGuest = guestList.shift();
        guestList.push(firstGuest);
        break;
    }

    showGuestList(guestList);
  });
});
