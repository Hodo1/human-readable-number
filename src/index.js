const numbers = {
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
    "10" : "ten",
    "11" : "eleven",
    "12" : "twelve",
    "13" : "thirteen",
    "14" : "fourteen",
    "15" : "fifteen",
    "16" : "sixteen",
    "17" : "seventeen",
    "18" : "eighteen",
    "19" : "nineteen",
    "20" : "twenty",
    "30" : "thirty",
    "40" : "forty",
    "50" : "fifty",
    "60" : "sixty",
    "70" : "seventy",
    "80" : "eighty",
    "90" : "ninety",
    "100" : "hundred"
}
module.exports = function toReadable (number) {
    if (number === 0) return "zero";
    let hundredRemainder = number % 100;
    let hundredValue = Math.floor(number / 100);
    let hundredString;
        if(numbers[hundredValue]) {
        hundredString = numbers[hundredValue] + " hundred ";
    }
    else	hundredString = '';

    if (hundredRemainder >= 10 && hundredRemainder <= 20) {
        return hundredString + numbers[hundredRemainder];
    }
    let tenRemainder = hundredRemainder % 10;
    let tenValue = Math.floor(hundredRemainder / 10);
    let tenString;
    if(numbers[tenValue]) tenString = numbers[10 * tenValue] + ' ';
    else tenString = '';

    return (hundredString + tenString + (numbers[tenRemainder] || '')).trim();
}
