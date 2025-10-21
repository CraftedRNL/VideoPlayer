let vid1 = document.getElementById('vid1');
let vid2 = document.getElementById('vid2');
let vid3 = document.getElementById('vid3');
let vid4 = document.getElementById('vid4');
let vid5 = document.getElementById('vid5');

let vid1click = false;
let vid2click = false;
let vid3click = false;
let vid4click = false;
let vid5click = false;

let arr = [vid1, vid2, vid3, vid4, vid5]
let arr2 = [vid1click, vid2click, vid3click, vid4click, vid5click]
let videos = ["./img/horror.mp4","./img/bowl.mp4","./img/cat.mp4","./img/subaru.mp4","./img/rocket.mp4"]
let latest = 0;
document.getElementById('notes').addEventListener('click', function(){
    window.open("https://anotepad.com/", 'Notes','width=600,height=400');
})
function check(){
    for(let i = 0; i < arr2.length; i++){
        if(latest === i){
            console.log('skip')
            arr[i].play();
            continue;
        }else{
            arr2[i] = false;
            arr[i].pause();
            arr[i].currentTime = 0;
        }
        
    }
}



vid1.addEventListener('click',function(){
    arr2[0] = true;
    latest = 0;
    check();
})


document.getElementById('click1').addEventListener('click',function(){

    arr2[1] = true;
latest = 1; 
    check()
})

document.getElementById('click2').addEventListener('click',function(){

    arr2[2] = true;
    latest = 2;
    check()
})

document.getElementById('click3').addEventListener('click',function(){

    arr2[3] = true;
    latest = 3;
    check()
})

document.getElementById('click4').addEventListener('click',function(){

    arr2[4] = true;
    latest = 4;
    check()
})

document.getElementById('full1').addEventListener('click',function(){
    vid1.src = videos[0]
    vid2.src = videos[1]
})
document.getElementById('full2').addEventListener('click',function(){
    vid1.src = videos[0]
    vid3.src = videos[2]
})
document.getElementById('full3').addEventListener('click',function(){
    vid1.src = videos[0]
    vid4.src = videos[3]
})
document.getElementById('full4').addEventListener('click',function(){
    vid1.src = videos[0]
    vid5.src = videos[4]
})
