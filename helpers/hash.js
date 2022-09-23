const bcrypt = require('bcrypt'); 
 
function hash(input){ 
    return bcrypt.hashSync(input, 10);
} 
 
function compare(input, hash) { 
    return bcrypt.compareSync(input, hash);
} 
 
module.exports = { 
    hash, 
    compare
}