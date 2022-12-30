import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import WebViewer from '@pdftron/webviewer';

@Component({
  selector: 'app-viewedit-lease',
  templateUrl: './viewedit-lease.component.html',
  styleUrls: ['./viewedit-lease.component.css']
})
export class VieweditLeaseComponent implements AfterViewInit {
  @ViewChild('viewer') viewerRef!: ElementRef;

  ngAfterViewInit(): void {
    WebViewer({
      path: '../../../assets/lib',
      initialDoc: '../../../assets/Lease_Agreements/Lease Agreement 1.docx'
    }, this.viewerRef.nativeElement).then(instance =>{
      

    })
  }

}
