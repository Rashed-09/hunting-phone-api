const hunting = async (searchPhone) => {
     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
     const data = await res.json();
     const phone = data.data;
     displayPhone(phone)
}

const displayPhone = phoneDetais => {
     const catches = document.getElementById('phone-container');
     catches.innerText = '';
     phoneDetais.forEach(phone => {
          const div = document.createElement('div');
          div.classList = `card m-6 bg-gray-100 shadow-xl`;
          div.innerHTML = `
          <figure class="px-10 pt-10">
               <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
               <h3 class="text-left">${phone.brand}</h3>
               <h2 class="card-title">${phone.phone_name}</h2>
               <p>If a dog chews shoes whose shoes does he choose?</p>
               <div class="card-actions">
                    <button class="btn btn-primary">Buy Now</button>;
               </div>
          </div>
          `;
          catches.appendChild(div);
     });
}



const searchTo = () => {
     const input = document.getElementById('searchText');
     const inputValue = input.value;
     hunting(inputValue)

}
