import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: string, caseToUse?: string): string {

    let genderTransformed: string = ''

    if (value == 'M') {
      genderTransformed = 'masculino'
    } else if (value == 'F') {
      genderTransformed = 'femenino'
    }

    if (caseToUse == 'upper') {
      genderTransformed = genderTransformed.toUpperCase()
    }

    return genderTransformed
  }

}
