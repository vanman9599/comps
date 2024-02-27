import React, {useState} from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    const handleClick = () =>{
        setShowModal(true)
    }

    const handleClose = ({onClose}) =>{
        setShowModal(false);
    } 
    const actionBar = <div>
        <Button onClick={handleClose} primary>Close</Button>
    </div>
    const modal = <Modal onClose={handleClose}  actionBar={actionBar}>
        <p>This website is for demonstration purposes. Each c<Modal onClose={handleClose} />omponent was 
        created from scratch using React. </p>
        </Modal>
  return (
    <div className='relative'>
        <Button  onClick={handleClick} primary>Open Modal</Button>
        {showModal && modal}</div>
  )
}

export default ModalPage