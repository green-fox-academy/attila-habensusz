'use strict';

interface Comparable {
  value: number;
  compareTo(other: Comparable): number;
  
}

class Value implements Comparable {
  value: number;
  compareTo(other: Comparable): number {
    return this.value - other.value;
  }
}

export {Comparable, Value};