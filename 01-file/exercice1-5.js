class Queue {

     // Initialise la file vide
    constructor() {
        this.array = [];
    }

    // Ajoute un élément à la fin
    enqueue(element) {
        this.array.push(element);
    }

    // Retire et retourne le premier élément
    dequeue() {
        const removed = this.array[0]; 
        this.array.shift(); 
        return removed;
    }

    // Retourne le premier élément sans le retirer
    front() {
        return this.array[0];
    }

    // Vérifie si la file est vide
    isEmpty(){
        if(this.array.length === 0){
            return true;
        }
        return false;
    }

    // Retourne le nombre d'éléments
    size() {
        return this.array.length;
    }

    // Vide complètement la file
    clear() {
        this.array = [];
    }

    // Retourne tous les éléments sous forme de tableau
    toArray() {
        return [...this.array];
    }

    // Retourne le dernier élément sans le retirer
    rear() {
        return this.array[this.array.length - 1];
    }

    // Vérifie si un élément existe dans la file
    contains(element) {
        for (let i = 0; i < this.array.length; i++) {
            if (this.array[i] === element) {
                return true;
            };
        }
        return false;
    }

    // Crée une copie indépendante de la file
    clone() {
        const copy = new Queue();
        copy.enqueue(...this.array);
        return copy;
    }
}