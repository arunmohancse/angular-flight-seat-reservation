export class Seat {
    /**
     * Seat Number. e.g.: 1A
     */
    number: string;

    /**
     * Current status of the seat.
     * Possible values are : Available for Free, Available for price, Not Available.
     */
    status: string;

    /**
     *  Whether this seat selected
     */
    selected: boolean;

    /**
     * Row reference.
     */
    rowNumber: number;



}
