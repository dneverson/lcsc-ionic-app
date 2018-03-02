import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { CalendarDropdownPage } from '../pages/calendar/calendar-dropdown';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from '../pages/news/news';
import { CampusMapPage } from '../pages/campus-map/campus-map';
import { ClassSchedulePage } from '../pages/class-schedule/class-schedule';
import { CalendarPage } from '../pages/calendar/calendar';
import { AboutPage } from '../pages/about/about';
import { RadioPage } from '../pages/radio/radio';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    NewsPage,
    CampusMapPage,
    ClassSchedulePage,
    CalendarPage,
    AboutPage,
    RadioPage,
    CalendarDropdownPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    NewsPage,
    CampusMapPage,
    ClassSchedulePage,
    CalendarPage,
    AboutPage,
    RadioPage,
    CalendarDropdownPage
  ],
  providers: [
    InAppBrowser,
    SecureStorage,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
