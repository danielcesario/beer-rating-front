import React, { useState } from 'react';

const CreateBeer: React.FC = () => {

  const [data, setData] = useState({});

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let propertyName: string = event.target.name;
    let propertyValue: string = event.target.value;

    let obj: any = {}
    obj[propertyName] = propertyValue;
    
    setData({...data, ...obj})
  }

  const onSubmit = () => {
    console.log(data);
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={e => onChange(e)} />
      </div>

      <div>
        <label>Type</label>
        <input type="text" name="type" onChange={e => onChange(e)} />
      </div>

      <div>
        <label>Image URL</label>
        <input type="text" name="imageUrl" onChange={e => onChange(e)}  />
      </div>

      <div>
        <label>Alcoholic Volume</label>
        <input type="text" name="alcoholVolume" onChange={e => onChange(e)}  />
      </div>

      <div>
        <label>Description</label>
        <input type="text" name="description" onChange={e => onChange(e)}  />
      </div>

      <div>
        <label>Country</label>
        <input type="text" name="country" onChange={e => onChange(e)}  />
      </div>

      <div>
        <button onClick={() => onSubmit()}>Submit</button>
      </div>

    </div>
  )
}

export default CreateBeer;