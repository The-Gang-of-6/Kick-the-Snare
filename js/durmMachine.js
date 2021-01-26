var d = document;
var power = d.getElementById("power-switch")
var volume = d.getElementById("volume")
var key1 = d.getElementById("key1")
var key2 = d.getElementById("key2")
var key3 = d.getElementById("key3")
var key4 = d.getElementById("key4")
var key5 = d.getElementById("key5")
var key6 = d.getElementById("key6")
var key7 = d.getElementById("key7")
var key8 = d.getElementById("key8")
var key9 = d.getElementById("key9")
var key10 = d.getElementById("key10")
var key11 = d.getElementById("key11")
var key12 = d.getElementById("key12")
var key13 = d.getElementById("key13")
var key14 = d.getElementById("key14")
var key15 = d.getElementById("key15")
var key16 = d.getElementById("key16")
var key17 = d.getElementById("key17")
var key18 = d.getElementById("key18")
var key18 = d.getElementById("key18")
var key20 = d.getElementById("key20")
var key21 = d.getElementById("key21")
var key22 = d.getElementById("key22")
var key23 = d.getElementById("key23")
var key24 = d.getElementById("key24")
var key25 = d.getElementById("key25")
var key26 = d.getElementById("key26")
var key27 = d.getElementById("key27")


key1.addEventListener("click", playIt);
key2.addEventListener("keydown", playIt);
key3.addEventListener("keydown", playIt);
key4.addEventListener("keydown", playIt);
key5.addEventListener("keydown", playIt);
key6.addEventListener("keydown", playIt);
key7.addEventListener("keydown", playIt);
key8.addEventListener("keydown", playIt);
key9.addEventListener("keydown", playIt);
key10.addEventListener("keydown", playIt);
key11.addEventListener("keydown", playIt);
key12.addEventListener("keydown", playIt);
key13.addEventListener("keydown", playIt);
key14.addEventListener("keydown", playIt);
key15.addEventListener("keydown", playIt);
key16.addEventListener("keydown", playIt);
key17.addEventListener("keydown", playIt);
key18.addEventListener("keydown", playIt);
key18.addEventListener("keydown", playIt);
key20.addEventListener("keydown", playIt);
key21.addEventListener("keydown", playIt);
key22.addEventListener("keydown", playIt);
key23.addEventListener("keydown", playIt);
key24.addEventListener("keydown", playIt);
key25.addEventListener("keydown", playIt);
key26.addEventListener("keydown", playIt);
key27.addEventListener("keydown", playIt);

volume.addEventListener("change", changeVolume);



keyboardKey = ['q', 'w', 'e',
    't', 'y', 'u', 'i', 'o', 'a',
    's', 'd', 'f', 'g', 'h', 'j',
    'k', 'l', 'z', 'x', 'c', 'v',
    'b', 'n', 'm', ',', '.']


var keyboardKeyCode = [
    81, 87, 69, 82, 84, 89, 85, 73, 79, 65, 83,
    68, 70, 71, 72, 74, 75, 76, 90, 88, 67, 86,
    66, 78, 77, 188, 190,]


var soundsUrl = [
    '../audio/ekit-tom.wav',
    '../audio/hats.wav',
    '../audio/kick.wav',
    '../audio/snare_rim.wav',
    '../audio/snare.wav',
    '../audio/vocal_dance.wav',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
    '../audio/',
]


var soundsName = [
    'Ekit Tom',
    'hats',
    'kick',
    'snare_rim',
    'snare',
    'vocal_dance',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',


]

var insturmentObj;
var insturmentObjconatiner = [];


function insturment(key, keyCode, sound, soundUrl) {

    this.key = key;
    this.keyCode = keyCode;
    this.sound = sound;
    this.soundUrl = soundUrl;
    insturmentObjconatiner.push(this)


}

insturment.prototype.volume = volume.value;

function changeVolume() {
    insturment.prototype.volume = volume.value;
    console.log(insturment.prototype.volume)
}

keyboardKey.map((value, index) => {

    new insturment(value, keyboardKeyCode[index], soundsName[index], soundsUrl[index]);

})



// alert(insturmentObjconatiner)



function playIt(event) {
    if (power.checked) {


    }
    else {

    }


}