import React, { useState } from 'react';
import { saveBeer } from '../../service/BeerService';

//https://react-hook-form.com/get-started#TypeScript
const CreateBeer: React.FC = () => {

  const [data, setData] = useState({})

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let result:any = {};
    result[event.target.name] = event.target.value;
    setData({...data, ...result});
  }
  
  const onSubmit = () => {
    saveBeer(data).then(resp => {
      alert('OK');
    }).catch(error => {
      console.error(error);
    });
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