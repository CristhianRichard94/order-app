import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { environment } from 'src/environments/environment';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([], { developmentMode: !environment.production, }),
    NgxsLoggerPluginModule.forRoot(),
    HttpClientModule
  ]
})
export class CoreModule { }
