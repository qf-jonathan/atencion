import {Pipe, PipeTransform} from '@angular/core';
import {Detail, DetailPreparation} from '../services/api';

@Pipe({
  name: 'filterDetail',
  pure: false
})
export class FilterDetailPipe implements PipeTransform {
  transform(items: Detail[] | DetailPreparation[] | any[],
            filterObject: Detail | DetailPreparation | any): Detail[] | DetailPreparation[] {
    if (!items || !filterObject) {
      return items;
    }
    return items.filter((item: Detail | DetailPreparation) => {
      return item.state === filterObject.state
    });
  }
}
