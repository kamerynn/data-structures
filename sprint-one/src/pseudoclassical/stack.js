var Stack = function() { this.storage = {}; };

Stack.prototype.push = function(value) {
  this.storage[this.size()] = value;
}

Stack.prototype.pop = function() {
  var popped = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return popped;
}

Stack.prototype.size = function() {
  var counter = 0;
  _.each(this.storage, function() {
    counter++;
  });
  return counter;
}