import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css']
})
export class WrapperComponent implements OnInit {
  observable = Observable.create((observer) => {
    observer.next('Start Processing...');
 
    setTimeout(() => observer.next('Keep Proessing...'), 1000);
 
    setTimeout(() => observer.complete(), 2000)
  })
  ngOnInit() {
   this.observable.subscribe(
     data => console.log(data)
   )
  }
  
}
