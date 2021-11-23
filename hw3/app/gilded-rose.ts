import Item from './Item';
import {ItemNameEnum} from './Item';

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() : Array<Item> {
        for (let item of this.items) {
			var temp_quality: number = -1
			
            switch (item.name) {				
				case ItemNameEnum.sulfuras:
                    break;
					
                case ItemNameEnum.agedBrie:
                     				
                     if (item.quality < 50) {
                        temp_quality = 1;
                    }
                    break;
                					
                case ItemNameEnum.backstagePasses:                    
                    if (item.sellIn <= 0) {
                        temp_quality = 0;
                    }
					else if (item.sellIn <= 5) {
                        temp_quality = 3;                        
                    }
					else if (item.sellIn <= 10) {
                        temp_quality = 2;
						break;
                    }
					else 
					{
						temp_quality = 1;
					}
					
                    if (item.quality  >= 50) {
                        break;
                    } 
                    
                case ItemNameEnum.conjured:                    
                    if (item.sellIn <= 0) {
                        temp_quality *= 2;
                    }				
                    					
                    break;
					
					
				default:
                    item.sellIn -= 1;
                    if (item.sellIn < 0 && item.quality > 1) {
                        item.quality -= temp_quality;
                    }                    
                    break
            }
        }

    return this.items;  
	}
}
