/*
Peter Collins
Feb 18, 2024
Activity06 - Iris
*/

// Activity 06 Javacript using Iris dataset
// data set is ordered by Class
const iris = "Sepal.Length,Sepal.Width,Petal.Length,Petal.Width,Class\n\
5.1,3.5,1.4,0.2,Iris-setosa\n\
4.9,3.0,1.4,0.2,Iris-setosa\n\
4.7,3.2,1.3,0.2,Iris-setosa\n\
4.6,3.1,1.5,0.2,Iris-setosa\n\
5.0,3.6,1.4,0.2,Iris-setosa\n\
5.4,3.9,1.7,0.4,Iris-setosa\n\
4.6,3.4,1.4,0.3,Iris-setosa\n\
5.0,3.4,1.5,0.2,Iris-setosa\n\
4.4,2.9,1.4,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
5.4,3.7,1.5,0.2,Iris-setosa\n\
4.8,3.4,1.6,0.2,Iris-setosa\n\
4.8,3.0,1.4,0.1,Iris-setosa\n\
4.3,3.0,1.1,0.1,Iris-setosa\n\
5.8,4.0,1.2,0.2,Iris-setosa\n\
5.7,4.4,1.5,0.4,Iris-setosa\n\
5.4,3.9,1.3,0.4,Iris-setosa\n\
5.1,3.5,1.4,0.3,Iris-setosa\n\
5.7,3.8,1.7,0.3,Iris-setosa\n\
5.1,3.8,1.5,0.3,Iris-setosa\n\
5.4,3.4,1.7,0.2,Iris-setosa\n\
5.1,3.7,1.5,0.4,Iris-setosa\n\
4.6,3.6,1.0,0.2,Iris-setosa\n\
5.1,3.3,1.7,0.5,Iris-setosa\n\
4.8,3.4,1.9,0.2,Iris-setosa\n\
5.0,3.0,1.6,0.2,Iris-setosa\n\
5.0,3.4,1.6,0.4,Iris-setosa\n\
5.2,3.5,1.5,0.2,Iris-setosa\n\
5.2,3.4,1.4,0.2,Iris-setosa\n\
4.7,3.2,1.6,0.2,Iris-setosa\n\
4.8,3.1,1.6,0.2,Iris-setosa\n\
5.4,3.4,1.5,0.4,Iris-setosa\n\
5.2,4.1,1.5,0.1,Iris-setosa\n\
5.5,4.2,1.4,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
5.0,3.2,1.2,0.2,Iris-setosa\n\
5.5,3.5,1.3,0.2,Iris-setosa\n\
4.9,3.1,1.5,0.1,Iris-setosa\n\
4.4,3.0,1.3,0.2,Iris-setosa\n\
5.1,3.4,1.5,0.2,Iris-setosa\n\
5.0,3.5,1.3,0.3,Iris-setosa\n\
4.5,2.3,1.3,0.3,Iris-setosa\n\
4.4,3.2,1.3,0.2,Iris-setosa\n\
5.0,3.5,1.6,0.6,Iris-setosa\n\
5.1,3.8,1.9,0.4,Iris-setosa\n\
4.8,3.0,1.4,0.3,Iris-setosa\n\
5.1,3.8,1.6,0.2,Iris-setosa\n\
4.6,3.2,1.4,0.2,Iris-setosa\n\
5.3,3.7,1.5,0.2,Iris-setosa\n\
5.0,3.3,1.4,0.2,Iris-setosa\n\
7.0,3.2,4.7,1.4,Iris-versicolor\n\
6.4,3.2,4.5,1.5,Iris-versicolor\n\
6.9,3.1,4.9,1.5,Iris-versicolor\n\
5.5,2.3,4.0,1.3,Iris-versicolor\n\
6.5,2.8,4.6,1.5,Iris-versicolor\n\
5.7,2.8,4.5,1.3,Iris-versicolor\n\
6.3,3.3,4.7,1.6,Iris-versicolor\n\
4.9,2.4,3.3,1.0,Iris-versicolor\n\
6.6,2.9,4.6,1.3,Iris-versicolor\n\
5.2,2.7,3.9,1.4,Iris-versicolor\n\
5.0,2.0,3.5,1.0,Iris-versicolor\n\
5.9,3.0,4.2,1.5,Iris-versicolor\n\
6.0,2.2,4.0,1.0,Iris-versicolor\n\
6.1,2.9,4.7,1.4,Iris-versicolor\n\
5.6,2.9,3.6,1.3,Iris-versicolor\n\
6.7,3.1,4.4,1.4,Iris-versicolor\n\
5.6,3.0,4.5,1.5,Iris-versicolor\n\
5.8,2.7,4.1,1.0,Iris-versicolor\n\
6.2,2.2,4.5,1.5,Iris-versicolor\n\
5.6,2.5,3.9,1.1,Iris-versicolor\n\
5.9,3.2,4.8,1.8,Iris-versicolor\n\
6.1,2.8,4.0,1.3,Iris-versicolor\n\
6.3,2.5,4.9,1.5,Iris-versicolor\n\
6.1,2.8,4.7,1.2,Iris-versicolor\n\
6.4,2.9,4.3,1.3,Iris-versicolor\n\
6.6,3.0,4.4,1.4,Iris-versicolor\n\
6.8,2.8,4.8,1.4,Iris-versicolor\n\
6.7,3.0,5.0,1.7,Iris-versicolor\n\
6.0,2.9,4.5,1.5,Iris-versicolor\n\
5.7,2.6,3.5,1.0,Iris-versicolor\n\
5.5,2.4,3.8,1.1,Iris-versicolor\n\
5.5,2.4,3.7,1.0,Iris-versicolor\n\
5.8,2.7,3.9,1.2,Iris-versicolor\n\
6.0,2.7,5.1,1.6,Iris-versicolor\n\
5.4,3.0,4.5,1.5,Iris-versicolor\n\
6.0,3.4,4.5,1.6,Iris-versicolor\n\
6.7,3.1,4.7,1.5,Iris-versicolor\n\
6.3,2.3,4.4,1.3,Iris-versicolor\n\
5.6,3.0,4.1,1.3,Iris-versicolor\n\
5.5,2.5,4.0,1.3,Iris-versicolor\n\
5.5,2.6,4.4,1.2,Iris-versicolor\n\
6.1,3.0,4.6,1.4,Iris-versicolor\n\
5.8,2.6,4.0,1.2,Iris-versicolor\n\
5.0,2.3,3.3,1.0,Iris-versicolor\n\
5.6,2.7,4.2,1.3,Iris-versicolor\n\
5.7,3.0,4.2,1.2,Iris-versicolor\n\
5.7,2.9,4.2,1.3,Iris-versicolor\n\
6.2,2.9,4.3,1.3,Iris-versicolor\n\
5.1,2.5,3.0,1.1,Iris-versicolor\n\
5.7,2.8,4.1,1.3,Iris-versicolor\n\
6.3,3.3,6.0,2.5,Iris-virginica\n\
5.8,2.7,5.1,1.9,Iris-virginica\n\
7.1,3.0,5.9,2.1,Iris-virginica\n\
6.3,2.9,5.6,1.8,Iris-virginica\n\
6.5,3.0,5.8,2.2,Iris-virginica\n\
7.6,3.0,6.6,2.1,Iris-virginica\n\
4.9,2.5,4.5,1.7,Iris-virginica\n\
7.3,2.9,6.3,1.8,Iris-virginica\n\
6.7,2.5,5.8,1.8,Iris-virginica\n\
7.2,3.6,6.1,2.5,Iris-virginica\n\
6.5,3.2,5.1,2.0,Iris-virginica\n\
6.4,2.7,5.3,1.9,Iris-virginica\n\
6.8,3.0,5.5,2.1,Iris-virginica\n\
5.7,2.5,5.0,2.0,Iris-virginica\n\
5.8,2.8,5.1,2.4,Iris-virginica\n\
6.4,3.2,5.3,2.3,Iris-virginica\n\
6.5,3.0,5.5,1.8,Iris-virginica\n\
7.7,3.8,6.7,2.2,Iris-virginica\n\
7.7,2.6,6.9,2.3,Iris-virginica\n\
6.0,2.2,5.0,1.5,Iris-virginica\n\
6.9,3.2,5.7,2.3,Iris-virginica\n\
5.6,2.8,4.9,2.0,Iris-virginica\n\
7.7,2.8,6.7,2.0,Iris-virginica\n\
6.3,2.7,4.9,1.8,Iris-virginica\n\
6.7,3.3,5.7,2.1,Iris-virginica\n\
7.2,3.2,6.0,1.8,Iris-virginica\n\
6.2,2.8,4.8,1.8,Iris-virginica\n\
6.1,3.0,4.9,1.8,Iris-virginica\n\
6.4,2.8,5.6,2.1,Iris-virginica\n\
7.2,3.0,5.8,1.6,Iris-virginica\n\
7.4,2.8,6.1,1.9,Iris-virginica\n\
7.9,3.8,6.4,2.0,Iris-virginica\n\
6.4,2.8,5.6,2.2,Iris-virginica\n\
6.3,2.8,5.1,1.5,Iris-virginica\n\
6.1,2.6,5.6,1.4,Iris-virginica\n\
7.7,3.0,6.1,2.3,Iris-virginica\n\
6.3,3.4,5.6,2.4,Iris-virginica\n\
6.4,3.1,5.5,1.8,Iris-virginica\n\
6.0,3.0,4.8,1.8,Iris-virginica\n\
6.9,3.1,5.4,2.1,Iris-virginica\n\
6.7,3.1,5.6,2.4,Iris-virginica\n\
6.9,3.1,5.1,2.3,Iris-virginica\n\
5.8,2.7,5.1,1.9,Iris-virginica\n\
6.8,3.2,5.9,2.3,Iris-virginica\n\
6.7,3.3,5.7,2.5,Iris-virginica\n\
6.7,3.0,5.2,2.3,Iris-virginica\n\
6.3,2.5,5.0,1.9,Iris-virginica\n\
6.5,3.0,5.2,2.0,Iris-virginica\n\
6.2,3.4,5.4,2.3,Iris-virginica\n\
5.9,3.0,5.1,1.8,Iris-virginica";

