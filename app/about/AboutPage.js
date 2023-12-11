"use client"
import {useState, useEffect} from 'react'; 
const AboutPage = () => {
    const [data, setData] = useState('');

    useEffect(()=>{
        async function fetchData(){
            const response = await fetch(`https://graph.facebook.com/v17.0/me?fields=fan_count&access_token=${process.env.ACCESS_TOKEN}`);
            const responseData = await response.json();
    
            if(responseData){
                setData(responseData.fan_count);
            }
        }

        fetchData();
    }, []);
  return (
    <div>{data} fans</div>
  )
}

export default AboutPage