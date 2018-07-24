import { NgModule, ModuleWithProviders} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';

export const components = [
  HeaderComponent,
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule,
  ],
  declarations: [
    ...components,
  ],
  providers: [
  ],
  exports: [
    ...components
  ]
})


export class LayoutsModule {}
