import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
    SidebarComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
