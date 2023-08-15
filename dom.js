/* console.dir(document); // all properties
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// changing title
document.title = " papa ki pari";
console.log(document.title);
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
// one way to change
document.all[10].textContent ="Hello Item Listner";
// don't use this method becuse if we add something on there in the html the 10 index will be reflected
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.links);
 */  // to comment shift + alt +A

 // Get element by id
// console.log(document.getElementById('header-title'))
//var headerTitle = document.getElementById("header-title");
/* console.log(headerTitle);
headerTitle.textContent = "hello";
headerTitle.innerText ="Goodbye";
headerTitle.innerHTML ="<h2>Hello good</h2>" */
//var header  = document.getElementById("main-header");
//header.style.borderBottom ='solid 3px #000';

// Get element by Class Name
var items  = document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[1]);
items[1].textContent = "HEllo 2";
items[1].style.fontWeight = "bold";
items[1].style.backgroundColor ="Green";

// gives error -- items.style.backgroundColor ="Grey";

for(let i=0;i<items.length;i++)
{
    items[i].style.backgroundColor ="Lightgreen"
}

// Get element by Tag Name

let vi  = document.getElementsByTagName("li");
console.log(vi);
console.log(vi[1]);
vi[1].textContent =" helo ho";
vi[2].style.fontWeight ="bold";
vi[2].style.backgroundColor ="Green";

// baki same as for loop one and the same thing

// Query selector  same like jquery

var nextheader = document.querySelector("#main-header");
nextheader.style.borderBottom = "solid 4px #ccc";

var input = document.querySelector("input");
input.value = "HEllo nitin";

var submit = document.querySelector('input[type ="submit"]');
submit.value = "SEND";

var items1 = document.querySelector('.list-group-item')
items1.style.color ="red";

var lastitem = document.querySelector('.list-group-item:last-child');
lastitem.style.color ="blue"

var item2 = document.querySelector('.list-group-item:nth-child(2)');
item2.style.color ="green"

// Query selector all

var titles = document.querySelectorAll(".title");
console.log(titles)
titles[0].textContent = "hello"

var odd = document.querySelectorAll("li:nth-child(odd)");
for(let i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor ="lightGrey"
}
// same we can go for even
