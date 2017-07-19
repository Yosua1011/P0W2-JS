var input = 'hello, world!'

function balikString(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

console.log(balikString(input));

