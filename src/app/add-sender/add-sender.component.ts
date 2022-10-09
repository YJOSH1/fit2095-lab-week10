import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-sender',
  templateUrl: './add-sender.component.html',
  styleUrls: ['../app.component.css']
})
export class AddSenderComponent {
  senderName: string = "";

  constructor(private dbService: DatabaseService, private router: Router) { }

  onAddSender() {
    let newSender = {
      name: this.senderName
    }

    this.dbService.addSender(newSender).subscribe(result => {
      this.router.navigate(["/listsenders"]);
    })
  }

}
