import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProjectListService } from '../../service/project-list.service';

@Component({
  selector: 'app-pipe-filter',
  templateUrl: './pipe-filter.component.html',
  styleUrls: ['./pipe-filter.component.scss']
})
export class PipeFilterComponent implements OnInit {
  
  customData: any;
  public searchText : string;
  
  constructor(private _projectListData: ProjectListService) { }
  @ViewChild('searchField', { static: false, }) nameField: ElementRef;
  ngOnInit() {
    this.defalutData();
    setTimeout(() => {
      //console.log(this.nameField.nativeElement);
      this.nameField.nativeElement.focus();
    }, 500);
  }

  defalutData() {
    this._projectListData.feachProjectData.subscribe((response: any) => {
      this.customData = JSON.parse(response._body).projectPeriodDuration;
    })
  }

}

