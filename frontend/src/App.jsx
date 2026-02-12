import { useEffect } from "react";
import { useState } from "react";


const App = () => {

  const [quotes, setQuotes]= useState([]);

  const fetchApi= async ()=>{
    const unparsed= await fetch('http://localhost:3000/quotes');
    const data= await unparsed.json();
    console.log(data)
    setQuotes(data)
  }

  useEffect(()=>{
    fetchApi()
  }, [])


  return (
    <>
    <div className="w-full p-15 flex items-center justify-center space-x-2 bg-[#242424]/70 fixed">
        <span className="text-4xl font-bold text-blue-400 hidden sm:block">
          "
        </span>
      <h1 className="font-bold text-5xl text-white">Quotes by Goats</h1>
        <span className="text-4xl font-bold text-blue-400 hidden sm:block">
          "
        </span>
    </div>
    <div className="flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-x-6 gap-x-2 sm:gap-y-14 gap-y-8 mt-45">
      {quotes.map((quote, i)=>{
        if(quote?.Quote?.length < 70){
          return(
    <div className="w-70 text-center text-white font-semibold text-2xl flex flex-col justify-between border-4 border-[#99E1D9] rounded-2xl">
        <div className="p-3 space-x-2">
        <span className="text-4xl font-bold text-yellow-400">
          "
        </span>
        <span>
          {quote.Quote}
        </span>  
        <span className="text-4xl font-bold text-yellow-400">
          "
        </span>
        </div>  
        <div className="bg-[#99E1D9] text-black">
          -{quote.Author}-
        </div>
      </div>
          )
        }
      })}
    </div>
    </div>

    <footer className="w-full bg-white mt-10 p-4 text-center text-black font-semibold">
      <p>Quotes Scraped from <a href="https://quotes.toscrape.com/" target="_blank" className="text-blue-700 hover:underline">Quotes to Scrape</a></p>
      <p>Designed and Developed by Raghab Pandit</p>
    </footer>
    </>
  )
}

export default App
