
const navManu = document.getElementById('nav-manu'),
      navToggal = document.getElementById('nav-toggal'),
      navClose = document.getElementById('nav-close')


      if (navToggal) {
          navToggal.addEventListener('click',()=>{
              navManu.classList.add('show-manu')
          })
          
      };
      if(navClose){
          navClose.addEventListener('click',()=>{
              navManu.classList.remove('show-manu')
          })
      }

      const navLink = document.querySelectorAll('.nav__link')

      function navAction(){
         const navManu = document.getElementById('nav-manu')
             navManu.classList.remove('show-manu')

      }

      navLink.forEach(n=>n.addEventListener('click' , navAction))




 const SkillsContent = document.getElementsByClassName('Skills__content'),
       skillsHeader = document.querySelectorAll('.skills__header')

       function toggleSkills(){
           let itemClass = this.parentNode.className

           for(i=0;i<SkillsContent.length;i++)
           {
               SkillsContent[i].className = 'Skills__content skills__close'
           }
           if (itemClass==='Skills__content skills__close') {
               this.parentNode.className = 'Skills__content skills__open'
           }

       }

       skillsHeader.forEach((el)=>{
            el.addEventListener('click', toggleSkills)

       })



    const modalview=document.querySelectorAll('.training__modal'),
          modalbtns=document.querySelectorAll('.training__button'),
          modalclose=document.querySelectorAll('.training__modal-icon')
      
    
    
    let modal = function(modalclick){
        modalview[modalclick].classList.add('active-modal')
       }

       modalbtns.forEach((modalbtn, i)=>{
           modalbtn.addEventListener('click' ,()=>{
               modal(i)
           })
       })

       modalclose.forEach((modalcloses)=>{
           modalcloses.addEventListener('click' , ()=>{
               modalview.forEach((modalviews)=>{
                   modalviews.classList.remove('active-modal')

                   })
               })
           })


