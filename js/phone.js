

function loadPhone(searchText){
  let url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
    .then(response =>response.json())  
    .then(data => displayPhones(data.data));
}


   const displayPhones = phones =>{

    let phonesContainer = document.getElementById('phones-container');
     phonesContainer.innerHTML='';
     phones = phones.slice(0, 5);
    for(let i =0;i<phones.length;i++){
        let phone = phones[i];
        console.log(phone);
      let phoneDiv = document.createElement('div');
      phoneDiv.classList.add('col');
      phoneDiv.innerHTML=`
        <div class="card p-4">
                    <img  src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${phone.phone_name}</h5>
                      <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div> `;

      phonesContainer.appendChild(phoneDiv);
    } 
   }

   let searchField = document.getElementById('searchBtn').addEventListener('click',function(){
    
    let searchText = document.getElementById('searchText').value;
    console.log(searchText);
    console.log('button clicked');
    loadPhone(searchText);

   })
    

loadPhone('iphone 12');

