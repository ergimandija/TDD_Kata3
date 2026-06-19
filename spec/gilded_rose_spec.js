describe("Gilded Rose", function() {

  it("should decrease Quality twice as fast when sellIn Date has passed", function() {
    items = [ new Item("testitem", -1, 4) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

});
