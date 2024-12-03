import FormInput from "./FormInput";

function ItemList({ form, setForm }) {
  const { products } = form;

  const addHandler = () => {
    setForm({
      ...form,
      products: [...products, { name: "", price: "", qty: "" }],
    });
    console.log(products);
  };

  const changeHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className="item-list">
      <p>Purchased products</p>
      {products.map((product, index) => (
        <div className="form-input__list" key={index}>
          <FormInput name="name" label="Product Name" type="text" value={product.name} onChange={changeHandler} />
          <div>
            <FormInput name="price" label="Price" type="text" value={product.price} onChange={changeHandler} />
            <FormInput name="qty" label="Quantity" type="text" value={product.qty} onChange={changeHandler} />
          </div>
          <button onClick={deleteHandler}>Remove</button>
        </div>
      ))}
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
}

export default ItemList;
