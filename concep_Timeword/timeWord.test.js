const timeWord = require('./timeWord');

describe('#timeword', () => {
  test('it is a function', () => {
    expect(typeof timeWord).toBe('function');
  });
});


describe("invalid input time", () => {
  test("if invalid input", () => {
    expect(timeWord("30:00")).toEqual("Please enter a valid input time");
  });
});

describe("exact midnight and noon", () => {
  test("if 12:00 return noon", () => {
    expect(timeWord("12:00")).toEqual("noon");
    expect(timeWord("12:01")).not.toEqual("noon");
  });
  test("if 00:00 return midnight", () => {
    expect(timeWord("00:00")).toEqual("midnight");
    expect(timeWord("00:01")).not.toEqual("midnight");
  });
});

describe("returns written times from exercise", () => {
  test("valid hour and minute", () => {
    expect(timeWord("00:12")).toEqual("twelve twelve am");
    expect(timeWord("01:00")).toEqual("one am");
    expect(timeWord("06:01")).toEqual("six oh one am");
    expect(timeWord("06:10")).toEqual("six ten am");
    expect(timeWord("06:18")).toEqual("six eightteen am");
    expect(timeWord("06:30")).toEqual("six thirty am");
    expect(timeWord("10:34")).toEqual("ten thirty-four am");
    expect(timeWord("12:00")).toEqual("noon");
    expect(timeWord("12:09")).toEqual("twelve oh nine pm");
    expect(timeWord("23:23")).toEqual("eleven twenty-three pm");
  });
});


