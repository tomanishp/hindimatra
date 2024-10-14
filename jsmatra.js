function _0x4025() {
    const _0x539474 = ['</td><td>&nbsp;</td><td>', '10053584NyzaKG', ']</td></tr>', '5388TCAoeD', '10rWvQeF', 'indexOf', 'क्ष', 'length', 'txtPoem', 'त्र', 'showMatra', 'forEach', 'addEventListener', 'trim', '20gUEGmb', 'matrik', 'value', 'click', '4966137aRjWoH', '270900aajanF', 'ज्ञ', 'charAt', '1CUqysM', 'btnCalc', 'checked', 'innerHTML', '7946719MWrZfa', 'charCodeAt', '1487444SvlXZA', 'getElementById', 'substring', '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>', '1831442HWXfFI', '<tr><td>', '11662TTfAeC', 'split'];
    _0x4025 = function() {
        return _0x539474;
    }
    ;
    return _0x4025();
}
const _0x3bf81b = _0x333a;
(function(_0x53c3fe, _0x2f02c2) {
    const _0x14488e = _0x333a
      , _0x5f0e1d = _0x53c3fe();
    while (!![]) {
        try {
            const _0x30c03b = parseInt(_0x14488e(0xc1)) / 0x1 * (parseInt(_0x14488e(0xcb)) / 0x2) + -parseInt(_0x14488e(0xbe)) / 0x3 + -parseInt(_0x14488e(0xc7)) / 0x4 * (-parseInt(_0x14488e(0xb9)) / 0x5) + parseInt(_0x14488e(0xae)) / 0x6 * (-parseInt(_0x14488e(0xa9)) / 0x7) + parseInt(_0x14488e(0xac)) / 0x8 + -parseInt(_0x14488e(0xbd)) / 0x9 + -parseInt(_0x14488e(0xaf)) / 0xa * (parseInt(_0x14488e(0xc5)) / 0xb);
            if (_0x30c03b === _0x2f02c2)
                break;
            else
                _0x5f0e1d['push'](_0x5f0e1d['shift']());
        } catch (_0x1633fc) {
            _0x5f0e1d['push'](_0x5f0e1d['shift']());
        }
    }
}(_0x4025, 0xc3229));
let lV = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ड़', 'ढ', 'ढ़', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह']
  , lVN = ['क़', 'ख़', 'ग़', 'ज़', 'झ़', 'फ़', 'ड़', 'ढ़']
  , lVP = ['अ', 'इ', 'उ', 'ए', 'अं', 'ऋ']
  , lGM = ['ा', 'ी', 'ू', 'ू', 'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ']
  , lLM = ['ि', 'ु', 'ृ', 'ॄ', 'ॅ', 'ँ']
  , aS = [_0x3bf81b(0xb1), _0x3bf81b(0xb4), _0x3bf81b(0xbf), 'ऋ']
  , aSD = ['आ', 'ई', 'ऊ', 'ऐ', 'ओ', 'औ']
  , cX = '्'
  , cNX = 'ं'
  , ilc = 0x0
  , lr = ''
  , so = ''
  , sInnerHtml = ''
  , bga = ![]
  , iwc = 0x0;
