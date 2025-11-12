class PriorityQueue extends Queue {
  enqueue(element, priority = 0) {
    const queueElement = { element, priority };
    let added = false;
    for (let i = 0; i < this.items.length; i++) {
        if (queueElement.priority > this.items[i].priority) {
            this.items.splice(i, 0, queueElement);
            added = true;
            break;
        }
    }
    if (!added) {
        this.items.push(queueElement);
    }
  }
  
  dequeue() {
    return this.items.shift()?.element;

  }
}

// Utilisation
const pq = new PriorityQueue();
pq.enqueue('Tâche normale', 1);
pq.enqueue('Tâche urgente', 5);
pq.enqueue('Tâche peu importante', 0);

console.log(pq.dequeue()); // 'Tâche urgente' (priorité 5)
console.log(pq.dequeue()); // 'Tâche normale' (priorité 1)
console.log(pq.dequeue()); // 'Tâche peu importante' (priorité 0)