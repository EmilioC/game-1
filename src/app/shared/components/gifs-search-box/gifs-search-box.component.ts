import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gifs-search-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gifs-search-box.component.html'
})
export class GifsSearchBoxComponent {

  @ViewChild('txtTagInput')
  public tagInput!: ElementRef<HTMLInputElement>

  constructor() {
  }

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    console.log({ newTag })
  }

}



