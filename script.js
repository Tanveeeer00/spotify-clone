console.log("welcome to spotify");
// intialize to variable
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let songItems= Array.from(document.getElementsByClassName("songItem"));
let masterSongName=document.getElementById("masterSongName");
let songs=[
    {songName:"AURORA_-_Runaway",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"bananza_(belly_dancer)_x_temperature",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"In_Da_Getto",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Billie_Eilish,_Khalid_-_lovely ",filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Dance_Monkey",filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Ckay_Love_Nwantiti",filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:" DripReport_Skechers",filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Excuses",filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Martin_Garrix Animals",filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Powfu_death_bed",filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
] 
// audioElement.play();
songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

// handle play/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       gif.style.opacity=0;
    }
})

 
// listen to event
audioElement.addEventListener('timeupdate',()=>{
//    update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
document.getElementById("next").addEventListener("click",()=>{
    if(songIndex>=9){
        songIndex=0
    }
    else{
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');


})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

