const open = document.getElementById('open');
const close = document.getElementById('close');
const menu = document.getElementById('menu');
const backgroundMenu = document.getElementById('background-menu');

//console.log('document.body.clientWidth : ' + document.body.clientWidth);
//console.log('window.innerWidth : ' + window.innerWidth);
//console.log('document.documentElement.clientWidth : ' + document.documentElement.clientWidth);

open.addEventListener('click', function(){

    if(menu.style.visibility = 'hidden')
    {
        menu.style.visibility = 'visible';
        backgroundMenu.classList.toggle('overlay');

    }

});

close.addEventListener('click', function(){

    if(menu.style.visibility = 'visible')
    {
        menu.style.visibility = 'hidden';
        backgroundMenu.classList.toggle('overlay');
    }

});


if(document.body.clientWidth < 1120)
{    
    menu.style.visibility = 'hidden';
}
else
{
    menu.style.visibility = 'visible';
}


window.onresize = function() {

    if(document.body.clientWidth < 1120)
    {    
        menu.style.visibility = 'hidden';
    }
    else
    {
        menu.style.visibility = 'visible';
        backgroundMenu.classList.remove('overlay');
    }

};
