let Vovels = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
let SwarSingle = ["अ", "इ", "उ", "ए", "अं"];
let GuruMatras = ["ा", "ी", "ू", "ू", "ॆ", "े", "ै", "ॊ", "ो", "ौ"];
let LaghuMatras = ["ि", "ु", "ृ", "ॄ", "ॅ", "ँ"];
let Specials = ["क्ष", "त्र", "ज्ञ", "ऋ"];
let SwarDoubles = ["आ", "ई", "ऊ", "ऐ", "ओ", "औ"];
let HalfChar = "्";
let HalfNCheck = "न";
let HalfNMark = "ं";
let SkipChars = ["ँ", "़", "़", ",", "…", ".", "!", ",", "।", ":", "-"];
let iCount = 0;
let sRead = "";
let sOut = "";
let sPrev = "";
let bPrevVovel = false;
let bSkip = false;
let iWordLen = 0;
let sInnerHtml = "";

var w = document.createElement("template");

document.getElementById('btnCalc').addEventListener('click', calcMatra);

function ConvertToGurtu() {
    if (iWordLen > 0) {
        sOut = sOut.substring(0, sOut.length - 1);
        iCount--;
        AddGuru();
    }
}
function AddLaghu() {
    bSkip = true;
    sOut += "1";
    iCount++;
    iWordLen++;
}
function AddGuru() {
    bSkip = true;
    sPrev = "";
    bPrevVovel = false;
    sOut += "2";
    iCount += 2;
    iWordLen += 2;
}

function calcMatra() {
    document.getElementById('showMatra').innerHTML = '';

    sInnerHtml = "";
    processText();
    document.getElementById('showMatra').innerHTML += "<table class=\"matratable\">" + sInnerHtml + "</table>";;


}

function processText() {
    var txtPoem = document.getElementById('txtPoem').value;
    let sLines = txtPoem.trim().split("\n");

    sLines.forEach(element => {

        sLine = element.trim();
        sRead = "";
        sOut = "";
        sPrev = "";
        iCount = 0;
        bPrevVovel = false;
        bSkip = false;
        iWordLen = 0;
        iLen = sLine.length;


        for (let iDx = 0; iDx < sLine.length; iDx++) {
            let sChar = sLine.charAt(iDx);

            let iCode = sLine.charCodeAt(iDx);

            if (iCode != 32 && iCode <= 255) {
                continue;
            }

            bSpace = false;
            bVovel = false;
            bSkip = false;

            if (iDx < iLen - 1) {
                sNext = sLine[iDx + 1].trim();
            } else {
                sNext = "";
            }

            sRead += sChar;

            if (sChar == " ") {
                bSkip = true;
                if (bPrevVovel) {
                    AddLaghu();
                }
                sOut += " ";
                iWordLen = 0;
            }
            else if (SwarDoubles.indexOf(sChar) > -1) {
                AddGuru();
            }
            else if (GuruMatras.indexOf(sChar) > -1) {
                AddGuru();
                if ((sNext == HalfNMark) || SkipChars.indexOf(sNext) > -1) {
                    sRead += sNext;
                    iDx++;
                }
            }
            else if (Vovels.indexOf(sChar) > -1) {
                bVovel = true;
            }
            else if (LaghuMatras.indexOf(sChar) > -1) {
                if (iDx < iLen - 1) {
                    if (sNext == HalfNMark) {
                        AddGuru();
                        sRead += sNext;
                        iDx++;
                    }
                    else {
                        AddLaghu();
                    }

                }
            }
            else if (SwarSingle.indexOf(sChar) > -1) {
                bVovel = true;
            }
            else if (SkipChars.indexOf(sChar) > -1) {
                bSkip = true;
                bVovel = false;
            }
            else if (sChar == HalfChar) {
                bSkip = true;
                bVovel = false;
            }


            // if current and previous both characters are vovels
            if (bPrevVovel && bVovel) {
                if (GuruMatras.indexOf(sNext) > -1) {
                    AddLaghu();
                }
                else if (sNext == HalfChar && (iDx < iLen - 2)) {
                    AddGuru();
                } else if (sNext == "") {
                    AddLaghu();
                    AddLaghu();
                }
                else {
                    AddLaghu();
                }

            }
            //when it s not vovel, and not skip character and not the . mark 
            else if (!bVovel && !bSkip && !(sChar == HalfNMark)) {
                sCheck = sChar;
                AddLaghu();
            }
            else if (bVovel || (sChar == HalfNMark) || (sChar == HalfChar)) {
                if (!bSpace && sChar == HalfNCheck && sNext!="") {

                    if (sNext == HalfChar && (iDx < iLen - 2) ) {
                        ConvertToGurtu();
                    }
                }
                // Half character and it is NOT the end of the word 
                else if (sChar == HalfChar && sNext!="") {
                    ConvertToGurtu();
                }
                else if (bVovel && SkipChars.indexOf(sPrev) > -1) {
                    AddLaghu();
                }
                else if (sChar == HalfNMark) {
                    if (!bPrevVovel) {
                        ConvertToGurtu();
                    } else {
                        AddGuru();
                    }
                }
                else if (iDx == iLen - 1) {
                    AddLaghu();
                }
            }
            else {
                sCheck = sChar;
            }
            sPrev = sChar;
            bPrevVovel = bVovel;
            bSpace = (sChar == " ");

        }

        if (iLen > 0) {
            sInnerHtml += "<tr><td>" + sLine + "</td><td>&nbsp;</td><td>" + sOut + " [" + iCount + "]</td></tr>";
        } else {
            sInnerHtml += "<tr><td>&nbsp;<td><td>&nbsp;<td><td>&nbsp;<td></tr>"
        }
    });


}
