import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig, MatSnackBarModule} from '@angular/material/snack-bar';
import {
  NgxMatDatetimePickerModule,
  NgxMatNativeDateModule,
  NgxMatTimepickerModule
} from '@angular-material-components/datetime-picker';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


const MATERIAL_MODULES = [
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatToolbarModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatSnackBarModule,
  NgxMatDatetimePickerModule,
  NgxMatTimepickerModule,
  NgxMatNativeDateModule,
  NgxMaterialTimepickerModule
];

const MAT_SNACK_BAR_GLOBAL_CONFIG: MatSnackBarConfig = {
  duration: 2500,
  verticalPosition: 'bottom',
  horizontalPosition: 'center'
};

const MAT_DIALOG_GLOBAL_CONFIG: MatDialogConfig = {
  width: '700px',
  disableClose: true
};

@NgModule({
  declarations: [],
  exports: [
    ...MATERIAL_MODULES
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: MAT_DIALOG_GLOBAL_CONFIG},
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: MAT_SNACK_BAR_GLOBAL_CONFIG}
  ]
})
export class MaterialModule { }
