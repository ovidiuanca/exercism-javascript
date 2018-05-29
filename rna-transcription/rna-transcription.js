let DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = (nucleotides) => {
  return nucleotides
    .split('')
    .map((n) => {
      switch(n) {
        case 'C':
          return 'G';
        case 'G':
          return 'C';
        case 'A':
          return 'U';
        case 'T':
          return 'A';
        default:
          throw new Error('Invalid input');
      }            
    })
    .join('');
};

module.exports = DnaTranscriber;
