import React, { useState } from 'react';
import { Beer } from '../../model/Beer';

//TODO:https://react-hook-form.com/get-started
const CreateBeer: React.FC = () => {

  const [name, setName] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [alcoholVolume, setAlcoholVolume] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const onSubmit = () => {
    let beer: Beer = {
      id: null,
      name: name,
      type: type,
      imageUrl: imageUrl,
      alcoholVolume: alcoholVolume,
      description: description,
      country: country
    };

    console.log(beer);
  }

  return (
    <div>
      <div>
        <label>Name</label>
        <input type="text" name="name" onChange={e => setName(e.target.value)} />
      </div>

      <div>
        <label>Type</label>
        <input type="text" name="type" onChange={e => setType(e.target.value)} />
      </div>

      <div>
        <label>Image URL</label>
        <input type="text" name="imageUrl" onChange={e => setImageUrl(e.target.value)}  />
      </div>

      <div>
        <label>Alcoholic Volume</label>
        <input type="text" name="alcoholVolume" onChange={e => setAlcoholVolume(e.target.value)}  />
      </div>

      <div>
        <label>Description</label>
        <input type="text" name="description" onChange={e => setDescription(e.target.value)}  />
      </div>

      <div>
        <label>Country</label>
        <input type="text" name="country" onChange={e => setCountry(e.target.value)}  />
      </div>

      <div>
        <button onClick={() => onSubmit()}>Submit</button>
      </div>

    </div>
  )
}

export default CreateBeer;