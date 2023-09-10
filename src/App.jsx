import Hello from "./components/Hello";
import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";
import Profile from "./components/Profile";
import Gig from "./components/Gig";
import Product from "./components/Product";
import Counter from "./components/Counter";
import ClickListener from "./components/ClickListener";
import Logger from "./components/Logger";
import Die from "./components/Die";
import AllGigs from "./components/Gig";

function App() {
  return (
    <>
      <Hello name="World" />
      <AllGigs />
      <Die />
      <Logger />
      <ClickListener />
      <Counter />
      <img className="logo" src={makersLogo}></img>
      <Profile name='QUAAAAAACKIE' job='Duck' birthdate='Today'/>
      <Product name='A thing' description='Its good' price={200}/>
      <Product name='Another thing' description='Its very good' price={2000}/>
      <Gig 
        artist='Avicii' 
        img='https://www.rollingstone.com/wp-content/uploads/2018/06/avicii-interview-rolling-stone-91816b43-19e9-4ef2-8a1e-857428f69960.jpg?w=1581&h=1054&crop=1'
        description='This is the brilliantly creative description!' 
        when='Midday 1st January 2024' 
        where='Brighton Beach'
      />
      <Gig 
        artist='Sigala' 
        description='This is the brilliantly creative description!' 
        when='Now' 
        where='The kitchen'
      />
    </>
  );
}

export default App;
