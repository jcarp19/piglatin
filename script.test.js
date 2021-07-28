const { test, expect } = require("@jest/globals");
const expectExport = require("expect");
const piggy = require("./script");

// TEST FOR STARTING WITH VOWELS
test("Apple to appleway", () => {
    expect(piggy("Apple")).toBe("appleway");
});

test("eagle to eagleway", () => {
    expectExport(piggy("eagle")).toBe("eagleway");
});

test("orange to orangeway", () => {
    expect(piggy("orange")).toBe("orangeway");
});

// TESTS FOR STARTING WITH CONSONANTS
test("banana to be ananabay", () => {
    expect(piggy("banana")).toBe("ananabay");
});

test("cat to atcay", () => {
    expect(piggy("cat")).toBe("atcay");
});

test("christmas to itmaschray", () => {
    expect(piggy("christmas")).toBe("istmaschray");
});

test("psychology to ologypsychay", () => {
    expect(piggy("psychology")).toBe("ologypsychay");
});