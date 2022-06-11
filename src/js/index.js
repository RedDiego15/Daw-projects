$audio = document.getElementById('audio');
$audioContainer = document.querySelector('.audio-container');
$audioImage = document.querySelector('.audio-img');

$audioContainer.addEventListener('click', () => {
    audioSwitch();
});

const audioSwitch = () => {
    if ($audio.paused) {
        $audio.mute = false;
        $audio.play();
        $audioImage.src = '../../assets/altavoz-24.png';
    } else {
        $audio.pause();
        $audioImage.src = '../../assets/sin-audio-24.png';
    }
};
