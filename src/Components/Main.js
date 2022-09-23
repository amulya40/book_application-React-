import React,{useState} from "react";
import Card from "./Card";
import axios from "axios"
const Main=()=>{
    const [search,setSearch]=useState(""); //search button working
    const [bookData,setData]=useState([]);

    let searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDXR1Yy3wlSpdgNkRzhsKDrFVlPqKRkXR0'+'&maxResults=40')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    // Structure Part
    return(
        <>
        <div className="header">
           <div className="row1">
                <h1>A book is a gift you can  <br/>open again and again.</h1>
           </div>
           <div className="row2">
                <h2>Find Your Book</h2>
                <div className="search">
                    <input type="text" placeholder="Enter Your Book Name" 
                    value={search} onChange={e=>setSearch(e.target.value)}
                    onKeyPress={searchBook}/>

                    <button><i class='bx bx-search-alt-2' ></i></button>
                </div>
                <img src="./images/bg2.png" alt="kids reading book"/>
           </div>
        </div>
        <div className="container">
            <Card book={bookData}/>
        </div>

        </>
    )
}

export default Main;