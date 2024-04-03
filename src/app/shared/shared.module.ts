import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// pipes
import { DateFormatPipe } from './pipes/date-format.pipe';
import { FibonacciPipe } from './pipes/fibonacci.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
// directivas
import { HighlightDirective } from './directives/highlight.directive';


@NgModule({
  declarations: [
    DateFormatPipe,
    ReversePipe,
    FibonacciPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DateFormatPipe,
    ReversePipe,
    FibonacciPipe,
    HighlightDirective
  ]
})
export class SharedModule { }
