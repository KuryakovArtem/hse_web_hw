import { expect } from "chai";
import { Item, GildedRose } from "../app/gilded-rose";

describe("Gilded Rose", function () {

it("empty arrays test", function () {
    const gildedRose = new GildedRose();
    const items = gildedRose.updateQuality();
    expect(items.length).to.equal(0);
 });

it('default test', function() {
    const gildedRose = new GildedRose([new Item('test', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('test');
});
	
it('default sellIn', function() {
    const gildedRose = new GildedRose([new Item('test', 1, 1)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
});
	
it('default quality', function() {
    const gildedRose = new GildedRose([new Item('test', 10, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(9);
});

it('Aged Brie inc', function() {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
});

it('Aged Brie dec', function() {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
});

it("Aged Brie above 50", function () {
    const gildedRose = new GildedRose([new Item('Aged Brie', 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(50);
  });

it('Sulfuras not dec quality', function() {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(10);
 });
	
it('Sulfuras not dec sellIn', function() {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(10);
 });

it("Conjured items", function () {
    const gildedRose = new GildedRose([new Item(conjuredItemName, 1, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).to.equal(0);
  });
  
