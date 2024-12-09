const darkBtn = document.querySelector(".darkbtn");

darkBtn.addEventListener("click", () => {
  document.body.style.background = "black";

  const container = document.querySelector(".container");
  container.style.background = "black";
  container.style.color = "white";

  const header = document.querySelector("h1");
  header.style.color = "white";
});

const lightBtn = document.querySelector(".lightbtn");

lightBtn.addEventListener("click", () => {
  document.body.style.background = "white";

  const container = document.querySelector(".container");
  container.style.background = "white";
  container.style.color = "black";

  const header = document.querySelector("h1");
  header.style.color = "black";
});

//Main code

const qrinput = document.querySelector("#qr-input");
const qrimg = document.querySelector("#qr-image");
const qrbtn = document.querySelector("#qr-btn");

qrbtn.addEventListener("click", () => {
  const inputvalue = qrinput.value;

  if (!inputvalue) {
    alert("Enter the qr link please...");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
    qrimg.alt = `Qr code for ${inputvalue}`;
  }
});
