
var siteName = document.getElementById('name');
var url = document.getElementById('url');
let ubdateButton = document.querySelector('.submit');
var allSites = [];
let indexNunber;
let myAler = document.querySelector('.my-alert');

if (localStorage.getItem("allSites") != null) {
   allSites = JSON.parse(localStorage.getItem("allSites"))
   displayElements();

}


//==========================================================================

function addSite() {

   if (ubdateButton.innerHTML == 'update') {
      if (isNameValid() == true && isUrlValid() == true) {
         ubdateButton.innerHTML = "submite"
         allSites[indexNunber].name = siteName.value;
         allSites[indexNunber].siteUrl = url.value;
         localStorage.setItem("allSites", JSON.stringify(allSites));
         displayElements();
         myAler.classList.replace('d-block', 'd-none')

      }
      else {
         console.log('not valid');
         myAler.classList.replace('d-none', 'd-block')
      }

   }
   else {
      var siteInfo = {
         name: siteName.value,
         siteUrl: url.value
      }
      if (isNameValid() == true && isUrlValid() == true) {
         allSites.push(siteInfo);
         displayElements();
         localStorage.setItem("allSites", JSON.stringify(allSites));
      }
      else {
         console.log('not valid');
      }


   }



   if (ubdateButton.innerHTML == 'submite') {
      if (isNameValid() == true && isUrlValid() == true) {
         myAler.classList.replace('d-block', 'd-none')

         allSites[indexNunber].name = siteName.value;
         allSites[indexNunber].siteUrl = url.value;
         localStorage.setItem("allSites", JSON.stringify(allSites));
         displayElements();

      }
      else {
         console.log('not valid');
         myAler.classList.replace('d-none', 'd-block')
      }

   }
   else {
      var siteInfo = {
         name: siteName.value,
         siteUrl: url.value
      }
      if (isNameValid() == true && isUrlValid() == true) {
         allSites.push(siteInfo);
         displayElements();
         localStorage.setItem("allSites", JSON.stringify(allSites));
      }
      else {
         console.log('not valid');
      }


   }

   siteName.value = "";
   url.value = "";
   // localStorage.setItem("allSites", JSON.stringify(allSites));

}

function isNameValid() {
   let nameRegex = /^[A-Za-z]{1,}$/
   if (nameRegex.test(siteName.value)) {
      console.log('ok');
      return true;
   }
   return false;
}
// ^www\.[a-zA-Z]{1,}\.[a-z]{3}$

function isUrlValid() {
   let urlRegex = /^www\.[a-zA-Z]{1,}\.[a-z]{3}$/
   if (urlRegex.test(url.value)) {
      console.log('ok');
      return true;
   }
   return false;
}

//==========================================================================


function displayElements() {
   var cartona = "";


   for (var i = 0; i < allSites.length; i++) {

      cartona += `
      <tr>
      <td> ${i}  </td>
      <td>${allSites[i].name}</td>
      <td>  <a  target="_blank" href="https://${allSites[i].siteUrl}"> <i class="fa-regular fa-eye"></i>  Visit</a></td>
      <td>  <button  onclick=" deleteElement(${i} )"> <i class="fa-solid fa-trash-can"></i>  delete</button></td>
      <td>  <button class="btn btn-primary" onclick=" update(${i} )" >   update</button></td>
  </tr>

      `

   }


   document.getElementById('tbody').innerHTML = cartona;

}

//==========================================================================
function deleteElement(de) {
   allSites.splice(de, 1);
   displayElements();
   localStorage.setItem("allSites", JSON.stringify(allSites));

}

//==========================================================================


function update(index) {
   siteName.value = allSites[index].name;
   url.value = allSites[index].siteUrl;
   document.querySelector('.submit').innerHTML = 'update';
   indexNunber = index;

}






