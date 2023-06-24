// solving quadratic equation

function solveQuadraticEquation(a, b, c) {
    const discriminant = b**2 - 4 * a * c;
    let x1, x2;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (2*a);
        x2 = (-b - Math.sqrt(discriminant)) / (2*a);
        return `The roots are real and equal and different: x1 = ${x1}, x2 = ${x2}`;
    }else if (discriminant === 0) {
        x1 = -b / (2*a);
        return `The roots are real and equall: x1 = x2 = ${x1}`;
    }else{
        const realPart = (-b / (2*a)).toFixed(2);
        const imaginaryPart = (Math.sqrt(-discriminant) /(2*a)).toFixed(2);
        return `The roots are complex and different: x1 = ${realPart} + ${imaginaryPart}i, x2 = ${realPart} -
        ${imaginaryPart}i`;
    }
    }
    console.log(solveQuadraticEquation(1, -5, 5));
    console.log(solveQuadraticEquation(1, -4, 4));
    console.log(solveQuadraticEquation(1, 2, 5));
        
    
