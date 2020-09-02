const img = document.querySelector("img");
        const music = document.querySelector("audio");
        const play = document.getElementById("play");
        const artist = document.getElementById("artist");
        const title = document.getElementById("title");
        const prev = document.getElementById("prev");
        const next = document.getElementById("next");
        const songs=[
            {
            name: "song",
            title: "Ae Watan",
            artist: 'Arijit Singh'
            },
            {
            name: "song-1",
            title: "Shape of You",
            artist: 'Ed Sheeran' 
            },
            {
            name: "song-2",
            title: "Shayad",
            artist: 'Arijit Singh' 
            },
            {
            name: "song-3",
            title: "Butta Bomma",
            artist: 'Armaan Malik' 
            }
        ]

        let isPlaying= false;
        const playMusic= ()=> {
            isPlaying = true;
            music.play();
             play.classList.replace("fa-play" , "fa-pause");
            img.classList.add("anime");
        };

       const pauseMusic = ()=> {
            isPlaying = false;
            music.pause();
             play.classList.replace("fa-pause" , "fa-play");
            img.classList.remove("anime");
        };

        play.addEventListener("click", () => {
            if(isPlaying){
                pauseMusic();
                }
            else{
                playMusic();
            }
        });
        const loadSong=(songs)=>{
            title.textContent = songs.title;
            artist.textContent = songs.artist;
            music.src = "music/"+songs.name+ ".mp3";
            img.src = "images/"+songs.name+ ".jpg";
        }
        songIndex=0;

        const nextSong=()=>{
            songIndex = (songIndex + 1) % songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }
        const prevSong=()=>{
            songIndex = (songIndex - 1 + songs.length)% songs.length;
            loadSong(songs[songIndex]);
            playMusic();
        }
        next.addEventListener('click', nextSong);
        prev.addEventListener('click', prevSong);