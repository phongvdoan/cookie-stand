//maybe create a function to input store hours and create an array for the hours.
// var storeOpen = 6;
// var storeClose = 20;
// var hours = '';
// var totalOpen = storeClose - storeOpen;
// for (var i = 0; i < totalOpen; i++) {
//   if (i === totalOpen -1) {
//     hours += `${storeOpen + i}`;
//   } else {
//     hours += `${storeOpen + i}, `;
//   }
// }
// console.log(hours);


//Stores minCustomers and maxCustomers customer hourly and avg cookies purchased/customer
// var storeLocations = {
//   seattle : { minCustomers: 23, maxCustomers: 65, avgSale:6.3, function()},
//   tokyo : { minCustomers: 3, maxCustomers: 24, avgSale: 1.2},
//   dubai : { minCustomers: 11, maxCustomers: 38, avgSale: 3.7},
//   paris : { minCustomers: 20,maxCustomers: 38, avgSale: 2.3},
//   lima : { minCustomers: 2, maxCustomers: 16, avgSale: 4.6},
// };

var seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgSale: 6.3,
  salesCookies: [],
  randCookiesSales: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer) + this.minCustomers;
    return rand;
  }
};

var tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgSale: 1.2,
  salesCookies: [],
  randCookiesSales: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.minCustomers + rand;
  }
};

var dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgSale: 3.7,
  salesCookies: [],
  randCookiesSales: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.minCustomers + rand;
  }
};

var paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgSale: 2.3,
  salesCookies: [],
  randCookiesSales: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.minCustomers + rand;
  }
};

var lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  salesCookies: [],
  randCookiesSales: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.minCustomers + rand;
  }
};

//calculate ramdom amount of cookies sold per hour
function saleDay(store) {
  for (var i = 0; i < hours.length; i++)
    store.salesCookies[i] = Math.ceil(store.randCookiesSales() * store.avgSale);
}

//array of data
var storeLocations = [seattle, tokyo, dubai, paris, lima];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var body;
// var ul;


for (var i = 0; i < storeLocations.length; i++) {
  var totalSales = 0;
  // console.log(storeLocations[i]);
  saleDay(storeLocations[i]);
  // console.log(storeLocations[i].salesCookies);
  var body = document.getElementById('list');
  var h2 = document.createElement('h2');
  h2.textContent = storeLocations[i].name;
  var ul = document.createElement('ul');
  body.appendChild(h2);
  body.appendChild(ul);

  var saleNum = storeLocations[i].salesCookies;

  for (var j = 0; j < hours.length; j++) {
    var li = document.createElement('li');
    li.textContent = `${hours[j]}  : ${saleNum[j]} cookies`;
    totalSales = totalSales + saleNum[j];
    ul.appendChild(li);
  }
  li.textContent = `Totals : ${totalSales} cookies`;

}