// setosa
var setosa_sepal_Length = 0;
var setosa_sepal_Width = 0;
var setosa_petal_Length = 0;
var setosa_petal_Width = 0;
var setosa_count = 0;
// versicolor
var versicolor_sepal_Length = 0;
var versicolor_sepal_Width = 0;
var versicolor_petal_Length = 0;
var versicolor_petal_Width = 0;
var versicolor_count = 0;
// virginica
var virginica_sepal_Length = 0;
var virginica_sepal_Width = 0;
var virginica_petal_Length = 0;
var virginica_petal_Width = 0;
var virginica_count = 0;


// matrix to load the data from constant iris
var matrix = [];
// final array to convert to table as shown in picture
var final = [["Class", "#", "Sepal.Length", "Sepal.Width", "Petal.Length", "Petal.Width"]];

split_and_matrix(matrix);
read_matrix(matrix);
compute_averages();

console.table(final);

// read the data set and convert it to a matrix
function split_and_matrix(matrix) {

    let splitted = iris.split("\n").slice(1);

    splitted.forEach((element) => {
        matrix.push(element.split(','));
    });

}

// read matrix
function read_matrix(matrix) {
    matrix.forEach((flower) => {
        if (flower[4] == 'Iris-setosa') {
            setosa_count += 1;
            setosa_sepal_Length += Number(flower[0]);
            setosa_sepal_Width += Number(flower[1]);
            setosa_petal_Length += Number(flower[2]);
            setosa_petal_Width += Number(flower[3]);
        }

        if (flower[4] == 'Iris-versicolor') {
            versicolor_count += 1;
            versicolor_sepal_Length += Number(flower[0]);
            versicolor_sepal_Width += Number(flower[1]);
            versicolor_petal_Length += Number(flower[2]);
            versicolor_petal_Width += Number(flower[3]);
        }
        if (flower[4] == 'Iris-virginica') {
            virginica_count += 1;
            virginica_sepal_Length += Number(flower[0]);
            virginica_sepal_Width += Number(flower[1]);
            virginica_petal_Length += Number(flower[2]);
            virginica_petal_Width += Number(flower[3]);
        }
    });
}

