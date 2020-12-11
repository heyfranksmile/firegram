import { motion } from 'framer-motion';
import React, { useRef } from 'react';
const Modal = ({ setSelectedImage, selectedImage }) => {
  const imgRef = useRef(null);

  const closeModal = (e) =>
    e.target !== imgRef.current && setSelectedImage(null);

  return (
    <motion.div
      className="backdrop"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        ref={imgRef}
        src={selectedImage}
        alt="selected img"
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
