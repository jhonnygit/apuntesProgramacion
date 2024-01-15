//NIVEL 1
const vacio=Array();
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

  console.log(countries.length);
  console.log(countries[0]);
  let cantelementos=countries.length
  console.log(countries[cantelementos-1]);

  const mixedDataTypes=[
    "texto",
    12,
    true,
    {country:"boloivia"},
    {nombre:"jhonny", edad:43},
    {skils:["css","html","react"]},
  ]
  console.log(mixedDataTypes.length)

  const itCompanies=[ "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","Amazon"]
  console.log(itCompanies)
  console.log(itCompanies.length)
  console.log(itCompanies[0])
  console.log(itCompanies[itCompanies.length-1])
  console.log(itCompanies.join(","))

  console.log(itCompanies[0].toString().toUpperCase())
  console.log(itCompanies[1].toString().toUpperCase())
  console.log(itCompanies[2].toString().toUpperCase())
  console.log(itCompanies[3].toString().toUpperCase())
  console.log(itCompanies[4].toString().toUpperCase())
  console.log(itCompanies[5].toString().toUpperCase())

  console.log(itCompanies.toString()+" Son Grandes empresas de TI")

  if(itCompanies.indexOf("Facebook")===-1){
    console.log(`IBM No esta en la lista`)
  }else{
    console.log(`IBM  esta en la lista`)
  }
  

