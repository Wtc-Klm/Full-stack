class Media{
    constructo(info) {
        this.publishDate = info.publishDate
        this.name = info.name;
    }
}
class Song extends Media {
    constructor(songData){
        super(songData);
        this.artist = songData.artist;
        this.name = songData.name;
        this.publishDate = songData.publishDate;
    }
}
const mySong = new Song ({
    artist: 'Queen',
    name: 'WTC Klm',
    publishDate: 1975
});
console.log(mySong);