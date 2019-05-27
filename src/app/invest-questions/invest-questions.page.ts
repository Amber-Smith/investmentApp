import { ResultsModalPage } from './../results-modal/results-modal.page';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-invest-questions',
  templateUrl: './invest-questions.page.html',
  styleUrls: ['./invest-questions.page.scss'],
})



export class InvestQuestionsPage implements OnInit {

  dataReturned:any;

  initial_investment: number;
  target_amount: number;
  annual_rate: number;
  
  years:number = 0;
  balance:number;
  invest_value:number;


  constructor(private router:Router, public navCtrl: NavController, public modalController: ModalController,public alertController: AlertController) { 
  }
  
  // navigate home
  goToHomePage(){
    this.router.navigate(['home'])
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error Message',
      message: 'Initial investment amount should not be greater than your target amount.',
      buttons: ['OK']
    });

    await alert.present();
  }

  //Open Modal and process Data method
  async openModal() {

     // calculate years needed to general target amount and the investment value

     //assign the initial investment to balance
     this.balance = this.initial_investment;

     while(this.balance <= this.target_amount)
     {
       this.years++;
 
       // calculate the investment value
       this.invest_value = this.balance * this.annual_rate/100;
       this.balance+=this.invest_value
     }  

     console.log(this.balance.toFixed(2))
     

    // openModal 
    const modal = await this.modalController.create({
      component: ResultsModalPage,
      componentProps: {
        "paramInvestment": this.initial_investment,
        "paramRate": this.annual_rate,
        "paramYears": this.years,
        "paramBalance": this.balance.toFixed(2)
      }
    });
 
    modal.onDidDismiss().then((dataReturned) => {
      if (dataReturned !== null) {
        this.dataReturned = dataReturned.data;
        //alert('Modal Sent Data :'+ dataReturned);
      }
    });
     
    // make sure the target_amount isn't less than the initial_investment
    if(this.target_amount < this.initial_investment){
      this.presentAlert();
    }

    else{
      return await modal.present();
    }
 
    // return await modal.present();
  }

  ngOnInit() {
  }

}


