const { Shop, Item } = require("../src/gilded_rose.js");

describe("Gilded Rose", function () {
  let items;

  beforeEach(() => {
    items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 39),
      new Item("Conjured Mana Cake", 3, 6),
      new Item("Conjured Mana Cake", 10, 20),
      new Item("Aged Brie", 40, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50),
      new Item("Backstage passes to a TAFKAL80ETC concert", 0, 48),
    ];

    const days = Number(process.argv[2]) || 2;
    const gildedRose = new Shop(items);

    for (let day = 0; day < days; day++) {
      console.log(`\n-------- day ${day} --------`);
      console.log("name, sellIn, quality");
      items.forEach((item) =>
        console.log(`${item.name}, ${item.sellIn}, ${item.quality}`)
      );
      gildedRose.updateQuality();
    }
  });

  it("+5 Dexterity Vest should return", () => {
    expect(items[0].name).toBe("+5 Dexterity Vest");
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(18);
  });

  it("Aged Brie should return", () => {
    expect(items[1].name).toBe("Aged Brie");
    expect(items[1].sellIn).toBe(0);
    expect(items[1].quality).toBe(2);
  });

  it("Elixir of the Mongoose should return", () => {
    expect(items[2].name).toBe("Elixir of the Mongoose");
    expect(items[2].sellIn).toBe(3);
    expect(items[2].quality).toBe(5);
  });

  it("Sulfuras, Hand of Ragnaros should return", () => {
    expect(items[3].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[3].sellIn).toBe(0);
    expect(items[3].quality).toBe(80);
  });

  it("Sulfuras, Hand of Ragnaros should amways return 80 quality", () => {
    expect(items[4].name).toBe("Sulfuras, Hand of Ragnaros");
    expect(items[4].sellIn).toBe(-1);
    expect(items[4].quality).toBe(80);
  });

  it("Backstage passes to a TAFKAL80ETC concert should return", () => {
    expect(items[5].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[5].sellIn).toBe(13);
    expect(items[5].quality).toBe(22);
  });

  it("Backstage passes to a TAFKAL80ETC concert should return", () => {
    expect(items[6].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[6].sellIn).toBe(8);
    expect(items[6].quality).toBe(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert should return", () => {
    expect(items[7].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[7].sellIn).toBe(3);
    expect(items[7].quality).toBe(45);
  });

  it("Conjured Mana Cake should return", () => {
    expect(items[8].name).toBe("Conjured Mana Cake");
    expect(items[8].sellIn).toBe(1);
    expect(items[8].quality).toBe(2);
  });

  it("Conjured Mana Cake should return", () => {
    expect(items[9].name).toBe("Conjured Mana Cake");
    expect(items[9].sellIn).toBe(8);
    expect(items[9].quality).toBe(16);
  });

  it("Aged Brie should not return more than 50 quality", () => {
    expect(items[10].name).toBe("Aged Brie");
    expect(items[10].sellIn).toBe(38);
    expect(items[10].quality).toBe(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert should not return more than 50 quality", () => {
    expect(items[11].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[11].sellIn).toBe(3);
    expect(items[11].quality).toBe(50);
  });

  it("Backstage passes to a TAFKAL80ETC concert should return 0 quality when 0 day left", () => {
    expect(items[12].name).toBe("Backstage passes to a TAFKAL80ETC concert");
    expect(items[12].sellIn).toBe(-2);
    expect(items[12].quality).toBe(0);
  });

});
