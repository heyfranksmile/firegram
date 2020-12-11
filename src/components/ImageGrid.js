import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImage }) => {
  const { docs } = useFirestore('images');
  return (
    <div className="img-grid">
      {docs &&
        docs.map(({ id, url }) => (
          <motion.div
            layout
            whileHover={{ opacity: 1 }}
            className="img-wrap"
            key={id}
            onClick={() => setSelectedImage(url)}
          >
            <motion.img
              src={url}
              alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
