import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.css']
})
export class TutorialDetailsComponent implements OnInit {
  @Input() tutorial?: Tutorial;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();
  currentTutorial: Tutorial = {
    address: '',
    name: '',
    email: '',
    number: ''
  };
  message = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentTutorial = { ...this.tutorial };
  }

  // updatePublished(status: boolean): void {
  //   if (this.currentTutorial.key) {
  //     this.tutorialService.update(this.currentTutorial.key, { published: status })
  //     .then(() => {
  //       this.currentTutorial.published = status;
  //       this.message = 'The status was updated successfully!';
  //     })
  //     .catch(err => console.log(err));
  //   }
  // }

  updateTutorial(): void {
    const data = {
      address: this.currentTutorial.address,
      name: this.currentTutorial.name,
      email: this.currentTutorial.email,
      number: this.currentTutorial.number
    };

    if (this.currentTutorial.key) {
      this.tutorialService.update(this.currentTutorial.key, data)
        .then(() => this.message = 'The tenant was updated successfully!')
        .catch(err => console.log(err));
    }
  }

  deleteTutorial(): void {
    if (this.currentTutorial.key) {
      this.tutorialService.delete(this.currentTutorial.key)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tenant was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}