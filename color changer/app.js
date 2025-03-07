const button=document.querySelectorAll('.btn')
const body= document.querySelector("body");
button.forEach((button)=>{
    button.addEventListener('click',function (event){ //event ko add krkay sunao kb sunao jb click ho aur kia sunao wo function mian btaya hai hmnay
        //event ek object hai jo click hone ki saari details rakhta hai (kis button par click hua, mouse kahan tha, etc.).//
        const color=event.target.id
        body.style.backgroundColor=color
        //const color = event.target.id
//👉 Yeh kya karta hai?

//event.target ka matlab hai jis element (button) ko click kiya gaya.
//.id likhne se us button ka ID value mil jata hai.
        //body.style.backgroundColor=color;

    })

})
