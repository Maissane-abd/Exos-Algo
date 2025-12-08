class Stack {
    
  // tableau pour stocker les éléments de la pile
  constructor() {
    this.array = []; 
  }

   // ajoute l'élément au sommet
  push(element) {
    this.array[this.array.length] = element;
  }

  pop() {
    if (this.array.length === 0) {
        return undefined;
    } // si pile vide
    
    const remove = this.array[this.array.length - 1];
    this.array.length = this.array.length - 1; // retire le dernier élément
    //ou
    delete this.array[this.array.length - 1];
    return remove;
  }

  peek() {
    if (this.array.length === 0) {
        return undefined;
    } // si pile vide
    
    return this.array[this.array.length - 1]; // retourne le sommet
  }

  // true si pile vide, false sinon
  isEmpty() {
   {if(this.array.length === 0){
    return true;
}
return false;} 
  }

  // nombre d'éléments dans la pile
  size() {
    return this.array.length; 
  }

  // vide complètement la pile
  clear() {
    this.array.length = 0; 
  }

  // copie du sommet vers le bas
  toArray() {
    const tab = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      tab.push(this.array[i]); 
    }
    return tab;
  }

  // inverse l'ordre
  reverse() {
    const temp = [];
    for (let i = this.array.length - 1; i >= 0; i--) {
      temp.push(this.array[i]); 
    }
    this.array = temp;
  }

  getMin() {
    if (this.array.length === 0){ return undefined;};
    let min = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] < min) {
        min = this.array[i];
      }
    }
    return min;
  }

  getMax() {
    if (this.array.length === 0) {return undefined;};
    let max = this.array[0];
    for (let i = 1; i < this.array.length; i++) {
      if (this.array[i] > max) {
        max = this.array[i];
      }
    }
    return max;
  }
}
