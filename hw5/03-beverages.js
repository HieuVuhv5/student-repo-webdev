$(document).ready(function () {
  const url =
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  // Add your code here

  let  app = document.querySelector('#results');
app.style.paddingLeft = 0;
const loading = document.querySelector('#loading');
let grid_app = document.querySelector("#drink");

const addBookToDOM = (item) => {
  //console.log(item) 

  let element = document.createElement('div');
  let link_el = document.createElement('a');
  let pic_el = document.createElement('img');

  let title = document.createElement('h2');
  
  pic_el.className ='img_cl';

  element.className='grid-item';
  

  //title.textContent = item.strDrink;
  //console.log(item.strDrink);
  pic_el.src=item.strDrinkThumb;
  pic_el.alt=item.idDrink;
  link_el.href="#";

  link_el.append(pic_el);
  link_el.append(title);
  title.textContent =item.strDrink;
  element.append(link_el);
  //element.append(title);
 

  grid_app.append(element);
};
const fetchData = (url) => {
  $.ajax({
    type: 'GET',
    url: url,
    success: (data) => {
      console.log(data);

      data.drinks.forEach((item) => {
        addBookToDOM(item);
      });
    },
    error: (error) => {
      console.log(error);
      $('#results')
        .append('<div>')
        .text(`An error occurred. Please try again.`);
    },
    complete: () => {
      $('#loading').remove();
    },
  });
};

fetchData(url);


});
