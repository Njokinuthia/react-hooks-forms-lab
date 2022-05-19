import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [toAddCategory, setToAddCategory] = useState("Produce")
  const [name, setName] = useState("")

  function onChangeCategory(event) {
    console.log(event.target.value);
    setToAddCategory(event.target.value);
  }
  function handleName(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit({id:uuid(), name, toAddCategory})
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleName} value={name} />
      </label>

      <label>
        Category:
        <select name="category" onChange={onChangeCategory} value={toAddCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
