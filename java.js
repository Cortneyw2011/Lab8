var item1 = {name: 'bananas',
            price: 1.50};
var item2 = {name: 'strawberries',
            price: 2.50};
var item3 = {name: 'yogurt',
            price: 1.00};
var item4 = {name: 'milk',
            price: 2.99};
var item5 = {name: 'oatmeal',
            price: 1.49};
total=0;

var list = [item1, item2, item3, item4, item5];

for (var i = 0; i<list.length; i++){

  document.open();
  document.write(list[i].name+ ': ' +list[i].price + "\r");
  document.close();
  total = total + list[i].price;

  if (i===list.length-1){
    document.open();
    document.write ('total: ' + total );
    document.close();
  }
}
