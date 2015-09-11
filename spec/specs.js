describe('findReplace', function () {
    it("finds if a word exists in a one word string", function () {
        expect(findReplace("can" , "can")).to.be.eql("can");
    });
    it("finds if a word exists in a two word string", function () {
        expect(findReplace("can I" , "can")).to.be.eql("can");
    });
    it("finds if a word exists in a string with punctuation", function () {
        expect(findReplace("can I pet your dog?" , "can")).to.be.eql("can");
    });

});
