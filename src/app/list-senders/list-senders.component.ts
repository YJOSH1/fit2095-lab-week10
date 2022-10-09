import { Component, OnInit } from '@angular/core';
import { AnyArray } from 'mongoose';
import { DatabaseService } from "../database.service";

@Component({
  selector: 'app-list-senders',
  templateUrl: './list-senders.component.html',
  styleUrls: ['../app.component.css'],
})
export class ListSendersComponent implements OnInit {
  sendersDB: any[] = [];

  constructor(private dbService: DatabaseService) { }

  ngOnInit(): void {
    this.dbService.getSenders().subscribe((data: any) => {
      this.sendersDB = data;
    });
  }

}
