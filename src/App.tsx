import './App.scss';
import {Outlet, useLocation, useNavigate } from 'react-router-dom';

function App() {
const location = useLocation();
const navigate = useNavigate();
    const handleClick = ()=>{
      navigate('../animals');
  };
  return (

    <div className="App">
      {location.pathname === "/" && <div><h3> Välkommen till The Zoo</h3><p> Klicka på knappen nedan för att visa alla djur!</p><button onClick={handleClick}>Visa djuren!</button> </div>}
<Outlet></Outlet>
    </div>
   
  );
}

export default App;
