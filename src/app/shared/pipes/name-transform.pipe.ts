import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTransform'
})
export class NameTransformPipe implements PipeTransform {

  transform(name): string {
    return name !== '' ? `mr. ${name}` : '';
  }

}
