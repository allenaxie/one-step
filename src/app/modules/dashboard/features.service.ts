import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FeaturesService {
  features = ['Track Expenses', 'Track Assets'];

  constructor() {}

  getFeatures(): string[] {
    return this.features;
  }
}
