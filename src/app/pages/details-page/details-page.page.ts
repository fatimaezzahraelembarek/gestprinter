import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute ,Router } from '@angular/router';
import { CalendarMode } from 'ionic2-calendar';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.page.html',
  styleUrls: ['./details-page.page.scss'],
})
export class DetailsPagePage implements OnInit {
   printer:any;
   type:any;
   lstTypes:any[];
   dateExample:any;
   strtdate:any;
   showCalendar:boolean=false;
  constructor(private route: ActivatedRoute,
				private navCtrl:NavController,
				private router:Router){
		this.lstTypes=['','Powder','Wire','Resin' ];
}
			
// JSON "set" example
async setObject(lekey,obb) {
  await Preferences.set({
    key: lekey,
    value: JSON.stringify(obb)
  });
}

   
// JSON "get" example
async getObject(lekey) {
  let res="";
  let ret = await Preferences.get({ key: lekey});
  if (ret.value)
	 res = JSON.parse(ret.value);
  return res;
}


  ngOnInit() {
  let c:any;
  
   this.route.queryParams.subscribe(params => { this.printer =JSON.parse( params['data']); 
   console.log(this.printer);
   
  });
 this.dateExample=this.printer.miseservice;
  }
 
getType(s){
	let a=s.split(" ");
	
	return  a[0];
}
arrangeDate(d){
  let m=d.split('/');
  return m[2]+"-"+m[1]+"-"+m[0];
  
}

openCalendar() {
    this.showCalendar = true;
	//this.strtdate.value=this.dateExample;
	 //this.strtdate=document.getElementById("strtdate");

	//console.log(this.dateExample);
  }
  annuleCalendar() {
    this.showCalendar = false;
	//this.strtdate.value=this.dateExample;
	console.log(this.dateExample);
//	this.dateExample=this.dateExample.toLocaleDateString();
		console.log(this.dateExample);

	//document.getElementById ("strtdate").placeholder=this.dateExample.toLocaleDateString();
  }  
  addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}
  markIt(){
 
  let c={
		titre:this.printer.nom,
		dateDebut:this.dateExample,
		heureDebut:"8:00",
		dateFin:this.dateExample,
		heureFin:"10:00",
		observe:"maintenance",
		}
  
   this.router.navigate(['/evcalendar'],  { queryParams: { data: JSON.stringify(c)} });
  //this.router.navigateByUrl("evcalendar");
  }
 retourne(){
  this.navCtrl.pop();
}
printerSelectionChanged(ev){
   let ancnom=this.printer.nom;
   let el=ancnom.split(' ');
   let choix=ev.target.value;
   this.printer.nom=choix+" "+el[1];
	console.log(ev.target.value);
}
}
