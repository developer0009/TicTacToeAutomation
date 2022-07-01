const elements = document.getElementsByClassName("cell");
let count = 1;
let clickCheck = 0;
let clicked = false;
let enter = false;
let random;
let automatic = 1;
for (let element of elements) {
  element.addEventListener("click", (evt) => {
    evt.target.style.backgroundColor = "wheat";

    if (count % 2 !== 0) {
      if (evt.target.innerHTML == "" || enter) {
        evt.target.innerHTML = "X";
        clicked = true;
        enter = false;
      } else {
        checkCount(count) ? (count = 1) : "";
        clickCheck = 1;
      }
    } else {
      console.log(count);
    }
    // else {
    //   if (evt.target.innerHTML == "" || enter) {
    //     evt.target.innerHTML = "O";
    //     clicked = true;
    //     enter = false;
    //   } else {
    //     checkCount(count) ? (count = 1) : "";
    //     clickCheck = 1;
    //   }
    // }
    if (clickCheck == 0) {
      count++;
    }
    clickCheck = 0;
    let value;
    do {
      value = Math.floor(Math.random() * 9) + 1;
    } while (value == random);
    random = value;
    count = automate(random, count);
    if (checkCombinations()) {
      count = 1;
      console.log(count);
    }
  });
}
function automate(className, count) {
  let evt = document.getElementsByClassName(className)[0];
  let exist;
  // console.dir(evt);
  if (evt.innerHTML != "") {
    // return automate(Math.floor(Math.random() * 9) + 1, count);
    console.log("exist : " + exist);
    console.log("className : " + className);
    do {
      exist = Math.floor(Math.random() * 9) + 1;
    } while (exist == className);
    console.log("exist : " + exist);
    console.log("className : " + className);
    evt = document.getElementsByClassName(exist)[0];
  }
  if (count % 2 == 0) {
    if (evt.innerHTML == "" || enter) {
      setTimeout(() => {
        evt.style.backgroundColor = "wheat";
        evt.innerHTML = "O";
        clicked = true;
        enter = false;
      }, 200);
    } else {
      checkCount(count) ? (count = 1) : "";
      clickCheck = 1;
    }
  }
  count++;
  return count;
}
function checkCombinations() {
  if (
    checkDivs("1", "2", "3") ||
    checkDivs("3", "6", "9") ||
    checkDivs("3", "5", "7") ||
    checkDivs("1", "5", "9") ||
    checkDivs("1", "4", "7") ||
    checkDivs("7", "8", "9") ||
    checkDivs("2", "5", "8") ||
    checkDivs("4", "5", "6")
  ) {
    setTimeout(() => {
      alert("winner");
      localStorage.setItem("gameOver", true);
      location.reload();
      reset();
    }, 300);
    return true;
  }
}

function checkDivs(one, two, three) {
  if (
    getData(one) != "" &&
    getData(two) != "" &&
    getData(three) != "" &&
    getData(one) === getData(two) &&
    getData(two) === getData(three)
  ) {
    return true;
  }
}

function getData(className) {
  const element = document.getElementsByClassName(className)[0];
  return element.innerHTML;
}
function reset() {
  for (let element of elements) {
    element.innerHTML = "";
    element.style.backgroundColor = "black";
  }
}
function checkCount(count) {
  if (count === 10) {
    alert("Draw match");
    for (let element of elements) {
      element.innerHTML = "";
      element.style.backgroundColor = "black";
    }
    return true;
  }
}
const buttonclass = document.getElementsByClassName("buttonclass")[0];
// buttonclass.style.display = "inline-block";
// buttonclass.style.margin = "";
const button = buttonclass.children[0];
if (localStorage.gameOver == "true") {
  console.log("iran");
  const result = document.getElementsByClassName("result")[0];
  const tictactoe = document.getElementById("tictactoe");
  const h1 = document.createElement("h1");

  button.disabled = false;
  button.style.display = "inline-block";
  button.style.margin = "0px auto";
  h1.innerText = "Click To Restart The Game";
  h1.style.color = "WHEAT";
  buttonclass.before(h1);
  h1.classList = "h1";
  button.classList = "button";

  tictactoe.style.width = "0px";
  tictactoe.style.height = "0px";
  console.dir(
    tictactoe.removeChild(document.getElementsByClassName("board")[0])
  );

  result.style.width = "100vw";
  result.style.height = "100vh";
  result.style.backgroundColor = "black";

  console.dir(result.childNodes[1]);
}
button.addEventListener("click", () => {
  localStorage.setItem("gameOver", "false");
  location.reload();
});
