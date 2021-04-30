//
const cardJSON = '[{"name":"Paolo Maldini","jobTitle": "Front End Developer","company": "Web Weavers","experience": "3 years","school": "University of Washington","major": "Marketing","email": "paolo@example.com","linkedInUrl": "paolo.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "Node", "Express"]},{"name": "Barbara Bonansea","jobTitle": "Software Engineer","company": "Excellence in the Cloud","experience": "12 years","school": "University of Southern California","major": "Computer Science","email": "barbara@example.com","linkedInUrl": "barbara.linkedinprofile.com","codeLanguages": ["HTML", "JavaScript", "C", "Go"]},{"name": "Javier Hernandez","jobTitle": "User Experience Engineer","company": "Web Sites and More","experience": "5 years","school": "Seattle University","major": "Performing Arts","email": "javier@example.com","linkedInUrl": "javier.linkedinprofile.com","codeLanguages": ["HTML", "CSS"]},{"name": "Maribel Dominguez","jobTitle": "Front End Engineer","company": "Bits and Bytes","experience": "6 years","school": "University of Washington","major": "Mechanical Engineering","email": "maribel@example.com","linkedInUrl": "maribel.linkedinprofile.com","codeLanguages": ["HTML", "CSS", "JavaScript", "React", "Vue", "Redux"]}]'
//
const card = JSON.parse(cardJSON)
//
const container = document.querySelector('.template-hook')
//
card.forEach(function(el){
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
