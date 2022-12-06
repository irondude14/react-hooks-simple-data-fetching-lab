// create your App component here

import React, { useState, useEffect } from 'react';

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        setImage(data.message);
      });
  }, []);

  if (!image) {
    return <p>Loading...</p>;
  }

  console.log(image);

  return <img src={image} alt="A Random Dog" />;
}

export default App;
