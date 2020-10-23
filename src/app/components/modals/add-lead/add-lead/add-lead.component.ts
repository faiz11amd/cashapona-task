import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/components/dashboard/dashboard/dashboard.component';


@Component({
  selector: 'app-add-lead',
  templateUrl: './add-lead.component.html',
  styleUrls: ['./add-lead.component.scss']
})
export class AddLeadComponent implements OnInit {
  leadForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AddLeadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder,
    private http: HttpClient
    ) {}


  ngOnInit() {
    this.leadForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['' ,[Validators.required]],
      location_type: ['',[Validators.required]],
      location_string: ['', [Validators.required]]
    })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addLead() {
    console.log(this.data, ' : add lead');
    this.dialogRef.close(this.leadForm.value);
    
  }


}
