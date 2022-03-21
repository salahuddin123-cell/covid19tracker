import { useEffect,useState } from 'react';
import './App.css';
import {fetchData} from './api'
import Cards from './components/Cards'
import Chart from './components/Chart';
import CountryPicker from './components/CountryPicker';
function App() {
  const [Data,setData]=useState(0)
  const [country,setcountry]=useState('')
  useEffect(() => {
const fetchdata=async()=>{

  const data=await fetchData();
  setData(data)
//  console.log(data)
}
fetchdata()
  }, [])
 
  const handleCountryChange = async (country) => {
    const data1 = await fetchData(country);

   setData(data1)
   setcountry(country)
    console.log(data1)
  }
  return (
    <div className="App">
   <Cards data={Data}/>
   <CountryPicker handleCountryChange={handleCountryChange}/>
<Chart country={country} data={Data} />
    </div>
  );
}

export default App;
