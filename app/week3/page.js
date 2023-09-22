import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold m-2 text-purple-500">Shopping List</h1>
      <ItemList />
    </main>
  );
}