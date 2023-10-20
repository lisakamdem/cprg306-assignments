"use client";
import Item from "./item";
import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-items";
import MealIdea from "./meal-ideas";
import { useState } from "react";


export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectItemName, setSelectItemName] = useState("");

    function handleAddItem(item) {
        setItems( [...items, item]);
        
    }

    function handleItemSelect(item) {
        let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
        setSelectItemName(name);
    }

  return (
    <main>
    <div className="w-1/2">
      <h1 className="text-3xl font-bold m-2 text-purple-500">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect}/>
      </div>
        <div className="w-1/2">
          <MealIdea ingredient={selectItemName}/>
        </div>    
    </main>
  );
}