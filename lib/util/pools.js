import { uuid as _uuid } from './uuid';

var uuid = _uuid;

export var pools = {};
export var count = 10000;

export function createPool(size, name, fill) {
  var free = [];
  var allocated = [];
  var index = new WeakMap();

  // Prime the cache with n objects.
  for (var i = 0; i < size; i++) {
    free[i] = fill();
  }

  return {
    _free: free,
    _allocated: allocated,

    get: function() {
      var obj = null;
      var freeLength = free.length;
      var minusOne = freeLength - 1;

      if (freeLength) {
        obj = free[minusOne];
        free.length = minusOne;
      }
      else {
        obj = fill();
      }

      var idx = allocated.push(obj);

      if (typeof obj === 'string') {
        index[obj] = idx;
      }
      else {
        index.set(obj, idx - 1);
      }

      return obj;
    },

    freeAll: function() {
      var allocatedLength = allocated.length;

      for (let i = 0; i < allocatedLength; i++) {
        this.free(allocated[i]);
      }

      allocated.length = 0;
    },

    free: function(obj) {
      var idx = null;

      if (!obj) { return; }

      if (typeof obj === 'string') {
        idx = index[obj];
      }
      // Required else, because the WeakMap polyfill has an issue with
      // "invalid" keys.
      else {
        idx = index.get(obj);

        // Remove from index map.
        index.delete(obj);
      }

      idx = idx || -1;

      // Already freed.
      if (idx === -1) { return; }

      // Clean.
      if (typeof obj !== 'string' && obj.length) {
        obj.length = 0;
      }
      else if (typeof obj !== 'string') {
        for (var key in obj) {
          obj[key] = void 0;
        }
      }

      // Only put back into the free queue if we're under the size.
      if (free.length < size) {
        free.push(obj);
      }

      allocated.splice(idx, 1);
    }
  };
}


export function initializePools(COUNT) {
  pools.object = createPool(COUNT, 'object', function() {
    return {};
  });

  pools.array = createPool(COUNT, 'array', function() {
    return [];
  });

  pools.uuid = createPool(COUNT, 'uuid', function() {
    return uuid();
  });
}

// Create 10k items of each type.
initializePools(count);