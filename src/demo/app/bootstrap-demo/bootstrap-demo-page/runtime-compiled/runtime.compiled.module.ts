import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';

import { ModalModule } from 'single-angular-modal';
import { BootstrapModalModule } from 'single-angular-modal/plugins/bootstrap';

import { RuntimeCompiledComponent }   from './runtime-compiled.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule,
    BootstrapModalModule
  ],
  declarations: [
    RuntimeCompiledComponent
  ],
  entryComponents: [
    RuntimeCompiledComponent
  ],
})
export class RuntimeCompiledModule {

}
