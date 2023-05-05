import { useEffect } from 'react';

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Recipe Book`;
  }, [title]);
};

export default useTitle;
