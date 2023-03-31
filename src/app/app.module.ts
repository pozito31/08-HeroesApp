import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';

const firebaseConfig = {
  apiKey: 'AIzaSyDwN_wTS_xy2T_Usd1KJKDIreCHOa3z8fU',
  authDomain: 'crud-heroes-37dfb.firebaseapp.com',
  databaseURL: 'https://crud-heroes-37dfb-default-rtdb.firebaseio.com',
  projectId: 'crud-heroes-37dfb',
  storageBucket: 'crud-heroes-37dfb.appspot.com',
  messagingSenderId: '578127956372',
  appId: '1:578127956372:web:5f8e057a69831d72956781',
  measurementId: 'G-YQLD06J739',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@NgModule({
  declarations: [AppComponent, HeroeComponent, HeroesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
