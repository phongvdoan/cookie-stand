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


//Stores min and max customer hourly and avg cookies purchased/customer
// var storeLocations = {
//   seattle : { min: 23, max: 65, avgSale:6.3, function()},
//   tokyo : { min: 3, max: 24, avgSale: 1.2},
//   dubai : { min: 11, max: 38, avgSale: 3.7},
//   paris : { min: 20,max: 38, avgSale: 2.3},
//   lima : { min: 2, max: 16, avgSale: 4.6},
// };

var seattle = {
  name: 'Seattle',
  min: 23,
  max: 65,
  avgSale: 6.3,
  salesCookies: [],
  randCookies: function () {
    var customer = this.max - this.min + 1;
    var rand = Math.floor(Math.random() * customer) + this.min;
    return rand;
  }
};

var tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avgSale: 1.2,
  salesCookies: [],
  randCookies: function () {
    var customer = this.max - this.min + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.min + rand;
  }
};

var dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avgSale: 3.7,
  salesCookies: [],
  randCookies: function () {
    var customer = this.max - this.min + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.min + rand;
  }
};

var paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avgSale: 2.3,
  salesCookies: [],
  randCookies: function () {
    var customer = this.max - this.min + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.min + rand;
  }
};

var lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgSale: 4.6,
  salesCookies: [],
  randCookies: function () {
    var customer = this.maxCustomers - this.minCustomers + 1;
    var rand = Math.floor(Math.random() * customer);
    return this.minCustomers + rand;
  }
};

//calculate ramdom amount of cookies sold per hour
function saleDay(store) {
  for (var i = 0; i < hours.length; i++)
    store.salesCookies[i] = Math.ceil(store.randCookies() * store.avgSale);
}

//array of data
var storeLocations = [seattle, tokyo, dubai, paris, lima];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var body;
// var ul;


for (var i = 0; i < storeLocations.length; i++) {
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
    ul.appendChild(li);
  }
}






