'use strict';

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}

class Reservation implements Reservationy{
  days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  getDowBooking():string {
    return this.days[Math.floor(Math.random() * 7)];
  };
  getCodeBooking():string {
    return Math.random().toString(36).replace('0.', '').substring(0, 8).toUpperCase();
  }

  reservation():void {
    console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`);
  }
}

let order1 = new Reservation;
order1.reservation();
let order2 = new Reservation;
order2.reservation();
let order3 = new Reservation;
order3.getDowBooking();