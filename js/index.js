// -------------------------variable of broduct--------------------

let ProductNameInput=document.getElementById("ProductName");
let ProductPriceInput=document.getElementById("ProductPrice");
let ProductCatgInput=document.getElementById("ProductCatg");
let ProductDescInput=document.getElementById("ProductDesc");
// console.log(ProductDescInput,ProductCatgInput,ProductNameInput,ProductPriceInput);
let  btnUpdate=document.getElementById(" btnUpdate");
let  btnAdd=document.getElementById("btnAdd")
console.log(btnAdd)

// ---------add product---------
 let AllProducts=[];
if(localStorage.getItem("ProductList") != null){
    AllProducts=JSON.parse(localStorage.getItem("ProductList"));
DisplayProduct();
}

function AddProduct(){
    let Product={
        Name:ProductNameInput.value,
        Price:Number(ProductPriceInput.value) ,
        catg:ProductCatgInput.value,
        descr:ProductDescInput.value
    }
    // console.log(Product);
    AllProducts.push(Product);
    // console.log(AllProducts);
    localStorage.setItem("ProductList",JSON.stringify(AllProducts))
    DisplayProduct();
    ClearProduct();
}



// display product==

function DisplayProduct(){
    let container="";
    for(let i=0; i < AllProducts.length ; i++){
        // console.log(i)
        container +=` <tr class="text-white">
            <td>${i+1}</td>
           <td>${AllProducts[i].Name}</td>
             <td>${AllProducts[i].Price}</td>
            <td>${AllProducts[i].catg}</td>
            <td>${AllProducts[i].descr}</td>
            <td>  
             <button class="btn btn-outline-danger fw-bold" onclick=" DeleteProduct(${i})">Delete</button>
             <button class="btn btn-outline-warning fw-bold" onclick=" SetProduct(${i})">Update</button>
            </td>
           
           </tr>`
    }
    // console.log(container)
    document.getElementById("table").innerHTML=container;
}


// clear function

function ClearProduct(){
    ProductNameInput.value="";
    ProductPriceInput.value="";
    ProductCatgInput.value="";
    ProductDescInput.value="";
}


// delet function==

 function DeleteProduct(index){
    // console.log("jjjjjj")
    
    AllProducts.splice(index,1);
    DisplayProduct();
    localStorage.setItem("ProductList",JSON.stringify(AllProducts))
    // console.log(CurrentProduct)
    
 }

// ---update product

let CurrentProduct=0;
function SetProduct(index){
// alert(index)
    CurrentProduct = index;
    ProductNameInput.value=AllProducts[index].Name;
    ProductPriceInput.value = AllProducts[index].Price;
    
    ProductCatgInput.value= AllProducts[index].catg;
    ProductDescInput.value=AllProducts[index].descr;
//  console.log(AllProducts[index])
    // console.log(CurrentProduct);


    btnUpdate.classList.remove("d-none");
    btnAdd.classList.add("d-none");
    

    

}


function UpdateProduct(){
    
    let Product={
        Name:ProductNameInput.value,
        Price:Number(ProductPriceInput.value) ,
        catg:ProductCatgInput.value,
        descr:ProductDescInput.value
    }


    AllProducts.splice(CurrentProduct,1,Product);
    console.log(CurrentProduct)
    // AllProducts.push(Product)
    btnAdd.classList.remove("d-none");
    btnUpdate.classList.add("d-none");
    localStorage.setItem("ProductList",JSON.stringify(AllProducts))

    DisplayProduct();
    ClearProduct();
}



// -----search product----

function SearchProduct(StringSerc){
    let containerSearch="";
    for(let i=0 ; i < AllProducts.length ; i++){
       if(AllProducts[i].Name.toLowerCase().includes( StringSerc.toLowerCase())===true){
        // console.log("jjjjjjjj")
       containerSearch +=
       ` <tr class="text-white">
            <td>${i+1}</td>
           <td>${AllProducts[i].Name}</td>
             <td>${AllProducts[i].Price}</td>
            <td>${AllProducts[i].catg}</td>
            <td>${AllProducts[i].descr}</td>
            <td>  
             <button class="btn btn-outline-danger fw-bold" onclick=" DeleteProduct(${i})">Delete</button>
             <button class="btn btn-outline-warning fw-bold" onclick=" SetProduct(${i})">Update</button>
            </td>
           
           </tr>`
       }
       
    }
    document.getElementById("table").innerHTML =containerSearch;



}