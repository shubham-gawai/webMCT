
const searchDomain = (e) => {
    e.preventDefault();

    var searchInput = document.getElementById("search").value;
//     console.log(search);

    fetch("https://api.domainsdb.info/v1/domains/search?domain="+searchInput)
    .then(response => response.json())
	.then(response => console.log(response))
    

};
  

  let form = document.getElementById("form");
  form.addEventListener("keyup", searchDomain);





//   document.querySelectorAll("input").forEach((elem) => elem.addEventListener("keyup", searchDomain));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '40b9bd1caamshefd88d3ebfeb6e3p1680c1jsn1f6cadf94195',
// 		'X-RapidAPI-Host': 'whoisapi-domain-availability-v1.p.rapidapi.com'
// 	}
// };

// fetch('https://api.domainsdb.info/v1/domains/search?domain=tetra&zone=com', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));