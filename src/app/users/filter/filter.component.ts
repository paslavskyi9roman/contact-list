import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../shared/services/user.service';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();

  searchValue = '';

  constructor(public userService: UserService) { };

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  submitHandler(event) {
    this.searchValue = event.target.value;
    this.runSearch();
  }

  runSearch() {
    this.userService.searchName(this.searchValue);
  }

}
