let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
  ];
   const getAge =(pet)  =>  {return new Date().getFullYear() - pet.bornOn;} 

 
  let petsWithAge = []
   pets.forEach(pet=>{
    pet.age = getAge(pet)
    petsWithAge.push(pet)
})

  console.log(petsWithAge);
  
 let dogs = pets.filter(pet=> pet.type==="dog")
 console.log(dogs)

 let jasper =petsWithAge.find( pet=> pet.name==="Jasper")

 console.log("jasper is "+ jasper.age+ "years old") 
 