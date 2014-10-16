function *fibonacci() {
  var i = 0, j = 1;
  while (true) {
    yield i;
    var t = i;
    i = j;
    j += t;
  }
}
for (n of fibonacci()) {
    if (n > 1000) { 
		break;
	}
    console.log(n);
}