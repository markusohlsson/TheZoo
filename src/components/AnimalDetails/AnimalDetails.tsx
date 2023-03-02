import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import './AnimalDetails.scss';

export const AnimalDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [animals, setAnimals] = useState<IAnimal[]>([]);
    const navigate = useNavigate();
    const handleClick = ()=>{
      navigate('../animals');
  
  };
  
  useEffect(() => {
    const animalsFromLocalStorage = JSON.parse(localStorage.getItem("Animals") || "[]");
    setAnimals(animalsFromLocalStorage);
  }, []);
  
    const selectedAnimal = animals.find((animal) => animal.id === Number(id)) || null;

    if (!selectedAnimal) {
      return <div><p>Djuret kan ej hittas</p>
      <button className="showAnimals" onClick={handleClick}>Återgå till Alla djur</button></div>;
    }


    const handleFeedClick = () => {
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const todayAsString = today.toISOString();
      const updatedAnimals = animals.map((animal) => {
        if (animal.id === selectedAnimal.id) {
          return {
            ...animal,
            isFed: true,
            lastFed: todayAsString,
          };
        }
        return animal;
      });
    
      localStorage.setItem("Animals", JSON.stringify(updatedAnimals));
      setAnimals(updatedAnimals);
    };
    return (
      <div className="SelectedAnimal" key={selectedAnimal.id}>
      <h2>{selectedAnimal.name}</h2>
      
      <img src={selectedAnimal.imageUrl} alt= {selectedAnimal.name}>

        </img>
      <div className="description">
      <p><b>På Latin:</b> <em>{selectedAnimal.latinName}</em></p>
      <p><b>Född:</b> {selectedAnimal.yearOfBirth}</p>
      <p>{selectedAnimal.shortDescription}</p>
      <p>{selectedAnimal.longDescription}</p>
      <p><b>Medicin:</b> {selectedAnimal.medicine}</p>
      
      </div>
      <div className="buttoncontainer">
      <p><b>Matades senast:</b> {selectedAnimal.lastFed}</p>
      {selectedAnimal.isFed ? (
         <button className="feed" onClick={handleFeedClick} disabled={true}>{selectedAnimal.name} har matats.</button>
      ) : (
        <button className="feed" onClick={handleFeedClick}>Mata {selectedAnimal.name}</button>
      )}
      <button className="showAnimals" onClick={handleClick}>Alla Djur</button>
      </div>
    </div>
    );
  };
