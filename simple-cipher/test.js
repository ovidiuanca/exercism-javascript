let charset = "abcdefghijklmnopqrstuvwxyz";

let Cipher = function(key) {
    if (typeof key === 'undefined') {
        key = '';
        for (let i = 0; i < 100; i++) {
            key += charset[Math.floor(Math.random() * charset.length)];
        }
    } else {
        if (!/^[a-z]+$/.test(key)) {
            throw new Error('Bad key');
        }
    }

    this.key = key;
};

Cipher.prototype.encode = function(plaintext) {
    let encoded = '';
    for (let i = 0; i < plaintext.length; i++) {
        let char = charset.indexOf(plaintext[i]);
        let key = charset.indexOf(this.key[i % this.key.length]);
        let result = charset[(char + key) % charset.length];
        encoded += result;
    }
    return encoded;
};

Cipher.prototype.decode = function(encoded) {
    let plaintext = '';
    for (let i = 0; i < encoded.length; i++) {
        let char = charset.indexOf(encoded[i]);
        let key = charset.indexOf(this.key[i % this.key.length]);
        let result = charset[(char - key + charset.length) % charset.length];
        plaintext += result;
    }
    return plaintext;
};

module.exports = Cipher;