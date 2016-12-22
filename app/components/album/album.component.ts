import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../Artist';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'album',
    templateUrl: 'album.component.html',
})
export class AlbumComponent {
    id: string;
    album: Album;

    constructor(private spotifyService: SpotifyService,
        private _route: ActivatedRoute) { }

    ngOnInit() {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this.spotifyService.getAlbumsById(id)
                    .subscribe(album => {
                        console.log(album);
                        this.album = album;
                    })
            })
    }
}
