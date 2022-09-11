import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with add song button
 * It will be managed by the transaction stack.
 *
 */
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, initdName, initdArtist, initdYoutubeId) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.dName = initdName;
        this.dArtist = initdArtist;
        this.dYoutubeId = initdYoutubeId;
    }

    doTransaction() {
        this.dName = this.model.storeName(this.index);
        this.dArtist = this.model.storeArtist(this.index);
        this.dYoutubeId = this.model.storeYoutubeId(this.index);
        this.model.deleteSong(this.index);
    }
    
    undoTransaction() {
        this.model.undeleteSong(this.index,  this.dName,  this.dArtist,  this.dYoutubeId);
    }
}