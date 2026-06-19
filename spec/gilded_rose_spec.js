describe("Gilded Rose", function() {

  it("should decrease Quality twice as fast when sellIn Date has passed", function() {
    items = [ new Item("testitem", -1, 4) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

  it("should never give out negative quality", function() {
    items = [ new Item("testitem", 0, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of aged brie the older it gets", function() {
    items = [ new Item("Aged Brie", 1, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

});
