const expectExport = require("expect");
const translate = require("./script");

// Beginning with a vowel
test("Apple to appleway", () => {
    expect(translate("Apple")).toBe("appleway");
});

test("eagle to eagleway", () => {
    expectExport(translate("eagle")).toBe("eagleway");
});

test("ink to inkway", () => {
    expect(translate("ink")).toBe("inkway");
});

test("over to overway", () => {
    expect(translate("over")).toBe("overway");
});

test("Urban to urbanway", () => {
    expect(translate("Urban")).toBe("urbanway");
});

// Beginning with a consonant
test("Banana to be ananabay", () => {
    expect(translate("Banana")).toBe("ananabay");
});

test("cat to atcay", () => {
    expect(translate("cat")).toBe("atcay");
});

test("dog to ogday", () => {
    expect(translate("dog")).toBe("ogday");
});

test("MOUSE to ousemay", () => {
    expect(translate("MOUSE")).toBe("ousemay");
});

// Beginning with 2 or more consonants
test("bright to ightbray", () => {
    expect(translate("bright")).toBe("ightbray");
});

test("close to oseclay", () => {
    expect(translate("close")).toBe("oseclay");
});

test("chRIStmas to itmaschray", () => {
    expect(translate("chRIStmas")).toBe("istmaschray");
});

test("Psychology to ologypsychay", () => {
    expect(translate("Psychology")).toBe("ologypsychay");
});