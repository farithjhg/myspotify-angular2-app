import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import {NavbarComponent} from './components/navbar/navbar.component';
import {AboutComponent} from './components/about/about.component';
import {HomeComponent} from './components/home/home.component';
import {ArtistComponent}      from './components/artist/artist.component';
import {AlbumComponent}      from './components/album/album.component';

import { AppComponent }  from './app.component';
import {routing} from './app.routes';

@NgModule({
  imports:      [ BrowserModule, routing, FormsModule, HttpModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, 
                  HomeComponent, ArtistComponent, AlbumComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
