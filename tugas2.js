function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const upperCaseWords = words.map(word => word.toUpperCase());
        resolve(upperCaseWords);
      } else {
        reject('Error: Ada data yang bukan string di array!');
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.every(word => typeof word === 'string')) {
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        reject('Error: Ada data yang bukan string di array!');
      }
    });
  }
  

  const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  const complicatedArray = ['cucumber', 44, true];


    
  makeAllCaps(complicatedArray)
    .then(sortWords)
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);  
    });
  
  
  makeAllCaps(arrayOfWords)
    .then(sortWords)
    .then(result => {
      console.log(result);  
    })
    .catch(error => {
      console.log(error);
    });
