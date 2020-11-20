// generate random id 
import {v4 as uuid} from 'uuid'

function chillHop(){
    return [
        {
            name : "Sodium",
            artist: "Philanthrope, Tesk",
            cover : "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            id: uuid(),
            active : true,
            color: ["#653F81", "#99DCF3"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=9149"
        },
        {
            name : "Hidden Structure",
            artist: "Leavv, Flitz&Suppe",
            cover : "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#827B66", "#467C6D"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=9913"
        },
        {
            name : "Hotel Lobby Birthday Party",
            artist: "Aviino, Oliv",
            cover : "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#BF71B5", "#4B8CCE"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10452"
        },
        {
            name : "Maple Leaf Pt.2",
            artist: "Philanthrope",
            cover : "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#815749", "#CC473E"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10243"
        },
        {
            name : "Sodium",
            artist: "Philanthrope, Tesk",
            cover : "https://chillhop.com/wp-content/uploads/2020/10/efaa848553d09b4d9fc0752844456e41b34de276-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#653F81", "#99DCF3"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=9149"
        },
        {
            name : "Hidden Structure",
            artist: "Leavv, Flitz&Suppe",
            cover : "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#827B66", "#467C6D"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=9913"
        },
        {
            name : "Hotel Lobby Birthday Party",
            artist: "Aviino, Oliv",
            cover : "https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#BF71B5", "#4B8CCE"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10452"
        },
        {
            name : "Maple Leaf Pt.2",
            artist: "Philanthrope",
            cover : "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
            id: uuid(),
            active : false,
            color: ["#815749", "#CC473E"],
            audio : "https://mp3.chillhop.com/serve.php/?mp3=10243"
        }
    ]
}

export default chillHop;