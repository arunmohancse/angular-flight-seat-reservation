import { Component, OnInit, Input } from '@angular/core';
import { SeatRow } from '../../seat-row.model';
import { Seat } from 'src/app/seat.model';

@Component({
  selector: 'app-seat',
  templateUrl: './seat.component.html',
  styleUrls: ['./seat.component.css']
})
export class SeatComponent implements OnInit {


  @Input()  seatRows: SeatRow[];
  @Input() passengerCount: number;

  private selectedSeats: Seat[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Seat selection listener.
   * @param seat Seat object
   */
  selectSeatListner(seat: Seat): void {
    seat.selected = (!seat.selected);
    this.maintainSeatSelection(seat);
  }

  /**
   *  Maintain selected seat. If user select more than alloweded, it will unselect fistly selected.
   * @param seat
   */
  maintainSeatSelection(seat: Seat): void {
    this.selectedSeats.push(seat);
    if (this.selectedSeats.length > this.passengerCount) {
      const s = this.selectedSeats.shift();
      s.selected = false;
      this.updateSeat(s);
    }
  }

  /**
   * 
   * @param seat Update seat object in main array
   */
  updateSeat(seat: Seat): void {
    const rowIndex = this.seatRows.findIndex((r => r.number === seat.rowNumber));
    const seatIndex = this.seatRows[rowIndex].seats.findIndex((s => s.number === seat.number));
    this.seatRows[rowIndex].seats[seatIndex].selected = seat.selected;
  }

  print(): void {
    for (const row of this.seatRows) {
      console.log('row ', row);
      for (const seat of row.seats) {
        console.log('Seat ', seat);
      }
    }
  }

}
