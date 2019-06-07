(function(){

  "use strict";
  
  let UuidGenerator = function(){

    let uuidv4 = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    let uuidv4Crypto = function() {
      return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
      )
    }

    this.uuidv4 = uuidv4;
    this.uuidv4Crypto = uuidv4Crypto;
  }  

  window.PollParty.UuidGenerator = new UuidGenerator();

})();