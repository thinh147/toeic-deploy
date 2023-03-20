import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseAPI, UserModel } from './user-management.component';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  baseURL: string;
  constructor(private http: HttpClient) {
    this.baseURL = environment.baseURL;
  }

  searchUser(currentPage: number, pageSize: number, selectGroup: any[]) {
    //tham số tìm kiếm null là tìm tất cả 
    const url = new URL(this.baseURL + '/admin/questions');
    url.searchParams.set('page', (currentPage - 1).toString());
    url.searchParams.set('size', pageSize.toString());
    // url.searchParams.set('parts', 'P1');
    selectGroup.map(value => value.code).join(',') && selectGroup.map(value => value.code).join(',').length > 0 ? url.searchParams.set('parts', selectGroup.map(value => value.code).join(',')) : null;

    // lấy thông tin ở form để thực hiện request search
    return this.http.get<ResponseAPI<UserModel[]>>(url.href);
  }

  requestSave(question: {}, type: string) {
    const url = new URL(this.baseURL + '/admin/questions/' + type);
    let data;
    type === 'create' ? data = [question] : data = question;
    return this.http.post<UserModel>(url.href, data);
  }
}
