const PenerimaEmail = 'eehaha12345@mail.com'

function submitform() {

	let Name = document.getElementById('textname').value;
	let email = document.getElementById('email').value;
	let Nophone = document.getElementById('Nophone').value;
	let Country = document.getElementById('Country').value;
	let Komentar = document.getElementById('Komentar').value;

	//console.log(Name);
	//console.log(email);
	//console.log(Nophone);
	//console.log(Country);
	//console.log(Komentar);


	if (Name == '' || email == '' || Nophone == '' || Country == ''|| Komentar == '')
		{alert('please fill in all')}


let a = document.createElement ('a')

a.href =`mailto:${PenerimaEmail}?subject=
${Country}&body=Hay, my name ${Name}, ${Country},
 ${Komentar}`;



a.click();


}


