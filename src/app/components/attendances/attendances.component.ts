import { Module } from './../../model/module.model';
import { AttendanceService } from "./../../attendance.service";
import { Attendance } from "./../../model/attendance.model";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "app-attendances",
  templateUrl: "./attendances.component.html",
  styleUrls: ["./attendances.component.scss"]
})
export class AttendancesComponent implements OnInit {
  attendanceGroup$: Observable<Attendance[]>;
  readonly path = "attendance";

  constructor(private attendanceService: AttendanceService) {}

  ngOnInit() {
    this.attendanceGroup$ = this.attendanceService.getCollection$(
      this.path,
      ref => ref.orderBy("date", "asc")
    );
  }
}