let lV = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ड़", "ढ", "ढ़", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
let lVN =["क़", "ख़", "ग़", "ज़", "झ़", "फ़", "ड़", "ढ़"]
let lVP = ["अ", "इ", "उ", "ए", "अं", "ऋ"];
let lGM = ["ा", "ी", "ू", "ू", "ॆ", "े", "ै", "ॊ", "ो", "ौ"];
let lLM = ["ि", "ु", "ृ", "ॄ", "ॅ", "ँ"];
let aS = ["क्ष", "त्र", "ज्ञ", "ऋ"];
let aSD = ["आ", "ई", "ऊ", "ऐ", "ओ", "औ"];
let cX = "्";
let cNX = "ं";
let ilc = 0;
let lr = "";
let so = "";
let sInnerHtml = "";
let bga = false;
let iwc = 0;


document.getElementById('btnCalc').addEventListener('click', calcMatra);

function Flip(st = 1) {
    if (iwc > 0) {
        Pop(st);
        Push(2);
    }
}
function Pop(st = 1) {
    if (so.length >= st) {
        so = so.substring(0, so.length - st);
        ilc -= st;
        iwc -= st;
    }
}
function Push(st = 1) {
    bx = true;
    so += st;
    ilc += st;
    iwc += st;
    bga = (st == 2);
}

function calcMatra() {
    document.getElementById('showMatra').innerHTML = '';

    sInnerHtml = "";
    processText();
    document.getElementById('showMatra').innerHTML += "<table class=\"matratable\">" + sInnerHtml + "</table>";;


}

function processText() {
    var txtPoem = document.getElementById('txtPoem').value;
    let slts = txtPoem.trim().split("\n");

    slts.forEach(element => {

        lr = "";
        so = "";
        ilc = 0;
        let slt = element.trim();
        var wordList = slt.split(" ");

        wordList.forEach(sWord => {

            iwc = 0;
            bga = false;
            wt = sWord.trim();
            i = wt.length;
            if (i > 0) {

                if (ilc > 0) so += " ";

                for (let ix = 0; ix < i; ix++) {

                    let ca = wt.charAt(ix);
                    let cc = wt.charCodeAt(ix);

                    if (cc <= 255) continue;

                    lr += ca;

                    if ((lV.indexOf(ca) > -1) || (lVP.indexOf(ca) > -1) || (lVN.indexOf(ca) > -1)) {
                        Push();
                    } else if (aSD.indexOf(ca) > -1) {
                        Push(2);
                    }
                    else if ((lGM.indexOf(ca) > -1) && !bga) {
                        Flip();
                    }
                    else if (ca == cX) {
                        if (iwc > 1 && !bga && ix < i - 1) {
                            Flip(2);
                        } if(iwc==1){
                            Pop();
                        }
                    } else if (ca == cNX) {
                        if (iwc > 0 && !bga && ix < i - 1) {
                            Flip();
                        }
                    }
                }
            }

        });


        if (ilc > 0) {
            sInnerHtml += "<tr><td>" + slt + "</td><td>&nbsp;</td><td>" + so + " [" + ilc + "]</td></tr>";
        } else {
            sInnerHtml += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
        }

    });

}
