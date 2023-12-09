// 1. primero se debe obtener los valores del nombre del ususario, el nombre del plan y precio del
// plan comprado de las query params e inyectarlos en el HTML.

// 1.1 obtener de los query params los valores del nombre y precio del plan comprado para esto
// se puede utilizar el metodo URLSearchParams y el window.location.search
const urlParams = new URLSearchParams(window.location.search);
const userName = urlParams.get("name");
const planName = urlParams.get("planName");
const planPrice = urlParams.get("price");

const init = async () => {
  // 1.2 inyecta los valores obtenidos en los `container_bill`.
  const userNameElement = document.querySelector("span.username");
  userNameElement.innerHTML = userName;
  const planNameElement = document.querySelector("span.name");
  planNameElement.innerHTML = planName;
  const priceElement = document.querySelector("span.price");
  priceElement.innerHTML = planPrice;
  const priceTotalElement = document.querySelector("span.total_price");
  priceTotalElement.innerHTML = planPrice;

  // 1.3 inyecta la fecha actual en la fecha de la factura
  const actualDate = new Date();
  const month = actualDate.getMonth();
  const year = actualDate.getFullYear();
  const day = actualDate.getDay();
  const dateElement = document.querySelector("div.date");
  dateElement.innerHTML =     `${year}/${month}/${day}`;
};

init();
