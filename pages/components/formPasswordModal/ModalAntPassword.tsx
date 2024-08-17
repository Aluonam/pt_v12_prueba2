import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalAntPassword = ({userPassword}:{userPassword :string}) => {
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
        Show your password
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>The password entered is: {userPassword}</p>
      </Modal>
    </>
  );
};

export default ModalAntPassword;