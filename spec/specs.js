describe('findReplace', function () {
    it("find if a word exists in a one word string", function () {
        expect(findReplace("can" , "can")).to.be.eql("can");
    });

});
