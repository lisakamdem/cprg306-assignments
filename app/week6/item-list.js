"use client"

import Item from "./item";
import { useState } from "react";


export default function ItemList({items}) {

    const [sortBy, setSortBy] = useState("name");

    const sortItems = (itemsSort,sortBy) => {
        return itemsSort.slice().sort((a,b) => a[sortBy].localeCompare(b[sortBy]));
    };


    const handleName = () => {
        setSortBy("name");    
    };

    const handleCategory = () => {
        setSortBy("category");
    };
    
const sortedItems = sortItems([...items], sortBy);

    return(
        <> 
            <div className="flex items-center justify-center">
                <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded focus:bg-blue-900 " onClick={handleName}>Sort by Name</button>
                <button className="bg-purple-500 text-white font-bold py-2 px-4 rounded focus:bg-blue-900" onClick={handleCategory}>Sort by Category</button>
            </div>
            <ul>
                <li>
                    {sortedItems.map((item) => (
                        <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
                    )
                )} 
                </li>
                          
            </ul>
        </>
    );
}




