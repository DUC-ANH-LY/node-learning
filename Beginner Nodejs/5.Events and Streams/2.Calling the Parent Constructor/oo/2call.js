var foo = {};
var bar = {};
// A function that uses `this`
function test(val) {
  this.val = val;
}
// Force this in func to be foo
test.call(foo, 123);
// Force this in func to be bar
test.call(bar, 456);
// Verify:
console.log(foo.val); // 123
console.log(bar.val); // 456
