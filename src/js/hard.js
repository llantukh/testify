class GildedRose {
  constructor (sellIn, quality, name) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  tick () {
    if (this.name.includes("Aged")) {
      this.agedBrie();
    } else if (this.name.includes("Sulfuras")) {
      this.legendary();
    } else if (this.name.includes("Backstage")) {
      this.backStage();
    } else if (this.name.includes("Conjured")) {
      this.conjured();
    } else {
      this.normal();
    }
  }

  agedBrie () {}

  legendary () {}

  backStage () {}

  conjured () {}

  normal () {
    this.sellIn--;
    if (this.sellIn > 0) {
      this.quality--;
    }
    if (this.sellIn < 0) {
      this.quality = this.quality - 2;
    }
    if (this.quality < 0) {
      this.quality = 0
    }
  }

}












// class GildedRose {
//   constructor (sellIn, quality, name) {
//     this.name = name;
//     this.sellIn = sellIn;
//     this.quality = quality;
//   }
//
//   tick () {
//     if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//       if (this.quality > 0) {
//         if (this.name != 'Sulfuras, Hand of Ragnaros') {
//           this.quality = this.quality - 1;
//         }
//       }
//     } else {
//       if (this.quality < 50) {
//         this.quality = this.quality + 1;
//         if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.sellIn < 11) {
//             if (this.quality < 50) {
//               this.quality = this.quality + 1;
//             }
//           }
//           if (this.sellIn < 6) {
//             if (this.quality < 50) {
//               this.quality = this.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (this.name != 'Sulfuras, Hand of Ragnaros') {
//       this.sellIn = this.sellIn - 1;
//     }
//     if (this.sellIn < 0) {
//       if (this.name != 'Aged Brie') {
//         if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//           if (this.quality > 0) {
//             if (this.name != 'Sulfuras, Hand of Ragnaros') {
//               this.quality = this.quality - 1;
//             }
//           }
//         } else {
//           this.quality = this.quality - this.quality;
//         }
//       } else {
//         if (this.quality < 50) {
//           this.quality = this.quality + 1;
//         }
//       }
//     }
//   }
// }

export { GildedRose };
