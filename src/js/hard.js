class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if (this.name.includes("Aged")) {
      this.agedBrie();
    } else if (this.name.includes("Sulfuras", "Hand of Ragnaros")) {
      this.legendary();
    } else if (this.name.includes("Backstage")) {
      this.concert();
    } else if (this.name.includes("Conjured")) {
      this.conjured();
    } else {
      this.normal();
    }
  }

  agedBrie () {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality += 1;
    } else if(this.sellIn <=0){
      this.quality += 2;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }

  legendary () {
  }

  concert () {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn < 5) {
      this.quality += 3;
    } else if (this.sellIn < 10) {
      this.quality += 2;
    } else {
      this.quality++;
    }
    if (this.quality > 50){
      this.quality = 50;
    }
  }

  conjured () {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality -= 2;
    }
    if (this.sellIn < 0) {
      this.quality -= 4;
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }

  normal () {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality--;
    }
    if (this.sellIn < 0) {
      this.quality -= 2;
    }

    if (this.quality < 0) {
      this.quality = 0
    }
  }

}


export { GildedRose };
