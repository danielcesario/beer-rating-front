import React, { useEffect, useState } from 'react';
import { ModalContainer } from './styles';

//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal2
export const Modal: React.FC<{show: boolean, onClose: any}> = ({show, onClose}) => {

  const [display, setDisplay] = useState('none');

  useEffect(() => {
    if(show) {
      setDisplay('block');
    } else {
      setDisplay('none');
    }
  }, [show]);

  const close = () => {
    setDisplay('none');
    onClose();
  }

  return (
    <ModalContainer id="myModal" className="modal" display={display}>
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={() => close()}>&times;</span>
          <h2>Modal Header</h2>
        </div>
        <div className="modal-body">
          <p>Some text in the Modal Body</p>
          <p>Some other text...</p>
        </div>
        <div className="modal-footer">
          <h3>Modal Footer</h3>
        </div>
      </div>
    </ModalContainer>
  )
}