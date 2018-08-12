var Year = function (yearArgs) {
    this.year = yearArgs;
};

Year.prototype.isLeap = function () {
    var divisibleByFour        = (this.year % 4);
    var divisibleByHundred     = (this.year % 100); 
    var divisibleByFourHundred = (this.year % 400);
    if((divisibleByFourHundred === 0) || (divisibleByFour === 0 && divisibleByHundred !== 0)) {
        return true;
    }
    return false;
};

module.exports = Year;
