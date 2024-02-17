const _0x671f58 = _0x5afc;
function _0xb1e5() {
    const _0x3f1ee3 = ['getElementById', 'substring', '15299216uKvedz', '350giABsJ', 'showMatra', '63033tgOgUe', '7475185cNhkdD', '1108098xBdheY', 'split', 'charCodeAt', 'charAt', 'txtPoem', 'indexOf', '<tr><td>', ']</td></tr>', '1924602SzkIvG', '10516TnrKys', '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>', '96ZaiDDx', 'innerHTML', 'त्र', 'length', '<table\x20class=\x22matratable\x22>', 'trim', 'क्ष', '224vDqLYk', 'forEach', '6474552zqMICz', 'value'];
    _0xb1e5 = function() {
        return _0x3f1ee3;
    }
    ;
    return _0xb1e5();
}
(function(_0x42634c, _0x3ae8fa) {
    const _0x5ef04c = _0x5afc
      , _0xd6ac94 = _0x42634c();
    while (!![]) {
        try {
            const _0x1b51fc = -parseInt(_0x5ef04c(0xc8)) / 0x1 * (-parseInt(_0x5ef04c(0xd1)) / 0x2) + -parseInt(_0x5ef04c(0xda)) / 0x3 * (parseInt(_0x5ef04c(0xca)) / 0x4) + -parseInt(_0x5ef04c(0xdb)) / 0x5 + parseInt(_0x5ef04c(0xc7)) / 0x6 + -parseInt(_0x5ef04c(0xd3)) / 0x7 + -parseInt(_0x5ef04c(0xd7)) / 0x8 + parseInt(_0x5ef04c(0xdc)) / 0x9 * (parseInt(_0x5ef04c(0xd8)) / 0xa);
            if (_0x1b51fc === _0x3ae8fa)
                break;
            else
                _0xd6ac94['push'](_0xd6ac94['shift']());
        } catch (_0x1117f4) {
            _0xd6ac94['push'](_0xd6ac94['shift']());
        }
    }
}(_0xb1e5, 0xed1b6));
let lV = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ड़', 'ढ', 'ढ़', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह']
  , lVP = ['अ', 'इ', 'उ', 'ए', 'अं', 'ऋ']
  , lGM = ['ा', 'ी', 'ू', 'ू', 'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ']
  , lLM = ['ि', 'ु', 'ृ', 'ॄ', 'ॅ', 'ँ']
  , aS = [_0x671f58(0xd0), _0x671f58(0xcc), 'ज्ञ', 'ऋ']
  , aSD = ['आ', 'ई', 'ऊ', 'ऐ', 'ओ', 'औ']
  , cX = '्'
  , cNX = 'ं'
  , aXS = ['ँ', '़', '़', ',', '…', '.', '!', ',', '।', ':', '-', '‘', '’', '—']
  , ilc = 0x0
  , lr = ''
  , so = ''
  , sInnerHtml = ''
  , bga = ![]
  , iwc = 0x0;
document[_0x671f58(0xd5)]('btnCalc')['addEventListener']('click', calcMatra);
function _0x5afc(_0x2deaa2, _0x58474a) {
    const _0xb1e50c = _0xb1e5();
    return _0x5afc = function(_0x5afc5e, _0x48c511) {
        _0x5afc5e = _0x5afc5e - 0xc6;
        let _0x3482c8 = _0xb1e50c[_0x5afc5e];
        return _0x3482c8;
    }
    ,
    _0x5afc(_0x2deaa2, _0x58474a);
}
function Flip(_0x1d04d8=0x1) {
    iwc > 0x0 && (Pop(_0x1d04d8),
    Push(0x2));
}
function Pop(_0x451c80=0x1) {
    const _0x5507b7 = _0x671f58;
    iwc > 0x0 && (so = so[_0x5507b7(0xd6)](0x0, so[_0x5507b7(0xcd)] - _0x451c80),
    ilc -= _0x451c80,
    iwc -= _0x451c80);
}
function Push(_0x4fc4e1=0x1) {
    bx = !![],
    so += _0x4fc4e1,
    ilc += _0x4fc4e1,
    iwc += _0x4fc4e1,
    bga = _0x4fc4e1 == 0x2;
}
function calcMatra() {
    const _0x44c461 = _0x671f58;
    document[_0x44c461(0xd5)](_0x44c461(0xd9))['innerHTML'] = '',
    sInnerHtml = '',
    processText(),
    document[_0x44c461(0xd5)](_0x44c461(0xd9))[_0x44c461(0xcb)] += _0x44c461(0xce) + sInnerHtml + '</table>';
    ;
}
function processText() {
    const _0x252507 = _0x671f58;
    var _0x46fa80 = document[_0x252507(0xd5)](_0x252507(0xe0))[_0x252507(0xd4)];
    let _0x3f551b = _0x46fa80[_0x252507(0xcf)]()[_0x252507(0xdd)]('\x0a');
    _0x3f551b[_0x252507(0xd2)](_0x4c4ecd=>{
        const _0x1e5640 = _0x252507;
        lr = '',
        so = '',
        ilc = 0x0;
        let _0x4d0765 = _0x4c4ecd[_0x1e5640(0xcf)]();
        var _0x2ab07a = _0x4d0765['split']('\x20');
        _0x2ab07a[_0x1e5640(0xd2)](_0x36810d=>{
            const _0x4a1d85 = _0x1e5640;
            iwc = 0x0,
            bga = ![],
            wt = _0x36810d[_0x4a1d85(0xcf)](),
            i = wt[_0x4a1d85(0xcd)];
            if (i > 0x0) {
                if (ilc > 0x0)
                    so += '\x20';
                for (let _0x310889 = 0x0; _0x310889 < i; _0x310889++) {
                    let _0x174224 = wt[_0x4a1d85(0xdf)](_0x310889);
                    if (wt[_0x4a1d85(0xde)](_0x310889) <= 0xff)
                        continue;
                    lr += _0x174224;
                    if (lV[_0x4a1d85(0xe1)](_0x174224) > -0x1 || lVP['indexOf'](_0x174224) > -0x1)
                        Push();
                    else {
                        if (aSD[_0x4a1d85(0xe1)](_0x174224) > -0x1)
                            Push(0x2);
                        else {
                            if (lGM['indexOf'](_0x174224) > -0x1 && !bga)
                                Flip();
                            else {
                                if (_0x174224 == cX)
                                    iwc > 0x1 && !bga && _0x310889 < i - 0x1 && Flip(0x2),
                                    iwc == 0x1 && Pop();
                                else
                                    _0x174224 == cNX && (iwc > 0x0 && !bga && _0x310889 < i - 0x1 && Flip());
                            }
                        }
                    }
                }
            }
        }
        ),
        ilc > 0x0 ? sInnerHtml += _0x1e5640(0xe2) + _0x4d0765 + '</td><td>&nbsp;</td><td>' + so + '\x20[' + ilc + _0x1e5640(0xc6) : sInnerHtml += _0x1e5640(0xc9);
    }
    );
}