// compute the average of ever numeric column per Class type
function compute_averages() {
    // "Iris-setosa"
    setosa_sepal_Length = (setosa_sepal_Length / setosa_count).toFixed(2);
    setosa_sepal_Width = (setosa_sepal_Width / setosa_count).toFixed(2);
    setosa_petal_Length = (setosa_petal_Length / setosa_count).toFixed(2);
    setosa_petal_Width = (setosa_petal_Width / setosa_count).toFixed(2);
    final.push(["Iris-setosa", setosa_count, setosa_sepal_Length, setosa_sepal_Width, setosa_petal_Length, setosa_petal_Width]);

    // "Iris-versicolor"
    versicolor_sepal_Length = (versicolor_sepal_Length / versicolor_count).toFixed(2);
    versicolor_sepal_Width = (versicolor_sepal_Width / versicolor_count).toFixed(2);
    versicolor_petal_Length = (versicolor_petal_Length / versicolor_count).toFixed(2);
    versicolor_petal_Width = (versicolor_petal_Width / versicolor_count).toFixed(2);
    final.push(["Iris-versicolor", versicolor_count, versicolor_sepal_Length, versicolor_sepal_Width, versicolor_petal_Length, versicolor_petal_Width]);

    // "Iris-virginica"
    virginica_sepal_Length = (virginica_sepal_Length / virginica_count).toFixed(2);
    virginica_sepal_Width = (virginica_sepal_Width / virginica_count).toFixed(2);
    virginica_petal_Length = (virginica_petal_Length / virginica_count).toFixed(2);
    virginica_petal_Width = (virginica_petal_Width / virginica_count).toFixed(2);
    final.push(["Iris-virginica", virginica_count, virginica_sepal_Length, virginica_sepal_Width, virginica_petal_Length, virginica_petal_Width]);
}
