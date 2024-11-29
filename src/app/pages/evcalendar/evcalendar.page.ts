import { Component} from '@angular/core';
import { Router ,ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-evcalendar',
  templateUrl: './evcalendar.page.html',
  styleUrls: ['./evcalendar.page.scss'],
})
export class EvcalendarPage {
  evenement:any; 
  lstRdv:any[]=[];
  mykeyr:string="torepairprinters";
   

  constructor(public router:Router,
  private navCtrl:NavController,
  public route:ActivatedRoute ) {
 
  let t=this.getObject(this.mykeyr);
  if (Array.isArray(t))
	 this.lstRdv=t;
  if (this.lstRdv.length>0 )
      {
  this.lstRdv=[];
  /*
	{
		titre:"monTitreEvent1",
		dateDebut:"12/10/2024",
		heureDebut:"10",
		dateFin:"14/10/2024",
		heureFin:"10",
		observe:"Reparation"
	},
	{
		titre:"monTitreEvent2",
		dateDebut:"12/10/2024",
		heureDebut:"10",
		dateFin:"14/10/2024",
		heureFin:"10",
		observe:"Consultatiton"
	},
	{
		titre:"monTitreEvent3",
		dateDebut:"12/10/2024",
		heureDebut:"10",
		dateFin:"14/10/2024",
		heureFin:"10",
		observe:"reparation"
	},{
		titre:"monTitreEvent4",
		dateDebut:"12/10/2024",
		heureDebut:"10",
		dateFin:"14/10/2024",
		heureFin:"10",
		observe:"maintenance"
	}
  
  ];*/
  }
  else
  {
   this.setObject(this.mykeyr,this.lstRdv);
  }
   this.route.queryParams.subscribe(params => { this.evenement =JSON.parse( params['data']); 
   console.log('data',this.evenement);
   this.lstRdv.push(this.evenement);
   
  });
  
  }
 retourne(){
	this.setObject(this.mykeyr,this.lstRdv);
  this.navCtrl.pop();
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
}
