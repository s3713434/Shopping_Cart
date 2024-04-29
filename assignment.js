// create array
const shoppingList = ['milk', 'egg', 'bread'];

// add two items and show
shoppingList.push('cake', 'orange');
console.log(shoppingList);

// delete the last item
shoppingList.pop();
console.log(shoppingList);

//if the items > 5 then show a message
function maxLength() {
  if (shoppingList.length > 5) {
    console.log('your shopping cart is full.');
    return;
  }
}
//test function
maxLength(shoppingList.push('tissues', 'shampoo'));

// use for loop to show the shopping list
for (let i = 0; i < shoppingList.length; i++) {
  console.log(i + 1 + '. ', shoppingList[i]);
}

//create a search function to return if the item exist in the array
let input = prompt('Please enter an item')
function searchProduct(input) {
  if (shoppingList.includes(input)) {
    return console.log(input, 'is in the array');
  } else {
    return console.log('Cant find item:' + input);
  }
}
searchProduct(input);

// item objects
const shoppingItems = {
  name: 'milk',
  price: 2,
  quantity: 3
}
