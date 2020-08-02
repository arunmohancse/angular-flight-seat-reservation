import { Seat } from './seat.model';

export class SeatRow {
    /**
     *  Row number
     */
    number: number;

    /**
     * Row type
     * For future use
     */
    type: string;

    /**
     *  All seats in a row.
     */
    seats: Seat[];

}
