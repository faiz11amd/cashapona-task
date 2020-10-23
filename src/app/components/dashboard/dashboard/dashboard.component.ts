import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddLeadComponent } from '../../modals/add-lead/add-lead/add-lead.component';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) { }

  dataSource = [];


  ngOnInit() {

  }


  openDialogAddLead(): void {
    const dialogRef = this.dialog.open(AddLeadComponent, {
      width: '500px',
      data: 'Add Lead component'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result, ' : AddLeadComponent The dialog was closed');
      this.dataSource.push(result);
    });
  }



}


