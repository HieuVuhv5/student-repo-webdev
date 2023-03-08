

const url ='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

  //const url = 'https://anapioficeandfire.com/api/books/';

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
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // check the format of the data
      // if data is in array format, we can use an array method such as forEach()
      
     console.log(data.drinks.length);

     
      if (Array.isArray(data.drinks)) {
        console.log("It's an array!");
      } else {
        console.log("NOT an array!");
      }

   

      data.drinks.forEach((item) => {
        console.log(item);
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);
      
      let div = document.createElement('div');
      div.textContent = `An error occurred. Please try again.`;
      app.append(div);
      
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
