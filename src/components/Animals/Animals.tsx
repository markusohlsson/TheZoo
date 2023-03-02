import { useNavigate } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";


interface IAnimalProp{
animal:IAnimal;
}

export const Animals = (props:IAnimalProp) => {
  const navigate = useNavigate();
  const handleClick = (id:number)=>{
    navigate(`/animals/${props.animal.id}`);

};
    return (
      <div className="Animal">
        <h4>{props.animal.name}</h4>
        <div className="image-container">
            <img src={props.animal.imageUrl} alt= {props.animal.name}>

            </img>
        </div>
        <p>{props.animal.shortDescription}</p>
        <button key={props.animal.id} onClick={() => handleClick(props.animal.id)}>Läs mer om {props.animal.name}</button>
      </div>

    );
  };
  