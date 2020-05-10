// Implementation of Fisher-Yeates shuffle 
function shuffleArray (array) {
    let m = array.length;
    let t;
    let i;
  
    while (m) {
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
  
    return array;
}

module.exports = { shuffleArray };