import { Component, OnInit, Input } from '@angular/core';
import { AdCompaignForm } from '@app/ads-manager/models/ad-compaign-form';

@Component({
  selector: 'app-edit-compaign-left',
  templateUrl: './edit-compaign-left.component.html',
  styleUrls: ['./edit-compaign-left.component.scss']
})
export class EditCompaignLeftComponent implements OnInit {

  @Input() compaign_model: AdCompaignForm;
  @Input() child:boolean;
  @Input() active_id:number;
  constructor() { }

  ngOnInit() {
  }

}
