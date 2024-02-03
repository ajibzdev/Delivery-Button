function promisifiedTimeout(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function addActiveClass() {
  const carElement = document.querySelector(".car");
  const envelopeElement = document.querySelector(".envelope");
  const button = document.querySelector(".btn");
  const btnText = document.querySelector(".btn-text");
  const contentElement = document.querySelector(".content");

  button.addEventListener("mouseover", () => {
    carElement.classList.add("car--active");
    envelopeElement.classList.add("envelope--active");

    setTimeout(() => {
      contentElement.classList.add("content--active");
    }, 1000);

    promisifiedTimeout(2000).then(() => {
      envelopeElement.classList.remove("envelope--active");
      carElement.classList.remove("car--active");
      contentElement.classList.remove("content--active");
    });
  });

  button.addEventListener("mouseout", () => {
    envelopeElement.classList.remove("envelope--active");
    carElement.classList.remove("car--active");

    btnText.classList.add("btn-text--active");
    btnText.innerHTML = "Order Sent ✅";

    setTimeout(() => {
      btnText.classList.remove("btn-text--active");
      btnText.innerHTML = "Ship Order";
    }, 2000);
  });
}

addActiveClass();
