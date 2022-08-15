
// đặt biến
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = {
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
    start: function(){
        this.render();
    }
}

app.start();