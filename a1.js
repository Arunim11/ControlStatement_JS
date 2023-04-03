
<script type="text/javascript">

var n=prompt("enter the range of array");
var a=[];

for(var i=0;i<n;i++)
{
	a[i]=parseInt(prompt("enter the number"));
}
for(var i=0;i<n;i++)
{
	if(a[i]%3==0)
	{
	document.write(a[i]+" ");
	}
}
</script>
