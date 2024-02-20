const _0x23c584 = _0x4448;
(function(_0x128e4d, _0x237dbc) {
    const _0x3c2d45 = _0x4448
      , _0x1a9c78 = _0x128e4d();
    while (!![]) {
        try {
            const _0x39d946 = -parseInt(_0x3c2d45(0x72)) / 0x1 + -parseInt(_0x3c2d45(0x80)) / 0x2 + -parseInt(_0x3c2d45(0x7f)) / 0x3 + parseInt(_0x3c2d45(0x76)) / 0x4 * (-parseInt(_0x3c2d45(0x81)) / 0x5) + -parseInt(_0x3c2d45(0x84)) / 0x6 + -parseInt(_0x3c2d45(0x88)) / 0x7 + parseInt(_0x3c2d45(0x6d)) / 0x8;
            if (_0x39d946 === _0x237dbc)
                break;
            else
                _0x1a9c78['push'](_0x1a9c78['shift']());
        } catch (_0x1885e6) {
            _0x1a9c78['push'](_0x1a9c78['shift']());
        }
    }
}(_0x2e89, 0x1a02b));
let lV = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ड़', 'ढ', 'ढ़', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह']
  , lVN = ['क़', 'ख़', 'ग़', 'ज़', 'झ़', 'फ़', 'ड़', 'ढ़']
  , lVP = ['अ', 'इ', 'उ', 'ए', 'अं', 'ऋ']
  , lGM = ['ा', 'ी', 'ू', 'ू', 'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ']
  , lLM = ['ि', 'ु', 'ृ', 'ॄ', 'ॅ', 'ँ']
  , aS = [_0x23c584(0x77), _0x23c584(0x7e), _0x23c584(0x79), 'ऋ']
  , aSD = ['आ', 'ई', 'ऊ', 'ऐ', 'ओ', 'औ']
  , cX = '्'
  , cNX = 'ं'
  , ilc = 0x0
  , lr = ''
  , so = ''
  , sInnerHtml = ''
  , bga = ![]
  , iwc = 0x0;
function _0x4448(_0x53e37a, _0x2d02e2) {
    const _0x2e8940 = _0x2e89();
    return _0x4448 = function(_0x44485c, _0x492785) {
        _0x44485c = _0x44485c - 0x6d;
        let _0x57e9b9 = _0x2e8940[_0x44485c];
        return _0x57e9b9;
    }
    ,
    _0x4448(_0x53e37a, _0x2d02e2);
}
document['getElementById']('btnCalc')[_0x23c584(0x82)](_0x23c584(0x6e), calcMatra);
function Flip(_0x425d03=0x1) {
    iwc > 0x0 && (Pop(_0x425d03),
    Push(0x2));
}
function Pop(_0x28538b=0x1) {
    const _0x5cb7cb = _0x23c584;
    so[_0x5cb7cb(0x70)] >= _0x28538b && (so = so['substring'](0x0, so['length'] - _0x28538b),
    ilc -= _0x28538b,
    iwc -= _0x28538b);
}
function Push(_0x33241e=0x1) {
    bx = !![],
    so += _0x33241e,
    ilc += _0x33241e,
    iwc += _0x33241e,
    bga = _0x33241e == 0x2;
}
function _0x2e89() {
    const _0x926c90 = ['indexOf', '1348RNeRkO', 'क्ष', 'split', 'ज्ञ', 'showMatra', 'innerHTML', 'charAt', 'trim', 'त्र', '356280qpyCor', '159104QboXHW', '1495gmyZXz', 'addEventListener', '<tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>', '1078074qLlozw', 'forEach', 'value', 'charCodeAt', '724549QrfHkw', '6903320Mcltyq', 'click', ']</td></tr>', 'length', '<tr><td>', '174115GWCSPa', 'getElementById', '</table>'];
    _0x2e89 = function() {
        return _0x926c90;
    }
    ;
    return _0x2e89();
}
function calcMatra() {
    const _0x1162bb = _0x23c584;
    document[_0x1162bb(0x73)](_0x1162bb(0x7a))[_0x1162bb(0x7b)] = '',
    sInnerHtml = '',
    processText(),
    document[_0x1162bb(0x73)]('showMatra')[_0x1162bb(0x7b)] += '<table\x20class=\x22matratable\x22>' + sInnerHtml + _0x1162bb(0x74);
    ;
}
function processText() {
    const _0x447240 = _0x23c584;
    var _0x4ad5d9 = document[_0x447240(0x73)]('txtPoem')[_0x447240(0x86)];
    let _0x41e961 = _0x4ad5d9['trim']()['split']('\x0a');
    _0x41e961[_0x447240(0x85)](_0x74257=>{
        const _0x3254d2 = _0x447240;
        lr = '',
        so = '',
        ilc = 0x0;
        let _0x5c5047 = _0x74257['trim']();
        var _0x4abfbf = _0x5c5047[_0x3254d2(0x78)]('\x20');
        _0x4abfbf[_0x3254d2(0x85)](_0x30f441=>{
            const _0xb167db = _0x3254d2;
            iwc = 0x0,
            bga = ![],
            wt = _0x30f441[_0xb167db(0x7d)](),
            i = wt[_0xb167db(0x70)];
            if (i > 0x0) {
                if (ilc > 0x0)
                    so += '\x20';
                for (let _0x2a0683 = 0x0; _0x2a0683 < i; _0x2a0683++) {
                    let _0x24b924 = wt[_0xb167db(0x7c)](_0x2a0683)
                      , _0xc95ee8 = wt[_0xb167db(0x87)](_0x2a0683);
                    if (_0xc95ee8 <= 0xff)
                        continue;
                    lr += _0x24b924;
                    if (lV[_0xb167db(0x75)](_0x24b924) > -0x1 || lVP['indexOf'](_0x24b924) > -0x1 || lVN['indexOf'](_0x24b924) > -0x1)
                        Push();
                    else {
                        if (aSD[_0xb167db(0x75)](_0x24b924) > -0x1)
                            Push(0x2);
                        else {
                            if (lGM['indexOf'](_0x24b924) > -0x1 && !bga)
                                Flip();
                            else {
                                if (_0x24b924 == cX)
                                    iwc > 0x1 && !bga && _0x2a0683 < i - 0x1 && Flip(0x2),
                                    iwc == 0x1 && Pop();
                                else
                                    _0x24b924 == cNX && (iwc > 0x0 && !bga && _0x2a0683 < i - 0x1 && Flip());
                            }
                        }
                    }
                }
            }
        }
        ),
        ilc > 0x0 ? sInnerHtml += _0x3254d2(0x71) + _0x5c5047 + '</td><td>&nbsp;</td><td>' + so + '\x20[' + ilc + _0x3254d2(0x6f) : sInnerHtml += _0x3254d2(0x83);
    }
    );
}
