import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';

import { ClassSchedulePage } from '../pages/class-schedule/class-schedule';
import { ProfilePage } from '../pages/profile/profile';
import { NewsPage } from '../pages/news/news';
import { CampusMapPage } from '../pages/campus-map/campus-map';
import { AboutPage } from '../pages/about/about';
import { RadioPage } from '../pages/radio/radio';
import { CalendarPage } from '../pages/calendar/calendar';
import { LoginPage } from '../pages/login/login';


import { HomePage } from '../pages/home/home';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private inAppBrowser: InAppBrowser) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }

  goToClassSchedule(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ClassSchedulePage);
  }

  goToProfile(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProfilePage);
  }

  goToNews(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NewsPage);
  }

  goToCampusMap(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CampusMapPage);
  }

  goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }

  goToRadio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RadioPage);
  }

  goToCalendar(params){
    if( !params) params = {};
    this.navCtrl.setRoot(CalendarPage);
  }

  openBrowser(link) {
	  this.inAppBrowser.create(link, '_system', 'location=no');
  }
}
