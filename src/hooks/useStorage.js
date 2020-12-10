const { useState, useEffect } = require('react');
const { appStorage } = require('../firebase/config');

const useStorage = (file) => {
  console.log('useStorage called');
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    console.log('CH useEffect called');
    const storageRef = appStorage.ref(file.name);
    storageRef.put(file).on(
      'state_changed',
      ({ bytesTransferred, totalBytes }) => {
        setProgress((bytesTransferred / totalBytes) * 100);
        console.log('progress state changed');
      },
      (err) => {
        setError(err);
      },
      async () => {
        console.log('upload complete + url state to change');
        let url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  console.log('stuff returned');
  return { progress, error, url };
};

export default useStorage;
