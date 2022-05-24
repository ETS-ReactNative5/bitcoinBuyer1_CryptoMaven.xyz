
// 3 Prototypes: 
// HashMethods(storageLimit = 10)
// hashSeparateChainingProto(size = 53);
// transactHash(size) 

// HashTable
console.log("%c DataServices HASH TABLE: ", "color:black; background-color:yellow");


export function HashMethods(storageLimit = 10) { 
    this.keyMapArray = [];
  this.storageLimit = storageLimit; // i.e. maxLength if not specified as arg
}; // END Hash fx

HashMethods.prototype.hash = function (string, maxLength) {
  let hashResult = 0;
  for (var i = 0; i < string.length; i++) {
    hashResult += string.charCodeAt(i)-96;   //    
  }
  return hashResult % maxLength;
};

  HashMethods.prototype.print = function() {
    console.log(this.keyMapArray);
  };

  HashMethods.prototype.add = function(key, value) {
    let index = this.hash(key, this.storageLimit);
    if (this.keyMapArray[index] === undefined) {
      this.keyMapArray[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < this.keyMapArray[index].length; i++) {
        if (this.keyMapArray[index][i][0] === key) {
          this.keyMapArray[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        this.keyMapArray[index].push([key, value]);
      }
    }
  }; // end add fx

  HashMethods.prototype.remove = function(key) {
    var index = this.hash(key, this.storageLimit);
    if (this.keyMapArray[index].length === 1 && this.keyMapArray[index][0][0] === key) {
      delete this.keyMapArray[index];
    } else {
      for (var i = 0; i < this.keyMapArray[index]; i++) {
        if (this.keyMapArray[index][i][0] === key) {
          delete this.keyMapArray[index][i];
        }
      }
    }
  }; // end remove fx

  HashMethods.prototype.lookup = function(key) {
    var index = this.hash(key, this.storageLimit);
    if (this.keyMapArray[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < this.keyMapArray[index].length; i++) {
        if (this.keyMapArray[index][i][0] === key) {
          return this.keyMapArray[index][i][1];
        }
      }
    }
  }; //end lookup fx

  HashMethods.prototype.printCheck = function(){ 
  console.log(this.hash("thomas", 10));
  let ht = new HashMethods();
  ht.add("alpha", "one");
  ht.add("beta", "two");
  ht.add("gamma", "three");
  ht.add("delta", "four");
  ht.add("epsilon", "five");
  console.log(ht.lookup("gamma"));
  ht.print();

  }
let check = new HashMethods();
check.printCheck();

export function hashSeparateChainingProto(size = 53) {
  this.count = 0; // Tracks actual item count in table
  this.size = size; // currsize of h-table
  // not implemented:
  // this.maxLoadFactor = 0.667 // when table crosses 2/3rds capacity, size will either need to be increased or decreased
  // this.increaseBy = 1.5 // x approaches infinity, amortized to O(N)
  this.keyMap = new Array(size);
}

// O(N)
hashSeparateChainingProto.prototype.hashSimple = function (key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};
 
// O(1)
hashSeparateChainingProto.prototype.hashPrime = function (key, arrayLen) {
  let total = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = char.charCodeAt(0) - 96;
    total = (total + PRIME + value) % arrayLen;
  }
  return total;
};
// separate chaining =>
// Can store more keys than size of array....
// Separate Chaining	Very Easy to implement
// Memory Inefficient – requires a secondary data structure to store collisions Long Chains will produce Linear search times

hashSeparateChainingProto.prototype.hashFull = function (key) {
  let random = Math.floor(Math.random() * 113);
  let hashResult = 0;
  let PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    hashResult = (hashResult + value + PRIME + random) % keyMap.length; // must increase if resizing
  }
  return hashResult;
};
// return ((a * x + b) /% PRIME) % mSize // return result of hash formula

// Open Addressing //  linear probing
/* 
        This is because the memory addresses used for the single list are closer together, while separate chaining can have each data structure in different locations 
        far apart from each other. ... 
         linear probing leaves all values in one place in the single list
         
        Advantages:
        Open Addressing	Memory Efficient – stores elements in empty array spaces	
        Disadvantages: Creates Clusters with Linear and Quadratic Probing
        
        */

export function transactHash(size) {
  this.count = 0; // Tracks actual item count in table
  this.size = size; // current storage size of table
  this.maxLoadFactor = 0.667; // when table crosses 2/3rds capacity, size will either need to be increased or decreased
  this.increaseBy = 1.5; // x approaches infinity, amortized to O(N)
  this.table = new Array(size); // table holding keys & values
}
// Prototypal method more ru than pseudo-class b/c faster, except without encapsulation   // Saving Space, assigning props to the prototype
// post-char number for key
transactHash.prototype.hash = function (key) {
  let a = 113; // random number between 1 and p - 1
  let b = 87; // random number between 1 and p - 1
  let PRIME = 10000019;
  let mSize = this.size; // hash table
  return ((a * key + b) % PRIME) % mSize; // return result of hash formula
};

transactHash.prototype.add = function (key, value) {
  // Constant Time
  key.replace(/-/g, ""); // replace hyphens from key input
  let hash = this.hash(key); // create hash value out of key

  if (this.table[hash]) {
    // if position is already filled
    if (this.table[hash].key == key) {
      // if table position's key matches
      this.table[hash].value = value; // update value
    } else {
      let val = this.probe(hash);
      this.table[val] = { key, value }; // then place key and value in found empty position
      this.count++; // increment count of transaction ledger after adding value
    }
  } else {
    // ff position empty
    this.table[hash] = { key, value }; // place key and value in found empty position
    this.count++; // increment count of transaction ledger after adding value
  }
  if (this.count >= this.size * this.maxLoadFactor) {
    // if transaction ledger is full
    this.increaseSize(); // call function to increase size of table
  }
};

transactHash.prototype.probe = function (hash) {
  var a = 1; // 1 or where GCD of size and a is 1
  var i = 0; // counter to use for incrementing
  var val = (hash + a * i) % this.size; // get value with probe of 0
  while (this.table[val]) {
    // while table's position is filled
    i++; // increment i
    val = (hash + a * i) % this.size; // probe next position
  }
  return val; // return the result of the hash and probe function that results in an empty table position
};
transactHash.prototype.increaseSize = function () {
  var temp = this.table; // set current table equal to temp variable
  this.size = this.size * this.increaseBy; // increase size of transaction ledger
  this.table = new Array(this.size); // create new table with updated size
  for (i = 0; i < temp.length; i++) {
    // loop through current table
    if (temp[i]) {
      // if value in current table at position
      var key = temp[i].key; // get key at position
      var value = temp[i].value; // get value at position
      var hash = this.hash(key); // hash key value
      if (this.table[hash]) {
        // if position is already filled
        var val = this.probe(hash); // get new hash value returned from probe function
        this.table[val] = { key, value }; // then place key and value in found empty position
      } else {
        // if position empty
        this.table[hash] = { key, value }; // place key and value in found empty position
      }
    }
  }
};
