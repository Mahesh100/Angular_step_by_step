import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipr'
})
export class TestPiprPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
