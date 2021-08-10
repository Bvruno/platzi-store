import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '@angular/cdk/layout';

import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule} from '@angular/material/card';
import { MatGridListModule} from '@angular/material/grid-list'
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatStepperModule,
    LayoutModule
  ],
  exports: [
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatSidenavModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatMenuModule,
    MatStepperModule,
    LayoutModule
  ]
})
export class MaterialModule { }
