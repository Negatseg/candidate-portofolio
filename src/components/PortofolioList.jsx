import React, { useState } from 'react';
import PortofolioForm from './PortofolioForm';
import Portofolio from './Portofolio';

function PortofolioList() {
  const [portofolio, setPortofolio] = useState([]);

  // Function to add a portofolio item
  const addPortofolioItem = (item) => {
    // TODO: Write logic to add the new portofolio item to the portofolio state variable
    setPortofolio([...portofolio, item]);
  };

  // Function to mark portofolio item as complete or incomplete
  const completePortofolioItem = (id) => {
    // TODO: Write logic that marks an item as complete or incomplete when invoked
    let updatedPortofolio = portofolio.map((item) =>
      item.id === id ? { ...item, eagerness: item.eagerness === 'complete' ? 'incomplete' : 'complete' } : item
    );

    setPortofolio(updatedPortofolio);
  };

  // Function to remove portofolio item and update state
  const removePortofolioItem = (id) => {
    // TODO: Write logic that will return an array of items that don't contain the ID passed to this function
    const updatedPortofolio = portofolio.filter((item) => item.id !== id);

    // TODO: Update the portofolio state variable
    setPortofolio(updatedPortofolio);
  };

  // Function to edit the portofolio item
  const editPortofolioItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.value) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the id of the item that was clicked and if so, we set it to a new value
    setPortofolio((prev) =>
      prev.map((item) => (item.id === itemId ? { ...item, value: newValue.value, eagerness: newValue.eagerness } : item))
    );
  };

  return (
    <div>
      <h1>What is on your portofolio list?</h1>
      <PortofolioForm onSubmit={addPortofolioItem} />
      <Portofolio
        portofolio={portofolio}
        completePortofolioItem={completePortofolioItem}
        removePortofolioItem={removePortofolioItem}
        editPortofolioItem={editPortofolioItem}
      />
    </div>
  );
}

export default PortofolioList;
