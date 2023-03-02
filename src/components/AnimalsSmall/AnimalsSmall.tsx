import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getData } from "../../services/getData";
import { Animals } from "../Animals/Animals";
import './AnimalsSmall.scss';

export const AnimalsSmall = ()=>{

    const [animals,setAnimal] = useState<IAnimal[]>([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      let animals = await getData();
      setAnimal(animals);
    }
    if(animals.length>0) return;

    fetchData();

  });
  useEffect(() => {
    const localStorageAnimals = JSON.parse(localStorage.getItem("Animals") || "[]");
    if (localStorageAnimals.length === 0) {
        localStorage.setItem("Animals", JSON.stringify(animals));
    }
}, [animals]);


  let animalsHTML = animals.map((animal)=>{
    return (
      <Animals
        animal={animal}
        key={animal.id}

      ></Animals>
    );
  });

  return (<div className="AnimalContainer">{animalsHTML}</div>);
};