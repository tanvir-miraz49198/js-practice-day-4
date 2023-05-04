// average

function assignmentAverage(assignment1,assignment2,assignment3){

    var total = assignment1 + assignment2 + assignment3;

    var average = total / 3;
    return average;
}
var assignment1 = 60;
var assignment2 = 60;
var assignment3 = 45;
var getNum = assignmentAverage(assignment1,assignment2,assignment3);

console.log("ami average number paichi",getNum);

//  ans :- ami average number paichi 55
