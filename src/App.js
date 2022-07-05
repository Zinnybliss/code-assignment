
import React from "react";
import { useState , useEffect } from 'react';
import './App.css';


function App() {

  const [articles , setArticles] = useState([])
  const backIcon = '<<'
  const frontIcon = '>>'
  let page = '1'

 
  useEffect(()=> {
    getData()
  }, [])


  async function  getData(page = 1){
    var response = await fetch(`https://newsapi.org/v2/top-headlines?country=ng&apiKey=a0ce4138ae11489ea56614e1809cef96&page=${page}&pageSize=6`)

    var data = await response.json();
    setArticles(data.articles)
  }
  return (
    <div className="w-[80%] mx-auto">
      <nav className="bg-blue-900 h-[40px] w-[100%] ">
        <p className="text-white flex items-center justify-start p-2 ml-10">NewsOnline</p>
        </nav>
      <h2 className="p-4 ml-8 mb-8 text-blue-900 text-sm font-semibold">Latest news</h2>
    {articles && 
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-8 gap-5">
    {articles.map(art => 
      <div key={art.url} className="mt-5 h-[300px] flex flex-col justify-around items-center p-4 bg-white shadow-lg">
        <h1 className="font-bold text-sm p-2 border-b-2">{art.title}</h1>
        <p className="p-4 text-sm">{art.content}</p>
        <span className="flex gap-4">
          <a href= {art.url} className="underline text-xs text-blue-900"> Read full story</a>
          <p className="text-xs "><i class="lni lni-star "></i>  Add to bookmarks</p>
          <p className="text-xs ml-8">5 mins ago</p>
        </span>
      </div>
      
      )}
      <div className="w-full flex justify-end mt-12 mb-16">
    <div className="py-1.5 px-3 cursor-pointer hover:bg-gray-500 rounded-sm text-gray-400 text-xs" onClick={(e) => getData(Number(page--))}>{backIcon} </div>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>1</h1>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>2</h1>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>3</h1>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>4</h1>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>5</h1>
      <h1 className="h-8 w-8 hover:bg-blue-900 cursor-pointer bg-gray-400 text-white rounded-sm flex justify-center items-center mx-2" onClick={(e) => getData(Number(e.target.innerText))}>6</h1>
      <div className="py-1.5 cursor-pointer hover:bg-gray-500 rounded-sm px-3 text-gray-400 text-xs" onClick={(e) => getData(Number(page++))}>{frontIcon} </div>
    </div>
    </div>
    
    }

    
    </div>
  )
      
  
}

export default App;
