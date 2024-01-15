/**Una tabla hash, matriz asociativa, hashing, mapa hash, tabla de dispersión o tabla fragmentada es una estructura de datos 
 * que asocia llaves o claves con valores.La operación principal que soporta de manera eficiente es la búsqueda: permite el 
 * acceso a los elementos (teléfono y dirección, por ejemplo) almacenados a partir de una clave generada 
 * (usando el nombre o número de cuenta, por ejemplo). Funciona transformando la clave con una función hash en un hash, 
 * un número que identifica la posición (casilla o cubeta) donde la tabla hash localiza el valor deseado */
class HashTable {
    constructor(size) {
        this.values={};
        this.numberOfValues=0;
        this.size=size;
    }

    add(key,value){
        const hash=this.calculateHash(key);
        if(!this.values.hasOwnProperty(hash)){
            this.values[hash] = {};
        }
        if(!this.values[hash].hasOwnProperty(key)){
            this.numberOfValues++;
        }
        this.values[hash][key]=value;
    }

    remove(key) {
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          delete this.values[hash][key];
          this.numberOfValues--;
        }
    }

    calculateHash(key) {
        return key.toString().length % this.size;
    }

    search(key) {
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
          return this.values[hash][key];
        } else {
          return null;
        }
    }

    length() {
        return this.numberOfValues;
    }

    print() {
        let string = '';
        for(const value in this.values) {
          for(const key in this.values[value]) {
            string += `${this.values[value][key]} `;
          }
        }
        console.log(string.trim());
      }
}

const hashTable=new HashTable(3);
hashTable.add('first',1);
hashTable.add('second', 2);
hashTable.add('third', 3);
hashTable.add('fourth', 4);
hashTable.add('fifth', 5);
hashTable.print();
console.log('length gives 5:', hashTable.length());
console.log('search second gives 2:', hashTable.search('second'));
hashTable.remove('fourth');
hashTable.remove('first');
hashTable.print(); 
console.log('length gives 3:', hashTable.length());
