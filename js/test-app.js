//global array for store hours
var hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

//Constructor for Store Information
function StoreLocation(name, minCustomers, maxCustomers, avgSale) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgSale = avgSale;
  this.cookiesSold = [];
  this.total = 0;

  this.saleDay();

}
//method for calculating the cookies bought per hour at x store
StoreLocation.prototype.saleDay = function () {
  for (var i = 0; i < hours.length; i++) {
    var customers = this.maxCustomers - this.minCustomers + 1;
    var randCustomerCount = Math.floor(Math.random() * customers) + this.minCustomers;
    var saleCookiesHourly = Math.ceil(randCustomerCount * this.avgSale);
    this.cookiesSold.push(saleCookiesHourly);
    this.total += saleCookiesHourly;
  }
};
//sales.html rendering method
//is the body of the table
StoreLocation.prototype.renderBody = function () {
  var trbody = addElement('tr', tbody);
  addElement('th', trbody, this.name);
  for (var i = 0; i < hours.length; i++) {
    addElement('td', trbody, this.cookiesSold[i]);
  }
  addElement('th', trbody, this.total);
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
  tfoot.setAttribute('id', 'totalFooter');
  for (var i = 0; i < hours.length; i++) {
    var hourTotals = 0;
    for (var j = 0; j < store.length; j++) {
      hourTotals += store[j].cookiesSold[i];
    }
    overallTotal += hourTotals;
    addElement('th', trfoot, hourTotals);
  }
  addElement('th', trfoot, overallTotal);
}


function submitHandler(event) {
  // prevents the default event
  event.preventDefault();
  // eslint-disable-next-line no-unused-vars
  // var newStore = new StoreLocation(event.target.newStoreLocation.value, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.aveHourlySales.value);
  var newStore = new StoreLocation(event.target.newStoreLocation.value, event.target.minCustomers.value, event.target.maxCustomers.value, event.target.aveHourlySales.value);
  store.push(newStore);
  newStore.renderBody(body);
  deleteLastRow();
  addTableFooter();
  // use event.target.'name'.value to get the value
  //reset form automatically but keeps the data
  // newStore.renderBody(body);
  event.target.reset();

}

function deleteLastRow() {
  tableElem.deleteRow(-1);
}

//Global function to add elements
function addElement(tag, container, text) {
  var element = document.createElement(tag);
  container.appendChild(element);
  element.textContent = text;
  return element;
}
var form = document.getElementById('addStore');
var body = document.getElementById('salesTable');
var article = addElement('article', body);
var tableElem = addElement('table', article);
var tbody = addElement('tbody', tableElem);
var overallTotal = 0;
var store = [];
// var storeHourlyTotals = [];

store.push(new StoreLocation('Seattle', 23, 65, 6.3));
store.push(new StoreLocation('Tokyo', 3, 24, 1.2));
store.push(new StoreLocation('Dubai', 11, 38, 3.7));
store.push(new StoreLocation('Paris', 20, 38, 2.3));
store.push(new StoreLocation('Lima', 2, 16, 4.6));

form.addEventListener('submit', submitHandler);
//innvoke to render table

addTableHeader();

for (var i = 0; i < store.length; i++) {
  // storeSelect = store[i];
  store[i].renderBody(body);
}

addTableFooter();










