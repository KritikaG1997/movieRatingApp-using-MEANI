import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class DatatransferServiceService {

  private dataTransferSubject = new Subject<boolean>()
  dataTransferObservable = this.dataTransferSubject.asObservable();

  sendData(str: any) {
    this.dataTransferSubject.next(str);
  }
}
