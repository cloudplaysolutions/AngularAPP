import { Beat } from './beat.interface';

export interface PlaylistResponse {
  playlists: Playlist[];
}

export interface Playlist {
  title: string;
  beatSerialNumbers: number[];
  authorName: string;
  isOfficialPlaylist: boolean;
  isPublic: boolean;
  urlSlug: string;
  updatedAt: string;
  category: string;
  beats: Beat[];
} 