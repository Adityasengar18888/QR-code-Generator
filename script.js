const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".forms input");
generateBtn = wrapper.querySelector(".forms .butt button");
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click", () => {
  let qrValue = qrInput.value;
  console.log(qrValue);

  if (!qrValue) {
    return; //if input is empty then return from here
  }
  generateBtn.innerText = "Generating QR Code...";
  // getting a qr code of user entered value using qrserver
  // api and passing the api returned img src to qrImg

  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
  qrImg.addEventListener("load", () => {//once qr code iimg loaded

    wrapper.classList.add("active");
    generateBtn.innerText = "Generate QR Code";
  });
});

qrInput.addEventListener("keyup",()=>{
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});
