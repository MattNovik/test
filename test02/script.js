let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];

var yourClass = document.querySelector(".your-class");
var create = document.getElementById("create");

create.onclick = function () {
	var innerHTMLString = "";
images.forEach((item, index, array) => {
  innerHTMLString += `<img src="${item}"class="box">`;
});
yourClass.innerHTML = innerHTMLString;

			$('.your-class').slick({
			  infinite: true,
			  slidesToShow: 1,
			  slidesToScroll: 1
			});
};