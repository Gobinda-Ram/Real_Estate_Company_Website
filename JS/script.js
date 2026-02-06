
const left= document.querySelector(".left");
const right= document.querySelector(".right");
const slider1= document.querySelector(".slider1");
const slider2= document.querySelector(".slider2");
const slider3= document.querySelector(".slider3");
const slider4= document.querySelector(".slider4");
const slider5= document.querySelector(".slider5");
const slider6= document.querySelector(".slider6");
const images1= document.querySelectorAll(".img1");
const images2= document.querySelectorAll(".img2");
const images3= document.querySelectorAll(".img3");
const images4= document.querySelectorAll(".img4");
const images5= document.querySelectorAll(".img5");
const textList= document.querySelectorAll(".text");
const length1= images1.length;
const length2= images2.length;
const length3= images3.length;
const length4= images4.length;
const length5= images5.length;
const length6= textList.length;

let slideNumber= 1;

images1.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
});

images2.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
});

images3.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
});

images4.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
});

images5.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
});

textList.forEach((slide,index)=>{
    slide.style.left= `${index*100}%`;
}); 



//-----------------------------------Start of Slider-------------------------------------//

const nextSlide1= function() {
    images1.forEach((slide)=>{
      slide.style.transform= `translateX(-${slideNumber*100}%)`;  
    });

    images2.forEach((slide)=>{
      slide.style.transform= `translateX(-${slideNumber*100}%)`;  
    });

    images3.forEach((slide)=>{
      slide.style.transform= `translateX(-${slideNumber*100}%)`;  
    });

    images4.forEach((slide)=>{
      slide.style.transform= `translateX(-${slideNumber*100}%)`;  
    });

    images5.forEach((slide)=>{
      slide.style.transform= `translateX(-${slideNumber*100}%)`;  
    });

    textList.forEach((slide)=>{
       slide.style.transform= `translateX(-${slideNumber*100}%)`;
    });

    slideNumber++;
};

const prevSlide1= function() {
    images1.forEach((slide)=>{
      slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;  
    });

    images2.forEach((slide)=>{
      slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;  
    });

    images3.forEach((slide)=>{
      slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;  
    });

    images4.forEach((slide)=>{
      slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;  
    });

    images5.forEach((slide)=>{
      slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;  
    });

    textList.forEach((slide)=>{
       slide.style.transform= `translateX(-${(slideNumber-2)*100}%)`;
    });

    slideNumber--;
};


const getFirstSlide1= function() {
    images1.forEach((slide)=>{
      slide.style.transform= `translateX(0%)`;  
    });

    images2.forEach((slide)=>{
      slide.style.transform= `translateX(0%)`;  
    });

    images3.forEach((slide)=>{
      slide.style.transform= `translateX(0%)`;  
    });

    images4.forEach((slide)=>{
      slide.style.transform= `translateX(0%)`;  
    });

    images5.forEach((slide)=>{
      slide.style.transform= `translateX(0%)`;  
    });

    textList.forEach((slide)=>{
       slide.style.transform= `translateX(0%)`;
    });

    slideNumber= 1;
};


const getLastSlide1= function() {
    images1.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    images2.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    images3.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    images4.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    images5.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    textList.forEach((slide)=>{
      slide.style.transform= `translateX(-${4*100}%)`;  
    });

    slideNumber= length1;
    slideNumber= length2;
    slideNumber= length3;
    slideNumber= length4;
    slideNumber= length5;
    slideNumber= length6;
};

right.addEventListener("click", function() {
    (slideNumber<length1)? nextSlide1():getFirstSlide1();
});

left.addEventListener("click", function() {
    (slideNumber>1)? prevSlide1():getLastSlide1();
});

//-------------------------------------End of Slider-------------------------------------//