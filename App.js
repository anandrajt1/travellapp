import logo from './logo.svg';
import './App.css';
import TravelDestination from './components/place';

function App() {
  return (
    <>
    <h1>Travel Planner App</h1>

   <div className="container">
   <TravelDestination title="Munnar" about="Munnar is a town in the Western Ghats mountain range in India’s Kerala state. A hill station and former resort for the British Raj elite, it's surrounded by rolling hills dotted with tea plantations established in the late 19th century." img="munnar" rating="4.4"></TravelDestination>
   
    <TravelDestination title="Wayanad" about="Wayanad is a rural district in Kerala state, southwest India. In the east, the Wayanad Wildlife Sanctuary is a lush, forested region with areas of high altitude, home to animals including Asiatic elephants, tigers, leopards and egrets" img="forest" rating="4.7"></TravelDestination>
    
    <TravelDestination title="Palakkad" about="Palakkad, or Palghat, is a city in Kerala, a state in southwestern India. The 18th-century Palakkad Fort has sturdy battlements, a moat and a Hanuman temple on its grounds. North, on the Kalpathy River, the 15th-century Viswanatha Swamy Temple is the main venue of the famous Ratholsavam chariot festival" img="paddyfields" rating="4.1"></TravelDestination>
    
    <TravelDestination title="Alapuzha" about="Alappuzha (or Alleppey) is a city on the Laccadive Sea in the southern Indian state of Kerala. It's best known for houseboat cruises along the rustic Kerala backwaters, a network of tranquil canals and lagoons." img="lakes" rating="4.5"></TravelDestination>
   
   </div>




    </>
  );
}

export default App;
