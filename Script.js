const mainPage=document.querySelector(".main-page");
const loginPage=document.querySelector(".login-page");
const middleContent=document.querySelector(".mid-content");
const brand=document.querySelector(".brand");
const topBtn=document.querySelector(".btn-top");
const feedsPage=document.querySelector(".feeds-page"); 
 const  LoginBtn=document.querySelector(".login-form-btn");
 const postBtn=document.querySelector(".post-btn");
  const Modal=document.querySelector(".modal");
  const modalWrapper=document.querySelector(".modal-wrapper");
  const closePost=document.querySelector(".fa-times");
 const topPostBtn=document.querySelector(".top-post-btn");
 const modalSpan=document.querySelector(".modal-span");
 const modalInput=document.querySelector(".modal-input");
 const userLink=document.querySelector(".user-link");
 const sideBar=document.querySelector(".sidebar");
 const sidebarWrapper=document.querySelector(".sidebar-wrapper");
const closeSideBar=document.querySelector(".sidebar-heading i");
const toggle=document.querySelector(".toggle");
const circle=document.querySelector(".circle");
 
 
const goToLoginPage=()=>{
    mainPage.style.display="none";
    loginPage.style.display="grid";
}

middleContent.addEventListener('click',(e)=>{
    if(e.target.classList[1]==="main-btn"){
        goToLoginPage();
    }
//   console.log(e.target.classList[1]);
})

brand.addEventListener("click",(e)=>{
    mainPage.style.display="grid";
    loginPage.style.display="none";
})

topBtn.addEventListener("click",()=>{
    const userInfo=document.querySelector(".user");
    const password=document.querySelector(".password");
    if(userInfo.value!==""&&password.value!==""){
        mainPage.style.display="none";
       feedsPage.style.display="grid";
    }
    else{
        goToLoginPage();
        alert(" please create an account before login");
    }
})

LoginBtn.addEventListener("click",()=>{
    const LoginUser=document.querySelector(".login-User");
const LoginPassword=document.querySelector(".password-Login");
if(LoginUser.value!==""&&LoginPassword.value!==""){
    loginPage.style.display="none";
    feedsPage.style.display="grid";
}
else{
    alert("The username and password doesn't match please enter correct credentials.");
}
})


postBtn.addEventListener("click",()=>{
    Modal.style.display="block";
    modalWrapper.classList.add("modal-wrapper-display");
})

closePost.addEventListener("click",()=>{
     Modal.style.display="none";
     modalWrapper.classList.remove("modal-wrapper-display");
     if(modalInput.value!==""){
        modalInput.value="";
        changeOpacity(0.5);
     }
})


const changeOpacity=(val)=>{
    modalSpan.style.opacity=val;
    topPostBtn.style.opacity=val;
}

modalInput.addEventListener("keypress",(e)=>{
if(e.target.value!==""){
    changeOpacity(1);
}
})

modalInput.addEventListener("blur",(e)=>{
  if(e.target.value===""){
    changeOpacity(0.5);
  }
})

userLink.addEventListener('click',()=>{
    sideBar.classList.add("sidebar-display");
    sidebarWrapper.classList.add("sidebar-wrapper-display");
})
const sidebarOpen=document.querySelector(".sidebar-open");
sidebarOpen.addEventListener('click',()=>{
    sideBar.classList.add("sidebar-display");
    sidebarWrapper.classList.add("sidebar-wrapper-display");
})

closeSideBar.addEventListener('click',()=>{
 sideBar.classList.remove("sidebar-display");
    sidebarWrapper.classList.remove("sidebar-wrapper-display");
})

const darkElement1=document.querySelectorAll(".dark-element-1");
 const darkElement2=document.querySelectorAll(".dark-element-2");
 const darkElement3=document.querySelectorAll(".light-text");
 const bg=document.querySelectorAll(".bg");
 

toggle.addEventListener("click",()=>{
    circle.classList.toggle("move");
    Array.from(darkElement1).map((elem)=>{
      elem.classList.toggle("dark-1");
    });
    Array.from(darkElement2).map((eleme2)=>{
        eleme2.classList.toggle("dark-2");
    });
    Array.from(darkElement3).map((element)=>{
        element.classList.toggle("light");
    })
    
    Array.from(bg).map((element1)=>{
        element1.classList.toggle("bground");
    })
  
    
    console.log(Array.from(darkElement1));
     
});




  

 