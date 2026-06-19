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

    
  it("should never change Sulfuras quality or sell_in across multiple updates", function() {
    items = [ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ];
    update_quality();
    update_quality();
    update_quality();
    expect(items[0].quality).toEqual(80);
    expect(items[0].sell_in).toEqual(0);
  });
    it("should increase quality as sell_in approaches and drop to 0 after concert", function() {
    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);

    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);

    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(23);

    items = [ new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

});
