/** ANGULAR */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

/** MODULES */
import { CoreMaterialModule } from './core-material.module';
import { StoreModule } from '@store/store.module';
/** DECLARABLES */
import { CORE_COMPONENTS } from './components';
/** SERVICES */
import { CORE_SERVICES } from './services';

/** ALL CORE `components`, `directives`, `pipes` TO DECLARE */
const coreDeclarables = [
  CORE_COMPONENTS,
];


/** CORE MODULE*/
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,

    CoreMaterialModule,
    StoreModule,
  ],
  declarations: [ coreDeclarables ],
  exports: [
    RouterModule,
    CoreMaterialModule
  ],
  providers: [
    CORE_SERVICES,
    // { provide: 'window', useFactory: () => window }, // A PROVIDER FOR WINDOW OBJECT
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}