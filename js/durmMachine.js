

window.addEventListener('load', function () {

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
    key2.addEventListener("click", playIt);
    key3.addEventListener("click", playIt);
    key4.addEventListener("click", playIt);
    key5.addEventListener("click", playIt);
    key6.addEventListener("click", playIt);
    key7.addEventListener("click", playIt);
    key8.addEventListener("click", playIt);
    key9.addEventListener("click", playIt);
    key10.addEventListener("click", playIt);
    key11.addEventListener("click", playIt);
    key12.addEventListener("click", playIt);
    key13.addEventListener("click", playIt);
    key14.addEventListener("click", playIt);
    key15.addEventListener("click", playIt);
    key16.addEventListener("click", playIt);
    key17.addEventListener("click", playIt);
    key18.addEventListener("click", playIt);
    key18.addEventListener("click", playIt);
    key20.addEventListener("click", playIt);
    key21.addEventListener("click", playIt);
    key22.addEventListener("click", playIt);
    key23.addEventListener("click", playIt);
    key24.addEventListener("click", playIt);
    key25.addEventListener("click", playIt);
    key26.addEventListener("click", playIt);
    key27.addEventListener("click", playIt);


    power.addEventListener("change", playIt);

    volume.addEventListener("change", playIt);

    keyboardButtonKeyId = ["key1",
        "key2",
        "key3",
        "key4",
        "key5",
        "key6",
        "key7",
        "key8",
        "key9",
        "key10",
        "key11",
        "key12",
        "key13",
        "key14",
        "key15",
        "key16",
        "key17",
        "key18",
        "key18",
        "key20",
        "key21",
        "key22",
        "key23",
        "key24",
        "key25",
        "key26",
        "key27",
    ]


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
        '../../audio/sample1.ogg',
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



    var insturmentObjconatiner = [];


    function insturment(key, keyboardButtonKeyId, keyCode, sound, soundUrl) {

        this.key = key;
        this.keyboardButtonKeyId = keyboardButtonKeyId
        this.keyCode = keyCode;
        this.sound = sound;
        this.soundUrl = soundUrl;

        insturmentObjconatiner.push(this)


    }

    insturment.prototype.volume = volume.value;

    function changeVolume() {
        insturment.prototype.volume = volume.value;

    }

    keyboardKey.map((value, index) => {

        new insturment(value, keyboardButtonKeyId[index], keyboardKeyCode[index], soundsName[index], soundsUrl[index]);

    })


    // keyboardKey.map((value, index) => {
    //      console.log(insturmentObjconatiner[index])
    // })
    var audio = null
    function playIt(event) {
        if (!power.checked) {
            audio.src = '';
            audio.remove();
            audio = null
        }


        if (power.checked && event.target.id != "volume") {

            if (audio != null) {
                audio.src = '';
                audio.remove();
                audio = null
            }

            insturmentObjconatiner.map((value, index) => {
                if (event.target.id == insturmentObjconatiner[index].keyboardButtonKeyId) {
                    keyId = index
                    audio = new Audio(insturmentObjconatiner[keyId].soundUrl)
                    audio.volume = insturment.prototype.volume / 100;
                    audio.play()

                }
            })
        }



        if (event.target.id == "volume") {
            audio.volume = volume.value / 100
            //alert(audio.volume)
        }
    }

})