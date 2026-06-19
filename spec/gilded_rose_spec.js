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

  it("increases Aged Brie quality after an update", function() {
    items = [ new Item("Aged Brie", 1, 1) ];
    update_quality();
    expect(items[0].quality).toEqual(2);
  });

   it("should limit the quality at 50", function() {
    items = [ new Item("Aged Brie", 1, 50) , new Item("testitem", 1, 51)];
    update_quality();
    expect(items[0].quality).toEqual(50);
    expect(items[1].quality).toEqual(50);
  });

});
