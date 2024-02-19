import { CommonModule } from '@angular/common';
import { Component, Input, numberAttribute } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-fin-num-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './fin-num-detail.component.html',
  styleUrl: './fin-num-detail.component.scss'
})
export class FinNumDetailComponent {
  // See https://angular.io/api/router/withComponentInputBinding
  @Input({ transform: numberAttribute }) number: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    // const number = parseInt(this.route.snapshot.paramMap.get('number')!, 0);
    // Instead of using the ActivatedRoute, I used Component Input Binding
    if (Number.isNaN(this.number)) {
      alert('Number is not valid');
      this.router.navigate(['/']);
    }
  }
}
