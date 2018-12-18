import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterActives'
})
export class FilterActivesPipe implements PipeTransform {

  transform(groups: IGroup[]): IGroup[] {
    return groups
    .filter(group =>  group.active)
    .sort((groupA, groupB) => {
      if (groupA.id === groupB.id) {
        return 0;
      }
      if (groupA.id > groupB.id) {
        return 1;
      }
      return -1;

    } );
  }
}

interface IGroup {
  id: string;
  value: string;
  active: boolean;
}
