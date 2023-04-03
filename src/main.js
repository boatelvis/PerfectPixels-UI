import './assests/scss/app.css'
import logo from '/assets/PerfectPixels.svg'
import searchIcon from '/assets/search.png'
import heroImage from '/assets/Software-Developer 1.png'
import logoImage1 from '/assets/th.png'
import logoImage2 from '/assets/th1.png'
import logoImage3 from '/assets/th2.png'
import blueDots from '/assets/dots-block-blue.png'
document.querySelector('#app').innerHTML = `
<div class='main'>
<div>
    <div class='header'>
        <img src="${logo}" class='logo' />
        
        <div class='navbar'>
          <p><a href="">About</a></p>
          <p><a href="">Services</a></p>
          <p><a href="">Portfolio</a></p>
          <p><a href="">Clients</a></p>
          <p><a href="">Contact</a></p>
       
          <img src="${searchIcon}" class='search' />
        <div class='btn'>
          <p>Get Quote</p>
        </div> 
    </div>
    </div>
    </div>
<div class='hero'>
  <div class='hero-content'>
    <h2>UI & UX design for <br /> your digital products.</h2>
      <p>We're a digital agency focused on UI & UX design. <br /> We also offer auditing and optimization of <br /> websites based on WordPress</p>
      <button><a href=''>discover more &rarr;</a></button>
  </div>
    <img src="${heroImage}" class='hero-image' />
</div>
<div class='icons'>
 <img src="${logoImage1}" />
 <img src="${logoImage2}" />
 <img src="${logoImage3}" />
 <img src="${logoImage1}" />
 <img src="${logoImage2}" />
 <img src="${logoImage3}" />
</div>
</div>
`

setupCounter(document.querySelector('#counter'))
