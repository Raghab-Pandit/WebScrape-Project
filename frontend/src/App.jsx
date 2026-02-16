import { useEffect } from "react";
import { useState } from "react";


const App = () => {

  const [news, setNews]= useState([]);

  const fetchApi= async ()=>{
    const unparsed= await fetch('http://localhost:3000/news');
    const data= await unparsed.json();
    console.log(data)
    setNews(data)
  }

  useEffect(()=>{
    fetchApi()
  }, [news])


  return (
    <>
    <div className="w-full p-15 flex items-center justify-center space-x-2 bg-[#242424]/70 fixed">
        <span className="text-4xl font-bold text-blue-400 hidden sm:block">
          "
        </span>
      <h1 className="font-bold text-5xl text-white">Scraped News</h1>
        <span className="text-4xl font-bold text-blue-400 hidden sm:block">
          "
        </span>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-x-2 sm:gap-y-14 gap-y-8 mt-45">
      {news.map((newz, i)=>{
        if(newz){
          return(
    <div key={i} className="w-70 text-center text-white font-semibold text-2xl flex flex-col justify-between border-4 border-[#99E1D9] rounded-2xl">
        <div className="p-3 space-x-2">
        <span className="text-4xl font-bold text-yellow-400">
          "
        </span>
        <span>
          {newz.headline}
        </span>  
        <span className="text-4xl font-bold text-yellow-400">
          "
        </span>
        </div>  
        <div className="bg-[#99E1D9] text-black">
          -{newz.source}-
        </div>
      </div>
          )
        }
      })}
    </div>
    </div>

    <footer className="w-full bg-white mt-10 p-4 text-center text-black font-semibold">
      <p>Designed and Developed by Raghab Pandit</p>
    </footer>
    </>
  )
}

export default App
