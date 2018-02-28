module.exports = function solveEquation(equation) {
  var a, b, c, x1, x2, d, y, z , x, f, i, g, str, w , o, m
  str = equation
  var solution = []
  y = str.indexOf(" * x^2 ")
    a = str.slice(0,y);
    a = +a
     d = str.slice(y + 7);
      f = d.slice(0,1);
      s = d.indexOf(" * x ");
      w = d.slice(2,s)
      b = f + w
      b = +b

    k = d.slice(s + 5);

      m = k.slice(0,1);
      o = k.slice(2);
      c = m + o
      c = +c


  g = b*b - 4 * a * c;
      x1 = Math.round(((- b + Math.sqrt(g)) / (2 * a)));
      x2 = Math.round(((- b - Math.sqrt(g)) / (2 * a)));

 for (i=0; i < 2; i++) {
solution.push(x1,x2);
function sort(a,b) {
  if (a > b)
  return 1;
  if (a < b)
  return -1;
}
return solution.sort(sort)
}
  }
