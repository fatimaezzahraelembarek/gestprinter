import { Component, OnInit } from '@angular/core';
//import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import {DetailsPagePage} from '../details-page/details-page.page';
import { Preferences } from '@capacitor/preferences';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {

   estVide:boolean=false;
   lstPrinters:any[]=[];
   mykey:string="allprinters";
   
   			
			
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


			
   
  constructor(
			public router: Router
			) 
			{
	let t=this.getObject(this.mykey);
	if (Array.isArray(t))
		this.lstPrinters= 	t;
	if (this.lstPrinters.length==0)		
	{
	
  // tableau de donn�es lstPrinters : id, url image,nom,mis en serveice
  this.lstPrinters=[ {
	  id:'12',
	  urlimage:'../assets/images/powder-printer.png',
	  nom:'Powder printer',
	  miseservice:'14/10/2024',
	},
	{
	  id:'17',
	  urlimage:'../assets/images/wire-printer.png',
	  nom:'Wire printer',
	  miseservice:'10/10/2024',
	},
	{
	  id:'24',
	  urlimage:'../assets/images/wire-printer.png',
	  nom:'Wire printer',
	  miseservice:'11/10/2024',
	},
	{
	  id:'35',
	  urlimage:'../assets/images/resin-printer.png',
	  nom:'Resin printer',
	  miseservice:'05/02/2024',
	},
	{
	  id:'37',
	  urlimage:'../assets/images/wire-printer.png',
	  nom:'Wirer printer',
	  miseservice:'20/07/2024',
	},
	]	;
	}
	else{
	this.setObject(this.mykey,this.lstPrinters);
	}
	this.estVide=this.lstPrinters.length==0;
  }
voirDetails(event,c){
	this.itemSelection(event,c);
}
itemSelection(event,c){

  this.router.navigate(['/details-page'],  { queryParams: { data: JSON.stringify(c)} });
}
arrangeDate(d){
  let m=d.split('/');
  return m[2]+"-"+m[1]+"-"+m[0];
  
}
sortByDate() {
	this.lstPrinters= this.lstPrinters.sort((b, a) => {
	let a2=this.arrangeDate(a.miseservice);
	let b2=this.arrangeDate(b.miseservice);
	let a1 = new Date(a2).setHours(0, 0, 0, 0);
    let b1 = new Date(b2).setHours(0, 0, 0, 0);
	return (b1>a1)?1:(b1==a1)?0:-1;
  
	 });
}
sortById() {
  this.lstPrinters= this.lstPrinters.sort((b,a)=>{
					return b.id -a.id});
}
sortByNom() {
  this.lstPrinters= this.lstPrinters.sort((a, b) => {
  const nameA = a.nom.toUpperCase(); // ignore upper and lowercase
  const nameB = b.nom.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
}); 
  }

sortListContenu(e){
console.log(e.detail.value);
switch(e.detail.value ) {
  case "id":this.sortById();
		break;
case "type":this.sortByNom();
		break;
case "date":this.sortByDate();
		break;

}
}

  ngOnInit() {
	console.log('AccueilPage initialized');
  }

}
