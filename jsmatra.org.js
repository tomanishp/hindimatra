let Vovels = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड","ड़", "ढ","ढ़", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
let SwarSingle = ["अ", "इ", "उ", "ए", "अं"];
let GuruMatras = ["ा", "ी", "ू", "ू", "ॆ", "े", "ै", "ॊ", "ो", "ौ"];
let LaghuMatras = ["ि", "ु", "ृ", "ॄ", "ॅ", "ँ"];
let Specials = ["क्ष", "त्र", "ज्ञ", "ऋ"];
let SwarDoubles = ["आ", "ई", "ऊ", "ऐ", "ओ", "औ"];
let HalfChar = "्";
let HalfNCheck = "न";
let HalfNMark = "ं";
let SkipChars = ['ँ', '़', '़', ',', '…', '.', '!', ',', '।', ':', '-', '‘', '’', '—']
let ilc = 0;
let lr = "";
let so = "";
let sPrev = "";
let ipv = false;
let bx = false;
let sInnerHtml = "";
let bga = false;
let iwc = 0;

var w = document.createElement("template");

document.getElementById('btnCalc').addEventListener('click', calcMatra);

function ConvertToGurtu(st=1) {
    if (iwc > 0) {
        so = so.substring(0, so.length - st);
        ilc-=st;
        iwc-=st;
        AddGuru();
    }
}
function AddLaghu() {
    bx = true;
    so += "1";
    ilc++;
    iwc++;
    bga = false;
}
function AddGuru() {
    bx = true;
    sPrev = "";
    ipv = false;
    so += "2";
    ilc += 2;
    iwc += 2;
    bga = true;
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
        slt = element.trim();
        var wordList = slt.split(" ");

        wordList.forEach(sWord => {

            iwc = 0;
            bga = false;
            wt = sWord.trim();
            i = wt.length;
            if (i > 0) {

                if (ilc > 0) so += " ";
                sPrev = "";
                ipv = false;

                for (let ix = 0; ix < i; ix++) {

                    let ca = wt.charAt(ix);

                    if (wt.charCodeAt(ix) <= 255) continue;

                    iv = false;
                    bx = false;

                    if (ix < i - 1) {
                        sn = wt[ix + 1];
                    }

                    lr += ca;

                    if ((Vovels.indexOf(ca) > -1) || (SwarSingle.indexOf(ca) > -1)) {
                        AddLaghu();
                        /*
                        if (sn == HalfChar) {
                            if (iwc > 0 && !bga) {
                                ConvertToGurtu();
                            }
                            ix++;
                            iv = false;
                            bx = true;
                        } else if (sn == HalfNMark) {
                            AddGuru();
                            ix++;
                            iv = false;
                            bx = true;
                        } else {
                            AddLaghu();
                        } */
                    } else if (SwarDoubles.indexOf(ca) > -1) {
                        AddGuru();
                    }
                    else if ((GuruMatras.indexOf(ca) > -1) && !bga) {
                        ConvertToGurtu();
                    }
                     else if (ca == HalfChar) {
                        if (iwc > 0 && !bga && ix<i-1) {
                            ConvertToGurtu(2);
                        }else if (idx=i-1){
                            AddLaghu();
                        }
                    }else if (ca == HalfNMark) {
                        if (iwc > 0 && !bga && ix<i-1) {
                            ConvertToGurtu();
                        }
                    }else if ((LaghuMatras.indexOf(ca) > -1) || (SkipChars.indexOf(ca) > -1)) {
                        bx = true;
                        iv = false;
                    }

                    sPrev = ca;
                    ipv = iv;

                }
            }

        });


        if (ilc > 0) {
            sInnerHtml += "<tr><td>" + slt + "</td><td>&nbsp;</td><td>" + so + " [" + ilc + "]</td></tr>";
        } else {
            sInnerHtml += "<tr><td>&nbsp;<td><td>&nbsp;<td><td>&nbsp;<td></tr>"
        }

    });

}
