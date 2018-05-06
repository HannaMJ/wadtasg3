import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Module } from './../../model/module.model';
import { AttendanceService } from './../../attendance.service';
import { AlertComponent } from "ngx-bootstrap/alert/alert.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { BsModalService } from "ngx-bootstrap/modal";
import { BsModalRef } from "ngx-bootstrap/modal/bs-modal-ref.service";

@Component({
  selector: 'app-list-modules',
  templateUrl: './list-modules.component.html',
  styleUrls: ['./list-modules.component.scss']
})
export class ListModulesComponent implements OnInit {
  modules$: Observable<Module[]>;
  readonly path = "modules";

  moduleForm: FormGroup;

  // Used by AlertComponent
  alerts: any[] = [];

  modalRef: BsModalRef;
  message: string;

  // Boolean for checking if updating
  updating: boolean;

	constructor(
    private groupService: AttendanceService,
    private modalService: BsModalService
  ) {}

   ngOnInit() {
    // Form validation, Submit button will only work if all valid
    this.moduleForm = new FormGroup({
      moduleCode: new FormControl("", [Validators.required, Validators.minLength(5)]),
      moduleName: new FormControl("", Validators.required),
      creditValue: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      learningHours: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$")
      ]),
      moduleLecturer: new FormControl("", Validators.required),
      lecturerEmail: new FormControl("", Validators.required),
      id: new FormControl("")
    });

    this.modules$ = this.groupService.getCollection$(this.path, ref =>
      ref.orderBy("moduleCode", "asc")
    );

    this.updating = false; // setting initial state of updating boolean
  }

  // Saving group
  save() {
    // Taking values from input HTML
    const moduleCode = this.moduleForm.get("moduleCode").value;
    const moduleName = this.moduleForm.get("moduleName").value;
	const creditValue = this.moduleForm.get("creditValue").value;
    const learningHours = this.moduleForm.get("learningHours").value;
    const moduleLecturer = this.moduleForm.get("moduleLecturer").value;
    const lecturerEmail = this.moduleForm.get("lecturerEmail").value;
    // sending off to service to save
    this.groupService.add(this.path, { moduleCode, moduleName, creditValue, learningHours, moduleLecturer, lecturerEmail  });
    this.addedGroupMessage(); // Show confirmation
    this.moduleForm.reset(); // clears form
  }

  updateGroup(): void {
    console.log("Updating document: " + this.moduleForm.get("id").value);
    const id = this.moduleForm.get("id").value;
	  const moduleCode = this.moduleForm.get("moduleCode").value;
    const moduleName = this.moduleForm.get("moduleName").value;
	  const creditValue = this.moduleForm.get("creditValue").value;
    const learningHours = this.moduleForm.get("learningHours").value;
    const moduleLecturer = this.moduleForm.get("moduleLecturer").value;
    const lecturerEmail = this.moduleForm.get("lecturerEmail").value;

    const Module: Partial<Module> = { moduleCode, moduleName, creditValue, learningHours, moduleLecturer, lecturerEmail };
    // sending off to service to update, needs id and other data
    this.groupService.update(this.path, id, Module);
    this.moduleForm.reset(); // clears form
  }

  // Delete Group
  remove(id: string) {
    this.groupService.remove(this.path, id);
    this.modalRef.hide();
    this.removedGroupMessage();
  }

  // Populate input form
  fill(Module: Module) {
    // Enable Update Button
    this.updating = true;
    // Fill in form
    this.moduleForm.setValue({
      moduleCode: Module.moduleCode,
      moduleName: Module.moduleName,
      creditValue: Module.creditValue,
      learningHours: Module.learningHours,
      moduleLecturer: Module.moduleLecturer,
      lecturerEmail: Module.lecturerEmail,
      id: Module.id
    });
  }

  // Clear form
  reset(): void {
    this.moduleForm.reset();
  }

  // Alert stuff, such as success in adding new data into DB
  addedGroupMessage(): void {
    this.alerts.push({
      type: "success",
      msg: "Saved module into database",
      timeout: 3000 // in miliseconds 1000 is 1 second
    });
  }

  removedGroupMessage(): void {
    this.alerts.push({
      type: "warning",
      msg: "Removed module from database",
      timeout: 3000 // in miliseconds 1000 is 1 second
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

  // Modal stuff
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  decline(): void {
    this.modalRef.hide();
  }
}