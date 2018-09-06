// // Closures -- An inner function always has access to the variables and parameters of its outer function, even if the outer function has returned (popped off the execution stack, the scope remains in memory for the children to use)


// function retirement(retirementAge) {
//   var sentence = ' years left until I peace out from work!'

//   return function(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     console.log((retirementAge - age) + sentence);
//   }
// }

// var retirementBelgium = retirement(60)
// var retirementOntario = retirement(65)
// var retirementRussia = retirement(67)


// console.log(retirementBelgium);

// console.log('----------------------------------------');
// //method 1
// retirementBelgium(1991)
// retirementOntario(1984)
// retirementRussia(2008)

// console.log('----------------------------------------');

// // method 2
// retirement(60)(1991)
// retirement(65)(1984)
// retirement(67)(2008)

// // log X# of years until i peace out from work!
// console.log('----------------------------------------');



// EXAMPLE 2

// function interviewQuestion(job) {
//   if (job === 'designer') {
//       return function(name) {
//           console.log(name + ', can you please explain what UX design is?');
//       }
//   } else if (job === 'teacher') {
//       return function(name) {
//           console.log('What subject do you teach, ' + name + '?');
//       }
//   } else {
//       return function(name) {
//           console.log('Hello ' + name + ', what do you do?');
//       }
//   }
// }

// var teacherQuestion = interviewQuestion('teacher')
// var designerQuestion = interviewQuestion('designer')
// var someOtherProf = interviewQuestion('artist')

// teacherQuestion('Nick')
// designerQuestion('Mary')
// someOtherProf('Lara')

// console.log('----------------------------------------');
// interviewQuestion('teacher')('Nick')


// Closure - function returning a function

function interviewQuestion(job) {
  return function (name) {
    if (job === 'teacher') {
      console.log('What subject do you teach, ' + name + '?');
    } else if (job === 'designer'){
      console.log(name + ', can you please explain what UX design is?');
    } else{
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}


var teacherQuestion = interviewQuestion('teacher')
var designerQuestion = interviewQuestion('designer')
var someOtherProf = interviewQuestion('artist')

teacherQuestion('Nick')
designerQuestion('Mary')
someOtherProf('Lara')

console.log('----------------------------------------');
interviewQuestion('teacher')('Nick')

