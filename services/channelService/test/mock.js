const channelServiceMessage = {
    channel: {
      type: "text",
      deleted: false,
      id: "288679079773863936",
      name: "general",
      rawPosition: 0,
      parentID: undefined,
      permissionOverwrites: {
      },
      topic: null,
      nsfw: undefined,
      lastMessageID: "1154453741458706482",
      rateLimitPerUser: 0,
      lastPinTimestamp: null,
      guild: {
        members: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
          guild: [Circular],
        },
        channels: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
          guild: [Circular],
        },
        roles: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
          guild: [Circular],
        },
        presences: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
        },
        voiceStates: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
          guild: [Circular],
        },
        deleted: false,
        available: true,
        id: "288679079773863936",
        shardID: 0,
        name: "YOLO",
        icon: null,
        splash: null,
        region: "deprecated",
        memberCount: 3,
        large: false,
        features: [
        ],
        applicationID: null,
        afkTimeout: 300,
        afkChannelID: null,
        systemChannelID: null,
        embedEnabled: undefined,
        premiumTier: 0,
        premiumSubscriptionCount: 0,
        verificationLevel: "NONE",
        explicitContentFilter: "DISABLED",
        mfaLevel: 0,
        joinedTimestamp: 1683532120581,
        defaultMessageNotifications: "ALL",
        systemChannelFlags: {
          bitfield: 0,
        },
        maximumMembers: 500000,
        vanityURLCode: null,
        description: null,
        banner: null,
        rulesChannelID: null,
        publicUpdatesChannelID: null,
        ownerID: "282587091928350721",
        emojis: {
          cacheType: class Collection extends BaseCollection {
            toJSON() {
              return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
            }
          },
          cache: {
          },
          guild: [Circular],
        },
      },
      messages: {
        cacheType: class LimitedCollection extends Collection {
          constructor(maxSize = 0, iterable = null) {
            super(iterable);
            /**
             * The max size of the Collection.
             * @type {number}
             */
            this.maxSize = maxSize;
          }
          
          set(key, value) {
            if (this.maxSize === 0) return this;
            if (this.size >= this.maxSize && !this.has(key)) this.delete(this.firstKey());
            return super.set(key, value);
          }
          
          static get [Symbol.species]() {
            return Collection;
          }
        },
        cache: {
          maxSize: 200,
        },
        channel: [Circular],
      },
      _typing: {
      },
    },
    deleted: false,
    id: "1154453741458706482",
    type: "DEFAULT",
    content: "!roll -all",
    author: {
      id: "282587091928350721",
      bot: false,
      username: "marrequick",
      discriminator: "0",
      avatar: "9f3722e2ace708b8dab40848955d898d",
      lastMessageID: "1154453741458706482",
      lastMessageChannelID: "288679079773863936",
    },
    pinned: false,
    tts: false,
    nonce: "1154453740665700352",
    system: false,
    embeds: [
    ],
    attachments: {
    },
    createdTimestamp: 1695313620677,
    editedTimestamp: null,
    reactions: {
      cacheType: class Collection extends BaseCollection {
        toJSON() {
          return this.map(e => (typeof e.toJSON === 'function' ? e.toJSON() : Util.flatten(e)));
        }
      },
      cache: {
      },
      message: [Circular],
    },
    mentions: {
      everyone: false,
      users: {
      },
      roles: {
      },
      _members: null,
      _channels: null,
      crosspostedChannels: {
      },
    },
    webhookID: null,
    application: null,
    activity: null,
    _edits: [
    ],
    flags: {
      bitfield: 0,
    },
    reference: null,
  }

  module.exports = {
    channelServiceMessage
  };