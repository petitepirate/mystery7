const timeWord = (time) => {
    // seperate time string into hour and minute array splitting on :
    const timeArr = time.split(":");
  
    // change number string into integer
    const hour = Number(timeArr[0]);
    const min = Number(timeArr[1]);
    
    // object containing text version of single digits and multiples
    const text = {
        single: {
            0: "",
            1: "one",
            2: "two",
            3: "three",
            4: "four",
            5: "five",
            6: "six",
            7: "seven",
            8: "eight",
            9: "nine",
            10: "ten",
            11: "eleven",
            12: "twelve",
            13: "thirteen",
            14: "fourteen",
            15: "fifteen",
            16: "sixteen",
            17: "seventeen",
            18: 'eightteen',
            19: "nineteen"
            },
            multiple: {
            2: "twenty",
            3: "thirty",
            4: 'fourty',
            5: "fifty"
            }
        };
    
    // declare an empty array to store results 
    const result = [];

    // get matching string for hours
    if (hour === 12 && min === 0) {   // if 12:00pm - return 'noon'
      return "noon";
    } else if (hour === 0 && min === 0) {   // if 00:00, return 'midnight'
      return "midnight";
    } else if (hour === 0) {
      result.push('twelve')
    } else if (hour <= 12) {
      result.push(text.single[hour]);
    } else if (hour > 12 && hour < 25) {
      let convertHour = hour - 12;
      result.push(text.single[convertHour]);
    } else {
      return "Please enter a valid input time";
    }
  
    // get mathing string for minutes
    if (min < 10 && min > 0) {
      result.push("oh " + text.single[min]);
    } else if (min >= 10 && min <= 19) {
      result.push(text.single[min]);
    } else if (min > 19) {
      let set = min.toString().split("");
      if (set[1] !== '0') {
        set = text.multiple[set[0]] + "-" + text.single[set[1]];
        result.push(set);  
      } else {
         set = text.multiple[set[0]];
         result.push(set);
      }
    }
  
    // add am or pm to time
    hour >= 12 ? result.push("pm") : result.push("am");
  
    return result.join(" ");
  }

  
  module.exports = timeWord
