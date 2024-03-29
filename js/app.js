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
StoreLocation.prototype.saleDay = function () {
  // for (var i = 0; i < hours.length; i++) {
  var customer = this.maxCustomers - this.minCustomers + 1;
  var rand = Math.floor(Math.random() * customer) + this.minCustomers;
  var sale = Math.ceil(rand * this.avgSale);
  storeTotals += sale;
  return sale;
  // }
};
//sales.html rendering method
//is the body of the table
StoreLocation.prototype.render = function () {
  var trbody = addElement('tr', tbody);
  addElement('th', trbody, this.name);
  for (var i = 0; i < hours.length; i++) {
    var salesToday = this.saleDay();
    hourTotals[i] += salesToday;
    addElement('td', trbody, salesToday);
  }
  addElement('th', trbody, storeTotals);
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
    console.log(store[i]);
    overallTotal += hourTotals[j];
    addElement('th', trfoot, hourTotals[j]);
  }
  addElement('th', trfoot, overallTotal);
}



function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}

var body = document.getElementById('list');
var article = addElement('article', body);
var tableElem = addElement('table', article);
var hourTotals = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var overallTotal = 0;
var store = [];
// var storeSelect = 0;
store.push(new StoreLocation('Seattle', 23, 65, 6.3));
store.push(new StoreLocation('Tokyo', 3, 24, 1.2));
store.push(new StoreLocation('Dubai', 11, 38, 3.7));
store.push(new StoreLocation('Paris', 20, 38, 2.3));
store.push(new StoreLocation('Lima', 2, 16, 4.6));

// console.log(store);

addTableHeader();
var tbody = addElement('tbody', tableElem);
for (var i = 0; i < store.length; i++) {
  var storeTotals = 0;
  // storeSelect = store[i];
  store[i].render(body);
}
console.log(hourTotals);
addTableFooter();





