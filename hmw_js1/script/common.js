
var x = prompt("Enter x:", '');
var n = prompt("Enter n:", '');

function pow(x, n) {
var result = x;
for (var i = 0; i < n; i++) {
result *= x;
}
return result;
};
alert(pow(x,n));
