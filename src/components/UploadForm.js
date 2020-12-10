import React, { useState } from 'react';
import ProgressBar from './layout/ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [errMsg, setErrMsg] = useState('');

  const permittedFiles = ['image/png', 'image/jpeg'];
  const changeHandler = (e) => {
    let userFile = e.target.files[0];
    if (userFile && permittedFiles.includes(userFile.type)) {
      setFile(userFile);
      setErrMsg('');
    } else {
      setFile(null);
      setErrMsg('Please choose an image file (.png or .jpeg)');
    }
  };
  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>+</span>
      </label>

      <div className="output">
        {errMsg && <div className="error">{errMsg}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  );
};

export default UploadForm;
