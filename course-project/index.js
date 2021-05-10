//Profile data in JSON format
const recipeJSON = '[{
  "name": "Pupusas",
  "Course": "Front End Developer",
  "Diet": "Web Weavers",
  "Prep Time": "3 years",
  "Cook Time": "University of Washington",
  "Serving Size": "Marketing",
  "email": "paolo@example.com",
  "linkedInUrl": "paolo.linkedinprofile.com",
  "codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]
}]'
//turns JSON data set into JS object
const recipe = JSON.parse(recipeJSON)
//get section of html to put the card into
const container = document.querySelector('.template-hook')
//function for creating card from JSON data
recipe.forEach(function(el) {
  let list = document.createElement('ul')
  list.innerHTML = `
  <article class="card">
		<div class="card__center">
			<img src="img/headshot.jpg" alt=${el.name}"'s head shot" class="card__img">
			<h2>${el.name}</h2>
			<p><i>${el.jobTitle}</i></p>
		</div>
		<div class="card__description">
			<p><strong>Company:</strong> ${el.company}</p>
			<p><strong>Expereince:</strong> ${el.expereince}</p>
			<p><strong>School:</strong> ${el.school}</p>
			<p><strong>Major:</strong> ${el.major}</p>
			<p><strong>Email:</strong> ${el.major}</p>
			<p><img src="img/linkedin.svg" alt="linkedin logo"> ${el.linkedInUrl}</p>
		</div>
	</article>
  `

  //
  container.append(list)
})

// Recipe entries
// const cardJSON = '[{
//   "name": "Paolo Maldini",
//   "jobTitle": "Front End Developer",
//   "company": "Web Weavers",
//   "experience": "3 years",
//   "school": "University of Washington",
//   "major": "Marketing",
//   "email": "paolo@example.com",
//   "linkedInUrl": "paolo.linkedinprofile.com",
// }]'
// // recipe card generator
// for (let i = 0; i < profileSet.length; i++) {
// const article = document.createElement('article');
// const section = document.querySelector('section.blog');
// const div = document.createElement('div');
// const div2 = document.createElement('div');
// const img = document.createElement('img');
// img.src = profileSet[i][0];
//
// const h2 = document.createElement('h2');
// const p = document.createElement('p');
// const p2 = document.createElement('p');
//
// section.appendChild(article);
// article.appendChild(div);
// article.appendChild(div2);
// div.appendChild(img);
//
// div2.appendChild(h2, p, p2);
// div2.appendChild(p);
// div2.appendChild(p2);
//
// article.setAttribute("class", "container");
// div2.setAttribute("class", "blog");
// img.setAttribute("class", "blog");
//
// h2.innerHTML = profileSet[i][1];
// p.innerHTML = profileSet[i][2];
// p2.innerHTML = profileSet[i][3];
// }
