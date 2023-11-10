"use client";

import ItemList from "./item-list";
import NewItem from "./new-items";
import MealIdea from "./meal-ideas";
import SignAndSignOut from "../page";
import Link from "next/link";
import { getItems,  addItem} from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";


export default function Page({params}) {

    const {user, gitHubSignIn ,firebaseSignOut} = useUserAuth();


    const [items, setItems] = useState([]);
    const [selectItemName, setSelectItemName] = useState("");

    const loadItems = async () => {
        const items = await getItems();
        setItems(items);
    };


    useEffect(() => {
        loadItems();} 
        ,[]
    );

    function handleAddItem(item) {
        if(user && user.uid) {
            addItem(user.uid,item).then((id) => {
                item.id = id;

                setItems( [...items, item]);
            });
        } 
    }

    function handleItemSelect(item) {
        let name = item.name.split(",")[0].replace(/[^a-zA-Z ]/g, "").trim();
        setSelectItemName(name);
    }

    return (
        <main>
            {user ? (
                <>
                    <div>
                        <button className="bg-purple-500 text-blue-900 font-bold py-2 px-4 rounded hover:bg-purple-700 focus:bg-blue-900 hover:text-white m-2 btn absolute top-0 right-0 mt-2 mr-2" onClick={firebaseSignOut}>Log Out</button>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                        <h1 className="text-3xl font-bold text-purple-500 text-center">Shopping List</h1>
                            <NewItem onAddItem={handleAddItem} />
                            <ItemList items={items} onItemSelect={handleItemSelect}/>
                        </div>
                        <div className="w-1/2">
                            <MealIdea ingredient={selectItemName}/>
                        </div>   
                    </div>
                </>) : 
                <div>
                    <p className="mb-2">Please sign in to use the shopping list</p>
                    <button onClick={gitHubSignIn}>Sign in with GitHub</button>
                </div>}
        </main>
    );
}