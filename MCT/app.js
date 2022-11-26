
  let api = fetch("https://api.domainsdb.info/v1/domains/search?domain=facebook")

  api.then((value) => {
    // console.log(value.status)
    // console.log(value.ok)
    return value.json()
  }).then((value) =>{
    console.log(value);
  });