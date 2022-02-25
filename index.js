let distance, someValue;
const headquarters = 42;
function distanceFromHqInBlocks(someValue) {
    if (someValue >= headquarters){
        distance = someValue - 42
    } else if (someValue < headquarters){
        distance = 42 - someValue
    }
    return distance;
}

let distanceInFeet;
function distanceFromHqInFeet(distance) {
    distanceInFeet = (distanceFromHqInBlocks(distance)) * 264;
    return distanceInFeet;
}

let start, destination, distanceTravelFeet;
function distanceTravelledInFeet(start, destination) {
    if (destination >= start) {
        distanceTravelFeet = (destination - start) * 264;
    } else {
        distanceTravelFeet = (start - destination) * 264;
    }
    return distanceTravelFeet;
}

let distanceCalculate, fare;
function calculatesFarePrice(start, destination) {
    if (destination >= start){
        distanceCalculate = ((destination - start) * 264) - 400;
    } else if (start >= destination){
        distanceCalculate = ((start - destination) *264) - 400;
    }
    
    if (distanceCalculate <= 0) {
        fare = 0;
    } else if ((distanceCalculate > 0) && (distanceCalculate <= 1600)) {
        fare = distanceCalculate * 0.02;
    } else if ((distanceCalculate >1600) && (distanceCalculate <= 2100)) {
        fare = 25
    } else if (distanceCalculate > 2100) {
        return "cannot travel that far"
    }
    return fare;
}