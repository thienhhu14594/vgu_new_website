import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @ViewChild('searchBar') searchBar!: ElementRef;

  getSearchText() {
    const textValue = this.searchBar.nativeElement.value;
    console.log(textValue); // Use the input text as needed
  }
}
