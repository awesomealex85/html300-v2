//Recipe data in JSON format
const recipe = [{"image":"pupusas_y_curtido.jpeg", "name": "Pupusas","Course": "Lunch or Dinner","Diet": "gluten free","PrepTime": "30 minutes","CookTime": "10 minutes","ServingSize": "10 people","item1": ["curtido", "2 cups of shredded cabbage", "1 medium carrot, grated", "1 tablespoon dried Mexican oregano", "3/4 cup hot water", "3/4 cup apple cider vinegar", "3/4 teaspoon kosher salt", "3/4 teaspoon granulated sugar"], "item2": ["pupusaDough", "2.25 cup Masa (e.g. Maseca brand)", "1.5 teaspons salt", "2 cups water"], "item3": ["Filling", "1.5 cups quesillo (can use mozzarella)", "3/4 cup Loroco flower (or butternut squash)"]}]

console.log(recipe);
console.log(recipe.length);
recipe.forEach(function(el) {
  console.log(el)
})
recipe.forEach(function(el) {
  console.log(el.item1)
  console.log(el.item1.length)
})

//get section of html to put the card into
const container = document.querySelector('.template-hook')
//function for creating card from JSON data
recipe.forEach(function(el) {
  console.log(el)
  let ingridients = ""

  el.item1.forEach(function(item1){
    ingridients += `<p>${item1}</p>`
  })
  console.log(ingridients)
  let list = document.createElement('ul')
  list.innerHTML = `
  <article class="recipe">
		<div class="recipe__center">
      <!-- <div id = "animated-example" class = ""> -->
			<img src="img/${el.image}" alt=${el.name}"'s head shot" class="recipe__img animated bounce">
      </div>
			<h2>${el.name}</h2>
		<!-- </div> -->
		<div class="recipe__description">
      <p><strong>Course: </strong><i>${el.Course}</i></p>
			<p><strong>Diet:</strong> ${el.Diet}</p>
			<p><strong>Prep Time:</strong> ${el.PrepTime}</p>
			<p><strong>Cook Time:</strong> ${el.CookTime}</p>
			<p><strong>Serving Size:</strong> ${el.ServingSize}</p>
		</div>
    <div class="recipe__ingridients">
      <p><strong>Ingridients: </p>
      ${ingridients}
  </article>
  `
// 
//
//   //<p>${el.item1.[0]}</p>
//   container.append(list)
// })
// recipes.forEach(function(el) {
// for (let i = 1; i < el.item1.length; i++) {
// const p = document.createElement('p');
// const div = document.querySelector('div.recipe__ingridients');
// div.appendChild(p);
// p.innerHTML = item1[i];
// }
// })
