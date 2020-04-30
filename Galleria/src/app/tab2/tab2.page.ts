import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  currentImage: any;
  imageURL: any;
  imageData: any;
  hideimage: false;
  baseImage: string;


  constructor(public photoService: PhotoService, public camera: Camera, public http: HttpClient ) {  }

  ngOnInit() {
    this.photoService.loadSaved();
    this.imageData = ImageData;
    this.imageURL = "data:image/png;base64," + this.imageData;
    this.hideimage = false;
}
}
