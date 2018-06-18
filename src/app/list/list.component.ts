import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PokelistService } from '../services/pokelist.service';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { PokemonURL } from '../interfaces/pokelist.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns = ['name', 'url'];
  dataSource: MatTableDataSource<PokemonURL>;
  isLoading = true;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private service: PokelistService, private router: Router) {
    const initialData = [];
    this.dataSource = new MatTableDataSource(initialData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getList();
  }

  getList() {
    this.isLoading = true;
    this.service.getPokeList('1000', '0').subscribe(
      response => {
        this.dataSource.data = response.results;
        this.isLoading = false;
      }
    );
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  viewPokemon(address: string) {
    this.router.navigate(['/view'], { queryParams: { address } });
  }

}
