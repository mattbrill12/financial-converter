import { TestBed } from '@angular/core/testing';
import { FinNumService } from './fin-num.service';

describe('FinancalNumberService', () => {

  const testCases = [
    // k cases
    { input: '1k', output: 1_000 },
    { input: '.1k', output: 100 },
    { input: '0.2k', output: 200 },
    // m cases
    { input: '1m', output: 1_000_000 },
    { input: '.1m', output: 100_000 },
    { input: '0.2m', output: 20_0000 },
    // b cases
    { input: '1b', output: 1_000_000_000 },
    { input: '.1b', output: 100_000_000 },
    { input: '0.2b', output: 200_000_000 },
    // edge cases
    { input: '10', output: 10 }, // No mulitplier 
    { input: '1K', output: 1000 }, // Accept uppercase
    { input: '1 thousand', output: 1000 }, // Accept thousand
    { input: '123456789123456789b', output: 1.2345678912345679e+26 }, // Accept large numbers (scientific notation)
    { input: '-123456789123456789b', output: -1.2345678912345679e+26 }, // Accept large negative number (scientific notation)
    { input: '1.7976931348623157e+310', output: Number.POSITIVE_INFINITY }, // Handle number larger than Number.MAX_VALUE=1.7976931348623157e+308

    // error cases
    { input: '1w', output: NaN }, // Not a valid unit
    { input: 'y1k', output: NaN }, // Not a valid number
    { input: '10kthousand', output: NaN }, // Number is 10k, unit is thousand
    { input: '10million', output: NaN }, // Unsupported and will return NaN
  ]

  let service: FinNumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinNumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getSupportedUnits is not empty', () => {
    expect(service.getSupportedUnits().size).toBeGreaterThan(0);
  });

  testCases.forEach(test => {
    it(`#convertFinancialStringToNumber should convert ${test.input} to ${test.output} correctly`, () => {
      expect(service.convertFinancialStringToNumber(test.input)).toEqual(test.output);
    });
  });
});
