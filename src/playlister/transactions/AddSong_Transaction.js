import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with add song button
 * It will be managed by the transaction stack.
 *
 */
export default class AddSong_Transaction extends jsTPS_Transaction {
    constructor(initModel) {
        super();
        this.model = initModel;
    }

    doTransaction() {
        this.model.addNewSong();
    }
    
    undoTransaction() {
        this.model.deleteNewSong();
    }
}