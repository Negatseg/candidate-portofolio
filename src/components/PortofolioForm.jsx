import { useState } from 'react';

function PortofolioForm(props) {
  const [input, setInput] = useState('');
  let [eagerness, setEagerness] = useState('');

  // TODO: Use this array in the return statement below
  const eagernessLevel = ['high', 'medium', 'low']

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!eagerness) {
      eagerness = 'low';
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      eagerness: eagerness,
    });

    setInput('');
    setEagerness('');
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="portofolio-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your portofolio list"
          value={input}
          name="text"
          className="portofolio-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={()=>setEagerness(eagernessLevel[0])}>Must add</p>
            <p onClick={()=>setEagerness(eagernessLevel[1])}>Want to add</p>
            <p onClick={()=>setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="portofolio-button">Add portofolio list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="portofolio-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="portofolio-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${eagerness}`}>
            {eagerness || 'Priority'}
          </button>
          <div className="dropdown-content">
            {/* TODO: Add an onClick event that will set the corresponding eagerness level from the `eagernessLevel` array */}
            <p onClick={()=>setEagerness(eagernessLevel[0])}>Must do</p>
            <p onClick={()=>setEagerness(eagernessLevel[1])}>Want to do</p>
            <p onClick={()=>setEagerness(eagernessLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="portofolio-button">Update</button>
      </form>
    </div>
  );
}

export default PortofolioForm;
