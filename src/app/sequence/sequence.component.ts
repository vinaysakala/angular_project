import { Component } from '@angular/core';
import { SequenceService } from '../sequence.service';

@Component({
  selector: 'app-sequence',
  templateUrl: './sequence.component.html',
  styleUrls: ['./sequence.component.css']
})
export class SequenceComponent {
  constructor(private sequenceService: SequenceService) {}

  // Method to generate a new sequence number
  generateSequenceNumber(): void {
    const newSequenceNumber = this.sequenceService.getNextSequenceNumber();
    console.log('New sequence number:', newSequenceNumber);
    // You can use the new sequence number as needed in your component
  }
}
