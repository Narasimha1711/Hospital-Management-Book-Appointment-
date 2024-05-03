
const bt = document.getElementsByClassName('fa-bars');

bt.addEventListener('click', ()=> {
    bt.classList.toggle('side-menu2');
})

var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 3000);

    function display() {
      const ele = document.getElementById('side');
      // console.log(ele)
     
      if(ele.style.display === 'block') {
          ele.style.display = 'none';
      }
      else {
          ele.style.display = 'block';
      }
      
  }
  