const loadPhones = () => {
  const url = "https://openapi.programming-hero.com/api/phones?search=iphone";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const phones = data.data;
      // console.log(phone)
      displayPhones(phones);
      
    });
};

displayPhones = (phones) => {

    const phoneContainer = document.getElementById('phone-container')
  phones.forEach((card) => {
    // console.log(card)
    const newCard = document.createElement("div");
    newCard.className = "card p-4";
    newCard.innerHTML = `
        <div class="card bg-base-100 shadow-xl">
            <figure>
            <img src="${card.image}" alt="Shoes" />
            </figure>
            <div class="card-body items-center">
              <h2 class="card-title">${card.phone_name}</h2>
              <p>mobile description</p>
              <div class="card-actions justify-center">
                <button class="btn btn-primary">Show Detail</button>
              </div>
            </div>
        </div>
        `;
        phoneContainer.appendChild(newCard)

  });
};

const searchBtn = document.getElementById('srcBtn')
    loadPhones()




loadPhones();
