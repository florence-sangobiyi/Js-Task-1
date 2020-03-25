var name = 'Sangobiyi Titilayo'
var courses = ["Javascript","Nodejs"];


function displayEven (num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0 ) {
            console.log (i) ;
        }
    }
}
function displayOdd (num){
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
if (courses.length % 2 === 0) {
    displayEven(200)
  } else {
    displayOdd(200)
  }
  