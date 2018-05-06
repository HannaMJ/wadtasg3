import { Attendance } from './../../model/attendance.model';
import { Information } from './../../model/informations.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';
import { AttendanceService } from '../../attendance.service';
import { AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: "app-attendance-single-view",
  templateUrl: "./attendance-single-view.component.html",
  styleUrls: ["./attendance-single-view.component.scss"]
 })
 export class AttendanceSingleViewComponent implements OnInit {
  private itemDoc: AngularFirestoreDocument<any>;
  item: Observable<any>;
  attendanceForm: FormGroup;
  informations$: Observable<any[]>;
  readonly path: "informations";

  constructor(private route: ActivatedRoute, private router: Router,
              private attendanceService: AttendanceService,
              private afs: AngularFirestore) {}

   ngOnInit() {

    this.informations$ = this.attendanceService.getCollection$("informations", ref =>
      ref.orderBy("Module", "asc")
    );

    const id = this.route.snapshot.paramMap.get("id");
    console.log(id);
    this.itemDoc = this.afs.doc<any>(`attendance/${id}`);
    this.item = this.itemDoc.valueChanges();

    this.attendanceForm = new FormGroup({
      radio1: new FormControl(),
      remark1: new FormControl(),

      radio2: new FormControl(),
      remark2: new FormControl(),

      radio3: new FormControl(),
      remark3: new FormControl(),

      radio4: new FormControl(),
      remark4: new FormControl(),

      radio5: new FormControl(),
      remark5: new FormControl(),

      radio6: new FormControl(),
      remark6: new FormControl(),

      radio7: new FormControl(),
      remark7: new FormControl(),

      radio8: new FormControl(),
      remark8: new FormControl(),

      radio9: new FormControl(),
      remark9: new FormControl(),

      radio10: new FormControl(),
      remark10: new FormControl(),

      radio11: new FormControl(),
      remark11: new FormControl(),

      radio12: new FormControl(),
      remark12: new FormControl(),

      radio13: new FormControl(),
      remark13: new FormControl(),

      radio14: new FormControl(),
      remark14: new FormControl(),

      radio15: new FormControl(),
      remark15: new FormControl(),

      radio16: new FormControl(),
      remark16: new FormControl(),

      radio17: new FormControl(),
      remark17: new FormControl(),

      radio18: new FormControl(),
      remark18: new FormControl(),

      radio19: new FormControl(),
      remark19: new FormControl(),

      radio20: new FormControl(),
      remark20: new FormControl(),
      
      radio21: new FormControl(),
      remark21: new FormControl(),
    });

    this.attendanceForm.patchValue({
      radio1: "present",
      radio2: "present",
      radio3: "present",
      radio4: "present",
      radio5: "present",
      radio6: "present",
      radio7: "present",
      radio8: "present",
      radio9: "present",
      radio10: "present",
      radio11: "present",
      radio12: "present",
      radio13: "present",
      radio14: "present",
      radio15: "present",
      radio16: "present",
      radio17: "present",
      radio18: "present",
      radio19: "present",
      radio20: "present",
      radio21: "present"
    });
  }

  updateStudentsAttendance() {
    const student1Attendance = this.attendanceForm.get("radio1").value;
    const student1Remark = this.attendanceForm.get("remark1").value;

    const student2Attendance = this.attendanceForm.get("radio2").value;
    const student2Remark = this.attendanceForm.get("remark2").value;

    const student3Attendance = this.attendanceForm.get("radio3").value;
    const student3Remark = this.attendanceForm.get("remark3").value;

    const student4Attendance = this.attendanceForm.get("radio4").value;
    const student4Remark = this.attendanceForm.get("remark4").value;

    const student5Attendance = this.attendanceForm.get("radio5").value;
    const student5Remark = this.attendanceForm.get("remark5").value;

    const student6Attendance = this.attendanceForm.get("radio6").value;
    const student6Remark = this.attendanceForm.get("remark6").value;

    const student7Attendance = this.attendanceForm.get("radio7").value;
    const student7Remark = this.attendanceForm.get("remark7").value;

    const student8Attendance = this.attendanceForm.get("radio8").value;
    const student8Remark = this.attendanceForm.get("remark8").value;

    const student9Attendance = this.attendanceForm.get("radio9").value;
    const student9Remark = this.attendanceForm.get("remark9").value;

    const student10Attendance = this.attendanceForm.get("radio10").value;
    const student10Remark = this.attendanceForm.get("remark10").value;

    const student11Attendance = this.attendanceForm.get("radio11").value;
    const student11Remark = this.attendanceForm.get("remark11").value;

    const student12Attendance = this.attendanceForm.get("radio12").value;
    const student12Remark = this.attendanceForm.get("remark12").value;

    const student13Attendance = this.attendanceForm.get("radio13").value;
    const student13Remark = this.attendanceForm.get("remark13").value;

    const student14Attendance = this.attendanceForm.get("radio14").value;
    const student14Remark = this.attendanceForm.get("remark14").value;

    const student15Attendance = this.attendanceForm.get("radio15").value;
    const student15Remark = this.attendanceForm.get("remark15").value;

    const student16Attendance = this.attendanceForm.get("radio16").value;
    const student16Remark = this.attendanceForm.get("remark16").value;

    const student17Attendance = this.attendanceForm.get("radio17").value;
    const student17Remark = this.attendanceForm.get("remark17").value;

    const student18Attendance = this.attendanceForm.get("radio18").value;
    const student18Remark = this.attendanceForm.get("remark18").value;

    const student19Attendance = this.attendanceForm.get("radio19").value;
    const student19Remark = this.attendanceForm.get("remark19").value;

    const student20Attendance = this.attendanceForm.get("radio20").value;
    const student20Remark = this.attendanceForm.get("remark20").value;

    const student21Attendance = this.attendanceForm.get("radio21").value;
    const student21Remark = this.attendanceForm.get("remark21").value;

    this.itemDoc.set(
      {
        students: [
          {
            id: "DiICT(WBD)/06/16/0213",
            attendance: student1Attendance,
            name: "ABDUL ALIM BIN MUHAMMAD YAMIN",
            remark: student1Remark
          },
          {
            id: "DiICT(WBD)/06/16/0215",
            attendance: student2Attendance,
            name: "AMAL BATRISYIA BINTI JOSFERIDIN",
            remark: student2Remark
          },
          {
            id: "DiICT(WBD)/06/16/0216",
            attendance: student3Attendance,
            name: "AWANGKU MOHAMMAD DANIEL BIN PENGIRAN WAHAB",
            remark: student3Remark
          },
          {
            id: "DiICT(WBD)/06/16/0217",
            attendance: student4Attendance,
            name: "AWG MOHD ADI ASQAWI BIN AWG ADANAN",
            remark: student4Remark
          },
          {
            id: "DiICT(WBD)/06/16/0219",
            attendance: student5Attendance,
            name: "IZZATUS SAKINAH BINTI AWANG MASRI",
            remark: student5Remark
          },
          {
            id: "DiICT(WBD)/06/16/0220",
            attendance: student6Attendance,
            name: "KHAIRUNNISA BINTI HAJI ZULKIFLI",
            remark: student6Remark
          },
          {
            id: "DiICT(WBD)/06/16/0221",
            attendance: student7Attendance,
            name: "MOHAMMAD IZZAN FAUZI BIN HAJI MOHAMMAD KAMAL",
            remark: student7Remark
          },
          {
            id: "DiICT(WBD)/06/16/0222",
            attendance: student8Attendance,
            name: "MOHAMMAD HAFIZUDDIN BIN HAJI NARUDIN",
            remark: student8Remark
          },
          {
            id: "DiICT(WBD)/06/16/0223",
            attendance: student9Attendance,
            name: "MOHD MUAZZ MUSTAQIM NOR-IMAN BIN HAJI OSMAN",
            remark: student9Remark
          },
          {
            id: "DiICT(WBD)/06/16/0224",
            attendance: student10Attendance,
            name: "MUHAMMAD SYAHMIL IZWAN BIN HAJI JULANI",
            remark: student10Remark
          },
          {
            id: "DiICT(WBD)/06/16/0225",
            attendance: student11Attendance,
            name: "MUHAMMAD ZULFADLI BIN AWANG HAJI AMDI",
            remark: student11Remark
          },
          {
            id: "DiICT(WBD)/06/16/0226",
            attendance: student12Attendance,
            name: "MUHAMMAD ARIF FAKHRULLAH BIN MOHAMMAD ALLI",
            remark: student12Remark
          },
          {
            id: "DiICT(WBD)/06/16/0227",
            attendance: student13Attendance,
            name: "MUHAMMAD AZIZI BIN KEFFLI",
            remark: student13Remark
          },
          {
            id: "DiICT(WBD)/06/16/0228",
            attendance: student14Attendance,
            name: "MUHAMMAD MUQRI BIN SUFRI",
            remark: student14Remark
          },
          {
            id: "DiICT(WBD)/06/16/0229",
            attendance: student15Attendance,
            name: "MUHAMMAD NURSHAZWAN BIN HAJI NOORSHARI",
            remark: student15Remark
          },
          {
            id: "DiICT(WBD)/06/16/0230",
            attendance: student16Attendance,
            name: "MUHAMMAD RIFDI@MUHAMMAD RIFAI'E BIN HAJI ABD GHANI",
            remark: student16Remark
          },
          {
            id: "DiICT(WBD)/06/16/0231",
            attendance: student17Attendance,
            name: "MUHAMMAD ARIF FAKHRULLAH BIN MOHAMMAD ALLI",
            remark: student17Remark
          },
          {
            id: "DiICT(WBD)/06/16/0232",
            attendance: student18Attendance,
            name: "MUHAMMAD ARIF FAKHRULLAH BIN MOHAMMAD ALLI",
            remark: student18Remark
          },
          {
            id: "DiICT(WBD)/06/16/0233",
            attendance: student19Attendance,
            name: "MUHAMMAD ARIF FAKHRULLAH BIN MOHAMMAD ALLI",
            remark: student19Remark
          },
          {
            id: "DiICT(WBD)/06/16/0234",
            attendance: student20Attendance,
            name: "MUHAMMAD ARIF FAKHRULLAH BIN MOHAMMAD ALLI",
            remark: student20Remark
          },
          {
             id: "DiICT(WBD)/06/16/0235",
             attendance: student21Attendance,
             name: "SITI RAIHANA BINTI MOKSIN",
             remark: student21Remark
          }
        ]
      },
      { merge: true }
    );

    this.router.navigate(["/attendance"]);
   }
 }
