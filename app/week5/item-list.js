"use client"

import Item from "./item";
import { useState } from "react";
import items from "./items.json";


export default function ItemList() {

    const [sortBy, setSortBy] = useState("name");

    if(sortBy === "name"){
        items.sort((a, b) => a.name.localeCompare(b.name));
    };

    if(sortBy === "category"){
        items.sort((a, b) => a.category.localeCompare(b.category));
    };


    

    const handleName = () => {
        setSortBy("name");
    };

    const handleCategory = () => {
        setSortBy("category");
    };
    

    return(
        <> 
            <div className="flex items-center justify-center">
                <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded focus:bg-blue-900 " onClick={handleName}>Sort by Name</button>
                <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded focus:bg-blue-900" onClick={handleCategory}>Sort by Category</button>
            </div>
            <ul>
                <li>
                {items.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    /> ))}
                 </li>              
            </ul>
        </>
    );
}