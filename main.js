// DOM Elements
var sideOpt = document.querySelector('#side-btn');
var mainOpt = document.querySelector('#main-btn');
var dessertOpt = document.querySelector('#dessert-btn');
var entireOpt = document.querySelector('#entire-btn');
var letsCookBtn = document.querySelector('#lets-cook');
var clearBtn = document.querySelector('#clear-menu');
var userForm = document.querySelector('.radio-btn');
var menuTitle = document.querySelector('.menu-title');
var menuPropose = document.querySelector('.porposed-menu')
var cookpotLogo = document.querySelector('.cookpot-icon');
var foodProposalView = document.querySelector('.food-proposal');

//Arrays for  Food Menus
//Should a create a new file to pass all the item from this array ?
var sides = ['Miso Glazed Carrots', 'Coleslaw', 'Garden Salad',
'Crispy Potatoes', 'Sweet Potato Tots', 'Coconut Rice', 'Caeser Salad',
'Shrimp Summer Rolls', 'Garlic Butter Mushrooms', 'Hush Puppies'];

var main = ['Spaghetti and Meatballs', 'Pineapple Chicken', 'Shakshuka',
'Thai Yellow Curry', 'Bibimbap', 'Chicken Parmesean', 'Ramen',
'Butternut Squash Soup', 'BBQ Chicken Burgers', 'Empanadas',
'Chicken Fried Rice', 'Sheet Pan Fajitas', 'Margarita Pizza'];

var desserts = ['Apple Pie', 'Lemon Meringue Pie', 'Black Forest Cake',
'Banana Bread', 'Peach Cobbler', 'Cheesecake', 'Funfetti Cake',
'Baklava', 'Flan', 'Macarons', 'Chocolate Cupcakes', 'Pavlova',
'Pumpkin Pie', 'Key Lime Pie', 'Tart Tatin', 'Croissants', 'Eclairs'];

/* -------------------- Event listeners -----------------*/

letsCookBtn.addEventListener('click', proposeMenu);
clearBtn.addEventListener('click', clearFoodPropose);
