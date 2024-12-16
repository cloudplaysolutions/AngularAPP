import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Beat } from '../models/beat.interface';
import { PlaylistResponse, Playlist } from '../models/playlist.interface';

@Injectable({
  providedIn: 'root'
})
export class BeatService {
  private apiUrl = 'https://api-server.illpeoplemusic.com/api/v2/playlist/trending';

  constructor(private http: HttpClient) {}

  getTrendingBeats(): Observable<Beat[]> {
    return this.http.get<PlaylistResponse>(this.apiUrl).pipe(
      map(response => {
        const trendingPlaylist = response.playlists[0];
        return trendingPlaylist.beats;
      })
    );
  }

  // Optional: Get full playlist data if needed
  getTrendingPlaylist(): Observable<Playlist> {
    return this.http.get<PlaylistResponse>(this.apiUrl).pipe(
      map(response => response.playlists[0])
    );
  }
} 