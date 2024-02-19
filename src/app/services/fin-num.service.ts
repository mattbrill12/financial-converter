import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinNumService {

  constructor() { }

  UNITS_MULTIPLIER_MAP = new Map<string, number>([
    ['k', 1_000],
    ['m', 1_000_000],
    ['b', 1_000_000_000],
    ['t', 1_000_000_000_000],
    ['thousand', 1_000],
  ]);

  getSupportedUnits() {
    return this.UNITS_MULTIPLIER_MAP;
  }

  /**
   * Convert financial numbers like 1k, 2b to number. 
   * Supported units are stored in UNITS_MULTIPLIER_MAP.
   * 
   * Limitation: No multi unit support e.g. bm 
   * @param financialString 
   * @returns Number or NaN
   */
  convertFinancialStringToNumber(financialString: string): number {

    // base case input is a valid number
    if (!Number.isNaN(Number(financialString))) {
      return Number(financialString);
    }

    // case insensitive
    financialString = financialString.toLowerCase();

    // try to find a unit
    const foundUnits = Array.from(this.getSupportedUnits().keys()).filter((unit => financialString.endsWith(unit)))

    // error case no supported unit or multiple  
    if (foundUnits.length === 0 || foundUnits.length > 1) {
      return NaN;
    }

    // normal case extracts number and multiplies by the unit
    const number = financialString.substring(0, financialString.lastIndexOf(foundUnits[0]));
    return Number(number) * (this.getSupportedUnits().get(foundUnits[0])!);

  }
}
