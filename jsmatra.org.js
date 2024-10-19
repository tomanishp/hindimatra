let lV = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ड़", "ढ", "ढ़", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
let lVN = ["क़", "ख़", "ग़", "ज़", "झ़", "फ़", "ड़", "ढ़"]
let lVP = ["अ", "इ", "उ", "ए", "अं", "ऋ"];
let lGM = ["ा", "ी", "ू", "ू", "ॆ", "े", "ै", "ॊ", "ो", "ौ"];
let lLM = ["ि", "ु", "ृ", "ॄ", "ॅ", "ँ"];
let aS = ["क्ष", "त्र", "ज्ञ", "ऋ"];
let aSD = ["आ", "ई", "ऊ", "ऐ", "ओ", "औ"];
let cX = "्";
let cNX = "ं";
let iLC = 0;
let iLCV = 0;
let lR = "";
let sO = "";
let sOV = "";
let sIH = "";
let bga = false;
let iwc = 0;
var iMC = true;
let vS = ["य", "म", "त", "र", "ज", "भ", "न", "स"];
let vSC = ["।ऽऽ", "ऽऽऽ", "ऽऽ।", "ऽ।ऽ", "।ऽ।", "ऽ।।", "।।।", "।।ऽ"];
let vSG = "ऽ";
let vSL = "।";
let sTM = ""

document.getElementById('btnCalc').addEventListener('click', calcMatra);
document.getElementById('matrik').addEventListener('click', toggleDef);
document.getElementById('varnik').addEventListener('click', toggleDef);
// document.getElementById('matrik').onclick = toggleDef;
// document.getElementById('varnik').onclick = toggleDef;

function toggleDef() { iMC = document.getElementById('matrik').checked;  document.getElementById('divMatrik').style.display = iMC ? 'block' : 'none'; document.getElementById('divVarnik').style.display = iMC ? 'none' : 'block'; }

function Flip(st = 1) {
    if (iwc > 0) {
        Pop(st);
        Push(2);
    }
}
function Pop(st = 1) {
    if (sO.length >= st) {
        sO = sO.substring(0, sO.length - st);
        iLC -= st;
        iwc -= st;
    }
}
function Push(st = 1) {
    bx = true;
    sO += st;
    iLC += st;
    iwc += st;
    bga = (st == 2);
}

function calcMatra() {
    document.getElementById('showMatra').innerHTML = '';

    iMC = document.getElementById('matrik').checked;
    sIH = "";
    processText();
    document.getElementById('showMatra').innerHTML += "<table class=\"matratable\">" + sIH + "</table>";;


}

function calcVarnik() {
    sTM = sO.replaceAll(" ", "").replaceAll("1", vSL).replaceAll("2", vSG);
    sOV = "";
    sLen = (sTM.length / 3);
    let ix = 0

    for (ix = 0; ix < sLen; ix++) {
        sIn = ix * 3;
        ss = sTM.substring(sIn, sIn + 3);
        ssI = vSC.indexOf(ss);
        if (ssI >= 0) {
            sOV += vS[ssI] + "गण ";
        }
    }

    if (ix > sLen) { sOV += "(" + sTM.substring((ix - 1) * 3) + ")"; }

    iLCV = sTM.length;
}

function processText() {
    var txtPoem = document.getElementById('txtPoem').value;
    let slts = txtPoem.trim().split("\n");

    slts.forEach(element => {

        lR = "";
        sO = "";
        iLC = 0;
        let slt = element.trim();
        var wordList = slt.split(" ");

        wordList.forEach(sWord => {

            iwc = 0;
            bga = false;
            wt = sWord.trim();
            sLen = wt.length;
            if (sLen > 0) {

                if (iLC > 0) sO += " ";

                for (let ix = 0; ix < sLen; ix++) {

                    let ca = wt.charAt(ix);
                    let cc = wt.charCodeAt(ix);

                    if (cc <= 255) continue;

                    lR += ca;

                    if ((lV.indexOf(ca) > -1) || (lVP.indexOf(ca) > -1) || (lVN.indexOf(ca) > -1)) {
                        Push();
                    } else if (aSD.indexOf(ca) > -1) {
                        Push(2);
                    } else if (!bga && (lGM.indexOf(ca) > -1)) {
                        Flip();
                    }
                    else if (ca == cX) {
                        if (iwc > 1 && !bga && ix < sLen - 1) {
                            Flip(2);
                        } else if (iwc == 1) {
                            Pop();
                        }
                    } else if (ca == cNX) {
                        if (iwc > 0 && !bga && ix < sLen - 1) {
                            Flip();
                        }
                    }
                }
            }
        });


        if (iLC > 0) {
            if (iMC) {
                sIH += "<tr><td>" + slt + "</td><td>&nbsp;</td><td>" + sO + " [" + iLC + "]</td></tr>";
            } else {
                calcVarnik();
                // sIH += "<tr><td>" + slt + "</td><td>&nbsp;</td><td>" + sTM + "</ br>" + sOV + " ["  + iLCV + "]</td></tr>";
                sIH += "<tr><td>" + slt + "</td><td>&nbsp;</td><td>" + sOV + " ["  + iLCV + "]</td></tr>";
            }
        } else {
            sIH += "<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>"
        }

    });

}
