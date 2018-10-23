var modalList = document.getElementsByClassName('emodal');
var imgList = document.getElementsByClassName('eduimg');
var modalImgList = document.getElementsByClassName('emodal-content')
var spanList = document.getElementsByClassName("close");

for(var i=0; i<imgList.length; i++){
	imgList[i].onclick = function() {
		modalList[i].style.display = "block";
		modalImgList[i].src = this.src;
		spanList[i].onclick = function() {
			modalList[i].style.display = "none";
		}
	}
}

