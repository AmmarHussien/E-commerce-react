import Item from "../Item/Item";
import "./NewCollections.css";
import new_collections from "../Assets/new_collections";
function NewCollections() {
  return (
    <div className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.old_price}
              new_price={item.new_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default NewCollections;
