import React  , {useState , useEffect}from 'react'
import {  FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import Songs from './Songs'
import MusicPlayer from './MusicPlayer' 
function AudioList() {
    const [songs, setSongs] = useState(Songs);
    const [song, setSong] = useState(songs[0].song);
    const [img, setImage] = useState(songs[0].imgSrc);
    const [auto, setAuto] = useState(false);
  

    useEffect(()=>{
        const songs = document.querySelectorAll(".songs" )
        function changeMenuActive(){
            songs.forEach(n=> n.classList.remove("active"));
            this.classList.add("active")
        }
        songs.forEach(n => n.addEventListener("click", changeMenuActive))
    } , [])

    const changeFavourite = (id)=>{
        console.log("1" , id);
        songs.forEach((song) =>{
                if(song.id == id) {
                    console.log("2" , song.id) // true 
                song.favourite = !song.favourite
                console.log(song.favourite)
            }
        })
        setSong([...Songs]);
    }
    const setMainSong = (songSrc, imgSrc) => {
        setSong(songSrc);
        setImage(imgSrc);
      };
      return (
    <div className='audioList'>
        <h2 className='title'>The list <span>{`${songs.length} songs`}</span></h2>
        <div className='songsContainer'>
            {
                songs && songs.map((song , index)=>(
                     
            <div className='songs' key={song.id} onClick={()=>setMainSong(song?.song , song?.imgSrc )}>
                <div className='count'>{`#${index + 1 }`}</div>
                <div className='song'>
                    <div className='imgBox'>
                        <img src={song?.imgSrc} alt='' />
                    </div>
                    <div className='section'>
                            <p className='songName'>
                                {song?.songName}
                                <span className='spanArtist'>
                                    {song?.artist}
                                </span>
                            </p>
                            <div className='hits'>
                                <p className='hit'>
                                    <i>
                                        <FaHeadphones />
                                    </i>
                                    95,49,102
                                </p>
                                <p className='duration'>
                                    <i>
                                        <FaRegClock />
                                        03.04
                                    </i>
                                </p>
                                <div
                      className="favourite"
                      onClick={()=>changeFavourite(song.id)}
                    >
                      {/* {song?.favourite ? (<i><FaHeart /></i>) : (<i> <FaRegHeart /></i>)} */}
                      <i >
                        {
                           song.favourite && song.favourite ? (<FaHeart />) : (<FaRegHeart />)
                        }
                      </i>
                      
                    </div>
                            </div>

                    </div>
                </div>
            </div>
                ))
            }
        </div>
        <MusicPlayer song={song} imgSrc={img}    />
    </div>
  )
}

export default AudioList