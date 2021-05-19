import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  @Input() type: 'thin' | 'thick' = 'thin';
  @Input() placeholder: string = 'Search a game';

  @Output() searchEvent = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  search(text: string) {
    this.searchEvent.emit(text);
  }
}
