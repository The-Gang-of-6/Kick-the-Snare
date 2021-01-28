

window.addEventListener('load', function () {

    var d = document;
    var keyTrigger = d.body.addEventListener("keypress", playItKeyboard)
    var showPressedKey = d.getElementById("showPressedKey");
    var insturmentObjconatiner = [];
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
    var key19 = d.getElementById("key19")
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
    key19.addEventListener("click", playIt);
    key20.addEventListener("click", playIt);
    key21.addEventListener("click", playIt);
    key22.addEventListener("click", playIt);
    key23.addEventListener("click", playIt);
    key24.addEventListener("click", playIt);
    key25.addEventListener("click", playIt);
    key26.addEventListener("click", playIt);
    key27.addEventListener("click", playIt);


    volume.addEventListener("change", playIt);
    volume.addEventListener("change", playItKeyboard);

    volume.addEventListener("change", changeVolume);

    keyboardButtonKeyId = ["key1", "key2", "key3", "key4", "key5", "key6", "key7", "key8", "key9", "key10",
        "key11", "key12", "key13", "key14", "key15", "key16", "key17", "key18", "key19", "key20", "key21",
        "key22", "key23", "key24", "key25", "key26", "key27",
    ]


    keyboardKey = ['q', 'w', 'e',
        'a', 's', 'd', 'z', 'x', 'c',
        'r', 't', 'y', 'f', 'g', 'h',
        'v', 'b', 'n', 'u', 'i', 'o',
        'j', 'k', 'l', 'm', ',', '.']


    var keyboardKeyCodeUpperCase = [
        81, 87, 69, 65, 83, 68, 90, 88, 67,
        82, 84, 89, 70, 71, 72, 86, 66, 78,
        85, 73, 79, 74, 75, 76, 77, 188, 190

    ]

    var keyboardKeyCodeLowerCase = [
        113, 119, 101, 97, 115, 100, 122, 120, 99,
        114, 116, 121, 102, 103, 104, 118, 98, 110,
        117, 105, 111, 106, 107, 108, 109, 44, 46
    ]

    var soundsUrl = [
        '../audio/drums/bass_drum.wav', //q
        '../audio/drums/hits.wav',//w
        '../audio/drums/kick_bass_drum.wav',//e
        '../audio/drums/kick.wav',//a
        '../audio/drums/kick2.wav',//s
        '../audio/drums/long_bass_drum.wav',//d
        '../audio/drums/snare.wav',//z
        '../audio/drums/snare2.wav', //x
        '../audio/drums/tom.wav', //c
        '../audio/piano/A_sharp_4.wav',//r
        '../audio/piano/A4.wav',//t
        '../audio/piano/G4.wav',//y
        '../audio/piano/D4.wav',//f
        '../audio/piano/C4.wav',//g
        '../audio/piano/C_sharp_4.wav',//h
        '../audio/piano/C1.wav',//v
        '../audio/piano/E5.mp3',//b
        '../audio/piano/C_sharp_6.wav',//n
        '../audio/piano/C6.wav',//u
        '../audio/piano/E6.wav',//i
        '../audio/piano/A6.wav',//o
        '../audio/piano/B5.wav',//j
        '../audio/piano/E4.wav',//k
        '../audio/piano/G6.wav',//l
        '../audio/piano/A_sharp_6.wav',//m
        '../audio/piano/High_G.wav',//,
        '../audio/piano/long_b1.ogg',//.
    ]

    var soundsName = [
        'bass drum', 'hits', 'kick bass drum', 'kick 1', 'kick 2', 'long bass drum', 'snare 1', 'snare 2', 'tom', 'A Key', 'A Sharp 4 Key',
        'A4 Key', 'A6 Key', 'B5 Key', 'C Sharp 4 Key', 'C1 Key', 'C4 Key', 'C6 Key', 'C6 Key', 'D4 Key', 'E4 Key', 'E5 Key',
        'E6 Key', 'G6 Key', 'G4 Key', 'High G Key', 'long B Key']




    function insturment(key, keyboardButtonKeyId, keyboardKeyCodeUpperCase, keyboardKeyCodeLowerCase, sound, soundUrl) {
        this.key = key;
        this.keyboardButtonKeyId = keyboardButtonKeyId
        this.keyboardKeyCodeUpperCase = keyboardKeyCodeUpperCase;
        this.keyboardKeyCodeLowerCase = keyboardKeyCodeLowerCase;
        this.sound = sound;
        this.soundUrl = soundUrl;
        insturmentObjconatiner.push(this)
    }

    insturment.prototype.volume = volume.value;
    function changeVolume() {
        insturment.prototype.volume = volume.value;
    }

    keyboardKey.map((value, index) => {

        new insturment(value, keyboardButtonKeyId[index], keyboardKeyCodeUpperCase[index], keyboardKeyCodeLowerCase[index], soundsName[index], soundsUrl[index]);
    })



    //allow user to play by the mouse   
    var audio1 = null
    function playIt(event) {

        if (!power.checked) {

            try {
                audio1.remove();
                audio1 = null
            } catch (e) {

            }

            try {
                audio2.remove();
                audio2 = null
            } catch (e) {

            }
            showPressedKey.innerHTML = "The Panal Is Off"

        }

        if (power.checked) {

            insturmentObjconatiner.map((value, index) => {
                if (event.target.id == insturmentObjconatiner[index].keyboardButtonKeyId) {
                    audio1 = new Audio(insturmentObjconatiner[index].soundUrl)
                    audio1.volume = insturment.prototype.volume / 100;
                    audio1.play()
                    showPressedKey.innerHTML = ""
                    showPressedKey.innerHTML = insturmentObjconatiner[index].sound
                }


            })
        }
        if (event.target.id == "volume") {
            try {
                audio1.volume = volume.value / 100
            } catch (e) {

            }
        }



    }


    //allow user to play by the keyboard   
    var audio2 = null

    function playItKeyboard(event) {


        if (!power.checked) {
            try {
                audio1.remove();
                audio1 = null
            } catch (e) {

            }
            try {
                audio2.remove();
                audio2 = null
            } catch (e) {

            }
            showPressedKey.innerHTML = "The Panal Is Off"

        }

        if (power.checked) {
            insturmentObjconatiner.map((value, index) => {
                if (event.keyCode == insturmentObjconatiner[index].keyboardKeyCodeUpperCase || event.keyCode == insturmentObjconatiner[index].keyboardKeyCodeLowerCase) {
                    var buttonPressed = d.getElementById(insturmentObjconatiner[index].keyboardButtonKeyId)
                    buttonPressed.classList.add("drum-key-keyboard-clicked");
                    audio2 = new Audio(insturmentObjconatiner[index].soundUrl)
                    audio2.volume = insturment.prototype.volume / 100;
                    audio2.play()
                    setInterval(() => {
                        buttonPressed.classList.remove("drum-key-keyboard-clicked")
                    }, 400);
                    showPressedKey.innerHTML = ""
                    showPressedKey.innerHTML = insturmentObjconatiner[index].sound
                }

            })
        }

        if (event.target.id == "volume") {

            try {
                audio2.volume = volume.value / 100
            } catch (e) {

            }

        }

    }



})