import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalProducts: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
   // const [dataProducts, setDataProducts] = useState([])

  // useEffect(() => {
  //   apiCall()
  // }, [])
  
  // const apiCall = async ()=>{
  //   const call = await fetch(`https://fakestoreapi.com/products`)
  //   const data = await call.json();
  //   console.log(data)
  // }

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
        Open Modal
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default ModalProducts;