import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';


export interface productsPropsTypes {
  id: number;
  title?: string;
  price?: number;
  description?: string;
  category?: string;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
}

const ModalProducts: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
   const [dataProducts, setDataProducts] = useState<Array<productsPropsTypes>>([])

  useEffect(() => {
    apiCall()
  }, [])
  
  const apiCall = async ()=>{
    const call = await fetch(`https://fakestoreapi.com/products`)
    const data = await call.json();
    console.log(data)
    setDataProducts(data)
    console.log(dataProducts)
  }

  
  const handleShowData = dataProducts.map((oneProduct:productsPropsTypes)=>{
    console.log(oneProduct)
    return <ul>
            <li> {oneProduct.title}</li>
          </ul>
    })

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
      <Modal title="List of products" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>{handleShowData}</p>
      </Modal>
    </>
  );
};

export default ModalProducts;