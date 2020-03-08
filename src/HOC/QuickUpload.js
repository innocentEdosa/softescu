/* eslint-disable camelcase */
import { useState } from 'react';
import { createApiService } from 'api';

const QuickDownload = ({ children }) => {
  const [imageUploadState, setImageUploadState] = useState({
    loading: false,
    error: false,
    img: '',
  });

  const service = createApiService('post', '/image/upload', 'https://api.cloudinary.com/v1_1/dqw7jnfgo');
  const uploadImage = async (e) => {
    e.preventDefault();
    const { files } = e.target;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'softescu');
    setImageUploadState((prevState) => ({
      ...prevState,
      loading: true,
    }));
    try {
      const { data: { secure_url } } = await service(data);
      setImageUploadState((prevState) => ({
        ...prevState,
        loading: false,
        img: secure_url,
      }));
    } catch (error) {
      setImageUploadState((prevState) => ({
        ...prevState,
        loading: false,
        error: true,
      }));
    }
  };


  return (children({ uploadImage, imageUploadState }));
};

export default QuickDownload;
