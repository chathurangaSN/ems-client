import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value:any): any {
    console.log("hi from ReversePipe value : "+JSON.stringify(value));
    return value.slice().reverse();
  }

}
