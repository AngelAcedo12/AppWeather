import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-task',
  templateUrl: './all-task.component.html',
  styleUrl: './all-task.component.css',
})
export class AllTaskComponent {
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.filterStatus = this.route.snapshot.params['filter'];
    if (this.filterStatus == undefined) {
      this.filterStatus = 'NONE';
    }
  }

  filterStatus: string | undefined;
  
}
