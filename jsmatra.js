const _0x11a43e = _0x4d6f;
(function(_0x4bba1a, _0x470819) {
    const _0x1af337 = _0x4d6f
      , _0x451a87 = _0x4bba1a();
    while (!![]) {
        try {
            const _0x30286e = -parseInt(_0x1af337(0x170)) / 0x1 * (-parseInt(_0x1af337(0x159)) / 0x2) + parseInt(_0x1af337(0x15b)) / 0x3 + parseInt(_0x1af337(0x15d)) / 0x4 * (parseInt(_0x1af337(0x161)) / 0x5) + parseInt(_0x1af337(0x16a)) / 0x6 * (parseInt(_0x1af337(0x152)) / 0x7) + parseInt(_0x1af337(0x145)) / 0x8 + -parseInt(_0x1af337(0x16d)) / 0x9 * (-parseInt(_0x1af337(0x160)) / 0xa) + -parseInt(_0x1af337(0x165)) / 0xb * (parseInt(_0x1af337(0x142)) / 0xc);
            if (_0x30286e === _0x470819)
                break;
            else
                _0x451a87['push'](_0x451a87['shift']());
        } catch (_0x49cb24) {
            _0x451a87['push'](_0x451a87['shift']());
        }
    }
}(_0x59c2, 0x18e84));
let lV = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ड़', 'ढ', 'ढ़', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह']
  , lVN = ['क़', 'ख़', 'ग़', 'ज़', 'झ़', 'फ़', 'ड़', 'ढ़']
  , lVP = ['अ', 'इ', 'उ', 'ए', 'अं', 'ऋ']
  , lGM = ['ा', 'ी', 'ू', 'ू', 'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ']
  , lLM = ['ि', 'ु', 'ृ', 'ॄ', 'ॅ', 'ँ']
  , aS = [_0x11a43e(0x14d), 'त्र', 'ज्ञ', 'ऋ']
  , aSD = ['आ', 'ई', 'ऊ', 'ऐ', 'ओ', 'औ']
  , cX = '्'
  , cNX = 'ं'
  , iLC = 0x0
  , iLCV = 0x0
  , lR = ''
  , sO = ''
  , sOV = ''
  , sIH = ''
  , bga = ![]
  , iwc = 0x0;
var iMC = !![];
let vS = ['य', 'म', 'त', 'र', 'ज', 'भ', 'न', 'स']
  , vSC = [_0x11a43e(0x14b), 'ऽऽऽ', _0x11a43e(0x151), 'ऽ।ऽ', _0x11a43e(0x14c), _0x11a43e(0x16b), _0x11a43e(0x144), _0x11a43e(0x16c)]
  , vSG = 'ऽ'
  , vSL = '।'
  , sTM = '';
