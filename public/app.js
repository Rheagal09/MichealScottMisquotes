$(document).ready(function(){
	let randI;
	let btn=$('#randomQuote')
	let q=$('#quote')
	let e=document.getElementById("episode-by")
  	btn.click(function(){
  		console.log('puta')
  		randI=Math.floor(Math.random()*97);

  		q.html("\""+quotes[randI][0]+"\"")

  		e.innerHTML=quotes[randI][1]
  		console.log(quotes[randI][0],randI)
  	})

})