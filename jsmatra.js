let Vovels = ["क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "प", "फ", "ब", "भ", "म", "य", "र", "ल", "व", "श", "ष", "स", "ह"];
let SwarSingle = ["अ", "इ", "उ", "ए", "अं"];
let GuruMatras = ["ा", "ी", "ू", "ू", "ॆ", "े", "ै", "ॊ", "ो", "ौ"];
let LaghuMatras = ["ि", "ु", "ृ", "ॄ", "ॅ", "ँ"];
let Specials = ["क्ष", "त्र", "ज्ञ", "ऋ"];
let SwarDoubles = ["आ", "ई", "ऊ", "ऐ", "ओ", "औ"];
let HalfChar = "्";
let HalfNCheck = "न";
let HalfNMark = "ं";
let SkipChars = ["ँ", "़", ",", "…", "."];
let iCount = 0;
let sRead = "";
let sOut = "";
let sPrev = "";
let bPrevVovel = false;
let bSkip = false;


var w = document.createElement("template");

document.getElementById('btnCalc').addEventListener('click', calcMatra);

function ConvertToGurtu() {
    sOut = sOut.Substring(0, sOut.length - 1);
    iCount--;
    AddGuru();
}
function AddLaghu() {
    bSkip = true;
    sOut += "1";
    iCount++;
}
function AddGuru() {
    bSkip = true;
    sPrev = "";
    bPrevVovel = false;
    sOut += "2";
    iCount += 2;

}

function calcMatra() {
    // document.getElementById('showMatra').innerHTML = 'Button is Clicked!'

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

        iLen = sLine.length;
        for (let iDx = 0; iDx < sLine.length; iDx++) {
            let sChar = sLine.charAt(iDx);
            bSpace = false;
            bVovel = false;
            bSkip = false;

            sRead += sChar;

            if (sChar == " ") {
                bSkip = true;
                if (bPrevVovel) {
                    AddLaghu();
                }
                sOut += " ";
            }
            else if (SwarDoubles.indexOf(sChar) > -1) {
                AddGuru();
            }
            else if (GuruMatras.indexOf(sChar) > -1) {
                AddGuru();
                if (iDx < iLen - 1) {
                    var sNext = sLine[iDx + 1];

                    if ((sNext == HalfNMark)
                        || SkipChars.indexOf(sNext) > -1) {
                        sRead += sNext;
                        iDx++;
                    }

                }
            }
            else if (Vovels.indexOf(sChar) > -1) {
                bVovel = true;
            }
            else if (LaghuMatras.indexOf(sChar) > -1) {
                if (iDx < iLen - 1) {
                    var sNext = sLine[iDx + 1];

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

            if (bPrevVovel && bVovel) {
                if (iDx < iLen - 1) {
                    sNext = sLine[iDx + 1];

                    if (GuruMatras.indexOf(sNext) > -1) {
                        AddLaghu();
                    }
                    else if (sNext == HalfChar) {
                        AddGuru();
                    }
                    else {
                        AddLaghu();
                    }
                }
                else {
                    AddLaghu();
                    AddLaghu();
                }
            }
            else if (!bVovel && !bSkip && !(sChar == HalfNMark)) {
                sCheck = sChar;
                AddLaghu();
            }
            else if (bVovel || (sChar == HalfNMark)) {
                if (!bSpace && sChar == HalfNCheck) {
                    sNext = sLine[iDx + 1];

                    if (sNext == HalfChar) {
                        ConvertToGurtu();

                    }
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
        document.getElementById('showMatra').innerHTML += "<div>"
        document.getElementById('showMatra').innerHTML += "<div>" + sLine + "</div>";

        document.getElementById('showMatra').innerHTML += "<div>" + sOut + " [" + iCount+ "]</div>";
        document.getElementById('showMatra').innerHTML += "<div>"

    });


}