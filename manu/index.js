const accordian = document.getElementsByClassName ('content-container');


for(i=0; i< accordian.length; i++){
    accordian[i].addEventListener('click', function(i){
        this.classList.toggle('active');
    })
}
