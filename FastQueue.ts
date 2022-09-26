namespace Agi {
    export class FastQueue {
        // initialise the queue and offset
        queue = [];
        offset = 0;

        /**
         * Returns the length of the queue.
         *
         * @returns {number}
         */
        getLength() {
            // return the length of the queue
            return (this.queue.length - this.offset);
        };


        /**
         * Returns true if the queue is empty, and false otherwise.
         *
         * @returns {boolean}
         */
        isEmpty() {
            // return whether the queue is empty
            return (this.queue.length == 0);
        };

        /**
         * Adds the specified item. The parameter is:
         *
         * @param item
         */
        enqueue(item) {
            return this.queue.push(item);
        };

        /**
         * Gets an item and returns it. If the queue is empty then undefined is
         * returned.
         *
         * @returns {*}
         */
        dequeue() {
            // if the queue is empty, return undefined
            if (this.queue.length == 0) return undefined;

            // store the item at the front of the queue
            var item = this.queue[this.offset];

            // increment the offset and remove the free space if necessary
            if (++this.offset * 2 >= this.queue.length) {
                this.queue = this.queue.slice(this.offset);
                this.offset = 0;
            }

            return item;

        };
    }
}