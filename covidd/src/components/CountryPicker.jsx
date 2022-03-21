import React, { useState ,useEffect} from 'react'
import { NativeSelect, FormControl } from '@material-ui/core';
import { countries } from '../api'
const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries,setfetchedCountres]=useState([])
    useEffect(() => {
     const fetch=async()=>{
       const  data=await countries();
       console.log(data)
         setfetchedCountres(data)
     }
     fetch();
    },[setfetchedCountres])

  return (
    <FormControl >
    <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
      <option value="">Global</option>
      {fetchedCountries.map((country, i) => <option key={i} value={country.name}>{country.name}</option>)}
    </NativeSelect>
  </FormControl>
  )
}

export default CountryPicker