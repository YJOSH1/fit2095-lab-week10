import { Component, OnInit } from '@angular/core';
import { AnyArray } from 'mongoose';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-list-parcels',
  templateUrl: './list-parcels.component.html',
  styleUrls: ['../app.component.css'],
})
export class ListParcelsComponent implements OnInit {
  parcelsDB: any[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getParcels().subscribe((data: any) => {
      this.parcelsDB = data;
    });
  }

}
