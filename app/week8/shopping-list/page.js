"use client";

import ItemList from "./item-list";
import itemsData from "./items.json";
import NewItem from "./new-items";
import MealIdea from "./meal-ideas";
import { useState } from "react";
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {

    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    function handleSignIn() {
        gitHubSignIn();
    }

    function handleSignOut() {
        firebaseSignOut();
    }

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
    <main className="flex">

        <div>
            <h1>Week 8 - shopping List</h1>
            {!user && <button onClick={handleSignIn}>Sign In with GitHub</button>}
            {user && (
                <div>
                    <p> Welcome, {user.displayName} </p>
                    <button onClick={handleSignOut}>Sign Out</button>
                    <p><Link href= "/week7">Shopping List</Link></p>
                </div>
            )}
        </div> 
    </main>
  );
}