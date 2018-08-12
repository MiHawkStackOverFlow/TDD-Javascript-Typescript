function isLeapYear( year: number ) {
    // Your code here
    let divisibleByFour        = (year % 4);
    let divisibleByHundred     = (year % 100);
    let divisibleByFourHundred = (year % 400);
    if(divisibleByFourHundred === 0 || (divisibleByFour === 0 && divisibleByHundred !== 0)) {
       return true;
    }
    return false;
}

export default isLeapYear;