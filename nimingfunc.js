function doCalc(num1, num2, calcFunction){
    return calcFunction(num1, num2);
}

function addFunc(n1, n2){
    return n1 + n2;
}

var count = doCalc(10, 10, addFunc);
print(count);

print(doCalc(5, 10, function(n1, n2){return n1 + n2;}));
print(doCalc(5, 10, function(n1, n2){return n1 * n2;}));