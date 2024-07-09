import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export interface formPropsTypes {
    name: string;
    pass?: string;
    age?: number;
    mail?: string;
    pais?: string;
}

type ModalFormDataPropsTypes = {
    dataUserForm: formPropsTypes 
  }

  
const ModalAnt = ({dataUserForm}:ModalFormDataPropsTypes) => {
// const ModalAnt = ({dataUserForm}:{dataUserForm:formPropsTypes}) => { //otra forma de hacerlo
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        check your data
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalAnt;