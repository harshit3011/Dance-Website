console.log("Weclome to spotify clone");
//variables 
let songIndex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogessbar = document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let mastersong=document.getElementById('mastersong');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - mortal [NCS release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - INVINCIBLE [NCS release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EHIDE", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji Heroes tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "NCS song 1", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "NCS Song 2", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "NCS Song 3", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
]

songItem.forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src=songs[i].coverPath;
    element.getElementsByClassName('songname')[0].innerText= songs[i].songName;
    // element.getElementById('mastersong').innerText=songs[i].songName;
})
// audioElement.play();
//Play/Pause
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime <=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-circle-play');
//         masterPlay.classList.add('fa-circle-pause');
//         gif.style.opacity=1;
//     }
//     else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-circle-pause');
//         masterPlay.classList.add('fa-circle-play');
//         gif.style.opacity=0;
//     }
// })

//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogessbar.value= progress;
})

myprogessbar.addEventListener('change',()=>{
    audioElement.currentTime= (myprogessbar.value*audioElement.duration)/100;
})
const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })

}
Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        if(audioElement.paused || audioElement.currentTime <=0){
        makeAllPlays();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        mastersong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

        }
        else{
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');

        gif.style.opacity=0;

        }



    })
})
// const masterconnect=()=>{
//     Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
//         if(songIndex==parseInt(element.id)){
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//         }
//     })

// }


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
        Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            if(songIndex==parseInt(element.id)){
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
            }
        })
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
        Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            if(songIndex==parseInt(element.id)){
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
            }
        })
    }
})

document.getElementById('next').addEventListener('click',(e)=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        


})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`songs/${songIndex+1}.mp3`;
    mastersong.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

if(myprogessbar.value=parseInt(100) || audioElement.currentTime==audioElement.duration){
        if(songIndex>=9 || songIndex<=0){
            songIndex =0;
        }
        else{
            songIndex+=1;
        }
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        mastersong.innerText=songs[songIndex].songName;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        Array.from(document.getElementsByClassName('songPlay')).forEach((element)=>{
            if(songIndex==parseInt(element.id)){
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
            }
        })
}