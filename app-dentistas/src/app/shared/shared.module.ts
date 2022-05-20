import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopyrightDirective } from './directives/copyright.directive'
import { NumericDirective } from './directives/numeric.directive'
import { PermissionDirective } from './directives/permission.directive'
import { SortPipe } from './pipes/sort.pipe'



@NgModule({
  declarations: [
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CopyrightDirective,
    NumericDirective,
    PermissionDirective,
    SortPipe
  ]
})
export class SharedModule { }
