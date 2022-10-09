import { Component, OnInit } from "@angular/core";
import { DatabaseService } from "../database.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-delete-sender',
  templateUrl: './delete-sender.component.html',
  styleUrls: ['../app.component.css'],
})
export class DeleteSenderComponent implements OnInit {
  sendersDB: any[] = [];
  senderId:any = "";

  constructor(private dbService: DatabaseService, private router: Router) { }
  
  onGetSenders() {
    this.dbService.getSenders().subscribe((data: any) => {
      this.sendersDB = data;
    });
  }

  onDeleteSender(senderId:any) {
    this.dbService.deleteSender(senderId).subscribe(result => {
      this.onGetSenders();
      this.router.navigate(["/listsenders"]);
    });
  }

  ngOnInit(): void {
    this.onGetSenders();
  }

}
