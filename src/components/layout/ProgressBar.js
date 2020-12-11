import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage';

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorage(file);
  console.log(progress, url);

  useEffect(() => {
    console.log('<ProgressBar /> useEffect called');
    url && setFile(null);
    //eslint-disable-next-line
  }, [url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: `${progress}%` }}
    ></motion.div>
  );
};

export default ProgressBar;
