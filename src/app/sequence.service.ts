import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SequenceService {
  private counter: number;

  constructor() {
    // Initialize the counter from local storage or default to 0 if not found
    const savedCounter = localStorage.getItem('sequenceCounter');
    this.counter = savedCounter ? Number(savedCounter) : 0;
  }

  // Method to get the next sequential number
  getNextSequenceNumber(): number {
    this.counter += 1;
    // Save the updated counter to local storage
    localStorage.setItem('sequenceCounter', this.counter.toString());
    return this.counter;
  }
}
