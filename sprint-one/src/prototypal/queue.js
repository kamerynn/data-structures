var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.size()] = value;
}

queueMethods.dequeue = function() {
	var dequeued = this.storage[0];
	for (var i = 1; i < this.size(); i++) {
		this.storage[i - 1] = this.storage[i];
	}
	delete this.storage[this.size() - 1];
	return dequeued;
}

queueMethods.size = function() {
	var counter = 0;
	_.each(this.storage, function() {
		counter++;
	})
	return counter;
}