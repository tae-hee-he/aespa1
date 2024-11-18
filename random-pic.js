let space = document.querySelector("#space")
const image = ["https://i.pinimg.com/736x/e2/80/11/e28011e2bc12d5cafd9f2d4fe93d11f3.jpg","img/ae2.png","img/winter.png","img/ning.png","img/giselle.png","img/karina.png","img/ae3.png","img/ae4.png","https://i.pinimg.com/736x/68/71/ac/6871ac9f0fd0cfc14ffb4c875a38e3c5.jpg","https://i.pinimg.com/736x/fe/8c/4d/fe8c4d23e8662f4804397c15240efe0c.jpg","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"]

space.addEventListener('mousemove', function(e){
    console.log("마우스 움직임")
    const etImg = document.createElement("div");
    const todayImage = image[Math.floor(Math.random() * image.length)];
    const pic = todayImage.width;
    etImg.style.backgroundImage = `url(${todayImage})`
    etImg.style.width = 300+"px";
    etImg.style.height= 220+"px";
    etImg.style.pointerEvents = "none";
    etImg.style.backgroundSize = "contain";
    etImg.style.backgroundRepeat ="no-repeat";
    etImg.style.left= e.pageX -300 * 0.5 + "px";
    etImg.style.top= e.pageY -220 * 0.5 + "px";
    etImg.style.position = "absolute";
    etImg.style.transform = 'rotate('+ Math.random()*100+'deg)';
    document.body.append(etImg);
    setTimeout((e) => {
        etImg.style.opacity = 0;
    }, 2000);
}
)

