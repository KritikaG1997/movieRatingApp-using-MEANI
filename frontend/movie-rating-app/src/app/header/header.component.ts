import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../service/services.service';
import { DatatransferServiceService } from '../datatransfer-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  isToken: any;
  searchName: string = "";
  records!: any;
  pageNum: any;
  allmoviesList: any = [];

  constructor(
    private service: ServicesService,
    private router: Router,
    private datatraService: DatatransferServiceService
  ) { }

  ngOnInit() {
    this.loggedIn();
  }

  loggedIn() {
    this.isToken = localStorage.getItem("userToken");
    return this.isToken
  };

  logout() {
    this.router.navigate(["/login"])
    localStorage.removeItem("userToken");
    localStorage.removeItem("role");
  }

  searchMovie() {
    this.service.searchResult(this.searchName).subscribe(async (result: any) => {

      this.allmoviesList = result.result.result;      
      this.datatraService.sendData(this.allmoviesList)
      this.records = result.length;
      this.pageNum = 1;
    })
  }

}
