import { Component, OnInit } from '@angular/core';
import { SeatRow } from './seat-row.model';
import { Seat } from './seat.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'flight-seat';
  public seatRows: SeatRow[] = [];
  public passengerLimit = 2;

  ngOnInit(): void {
    this.initSeats();
  }

  private initSeats(): void {
    for (let i = 1; i <= 10; i++) {
      const row = new SeatRow();
      row.number = i;
      row.type = 'A';

      const seats: Seat[] = [];

      const seatA = new Seat();
      seatA.number = i + 'A';
      seatA.status = 'Available';
      seatA.rowNumber = i;
      seats.push(seatA);

      const seatB = new Seat();
      seatB.number = i + 'B';
      seatB.status = 'Available';
      seatB.rowNumber = i;
      seats.push(seatB);

      const seatC = new Seat();
      seatC.number = i + 'C';
      seatC.status = 'Available';
      seatC.rowNumber = i;
      seats.push(seatC);

      const seatD = new Seat();
      seatD.number = i + 'D';
      seatD.status = 'Available';
      seatD.rowNumber = i;
      seats.push(seatD);

      const seatE = new Seat();
      seatE.number = i + 'E';
      seatE.status = 'Available';
      seatE.rowNumber = i;
      seats.push(seatE);

      const seatF = new Seat();
      seatF.number = i + 'F';
      seatF.status = 'Available';
      seatF.rowNumber = i;
      seats.push(seatF);


      row.seats = seats;

      this.seatRows.push(row);
    }

  }

}
