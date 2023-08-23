let audioElement = new Audio('songs/1.mp3');
//initialize the var
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: 'shree Ram!', filePath: 'songs/1.mp3', coverPath: 'covers/1.jpg'},
    {songName: 'Meri Ma mera Rabb', filePath: 'songs/2.mp3', coverPath: 'covers/2.jpg'},
    {songName: 'Jay Jay Shree Ram', filePath: 'songs/3.mp3', coverPath: 'covers/3.jpg'},
    {songName: 'Ram siya ram', filePath: 'songs/4.mp3', coverPath: 'covers/4.jpg'},
    {songName: 'Tu antaryami abka swami', filePath: 'songs/5.mp3', coverPath: 'covers/5.jpg'},
    {songName: 'ram siya ram', filePath: 'songs/6.mp3', coverPath: 'covers/6.jpg'},
    {songName: 'Downtown', filePath: 'songs/7.mp3', coverPath: 'covers/7.jpg'},
    {songName: 'Vibes~', filePath: 'songs/8.mp3', coverPath: 'covers/8.jpg'},
    {songName: 'Yupp!!!', filePath: 'songs/9.mp3', coverPath: 'covers/9.jpg'},
]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

//handle play button
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

//listen to event 
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate");
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
ProgressBar.value = progress;
})

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})

//play from music front button;
const makeAllPlays=()=>{
    // e.target.classList.add('fa-pause-circle');
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
})
})
//for pause from double click on music front button;;
// const makeAllPause=()=>{
//     // e.target.classList.add('fa-pause-circle');
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.add('fa-pause-circle');
//         element.classList.remove('fa-play-circle');
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     if(audioElement.paused){
//         audioElement.play();
//         songItemPlay.classList.remove('fa-play-circle');
//         songItemPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause();
//         makeAllPause();
//         gif.style.opacity = 0;
//     }
// })

//next and previous;;
document.getElementById('next').addEventListener('click', ()=>{
if(songIndex>7){
    songIndex = 0;
}
else{
    songIndex += 1;
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
    songIndex = 0;
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