function AuctionBid() {
  this.subscribers = {
    any: [],
  };
}

AuctionBid.prototype = {
  subscribe: function (fn, type) {
    type = type || 'any';
    if (typeof this.subscribe[type] === 'undefined') {
      this.subscribers[type] = [];
    }
    this.subscribers[type].push(fn);
  },
  unsubscribe: function (fn, type) {
    this.visitSubscribers('unsubscribe', fn, type);
  },
  publish: function (publication, type) {
    this.visitSubscribers('publish', publication, type);
  },
  visitSubscribers: function (action, arg, type) {
    const pubType = type || 'any';
    const subscribers = this.subscribers[pubType];
    const max = subscribers.length;
    let i;

    for (i = 0; i < max; i += 1) {
      if (action === 'publish') {
        subscribers[i](arg);
      } else {
        if (subscribers[i] === arg) {
          subscribers.splice(i, 1);
        }
      }
    }
  },
};

export default AuctionBid;
