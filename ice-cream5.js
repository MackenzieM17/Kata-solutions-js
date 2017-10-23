//initalize variables
inarray=false;
var flavors = ["vanilla","Strawberry","Coffee","pistachio","Walnut"];
var cone = [];
flavorlist=flavors.length;
//create arrat will all regular flavors
alert("He are our flavors"+flavors);

//set a string variable equal to a value with a prompt
for(scoop=1;scoop<4;scoop++){

do{
	var flavor =prompt("Enter an ice cream flavor");
	for(index=0; index<flavorlist; index=index+1){
		if (flavor==flavors[index]){
			inarray=true;
			}
		}
		if(inarray==false){
			alert(flavor+" is not a flavor");
		}
		
	if(flavor=="Strawberry"){
		alert("All out of "+flavor)
		inarray=false;
	}
}
while (inarray==false)	
alert("Here is your "+flavor+" scoop");
cone[scoop-1]=flavor;
}
coneString = cone.join('');
alert("Enjoy your ice cream"+coneString.toString());