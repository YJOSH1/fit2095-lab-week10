import { Component, OnInit } from '@angular/core';
import { AnyArray } from 'mongoose';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-add-parcel',
  templateUrl: './add-parcel.component.html',
  styleUrls: ['../app.component.css']
})
export class AddParcelComponent {
  senderId: string = "";
  address: string = "";
  weight: number = 0;
  fragile: boolean = false;

  constructor(private dbService: DatabaseService, private router: Router) { }

  onAddParcel() {
    let newParcel = {
      senderId: this.senderId,
      parcel: {
        weight: this.weight,
        address: this.address,
        fragile: this.fragile
      }
    }

    this.dbService.addParcel(newParcel).subscribe(result => {
      this.router.navigate(["/listparcels"]);
    });
  }

}
