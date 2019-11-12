// //maybe create a function to input store hours and create an array for the hours.
// // var storeOpen = 6;
// // var storeClose = 20;
// // var hours = '';
// // var totalOpen = storeClose - storeOpen;
// // for (var i = 0; i < totalOpen; i++) {
// //   if (i === totalOpen -1) {
// //     hours += `${storeOpen + i}`;
// //   } else {
// //     hours += `${storeOpen + i}, `;
// //   }
// // }
// // console.log(hours);


// //Stores min and max customer hourly and avg cookies purchased/customer
// // var storeLocations = {
// //   seattle : { min: 23, max: 65, avgSale:6.3, function()},
// //   tokyo : { min: 3, max: 24, avgSale: 1.2},
// //   dubai : { min: 11, max: 38, avgSale: 3.7},
// //   paris : { min: 20,max: 38, avgSale: 2.3},
// //   lima : { min: 2, max: 16, avgSale: 4.6},
// // };

// var seattle = {
//   name: 'Seattle',
//   min: 23,
//   max: 65,
//   avgSale: 6.3,
//   salesCookies: [],
//   randCookies: function () {
//     var customer = this.max - this.min + 1;
//     var rand = Math.floor(Math.random() * customer) + this.min;
//     return rand;
//   }
// };

// var tokyo = {
//   name: 'Tokyo',
//   min: 3,
//   max: 24,
//   avgSale: 1.2,
//   salesCookies: [],
//   randCookies: function () {
//     var customer = this.max - this.min + 1;
//     var rand = Math.floor(Math.random() * customer);
//     return this.min + rand;
//   }
// };

// var dubai = {
//   name: 'Dubai',
//   min: 11,
//   max: 38,
//   avgSale: 3.7,
//   salesCookies: [],
//   randCookies: function () {
//     var customer = this.max - this.min + 1;
//     var rand = Math.floor(Math.random() * customer);
//     return this.min + rand;
//   }
// };

// var paris = {
//   name: 'Paris',
//   min: 20,
//   max: 38,
//   avgSale: 2.3,
//   salesCookies: [],
//   randCookies: function () {
//     var customer = this.max - this.min + 1;
//     var rand = Math.floor(Math.random() * customer);
//     return this.min + rand;
//   }
// };

// var lima = {
//   name: 'Lima',
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgSale: 4.6,
//   salesCookies: [],
//   randCookies: function () {
//     var customer = this.maxCustomers - this.minCustomers + 1;
//     var rand = Math.floor(Math.random() * customer);
//     return this.minCustomers + rand;
//   }
// };

// //calculate ramdom amount of cookies sold per hour
// function saleDay(store) {
//   for (var i = 0; i < hours.length; i++)
//     store.salesCookies[i] = Math.ceil(store.randCookies() * store.avgSale);
// }

// //array of data
// var storeLocations = [seattle, tokyo, dubai, paris, lima];
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// // var body;
// // var ul;


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
// var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

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
StoreLocation.prototype.render = function () {
  //renders article with in the body
  var article = addElement('article', body);
  //renders h2 element with store location
  addElement('h2', article, this.name);
  // var ul = addElement();
  // var tableElem = addElement('table', article);
  // var thead = addElement('thead', tableElem);
  // var tr = addElement('tr', thead);
  // addElement('th', tr);
  // for (var i = 0; i < hours.length; i++) {
  //   addElement('th', tr, hours[i]);
  // }
  // addElement('th', tr, 'Daily Location Total');

  // var tbody = addElement('tbody', tableElem);
  // var tfoot = addElement('tfoot', tbody);
  // var trfoot = addElement('tr', tfoot);
  // addElement('th', trfoot, 'Total');
  // for (var j = 0; j < hours.length; j++) {
  //   addElement('th', trfoot, totals[j]);
  // }
  // addElement('th', trfoot);
  // addTableHeader();
  // addTableFooter();
};

// function addTableHeader() {
//   var thead = addElement('thead', tableElem);
//   var tr = addElement('tr', thead);
//   for (var i = 0; i < hours.length; i++) {
//     addElement('th', tr, hours[i]);
//   }
//   addElement('th', tr, 'Daily Location Total');
// }

// function addTableFooter() {
//   var tfoot = addElement('tfoot', tableElem);
//   var tr = addElement('tr', tfoot);
//   addElement('th', tr, 'Total');
//   for (var i = 0; i < hours.length; i++) {
//     addElement('th', tr, hours[i]);
//   }
//   addElement('th', tr, 'Daily Location Total');
// }

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
// var tableElem = addElement('table', article);
// var article = addElement('article', body);
// var totals = [];
var store = [];
store.push(new StoreLocation('Seattle', 23, 65, 6.3));
store.push(new StoreLocation('Tokyo', 3, 24, 1.2));
store.push(new StoreLocation('Dubai', 11, 38, 3.7));
store.push(new StoreLocation('Paris', 20, 38, 2.3));
store.push(new StoreLocation('Lima', 2, 16, 4.6));

console.log(store);

for (var i = 0; i < store.length; i++) {
  store[i].render(body);
}






