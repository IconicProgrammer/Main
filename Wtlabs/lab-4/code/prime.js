let prime=prompt("Enter a number:");
for(let i=2;i<=prime;i++){
	count = 0;
	for(let j=2;j<=i/2;j++){
		if(i%j==0){
			count++;
		}
	}
	if(count==0){
		document.write(i+"  ");
	}
}