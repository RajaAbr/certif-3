import { useRef, useState } from 'react';
import CustomDialog from './components/CustomDialog';
import './App.css';

const App = () => {
  const [selectedImage, setSelectedImage] = useState('/images/image1.png');

  const images = [
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
  ];

  const modalRef = useRef(); //Ref to a modal
  const dialogRef = useRef(); //Ref to a redular dialog

  const openModal = () => modalRef.current.open();
  const closeModal = () => modalRef.current.close();

  const openDialog = () => dialogRef.current.open();
  const closeDialog = () => dialogRef.current.close();

  return (
    <div className="app-container">
      <h1>Custom Dialog Component</h1>
      <button onClick={openModal}>Open Modal Example</button>
      <button onClick={openDialog}>Open Regular Dialog Example</button>
      {/* Example of Modal wich you can not interact outside*/}
      <CustomDialog ref={modalRef} isModal>
        <div className="dialog-header">
          Example of Modal wich you can not interact outside
        </div>
        <div className="dialog-body">
          Are you sure you want to remove this item!
        </div>
        <div className="dialog-footer">
          <button onClick={closeModal}>Yes</button>
          <button onClick={closeModal}>No</button>
        </div>
      </CustomDialog>
      {/* Example of Dialog wich you can interact outside */}
      <CustomDialog ref={dialogRef} isModal={false}>
        <div className="dialog-header">
          Example of Dialog wich you can interact outside
        </div>
        <div className="dialog-body">
          <img
            src={selectedImage}
            className="selected-img"
            alt="Selected"
            fluid
          />
        </div>
        <div className="dialog-footer">
          <div>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                rounded
                className="img"
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>
          <button onClick={closeDialog}>Close</button>
        </div>
      </CustomDialog>
    </div>
  );
};

export default App;
