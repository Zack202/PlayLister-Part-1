import jsTPS_Transaction from "../../common/jsTPS.js"
/**
 * AddSong_Transaction
 * 
 * This class represents a transaction that works with add song button
 * It will be managed by the transaction stack.
 *
 */
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initModel, initIndex, initOldName, initOldArtist, initOldYoutubeId, initNewName, initNewArtist, initNewYoutubeId) {
        super();
        this.model = initModel;
        this.index = initIndex;
        this.oldName = initOldName;
        this.newName = initNewName;
        this.oldArtist = initOldArtist;
        this.newArtist = initNewArtist;
        this.oldYoutubeId = initOldYoutubeId;
        this.newYoutubeId = initNewYoutubeId;
    }

    doTransaction() {
        this.oldName = this.model.storeName(this.index);
        this.oldArtist = this.model.storeArtist(this.index);
        this.oldYoutubeId = this.model.storeYoutubeId(this.index);
        this.model.editSong(this.index,  this.newName,  this.newArtist,  this.newYoutubeId);
    }
    
    undoTransaction() {
        this.newName = this.model.storeName(this.index);
        this.newArtist = this.model.storeArtist(this.index);
        this.newYoutubeId = this.model.storeYoutubeId(this.index);
        this.model.editSong(this.index,  this.oldName,  this.oldArtist,  this.oldYoutubeId);
    }
}