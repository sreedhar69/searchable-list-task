import { Component, OnInit } from '@angular/core';
import { ItemService, Item } from '../item.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-searchable-list',
  templateUrl: './searchable-list.component.html',
  styleUrls: ['./searchable-list.component.scss']
})
export class SearchableListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'description'];
  dataSource = new MatTableDataSource<Item>();
  searchQuery: string | undefined = undefined;
  pageSize = 10;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(page: number = 1): void {
    this.itemService.getItems(page, this.pageSize).subscribe((items) => {
      this.dataSource.data = items;
    });
  }

  onSearchChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const query = inputElement.value;
    this.searchQuery = query;
    
    if (query) {
      this.itemService.searchItems(query).subscribe((items) => {
        this.dataSource.data = items;
      });
    } else {
      this.loadItems();
    }
  }
  onPageChange(event: any): void {
    this.loadItems(event.pageIndex + 1);
  }

}
