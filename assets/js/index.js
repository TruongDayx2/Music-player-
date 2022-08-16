
// đặt biến
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
    currentIndex : 0,
    songs: [
        {
            name: 'đứa nào làm em buồn',
            singer: 'Phúc Du & Hoàng Dũng',
            path : './assets/music/song1.m4a',
            image: './assets/img/song1.png'
        },
        {
            name: 'Anh không thề gì đâu anh làm',
            singer: 'Phúc Du',
            path : './assets/music/song2.m4a',
            image: './assets/img/song2.png'
        },
        {
            name: 'J Cole nói',
            singer: 'Bray',
            path : './assets/music/song3.m4a',
            image: './assets/img/song3.png'
        },
        {
            name: 'U là trời',
            singer: 'Gill',
            path : './assets/music/song4.m4a',
            image: './assets/img/song4.png'
        },
        {
            name: 'Hoàn hảo',
            singer: 'Bray',
            path : './assets/music/song5.m4a',
            image: './assets/img/song5.png'
        },
        {
            name: 'Querry',
            singer: 'QNT, Trung Trần & MCK',
            path : './assets/music/song6.m4a',
            image: './assets/img/song6.png'
        }
    ],
    render: function(){
        const htmls = this.songs.map(song =>{
            return `
                <div class="song">
                    <div class="thumb"
                        style="background-image: url('${song.image}')">
                    </div>
                    <div class="body">
                        <h3 class="title">${song.name}</h3>
                        <p class="author">${song.singer}</p>
                    </div>
                    <div class="option">
                        <i class="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('');
    },
    defineProperties: function(){
        Object.defineProperty(this,'currentSong',{
            get: function(){
                return this.songs[this.currentIndex];
            }
        })
    },
    handleEvents: function(){
        const cd = $('.cd');
        const cdWidth = cd.offsetWidth;

        document.onscroll = function(){
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;

            cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0;
            cd.style.opacity = newCdWidth / cdWidth;
        }
    },
    loadCurrentSong: function(){
        const heading = $('header h2');
        const cdThumb = $('.cd-thumb');
        const audio = $('#audio');

        heading.textContent = this.currentSong.name;
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
        audio.src = this.currentSong.path;

    },
    start: function(){
        // Địng nghĩa các thuộc tính cho object
        this.defineProperties();
        // Lắng nghe các sự kiện
        this.handleEvents();
        // Load bài hát đầu tiên vào UI
        this.loadCurrentSong();
        // Render playlist
        this.render();
    }
}

app.start();