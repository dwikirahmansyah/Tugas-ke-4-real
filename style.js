
// let blogs =[];

// function addsubmit() {

// 	let name = document.getElementById('textname').value;
// 	let title = document.getElementById('Komentar').value;
// 	let image = document.getElementById('Green-upload').file;

// 	let blogs = {
// 		name: name,
// 		title:  title,
// 		image: image,
	// };
	// console.log (blogs);
// }
let dataproject=[];
function addsubmit(){
	dataproject.push({
		title:document.getElementById('textname').value,
		image:URL.createObjectURL(document.getElementById('Green-upload').files[0]),
		autor: "Mochammad dwiki",
		date: new Date(),
		content:document.getElementById('Komentar').value,
	});
	console.log(dataproject);
	renderPage();
}


function renderPage(){
	let blogcontainer = document.getElementById('project-container');

	blogcontainer.innerHTML = '';

	dataproject.forEach((data,index)=>{
		blogcontainer.innerHTML+=`<a href="Detail.html" class="card-grid" style="padding: 20px;
    height: 350px;
    background-color: #eee;
    border-radius: 10px;
    text-decoration: none;
    color: black;"><img src="${data.image}" alt="" style="object-fit: cover; 
width: 100%; 
height: 50%;
 border-radius: 7px;">
 <p class="title" style="font-weight: 600;
margin-bottom: 0px;">${data.title}</p>
<p class="waktu" style="margin-top:0px;
margin-bottom:0px;
font-size: small;">Durasi : May 19 2022 10:27:55 GMT+0700</p>
<div class="awesome" style="margin-top:70px">
<i class="fa-brands fa-node-js"></i>
<i class="fa-brands fa-react"></i>
</div>
<div style="display :flex;">
<button onclick="edit(${index})"style="margin-right: 10px;width: 49%;
   background-color: black;
   color: white;
   border: none;
   border-radius: 4px;">Edit</button>
<button onclick="Hapus(${index})"style="width: 49%;
   background-color: black;
   color: white;
   border: none;
   border-radius: 4px;">Hapus</button>
</div>
		</a>`
	})
}

function edit(index){
	console.log(index);
}

function hapus(index){
	console.log(index);
}