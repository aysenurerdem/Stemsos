var n;
var fieldName;
var p;
var p1;
function ValidatePhone()
{
	p=p1.value
	if(p.length==3)
	{
		pp=p;
		d4=p.indexOf('(')
		d5=p.indexOf(')')
		if(d4==-1){
			pp="("+pp;
		}
		if(d5==-1){
			pp=pp+")";
		}
		fieldName.value="";
		fieldName.value=pp;
	}
	if(p.length>3)
	{
		d1=p.indexOf('(')
		d2=p.indexOf(')')
		if (d2==-1){
			l30=p.length;
			p30=p.substring(0,4);
			p30=p30+")"
			p31=p.substring(4,l30);
			pp=p30+p31;
			fieldName.value="";
			fieldName.value=pp;
		}
	}
	if(p.length>5)
	{
		p11=p.substring(d1+1,d2);
		if(p11.length>3)
		{
			p12=p11;
			l12=p12.length;
			l15=p.length
			p13=p11.substring(0,3);
			p14=p11.substring(3,l12);
			p15=p.substring(d2+1,l15);
			fieldName.value="";
			pp="("+p13+")"+p14+p15;
			fieldName.value=pp;
		}
		l16=p.length;
		p16=p.substring(d2+1,l16);
		l17=p16.length;
		if(l17>3&&p16.indexOf('-')==-1)
		{
			p17=p.substring(d2+1,d2+4);
			p18=p.substring(d2+4,l16);
			p19=p.substring(0,d2+1);
			pp=p19+p17+"-"+p18;
			fieldName.value="";
			fieldName.value=pp;
		}
	}

	setTimeout(ValidatePhone,100)
}

function formatPhoneNumber(m)
{
	fieldName=m;
	p1=m
	ValidatePhone()
}
function testphone(obj1)
{
	p=obj1.value
	p=p.replace("(","")
	p=p.replace(")","")
	p=p.replace("-","")
	p=p.replace("-","")
	if (isNaN(p)==true)
	{
		alert("Check phone");
		return false;
	}
}
