import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { LoadingComponent } from './core/components/loading/loading.component';
import { MessagesComponent } from './core/components/messages/messages.component';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
    LoadingComponent,
    MessagesComponent,
    ToolbarComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AuthModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
