import ItemList from "./item-list";

export default function Items({name, quantity, category,onSelect}){
    return(
        <div className="border border-sky-500 bg-purple-500 w-full max-w-xs m-4 p-2" onClick={onSelect}>
            <h2 className="text-2xl font-bold m-2 text-blue-900">{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>category: {category}</p>
        </div>
    );
}

