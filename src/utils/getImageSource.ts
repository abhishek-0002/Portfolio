export const getImageSource = () : string => {
    const isLocal = process.env.NODE_ENV === 'development';
  
    return isLocal
      ? ""
      : 'https://aditya-portfolio-fb9e9.web.app';
  };
  