import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-results-modal',
  templateUrl: './results-modal.page.html',
  styleUrls: ['./results-modal.page.scss'],
})
export class ResultsModalPage implements OnInit {

  modalInvestment:number;
  modalRate:number;
  modalYears:number;
  modalBalance:number;

  constructor(private modalController: ModalController,
    private navParams: NavParams) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modalInvestment = this.navParams.data.paramInvestment;
    this.modalRate = this.navParams.data.paramRate;
    this.modalYears = this.navParams.data.paramYears;
    this.modalBalance = this.navParams.data.paramBalance
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
