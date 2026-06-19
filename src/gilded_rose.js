function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

items.push(new Item('+5 Dexterity Vest', 10, 20));
items.push(new Item('Aged Brie', 2, 0));
items.push(new Item('Elixir of the Mongoose', 5, 7));
items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80));
items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20));
items.push(new Item('Conjured Mana Cake', 3, 6));

function update_quality() {
  items.forEach(item => {
    updateItem(item);
  });
}

function updateItem(item) {
  if (item.name === 'Sulfuras, Hand of Ragnaros') return;

  updateQuality(item);

  item.sell_in--;

  if (item.sell_in < 0) {
    updateExpiredItem(item);
  }

  if (item.name === 'Conjured Mana Cake') {
    decreaseQuality(item);
  }
}

function updateQuality(item) {
  if (item.name === 'Aged Brie') {
    increaseQuality(item);
    return;
  }

  if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    increaseQuality(item);

    if (item.sell_in < 11) increaseQuality(item);
    if (item.sell_in < 6) increaseQuality(item);

    return;
  }

  decreaseQuality(item);
}

function updateExpiredItem(item) {
  if (item.name === 'Aged Brie') {
    increaseQuality(item);
    return;
  }

  if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
    item.quality = 0;
    return;
  }

  decreaseQuality(item);
}

function increaseQuality(item) {
  if (item.quality < 50) item.quality++;
}

function decreaseQuality(item) {
  if (item.quality > 0) item.quality--;
}


