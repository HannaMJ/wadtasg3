import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '../../attendance.service';

@Component({
  selector: "app-attendances-lecturer-view",
  templateUrl: "./attendances-lecturer-view.component.html",
  styleUrls: ["./attendances-lecturer-view.component.scss"]
})
export class AttendancesLecturerViewComponent implements OnInit {
  WADTattendanceGroup$: Observable<any[]>;
  MWCattendanceGroup$: Observable<any[]>;
  readonly path = "attendance";

  constructor(
    private attendanceService: AttendanceService
  ) {}

  ngOnInit() {
    this.WADTattendanceGroup$ = this.attendanceService.getCollection$(
      this.path,
      ref => ref.where("module", "==", "WADT")
    );

    this.MWCattendanceGroup$ = this.attendanceService.getCollection$(
      this.path,
      ref => ref.where("module", "==", "MWC")
    );
  }
}