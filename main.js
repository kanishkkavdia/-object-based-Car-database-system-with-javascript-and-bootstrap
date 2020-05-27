let collection=[];
let i=0;
let x=0;
console.log("Welcome");
function car(model,color,price,quantity){
    this.model=model;
    this.color=color;
    this.price=price;
    this.quantity=quantity;
}
function submission(){
    collection.push(new car(document.getElementById("model").value,document.getElementById("color").value,document.getElementById("price").value,document.getElementById("qua").value));
    reset();
    details();
    return collection;
}
function reset(){
    document.getElementById("model").value=""
    document.getElementById("color").value=""
    document.getElementById("price").value=""
    document.getElementById("qua").value=""
}
function details(){
    let td1=document.createElement('td');
    let td2=document.createElement('td');
    let td3=document.createElement('td');
    let td4=document.createElement('td');
    let td5=document.createElement('td');
    let text1=document.createTextNode(`${x+1}`);
    let text2=document.createTextNode(`${collection[x].model}`);
    let text3=document.createTextNode(`${collection[x].color}`);
    let text4=document.createTextNode(`${collection[x].price}`);
    let text5=document.createTextNode(`${collection[x].quantity}`);
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);
    let tr=document.createElement('tr');
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    document.getElementById("database").appendChild(tr);
    x++;
}