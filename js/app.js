// //calculate ramdom amount of cookies sold per hour
// function saleDay(store) {
//   for (var i = 0; i < hours.length; i++)
//     store.salesCookies[i] = Math.ceil(store.randCookies() * store.avgSale);
// }

// //array of data
// var storeLocations = [seattle, tokyo, dubai, paris, lima];
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// for (var i = 0; i < storeLocations.length; i++) {
//   var totalSales = 0;
//   // console.log(storeLocations[i]);
//   saleDay(storeLocations[i]);
//   // console.log(storeLocations[i].salesCookies);
//   var body = document.getElementById('list');
//   var h2 = document.createElement('h2');
//   h2.textContent = storeLocations[i].name;
//   var ul = document.createElement('ul');
//   body.appendChild(h2);
//   body.appendChild(ul);

//   var saleNum = storeLocations[i].salesCookies;

//   for (var j = 0; j < hours.length; j++) {
//     var li = document.createElement('li');
//     li.textContent = `${hours[j]}  : ${saleNum[j]} cookies`;
//     totalSales = totalSales + saleNum[j];
//     ul.appendChild(li);
//   }
//   li.textContent = `Totals : ${totalSales} cookies`;

// }



//global array for store hours
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//Constructor for Store Information
function StoreLocation(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
}

//method for calculating the cookies bought per hour at x store
// StoreLocation.prototype.saleDay = function () {
//   for (var i = 0; i < hours.length; i++) {
//     var customer = this.maxCustomers - this.minCustomers + 1;
//     var rand = Math.floor(Math.random() * customer) + this.minCustomers;
//     return Math.ceil(rand * this.avgSale);
//   }
// };
//sales.html rendering method
//is the body of the table
StoreLocation.prototype.render = function () {
  var trbody = addElement('tr', tbody);
  addElement('th', trbody, this.name);
  for (var i = 0; i < hours.length; i++) {
    addElement('td', trbody, 1);
  }

  addElement('th', trbody, 'Daily Location Total');
};

function addTableHeader() {
  var thead = addElement('thead', tableElem);
  var tr = addElement('tr', thead);
  addElement('th', tr);
  for (var i = 0; i < hours.length; i++) {
    addElement('th', tr, hours[i]);
  }
  addElement('th', tr, 'Daily Location Total');
}

function addTableFooter() {
  var tfoot = addElement('tfoot', tableElem);
  var trfoot = addElement('tr', tfoot);
  addElement('th', trfoot, 'Total');
  for (var j = 0; j < hours.length; j++) {
    addElement('th', trfoot);
    // addElement('th', trfoot, totals[j]);
  }
  addElement('th', trfoot);
}

function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

// StoreLocation.prototype.randCookiesSales = function () {
//   var customer = this.maxCustomers - this.minCustomers + 1;
//   var rand = Math.floor(Math.random() * customer) + this.minCustomers;
//   return rand;
// };

// console.log(store.randCookiesSales());

var body = document.getElementById('list');
var article = addElement('article', body);
var tableElem = addElement('table', article);
// var totals = [];
var store = [];
store.push(new StoreLocation('Seattle', 23, 65, 6.3));
store.push(new StoreLocation('Tokyo', 3, 24, 1.2));
store.push(new StoreLocation('Dubai', 11, 38, 3.7));
store.push(new StoreLocation('Paris', 20, 38, 2.3));
store.push(new StoreLocation('Lima', 2, 16, 4.6));

console.log(store);

addTableHeader();
var tbody = addElement('tbody', tableElem);
for (var i = 0; i < store.length; i++) {
  store[i].render(body);
}
addTableFooter();





