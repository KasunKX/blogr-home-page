const productPop = document.getElementById("prod")
const comapnyPop = document.getElementById("comp")
const contentPop = document.getElementById("cont")

let dropDwn = document.getElementById("dropDown")


productPop.innerHTML += `
  
`

let openClose1 = 0
let openClose2 = 0
let openClose3 = 0

productPop.addEventListener("click", function(event){
   if (openClose1 === 0){
      openClose1 = 1
   }else if(openClose1 === 1){
      openClose1 = 0
   }
   console.log(openClose1)

   if (openClose1 === 1){
      openClose3 = 0
      openClose2 = 0
      dropDwn.innerHTML = `
      <ul class="drop-01" style ="display:block; transition:0.5s">
        <li class="li-top" >Collection</li>
        <li> Special </li>
        <li class="li-bottom"> Others </li>
      </ul> 
      `
   }else{
      dropDwn.innerHTML = `
      `
   }

})

comapnyPop.addEventListener("click", function(){
   if (openClose2 === 0){
      openClose2 = 1
   }else if(openClose2 === 1){
      openClose2 = 0
   }

   if (openClose2 === 1){
      openClose1 = 0
      openClose3 = 0
      dropDwn.innerHTML = `
      <ul class="drop-02" style="margin-left:28%">
      <li class="li-top">Team</li>
      <li>About us</li>
      <li class="li-bottom"> Story </li>
    </ul>
      `
   }else{
      dropDwn.innerHTML = ``
   }

})
contentPop.addEventListener("click", function(){
   if (openClose3 === 0){
      openClose3 = 1
   }else if(openClose3 === 1){
      openClose3 = 0
   }

   if (openClose3 === 1){
      openClose1 = 0
      openClose2 = 0
      dropDwn.innerHTML = `
      <ul class="drop-03" style = "margin-left:56%">
      <li class="li-top">Contact</li>
      <li>Newsletter</li>
      <li class="li-bottom">LinkedIn</li>
    </ul>
      `
   }else{
      dropDwn.innerHTML = ``
   }
   
})


let productMenu = document.getElementById("productMenu")
let companyMenu = document.getElementById("compMenu")
let connectMenu = document.getElementById("conMenu")

let showProduct = document.getElementById("hide-show-01")
let showCompany = document.getElementById("hide-show-02")
let showConnect = document.getElementById("hide-show-03")

let numShow1 = 0
let numShow2 = 0
let numShow3 = 0

productMenu.addEventListener("click", function(){
   if (numShow1 === 0){
      numShow1 = 1
   }else{
      numShow1 = 0
   }

   if (numShow1 === 1){
      showProduct.innerHTML =`
      
      `
      console.log(true)
      productMenu.innerHTML = `
      Product <img src="images/icon-arrow-dark.svg" alt="">
      `
   }else{
      console.log(false)
      showProduct.innerHTML = `
      <ul class="ul-product">
      <li style="padding-top: 5vw;" >Overview</li>
      <li>Pricing</li>
      <li>Marketplace</li>
      <li>Features</li>
      <li class="mobile-menu-last">Integrations</li>
    </ul>
      `
      productMenu.innerHTML = `
      Product <img src="images/icon-arrow-dark.svg" alt="dark-arrow" style="transform:rotate(180deg); color:gray">
      `
      
   }

})

companyMenu.addEventListener("click", function(){
   if (numShow2 === 0){
      numShow2 = 1
   }else{
      numShow2 = 0
   }

   if (numShow2 === 1){
      showCompany.innerHTML =`
      
      `
      console.log(true)

      companyMenu.innerHTML = `
      Company <img src="images/icon-arrow-dark.svg" alt="dark-arrow" ;">
      `
   }else{
      console.log(false)
      showCompany.innerHTML = `
      <ul>
            <li style="padding-top: 5vw;">About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
      `
      companyMenu.innerHTML = `
      Comapny <img src="images/icon-arrow-dark.svg" alt="dark-arrow" style="transform:rotate(180deg); color:gray">
      `
   }
})

connectMenu.addEventListener("click", function(){
   if (numShow3 === 0){
      numShow3 = 1
   }else{
      numShow3 = 0
   }

   if (numShow3 === 1){
      showConnect.innerHTML =`
      
      `
      console.log(true)
      connectMenu.innerHTML = `
      Connect <img src="images/icon-arrow-dark.svg" alt="dark-arrow" ;">`
   }else{
      console.log(false)
      showConnect.innerHTML = `
      <ul>
            <li style="padding-top: 5vw;">About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
      `
      connectMenu.innerHTML = `
      Connect <img src="images/icon-arrow-dark.svg" alt="dark-arrow" ;" style="transform:rotate(180deg)">`
   }
})



// -------- Things to fix at end ---------

// add transition delay to drop down menu
// close drop down pop-up menu when click somewhere else.
// width of drop down menu increase while hovering - 