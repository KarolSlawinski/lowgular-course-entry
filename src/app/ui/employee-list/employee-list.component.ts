import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
 templateUrl: './employee-list.component.html',
  //template: '<h1>Inaczej</h1>',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _httpClient: HttpClient) {}
  // title: string = 'Tekst który sie pojawi w HTML';
  //napis: string = 'Cos innego niz title :)';
  data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
  //data = [{name: 'Jacek'}, {name: 'Wojtek'}];


}

