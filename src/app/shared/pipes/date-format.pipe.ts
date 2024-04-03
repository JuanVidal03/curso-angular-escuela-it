import { Pipe, PipeTransform } from '@angular/core';

// libreria para formatear la fecha
import { format } from 'date-fns';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: Date, args:string = 'PPP'): any {
    return format(value, args);
  }

}
