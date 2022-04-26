import './App.css';
import Main from './components/mainPage/MainPage'
import CustomNavBar from './components/CustomNav/CustomNav'
import CustomCard from './components/ui/Card/CustomCard'
function App() {
  return (
    <div className="App">
       <CustomNavBar />
       <CustomCard />
        <Main />
    </div>
  );
}

export default App;
