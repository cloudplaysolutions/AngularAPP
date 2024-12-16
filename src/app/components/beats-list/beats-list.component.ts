import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BeatService } from '../../services/beat.service';
import { Beat } from '../../models/beat.interface';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-beats-list',
  templateUrl: './beats-list.component.html',
  styleUrls: ['./beats-list.component.scss'],
  standalone: true,
  imports: [CommonModule, HttpClientModule],
})
export class BeatsListComponent implements OnInit {
  beats: Beat[] = [];
  currentlyPlaying: string | null = null;
  isLoading = false;
  error: string | null = null;

  constructor(private beatService: BeatService) {}

  ngOnInit() {
    this.loadBeats();
  }

  loadBeats() {
    this.isLoading = true;
    this.error = null;

    this.beatService
      .getTrendingBeats()
      .pipe(
        catchError((error) => {
          this.error = 'Failed to load beats. Please try again later.';
          return of([]);
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((beats) => {
        if (Array.isArray(beats)) {
          this.beats = beats;
        } else {
          this.error = 'Failed to load beats. Please try again later.';
        }
      });
  }

  formatKey(key: string): string {
    return key.replace(/_/g, ' ');
  }

  getPrice(beat: Beat): number {
    return beat.prices[0]?.final_price || 0;
  }

  handleImageError(event: any) {
    event.target.src = 'assets/default-cover.png';
  }

  playPreview(beatId: string, audioUrl: string) {
    if (this.currentlyPlaying === beatId) {
      this.currentlyPlaying = null;
    } else {
      this.currentlyPlaying = beatId;
    }
  }
}
