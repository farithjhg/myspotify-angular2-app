import { Component } from '@angular/core';
import {SpotifyService} from '../../services/spotify.service';
import {Artist} from '../../Artist';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html',
  providers: [SpotifyService]
})
export class HomeComponent {
    searchStr:string;
    searchRes: Artist[];

    constructor(private spotifyService:SpotifyService){
    }
    
    searchMusic(){
        this.spotifyService.searchMusic(this.searchStr)
            .subscribe(res => {
                this.searchRes = res.artists.items;
            }
        );
    }
}