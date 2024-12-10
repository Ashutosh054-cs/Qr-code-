const darkBtn = document.querySelector(".darkbtn");

darkBtn.addEventListener("click", () => {
  document.body.style.background = "#121212";
  document.body.style.color = "#ffffff";

  const container = document.querySelector(".container");
  container.style.background = "#1e1e1e";
  container.style.color = "white";
  container.style.borderColor = "#323232";

  const downBtn = document.querySelector(".download");
  downBtn.style.color = "white";
  const shareBtn = document.querySelector(".share");
  shareBtn.style.color = "white";

  const header = document.querySelector("h1");
  header.style.color = "white";
});

const lightBtn = document.querySelector(".lightbtn");

lightBtn.addEventListener("click", () => {
  document.body.style.background = "#f9f9f9";
  document.body.style.color = "#212121";

  const container = document.querySelector(".container");
  container.style.background = "#ffffff";
  container.style.color = "#e0e0e0";

  const header = document.querySelector("h1");
  header.style.color = "black";
});

//Main code

const qrInput = document.querySelector("#qr-input");
const qrImg = document.querySelector("#qr-image");
const qrBtn = document.querySelector("#qr-btn");

qrBtn.addEventListener("click", () => {
  const inputValue = qrInput.value.trim();

  if (!inputValue) {
    alert("Please enter a link to generate a QR Code!");
    return;
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrImg.alt = `Qr code for ${inputValue}`;
  }
});

//code for download and share btn

const downBtn = document.querySelector("#qr-download");
const shareBtn = document.querySelector(".share");

downBtn.addEventListener("click", () => {
  if (!qrImg.src || qrImg.src === window.location.href) {
    alert("No QR code generated to download. Please generate one first.");
    return;
  }

  const link = document.createElement("a");
  link.href = qrImg.src;
  link.download = "qr-code.png";
  link.click();
});

shareBtn.addEventListener("click", async () => {
  if (!qrImg.src) {
    alert("Please generate a QR Code first!");
    return;
  }
  try {
    const response = await fetch(qrImg.src);
    const blob = await response.blob();

    const file = new File([blob], "qr-code.png", { type: "image/png" });
    const shareData = {
      files: [file],
      title: "QR Code",
      text: "Check out this QR Code!",
    };

    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share(shareData);
    } else {
      alert("Sharing is not supported on this device.");
    }
  } catch (error) {
    console.error("Error sharing QR Code:", error);
    alert("An error occurred while sharing.");
  }
});
