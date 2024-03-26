const hunting = async (searchPhone, all) => {
     const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchPhone}`);
     const data = await res.json();
     const phone = data.data;
     displayPhone(phone,all)
}

const displayPhone = (phoneDetais, all) => {
     const catches = document.getElementById('phone-container');
     catches.innerText = '';

     // button showing for condition
     const showAllButton = document.getElementById('show-all')
     if(phoneDetais.length > 6 && !all){
          showAllButton.classList.remove('hidden');
     }
     else{
          showAllButton.classList.add('hidden');
     }

     
     // display only for showing
     if(!all){
          phoneDetais = phoneDetais.slice(0,6);
     }
     

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
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>;
               </div>
          </div>
          `;
          catches.appendChild(div);

          // stop loading funciton 
          leading(false);
     });
}

   /// show details 
const showDetails = async(id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
  const promij = await res.json();
  console.log(promij)
  showModalDetails(promij)
}

//    show modal details 
const showModalDetails = (Id) => {
     show_modal_details.showModal()
     const ddiv = document.getElementById('modal-container');
     ddiv.innerHTML = `
          <img src="${Id.data.image}">
          <h2 class="text-xl font-bold text-black">${Id.data.name}</h2>
          <p class="pt-4 text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">Storage : </span>${Id.data.mainFeatures.storage}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">DisplaySize : </span>${Id.data.mainFeatures.displaySize}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">chipSet : </span>${Id.data.mainFeatures.chipSet}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">Memory : </span>${Id.data.mainFeatures.memory}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">Slug : </span>${Id.data.slug}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">ReleaseDate : </span>${Id.data.releaseDate}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">Brand : </span>${Id.data.brand}</h3>
          <h3 class="text-gray-400 pt-3 text-xs"><span class="font-medium">GPS : </span>${Id.data.others.GPS}</h3>

     `
     
}

const searchTo = (all) => {
     leading(true)
     const input = document.getElementById('searchText');
     const inputValue = input.value;
     hunting(inputValue,all)

}

// loading function 
const leading = (istrue) => {
     const load = document.getElementById('loading');
     if(istrue){
          load.classList.remove('hidden');
     }
     else{
          load.classList.add('hidden');
     }
}

// show all event handler 
const showAll = () =>{
     searchTo(true)
}
