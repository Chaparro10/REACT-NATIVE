interface Person{
    age:number,
    firstname:string,
    address:{
        country:string,
        houseNo:number
    }
}

type Persontype={
     age:number,
    firstname:string,
    address:{
        country:string,
        houseNo:number
    }
}


const ObjectLiteral = () => {
  const person:Persontype = {
    age: 20,
    firstname: "kevin",
    address: {
      country: "Canada",
      houseNo:133,
    },
  };
  return (
    <div>
      <h1>ObjectLiteral</h1>

      <h4>{JSON.stringify(person, null, 2)}</h4>
    </div>
  );
};

export default ObjectLiteral;
