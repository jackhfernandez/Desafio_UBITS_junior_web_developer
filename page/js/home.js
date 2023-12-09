// como puedes observar tenemos la informacion de nuestro plan incompleta vamos a solucioanr este inconveniente

const init = async () => {
    // 1. llama la API con la siguiente URL https://buty619.github.io/pricing.json donde traera
    const url = "https://buty619.github.io/pricing.json";
    const jsonData = await fetch(url);
    const { basic, eco, pro, business } = await jsonData.json();

    // 2. luego de obtenida la información de los planes se debe inyectar los valores obtenidos
    const basicCard = document.querySelector(".pricing-card.basic");

    const basicCardTitle = basicCard.querySelector(".plan-title");
    basicCardTitle.innerHTML = basic.name;

    const basicCardPrice = basicCard.querySelector(".price-title");
    const basicCardPriceSpan = basicCardPrice.querySelector("span");
    basicCardPriceSpan.innerHTML = basic.price;

    const basicCardDiscount = basicCard.querySelector(".badge-box");
    const basicCardDiscountSpan = basicCardDiscount.querySelector("span");
    basicCardDiscountSpan.innerHTML = `Save ${basic.discount}`;

    const basicCardList = basicCard.querySelector("ul");
    const basicCardElementList = basicCardList.querySelectorAll("li");
    [...basicCardElementList].map(
        (element, i) => (element.innerHTML = basic.characteristics[i])
    );

    const apiData = { basic, eco, pro, business };

    Object.entries(apiData).map(([section, data]) => {

        const card = document.querySelector(`.pricing-card.${section}`);
        const cardTitle = card.querySelector(".plan-title");
        cardTitle.innerHTML = data.name;

        const cardPrice = card.querySelector(".price-title");
        const cardPriceSpan = cardPrice.querySelector("span");
        cardPriceSpan.innerHTML = data.price;

        const cardDiscount = card.querySelector(".badge-box");
        const cardDiscountSpan = cardDiscount.querySelector("span");
        cardDiscountSpan.innerHTML = `Save ${data.discount}`;

        const cardList = card.querySelector("ul");
        const cardElementList = cardList.querySelectorAll("li");
        [...cardElementList].map(
            (element, i) => (element.innerHTML = data.characteristics[i])
        );
    });
    // 3. Agrega una accion a los botones de cada card que nos dirija la pagina `/payment` donde

    Object.entries(apiData).map(([section, data]) => {
        const card = document.querySelector(`.pricing-card.${section}`);
        const cardButton = card.querySelector(".buy-now");
        cardButton.href = `/payment.html?name=${data.name}$price=$${data.price}`;
    });
};

// se inicializa el script

init();
