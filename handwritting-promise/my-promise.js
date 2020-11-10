function MyPromise(executor) {
  let self = this;
  self.value = undefined;
  self.reason = undefined;

  self.status = "pending";
  self.onResolvedCallbacks = [];
  self.onRejectedCallbacks = [];

  function resolve(value) {
    if (self.status === "pending") {
      self.value = value;
      self.status = "resolved";
      self.onResolvedCallbacks.forEach(fn => {
        fn();
      });
    }
  }

  function reject(reason) {
    if (self.status === "pending") {
      self.reason = reason;
      self.status = "rejected";
      self.onRejectedCallbacks.forEach(fn => {
        fn();
      });
    }
  }

  executor(resolve, reject);
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  let self = this;
  if (self.status === "resolved") {
    onFulfilled(self.value);
  }
  if (self.status === "rejected") {
    onRejected(self.reason);
  }
  if (self.status === "pending") {
    self.onResolvedCallbacks.push(function() {
      onFulfilled(self.value);
    });
    self.onRejectedCallbacks.push(function() {
      onRejected(self.reason);
    });
  }
};

// testing
let p = new MyPromise(function(resolve, reject) {
  console.log("start");
  setTimeout(function() {
    resolve("data");
  }, 2000);
});
