import React, { useState } from 'react';
import { Button, Modal } from 'antd';

export interface formPropsTypes {
    name: string;
    pass?: string;
    age?: number;
    mail?: string;
    country?: string;
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
      <Modal title="Form data:" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>The user name will be {dataUserForm.name}</p>
        <p>The password will be {dataUserForm.pass}</p>
        <p>The age old will be {dataUserForm.age}</p>
        <p>The email will be {dataUserForm.mail}</p>
        <p>The country were you live is {dataUserForm.country}</p>
      </Modal>
    </>
  );
};

export default ModalAnt;