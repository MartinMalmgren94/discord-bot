const teamMessage = {
    channel: {
        send: () => {}
    },
    memeber: {
        voice: {
            channel: {
                members: []
            }
        }
    }
}

const teamMessageNoVoice = {
    channel: {
        send: () => {}
    },
    memeber: {}
}

class MockCollection {
    constructor() {
      this.collection = new Map();
    }
  
    set(key, value) {
      this.collection.set(key, value);
    }
  
    get(key) {
      return this.collection.get(key);
    }
  
    forEach(callback) {
      this.collection.forEach(callback);
    }
  
    array() {
      return Array.from(this.collection.values());
    }
  }

module.exports = {
    teamMessage,
    teamMessageNoVoice,
    MockCollection
}