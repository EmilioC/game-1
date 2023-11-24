import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsSearchBoxComponent } from '../../../shared/components/gifs-search-box/gifs-search-box.component';
import { CardListComponent } from '../../../shared/components/card-list/card-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, GifsSearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {

}
