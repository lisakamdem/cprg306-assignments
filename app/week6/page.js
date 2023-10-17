"use client";
import Item from "./item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-item";
import { useState } from "react";




export default function Page() {

    const [items, setItems] = useState(itemsData);

    function handleAddItem(item) {
        setItems( [...items, item]);
        
    }

  return (
    <main>
      <h1 className="text-3xl font-bold m-2 text-purple-500">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
      <ItemList items={items}/>
    </main>
  );
}