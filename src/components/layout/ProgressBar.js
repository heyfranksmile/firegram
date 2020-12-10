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

  return <div className="progress-bar" style={{ width: `${progress}%` }}></div>;
};

export default ProgressBar;
