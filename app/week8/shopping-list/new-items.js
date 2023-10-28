"use client"
import { useState } from "react";

export default function NewItem({onAddItem}) {
    const [name, setName ] = useState("");
    const [quantity, setQuantity ] = useState(1);
    const [category, setCategory ] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            name,
            quantity,
            category,
        };

        console.log(item);
        /*alert("Item Added!" + "\n" + "Name: " + name + "\n" + 
            "Quantity: " + quantity + "\n" + "Category: " + category);*/

        onAddItem(item);
        
        setName("");
        setQuantity(1);
        setCategory("produce");
    };

    return(
        <div className=" flex items-center justify-center">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    required
                    type="text"
                    className="block w-full bg-white rounded py-2 px-4 mb-3 text-black placeholder:text-gray-500  focus:ring-purple-500 focus: ring-4"
                    placeholder="Enter item name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <label htmlFor="quantity">Quantity</label>
                <input
                    required
                    type="number"
                    className="block w-full bg-white rounded py-2 px-4 mb-3 text-black  focus:ring-purple-500 focus: ring-4"
                    min = "1"
                    max = "99"
                    value={quantity}
                    onChange={(event) => setQuantity(event.target.value)}
                />
                <label htmlFor="category">Category</label>
                <select
                    className="block w-full bg-white rounded py-2 px-4 mb-3 text-black focus:ring-purple-500 focus: ring-4"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen Foods">Frozen Foods</option>
                    <option value="Canned Goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="HouseHold">HouseHold</option>    
                    <option value="other">Other</option>
                </select>
                <button type="submit" className="w-full bg-purple-500 hover:bg-purple-700 text-blue-900 font-bold py-2 px-4 rounded hover:text-white"
                >Add Item</button>
            </form>
        </div>

    );
}