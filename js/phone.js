
// fetch part
function loadPhone(searchText,dataLimit){
  let url =`https://openapi.programming-hero.com/api/phones?search=${searchText}`
  fetch(url)
    .then(response =>response.json())  
    .then(data => displayPhones(data.data,dataLimit));
}

//display part
   const displayPhones = (phones,dataLimit) =>{
    let phonesContainer = document.getElementById('phones-container');


    let noPhone = document.getElementById('noPhone');
    if( phones.length ===0){
     noPhone.style.display='block';
    }
    else{
      noPhone.style.display='none';
    }
     phonesContainer.innerHTML='';

     let showAll = document.getElementById('showAll');
     if(dataLimit && phones.length>10){
      phones = phones.slice(0, 5);
      showAll.classList.remove('d-none');
     }

     else{
      showAll.classList.add('d-none');
     }
    
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
    toggleSpinner(false);
   }

   //search part

    function searchProcess(dataLimit){
      let searchText = document.getElementById('searchText').value;
      loadPhone(searchText);
      toggleSpinner(true);
      loadPhone(searchText,dataLimit);
    }

   let searchField = document.getElementById('searchBtn').addEventListener('click',function(){
    searchProcess(10);
   
   })

   //loading spinner part

   function toggleSpinner(isloading){
    let  loader = document.getElementById('loader');
    if(isloading){
      loader.classList.remove('d-none')
    }
    else{
      loader.classList.add('d-none');
    }
   }
   
   
   //show all part
  
  document.getElementById('showAllBtn').addEventListener('click',function(){
    searchProcess();
  })

    

loadPhone('iphone 12');

