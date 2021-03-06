"use strict";
import Emitter from "./EventEmitter"
class Store extends Emitter {
    constructor(dispatcher) {
        super();
        this.count = 0;
        dispatcher.on("countUp", this.onCountUp.bind(this));
    }

    getCount() {
        return this.count;
    }

    onCountUp(count) {
        if (this.count === count) {
            return;
        }
        this.count = count;
        this.emit("CHANGE");
    }
}
export default Store;
