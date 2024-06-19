var EventEmitter = require("events").EventEmitter;
var emitter = new EventEmitter();
// Subscribe
emitter.on("foo", function (arg1, arg2) {
  console.log("Foo raised, Args:", arg1, arg2);
});

emitter.on("foo1", function (arg1, arg2) {
  console.log("Foo1 raised, Args:", arg1, arg2);
});
// Emit
emitter.emit("foo", { a: 123 }, { b: 456 });
emitter.emit("foo1", { a: "fdsafad" }, { b: 456 });
