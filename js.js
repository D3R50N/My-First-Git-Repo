/*Salut c'est ★Andy★, pour un nouveau jeu que
 vous connaissez tous ...le block breaker!
 */

window.onload=function(){
		var cx=cv.getContext("2d")
		var cxx=cvb.getContext("2d")
		//Je vais d'abord écrire toutes les fonctions dont j'aurai besoin

		/*★★★★★★★★Les FONCTIONS★★★★★★★★★*/
		 
		
		function text(txt, l, font, clr, x, y){
				//fonction pour écrire un texte 
          cx.font = l + " " + font 
          cx.fillStyle = clr
          cx.fillText(txt, x, y)}
		function bloc(x, y, w, h, color,c){
				//une fonction pour créer un bloc (un carreau)
          c.beginPath() 
          c.fillStyle = color 
          c.rect(x, y, w, h) 
          c.fill() 
          c.closePath()
				
				  c.beginPath() 
          c.strokeStyle ="black"
          c.rect(x, y, w, h) 
          c.stroke() 
          c.closePath()
		}
	
	

//Fonction pour attribuer une fonction Y à un bouton X
function ael(x, y){
	x.addEventListener("click", y)
		}
	function balle(bx,by,r){
		cxx.fillStyle="black"
						cxx.strokeStyle="red"
						cxx.lineWidth=3
						cxx.beginPath()
						cxx.arc(bx,by,r,0,Math.PI*180)
						cxx.fill()
						cxx.closePath()
						cxx.beginPath()
						cxx.arc(bx,by,r+5,0,Math.PI*180)
						cxx.stroke()
						cxx.closePath()
				}
		/*********Bon on commence ou pas ?*******/
	
		 var cw=cv.width=1000
		var ch=cv.height=1200
		cvb.width=1000
		cvb.height=1200
		
		var nbre_block=12;
		//le nombre de bloc sur une ligne
		var nbre_ligne=10;
		// le nombre de lignes
	var l_block=cw/nbre_block
		//chaque bloc aura la même longueur que les autres
		var la_block=30
		//une largeur egale aléatoire 
		var xblock=0
		var yblock=0
		//la position du premier bloc
		var r=30
		//rayon de la balle
		var bx=cw/2
		var by=ch/2
		//les coordonnées de la balle
		var vxby=20
		var vxbx=5
		//vitesse balle 
		var jw=100
		var jh=25
		//les longueur et largeur de la barre du joueur 
		var jx=cw/2
		var jy=ch-jh
		//les coordonnées de la barre (jy=ch-jh pour que la barre soit posée sur le "sol")
		var vtx=10
		
		
		var ballx=cw/2
		var bally=ch/2
			//la balle sera placée au milieu du terrain
		var once=true
		cvb.ontouchstart=function(e){
			var ex=e.touches[0].clientX
				if(jx<5/3*ex){
						vtx=10
				}
				else{
						vtx=-10
				}
		}
		
		var game=setInterval(jeu,60)
		//lancer la fonction jeu chaque 60 milisecondes
function jeu(){
				
////******************Partie I(les blocs)*********************/////				
		cxx.clearRect(0,0,cw,ch)
				cx.shadowOffsetX=5
				cx.shadowOffsetY=5
				cx.shadowBlur=1
				cx.shadowColor="#fff"
				var a=parseInt(Math.random()*300+50)
				var b=parseInt(Math.random()*300+50)
				var c=parseInt(Math.random()*300+50)
				//trois entiers aléatoires 
				var clr="rgb("+a+","+b+","+c+")" 
		
	//aussi long que ça soit , cela va générer une couleur aléatoire 
		bloc(xblock*l_block,yblock*la_block,l_block,la_block,clr,cx)
					//dessiner chaque bloc sur la ligne jusqu'à la fin de la ligne 
					
				if(xblock<=nbre_block){
						xblock++
						//passer au bloc suivant 
				}
				else if(yblock<nbre_ligne-1){
								yblock++
								xblock=0
								//passer à la prochaine ligne et revenir au début 
						}
						
				/*Bien on en a fini avec les blocs
				Commençons avec la barre du joueur */
				
	////********************Partie II(la barre du joueur )*******************////
				 
				 /*bon je rappelle que 	
				 
		var jw=40
		var jh=10
		//les longueur et largeur de la barre du joueur 
		var jx=cw/2
		var jy=ch-jh
		//les coordonnées de la barre (jy=ch-jh pour que la barre soit posée sur le "sol")
			var vtx=10
*/
	
				bloc(jx,jy,jw,jh,"aqua",cxx)
			//j'ai utilisé la fonction bloc car la barre est entre autre un bloc 😉
				jx+=vtx
				if(jx+jw>cw||jx<0){
						vtx*=-1
				}
				
				/*%***BALLE***%*/
				 /*Rappelons que
				var r=30
		//rayon de la balle
		var bx=cw/2
		var by=ch/2
		//les coordonnées de la barre
				*/
				
				if(yblock==nbre_ligne-1){
						balle(bx,by,r)
				by+=vxby
					bx+=vxbx
			
				}
				if((by+r>jy&&bx+r>jx&&bx-r<jx+jw)||(by-r<(yblock+1)*la_block)){
						
						vxby*=-1
				}
				if(bx+r>cw||bx-r<0){vxbx*=-1}
				
				
		}
	
}

