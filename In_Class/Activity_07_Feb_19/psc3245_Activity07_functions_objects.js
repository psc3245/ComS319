/*
Peter Collins
Feb 19, 2024
Activity06 - Variables
*/

console.log("Q1-------------")
function maxOfTwo(a, b) {
    if (a > b) return a;
    else return b;
}

let n1 = 10;
let n2 = 11;

console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1, n2));

console.log("\n\nQ2-------------")
function maxOfArray(arr) {
    let max = arr[0];
    arr.forEach((e) => {
        if (e > max) {
            max = e;
        }
    });
    return max;
}

let array = [10, 11, 1024, 125, 9, 201];
console.log("The max of the array is " + maxOfArray(array));

console.log("\n\nQ3-------------")

function showProperties(movie) {
    let keys = Object.keys(movie);
    let vals = Object.values(movie);
    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i] + ": " + vals[i]);
    }
}

const movie = {
    title: 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg'
};
showProperties(movie);

console.log("\n\nQ4-------------")

const circle = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    }
};

console.log(circle.area());

console.log("\n\nQ5-------------")


const circle2 = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    get radiusValue() { return this.radius; },
    set radiusValue(val) { this.radius = val; }
};

console.log(`Area with ${circle2.radiusValue} :`, circle2.area());
circle2.radiusValue = 3;
console.log(`Area with ${circle2.radiusValue} :`, circle2.area());

console.log("\n\nQ6-------------")

const circle3 = {
    radius: 2,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    getRadiusValue: function () { return this.radius; },
    setRadiusValue: function (val) { this.radius = val; }
};

console.log(`Area with ${circle3.getRadiusValue()} :`, circle3.area());
circle3.setRadiusValue(3);
console.log(`Area with ${circle3.getRadiusValue()} :`, circle3.area());

console.log("\n\nQ7-------------")

function calculateAverageGrade(grades) {
    var total = 0;
    Object.values(grades).forEach((o) => {
        total += Number(o);
    });
    return "Average Grade: " + total / Object.values(grades).length;
}

const grades = {
    math: 85,
    science: 90,
    history: 75,
    literature: 88
};

console.log(calculateAverageGrade(grades));


console.log("\n\nQ8-------------")
function calculateAverageGrades(array) {
    let ret = {};
    
    array.forEach((o) => {
        var total = 0;
        const studentName = Object.keys(o)[0];
        const grades = o[studentName];

        Object.values(o).forEach((p) => {
            Object.values(p).forEach((val) => {
                total += Number(val);
            })
            ret[studentName] = Math.round(total / Object.values(p).length);
        });
        
    });
    return ret;
}

const students = [
    {
        Fer: {
            math: 85,
            science: 90,
            history: 75,
            literature: 88
        }
    },
    {
        Alex: {
            math: 99,
            science: 97,
            history: 94,
            literature: 90
        }
    },
    {
        Mary: {
            math: 79,
            science: 72,
            history: 81,
            literature: 79
        }
    }
];

console.log(calculateAverageGrades(students));
