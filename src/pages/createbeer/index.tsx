import React, { useState } from 'react';
import { Modal } from '../../components/Modal';

const CreateBeer: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  return (
    <>
      <div>
        Create
        <button onClick={() => open()}>Open Modal</button>
      </div>
      <Modal show={isOpen} onClose={() => close()} />
    </>
  )
}

export default CreateBeer;