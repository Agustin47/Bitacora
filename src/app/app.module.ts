import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

/// PAGES
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { WaterPage } from '../pages/water/water';

/// TAB
import { TabsPage } from '../pages/tabs/tabs';

/// Components
import { ComponentsModule } from '../components/components.module';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    WaterPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [
    IonicApp,
  ],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    WaterPage,    
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
