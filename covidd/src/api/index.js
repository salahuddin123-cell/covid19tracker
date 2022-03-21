


const url='https://covid19.mathdro.id/api';

export const fetchData=async(country)=>{
    let changableUrl=url;
    if(country){
        changableUrl=`${url}/countries/${country}`
    }
try{
    const response=await fetch(changableUrl);
    const data=await response.json();
    const modifiedData={
        confirmed: data.confirmed,
        recovered:data.recovered,
        deaths:data.deaths,
        lastUpdate:data.lastUpdate
    }
    return modifiedData
}catch(error){

}
}
export const fetchDailyData=async()=>{
    try{
        const response =await fetch(`${url}/daily`);
        const data=await response.json();
        const modifiedData=data.map((daily)=>({
            confirmed:daily.confirmed.total,
            deaths : daily.deaths.total,
            date:daily.reportDate

        }))
     return modifiedData
    }catch(error){

    }


}
export const countries=async()=>{
    try{
        const response =await fetch(`${url}/countries`);
        const data=await response.json();
       
        return data.countries
      
    }catch(error){

    }


}
