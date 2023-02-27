var form = document.querySelector("#form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  let parent = document.querySelector(".tBody");
  let eleTr = document.createElement("tr");
  parent.append(eleTr);

  let fn = document.createElement("td");
  fnData = document.querySelector('[ placeholder="Enter first name"]');
  fn.innerText = fnData.value;
  eleTr.append(fn);

  let ln = document.createElement("td");
  lnData = document.querySelector('[placeholder="Enter last name"]');
  ln.innerText = lnData.value;
  eleTr.append(ln);

  let address = document.createElement("td");
  addressData = document.querySelector('[placeholder="Enter address"]');
  address.innerText = addressData.value;
  eleTr.append(address);

  let pincode = document.createElement("td");
  pinData = document.querySelector('[ placeholder="Enter pincode"]');
  pincode.innerText = pinData.value;
  eleTr.append(pincode);

  let gender = document.createElement("td");
  genData = document.querySelector('[  name="gender"]');
  gender.innerText = genData.value;
  eleTr.append(gender);

  let food = document.createElement("td");
  foodData = document.querySelectorAll('[  name="food"]');
  console.log(foodData);
  var foodInputdata = [];
  foodData.forEach((element) => {
    if (element.checked == true) {
      foodInputdata.push(element.value);
    }
  });
  food.innerText = foodInputdata;
  eleTr.append(food);

  let state = document.createElement("td");
  stateData = document.querySelector('[  placeholder="Enter state name"]');
  state.innerText = stateData.value;
  eleTr.append(state);

  let conutry = document.createElement("td");
  conutryData = document.querySelector('[  placeholder="Enter country name"]');
  conutry.innerText = conutryData.value;
  eleTr.append(conutry);
});