document[_0x11a43e(0x158)](_0x11a43e(0x167))[_0x11a43e(0x171)](_0x11a43e(0x15e), calcMatra),
document['getElementById']('matrik')[_0x11a43e(0x171)]('click', toggleDef),
document[_0x11a43e(0x158)]('varnik')[_0x11a43e(0x171)](_0x11a43e(0x15e), toggleDef);
function toggleDef() {
    const _0x70196f = _0x11a43e;
    iMC = document[_0x70196f(0x158)](_0x70196f(0x166))['checked'],
    document['getElementById'](_0x70196f(0x169))[_0x70196f(0x150)][_0x70196f(0x146)] = iMC ? 'block' : _0x70196f(0x163),
    document['getElementById']('divVarnik')[_0x70196f(0x150)][_0x70196f(0x146)] = iMC ? _0x70196f(0x163) : 'block';
}
function _0x4d6f(_0x2219c9, _0x27f5dc) {
    const _0x59c2b5 = _0x59c2();
    return _0x4d6f = function(_0x4d6f45, _0x18dc0e) {
        _0x4d6f45 = _0x4d6f45 - 0x142;
        let _0x48e782 = _0x59c2b5[_0x4d6f45];
        return _0x48e782;
    }
    ,
    _0x4d6f(_0x2219c9, _0x27f5dc);
}
function Flip(_0x211e7a=0x1) {
    iwc > 0x0 && (Pop(_0x211e7a),
    Push(0x2));
}
function Pop(_0x2649b2=0x1) {
    const _0x1a1b77 = _0x11a43e;
    sO[_0x1a1b77(0x15c)] >= _0x2649b2 && (sO = sO[_0x1a1b77(0x16f)](0x0, sO[_0x1a1b77(0x15c)] - _0x2649b2),
    iLC -= _0x2649b2,
    iwc -= _0x2649b2);
}
function Push(_0x269a98=0x1) {
    bx = !![],
    sO += _0x269a98,
    iLC += _0x269a98,
    iwc += _0x269a98,
    bga = _0x269a98 == 0x2;
}
function calcMatra() {
    const _0x28bf20 = _0x11a43e;
    document[_0x28bf20(0x158)](_0x28bf20(0x147))[_0x28bf20(0x14f)] = '',
    iMC = document['getElementById'](_0x28bf20(0x166))[_0x28bf20(0x155)],
    sIH = '',
    processText(),
    document[_0x28bf20(0x158)](_0x28bf20(0x147))['innerHTML'] += _0x28bf20(0x153) + sIH + _0x28bf20(0x168);
    ;
}
function _0x59c2() {
    const _0x4baf21 = ['ऽ।।', '।।ऽ', '471519ObyQha', 'value', 'substring', '278uRqOPu', 'addEventListener', '37980RHKRMk', '</td><td>&nbsp;</td><td>', '।।।', '446600IDrkpl', 'display', 'showMatra', 'split', 'charCodeAt', 'indexOf', '।ऽऽ', '।ऽ।', 'क्ष', '<tr><td>', 'innerHTML', 'style', 'ऽऽ।', '1060255wrzWWv', '<table\x20class=\x22matratable\x22>', 'charAt', 'checked', 'forEach', 'गण\x20', 'getElementById', '194IYzPIS', 'replaceAll', '51285kCAzvE', 'length', '705308LewFFc', 'click', ']</td></tr>', '20dldoxE', '5MKtzrc', 'trim', 'none', '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>', '1496GRhnoR', 'matrik', 'btnCalc', '</table>', 'divMatrik', '6rLRnHU'];
    _0x59c2 = function() {
        return _0x4baf21;
    }
    ;
    return _0x59c2();
}
function calcVarnik() {
    const _0x453ad1 = _0x11a43e;
    sTM = sO[_0x453ad1(0x15a)]('\x20', '')['replaceAll']('1', vSL)[_0x453ad1(0x15a)]('2', vSG),
    sOV = '',
    sLen = sTM[_0x453ad1(0x15c)] / 0x3;
    let _0x1b5613 = 0x0;
    for (_0x1b5613 = 0x0; _0x1b5613 < sLen; _0x1b5613++) {
        sIn = _0x1b5613 * 0x3,
        ss = sTM['substring'](sIn, sIn + 0x3),
        ssI = vSC['indexOf'](ss),
        ssI >= 0x0 && (sOV += vS[ssI] + _0x453ad1(0x157));
    }
    _0x1b5613 > sLen && (sOV += '(' + sTM[_0x453ad1(0x16f)]((_0x1b5613 - 0x1) * 0x3) + ')'),
    iLCV = sTM[_0x453ad1(0x15c)];
}
function processText() {
    const _0x4a74e4 = _0x11a43e;
    var _0x30e014 = document[_0x4a74e4(0x158)]('txtPoem')[_0x4a74e4(0x16e)];
    let _0x495e8b = _0x30e014[_0x4a74e4(0x162)]()[_0x4a74e4(0x148)]('\x0a');
    _0x495e8b['forEach'](_0x26d0c1 => {
        const _0x28a3d0 = _0x4a74e4;
        lR = '',
        sO = '',
        iLC = 0x0;
        let _0x9b805 = _0x26d0c1[_0x28a3d0(0x162)]();
        var _0x38d8e9 = _0x9b805['split']('\x20');
        _0x38d8e9[_0x28a3d0(0x156)](_0x5167e9 => {
            const _0x2ff73b = _0x28a3d0;
            iwc = 0x0,
            bga = ![],
            wt = _0x5167e9['trim'](),
            sLen = wt[_0x2ff73b(0x15c)];
            if (sLen > 0x0) {
                if (iLC > 0x0)
                    sO += '\x20';
                for (let _0xca50b = 0x0; _0xca50b < sLen; _0xca50b++) {
                    let _0xea4b34 = wt[_0x2ff73b(0x154)](_0xca50b)
                      , _0x5d9abb = wt[_0x2ff73b(0x149)](_0xca50b);
                    if (_0x5d9abb <= 0xff)
                        continue;
                    lR += _0xea4b34;
                    if (lV[_0x2ff73b(0x14a)](_0xea4b34) > -0x1 || lVP['indexOf'](_0xea4b34) > -0x1 || lVN[_0x2ff73b(0x14a)](_0xea4b34) > -0x1)
                        Push();
                    else {
                        if (aSD[_0x2ff73b(0x14a)](_0xea4b34) > -0x1)
                            Push(0x2);
                        else {
                            if (!bga && lGM[_0x2ff73b(0x14a)](_0xea4b34) > -0x1)
                                Flip();
                            else {
                                if (_0xea4b34 == cX) {
                                    if (iwc > 0x1 && !bga && _0xca50b < sLen - 0x1)
                                        Flip(0x2);
                                    else
                                        iwc == 0x1 && Pop();
                                } else
                                    _0xea4b34 == cNX && (iwc > 0x0 && !bga && _0xca50b < sLen - 0x1 && Flip());
                            }
                        }
                    }
                }
            }
        }
        ),
        iLC > 0x0 ? iMC ? sIH += _0x28a3d0(0x14e) + _0x9b805 + _0x28a3d0(0x143) + sO + '\x20[' + iLC + _0x28a3d0(0x15f) : (calcVarnik(),
        sIH += _0x28a3d0(0x14e) + _0x9b805 + _0x28a3d0(0x143) + sOV + '\x20[' + iLCV + _0x28a3d0(0x15f)) : sIH += _0x28a3d0(0x164);
    }
    );
}
