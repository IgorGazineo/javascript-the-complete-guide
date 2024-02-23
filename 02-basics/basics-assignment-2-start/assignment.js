const task3Element = document.getElementById("task-3");

function showAlert() {
  alert("Isabella");
}

function showAlert2(name) {
  alert(`My name is ${name}`);
}

showAlert();
showAlert2();

task3Element.addEventListener("click", showAlert);

function isaName(name, secondName, thirdName) {
  return name + secondName + thirdName;
}

alert(isaName("Isabella ", "Grace ", "Gazineo"));
