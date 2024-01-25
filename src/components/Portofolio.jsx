import React, { useState } from 'react';
import PortofolioForm from './PortofolioForm';

function Portofolio(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.portofolio);

  const submitUpdate = (value) => {
    // TODO: Write logic to call the editPortofolioItem prop with the supplied values
    props.editPortofolioItem(edit.id, value);

    // TODO: Set the key:value pairs in the `edit` object back to empty strings
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    });
  };

  // If the user is attempting to edit an item, render the portofolio form with the edit variable passed as a prop
  if (edit.id) {
    return <PortofolioForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.portofolio.map((item, index) => (
    // TODO: Add a className of `portofolio-row complete ${item.eagerness}` for completed items, and `portofolio-row ${item.eagerness}` for non-completed items
    // TODO: Add a key attribute set to the value of the index position
    // Hint: use a ternary operator
    <div className={`portofolio-row ${item.eagerness}`} key={index}>
      {/* TODO: Add an onClick event that invokes the `completePortofolioItem` method passing the item id as an argument */}
      <div onClick={() => props.completePortofolioItem(item.id)}>
        {/* TODO: Add the item text here */}
        {item.value}
      </div>
      <div className="icons">
        {/* TODO: Add an onClick event to update the `edit` object with the `id`, `value`, and `eagerness` properties */}
        <p onClick={() => setEdit({ id: item.id, value: item.value, eagerness: item.eagerness })}> ✏️</p>
        {/* TODO: Add an onClick event that will invoke the removePortofolioItem method passing in the `item.id` */}
        <p onClick={() => props.removePortofolioItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default Portofolio;