var isMatrik = !![];
document['getElementById'](_0x3bf81b(0xc2))[_0x3bf81b(0xb7)](_0x3bf81b(0xbc), calcMatra);
function _0x333a(_0xbfbcd2, _0x3e0c92) {
    const _0x40251d = _0x4025();
    return _0x333a = function(_0x333a97, _0x18e37b) {
        _0x333a97 = _0x333a97 - 0xa9;
        let _0x4ebc5c = _0x40251d[_0x333a97];
        return _0x4ebc5c;
    }
    ,
    _0x333a(_0xbfbcd2, _0x3e0c92);
}
function Flip(_0x1a3893=0x1) {
    iwc > 0x0 && (Pop(_0x1a3893),
    Push(0x2));
}
function Pop(_0x5dbf4f=0x1) {
    const _0x16b125 = _0x3bf81b;
    so[_0x16b125(0xb2)] >= _0x5dbf4f && (so = so[_0x16b125(0xc9)](0x0, so['length'] - _0x5dbf4f),
    ilc -= _0x5dbf4f,
    iwc -= _0x5dbf4f);
}
function Push(_0xeb6be6=0x1) {
    bx = !![],
    so += _0xeb6be6,
    ilc += _0xeb6be6,
    iwc += _0xeb6be6,
    bga = _0xeb6be6 == 0x2;
}
function calcMatra() {
    const _0x2b6638 = _0x3bf81b;
    document[_0x2b6638(0xc8)](_0x2b6638(0xb5))['innerHTML'] = '',
    isMatrik = document['getElementById'](_0x2b6638(0xba))[_0x2b6638(0xc3)],
    sInnerHtml = '',
    processText(),
    document[_0x2b6638(0xc8)]('showMatra')[_0x2b6638(0xc4)] += '<table\x20class=\x22matratable\x22>' + sInnerHtml + '</table>';
    ;
}
function processText() {
    const _0x2ed670 = _0x3bf81b;
    var _0x593a5b = document['getElementById'](_0x2ed670(0xb3))[_0x2ed670(0xbb)];
    let _0x11fdaa = _0x593a5b[_0x2ed670(0xb8)]()['split']('\x0a');
    _0x11fdaa[_0x2ed670(0xb6)](_0x2ee5c1 => {
        const _0x20d4c9 = _0x2ed670;
        lr = '',
        so = '',
        ilc = 0x0;
        let _0x2bc50a = _0x2ee5c1[_0x20d4c9(0xb8)]();
        var _0x52a637 = _0x2bc50a[_0x20d4c9(0xaa)]('\x20');
        _0x52a637[_0x20d4c9(0xb6)](_0x419045 => {
            const _0x2eec8a = _0x20d4c9;
            iwc = 0x0,
            bga = ![],
            wt = _0x419045[_0x2eec8a(0xb8)](),
            i = wt['length'];
            if (i > 0x0) {
                if (ilc > 0x0)
                    so += '\x20';
                for (let _0x1f25ea = 0x0; _0x1f25ea < i; _0x1f25ea++) {
                    let _0x262a8b = wt[_0x2eec8a(0xc0)](_0x1f25ea)
                      , _0x56398a = wt[_0x2eec8a(0xc6)](_0x1f25ea);
                    if (_0x56398a <= 0xff)
                        continue;
                    lr += _0x262a8b;
                    if (lV['indexOf'](_0x262a8b) > -0x1 || lVP[_0x2eec8a(0xb0)](_0x262a8b) > -0x1 || lVN[_0x2eec8a(0xb0)](_0x262a8b) > -0x1)
                        Push();
                    else {
                        if (aSD[_0x2eec8a(0xb0)](_0x262a8b) > -0x1)
                            Push(isMatrik ? 0x2 : 0x1);
                        else {
                            if (!bga && lGM[_0x2eec8a(0xb0)](_0x262a8b) > -0x1)
                                isMatrik && Flip();
                            else {
                                if (_0x262a8b == cX) {
                                    if (!isMatrik)
                                        Pop();
                                    else {
                                        if (iwc > 0x1 && !bga && _0x1f25ea < i - 0x1)
                                            Flip(0x2);
                                        else
                                            iwc == 0x1 && Pop();
                                    }
                                } else
                                    isMatrik && _0x262a8b == cNX && (iwc > 0x0 && !bga && _0x1f25ea < i - 0x1 && Flip());
                            }
                        }
                    }
                }
            }
        }
        ),
        ilc > 0x0 ? sInnerHtml += _0x20d4c9(0xcc) + _0x2bc50a + _0x20d4c9(0xab) + so + '\x20[' + ilc + _0x20d4c9(0xad) : sInnerHtml += _0x20d4c9(0xca);
    }
    );
}
