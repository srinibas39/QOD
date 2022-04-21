

const typeOfTriangle = (a, b, c) => {
    if ((a + b + c === 180) && (a > 0 && a < 180) && (b > 0 && b < 180) && (c > 0 && c < 180)) {
        if (a === b && b === c && c === a) {
            return "Equilateral Triangle"
        }
        else if (a === b || b === c || c === a) {
            return "Isosceles Triangle"
        }
        else {
            return "scalene Triangle"
        }
    }
    else {
        return "Not Triangle"
    }
}

const t = typeOfTriangle(30, 60, 90);
console.log(t);