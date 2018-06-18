import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokelistService } from '../services/pokelist.service';
// import * as mockData from './mock.json';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  // data = mockData;
  data = {};
  isLoading = true;

  constructor(private route: ActivatedRoute, private service: PokelistService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(value => {
      this.getPokemon(value.address);
    });
  }

  getPokemon(url: string) {
    this.service.getPokemon(url).subscribe( response => {
      this.data = response;
      this.isLoading = false;
    });
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
