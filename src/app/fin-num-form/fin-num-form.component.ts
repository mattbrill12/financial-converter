import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FinNumService } from '../services/fin-num.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fin-num-form',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fin-num-form.component.html',
  styleUrl: './fin-num-form.component.scss'
})
export class FinNumFormComponent {

  financialNumber: string = '';

  constructor(private router: Router, public finNumService: FinNumService) { }

  onClick() {
    const converted = this.finNumService.convertFinancialStringToNumber(this.financialNumber);
    this.router.navigate([`/detail/${converted}`]);
  }

  isValid() {
    return !Number.isNaN(this.finNumService.convertFinancialStringToNumber(this.financialNumber));
  }
}
