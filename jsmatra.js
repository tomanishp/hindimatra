const _0x3432eb = _0x1590;
(function(_0x50bf75, _0x239a72) {
    const _0x1774a6 = _0x1590
      , _0x3b56c2 = _0x50bf75();
    while (!![]) {
        try {
            const _0x2ec2c1 = parseInt(_0x1774a6(0x188)) / 0x1 * (parseInt(_0x1774a6(0x19d)) / 0x2) + -parseInt(_0x1774a6(0x189)) / 0x3 * (-parseInt(_0x1774a6(0x18e)) / 0x4) + parseInt(_0x1774a6(0x199)) / 0x5 * (parseInt(_0x1774a6(0x1a0)) / 0x6) + parseInt(_0x1774a6(0x191)) / 0x7 + parseInt(_0x1774a6(0x1a8)) / 0x8 + parseInt(_0x1774a6(0x19c)) / 0x9 * (parseInt(_0x1774a6(0x19e)) / 0xa) + -parseInt(_0x1774a6(0x1a6)) / 0xb;
            if (_0x2ec2c1 === _0x239a72)
                break;
            else
                _0x3b56c2['push'](_0x3b56c2['shift']());
        } catch (_0x419a55) {
            _0x3b56c2['push'](_0x3b56c2['shift']());
        }
    }
}(_0x3b15, 0x3abd5));
let Vovels = ['क', 'ख', 'ग', 'घ', 'ङ', 'च', 'छ', 'ज', 'झ', 'ञ', 'ट', 'ठ', 'ड', 'ड़', 'ढ', 'ढ़', 'ण', 'त', 'थ', 'द', 'ध', 'न', 'प', 'फ', 'ब', 'भ', 'म', 'य', 'र', 'ल', 'व', 'श', 'ष', 'स', 'ह']
  , SwarSingle = ['अ', 'इ', 'उ', 'ए', 'अं']
  , GuruMatras = ['ा', 'ी', 'ू', 'ू', 'ॆ', 'े', 'ै', 'ॊ', 'ो', 'ौ']
  , LaghuMatras = ['ि', 'ु', 'ृ', 'ॄ', 'ॅ', 'ँ']
  , Specials = ['क्ष', _0x3432eb(0x18f), _0x3432eb(0x190), 'ऋ']
  , SwarDoubles = ['आ', 'ई', 'ऊ', 'ऐ', 'ओ', 'औ']
  , HalfChar = '्'
  , HalfNCheck = 'न'
  , HalfNMark = 'ं'
  , SkipChars = ['ँ', '़', '़', ',', '…', '.', '!', ',', '।', ':', '-', '‘', '’', '—']
  , ilc = 0x0
  , lr = ''
  , so = ''
  , sPrev = ''
  , ipv = ![]
  , bx = ![]
  , sInnerHtml = ''
  , bga = ![]
  , iwc = 0x0;
var w = document[_0x3432eb(0x194)](_0x3432eb(0x18c));
document[_0x3432eb(0x1a4)](_0x3432eb(0x1a3))[_0x3432eb(0x197)]('click', calcMatra);
function _0x1590(_0x54cce1, _0x242118) {
    const _0x3b1559 = _0x3b15();
    return _0x1590 = function(_0x15901a, _0x320f23) {
        _0x15901a = _0x15901a - 0x188;
        let _0x48d084 = _0x3b1559[_0x15901a];
        return _0x48d084;
    }
    ,
    _0x1590(_0x54cce1, _0x242118);
}
function ConvertToGurtu() {
    const _0x15636c = _0x3432eb;
    iwc > 0x0 && (so = so['substring'](0x0, so[_0x15636c(0x1a7)] - 0x1),
    ilc--,
    AddGuru());
}
function _0x3b15() {
    const _0x5d57f2 = ['addEventListener', 'showMatra', '25YJlNax', '<tr><td>', '<tr><td>&nbsp;<td><td>&nbsp;<td><td>&nbsp;<td></tr>', '837JUjENk', '18cHtpJz', '3580jZprlN', 'charAt', '248334HVcEFi', 'innerHTML', '<table\x20class=\x22matratable\x22>', 'btnCalc', 'getElementById', '</table>', '10832690mNHpwG', 'length', '3520120wFTDVe', 'split', '42953YmTkkV', '291LxqTIf', 'forEach', 'indexOf', 'template', ']</td></tr>', '5380grjyZg', 'त्र', 'ज्ञ', '196637JvrBtf', 'value', 'trim', 'createElement', 'charCodeAt', '</td><td>&nbsp;</td><td>'];
    _0x3b15 = function() {
        return _0x5d57f2;
    }
    ;
    return _0x3b15();
}
function AddLaghu() {
    bx = !![],
    so += '1',
    ilc++,
    iwc++,
    bga = ![];
}
function AddGuru() {
    bx = !![],
    sPrev = '',
    ipv = ![],
    so += '2',
    ilc += 0x2,
    iwc += 0x2,
    bga = !![];
}
function calcMatra() {
    const _0x147f43 = _0x3432eb;
    document['getElementById'](_0x147f43(0x198))['innerHTML'] = '',
    sInnerHtml = '',
    processText(),
    document[_0x147f43(0x1a4)]('showMatra')[_0x147f43(0x1a1)] += _0x147f43(0x1a2) + sInnerHtml + _0x147f43(0x1a5);
    ;
}
function processText() {
    const _0x22d23b = _0x3432eb;
    var _0x2114d5 = document['getElementById']('txtPoem')[_0x22d23b(0x192)];
    let _0x32b221 = _0x2114d5[_0x22d23b(0x193)]()[_0x22d23b(0x1a9)]('\x0a');
    _0x32b221[_0x22d23b(0x18a)](_0x1c487b=>{
        const _0x3c8758 = _0x22d23b;
        lr = '',
        so = '',
        ilc = 0x0,
        slt = _0x1c487b['trim']();
        var _0x136869 = slt[_0x3c8758(0x1a9)]('\x20');
        _0x136869[_0x3c8758(0x18a)](_0x45abdf=>{
            const _0x279aae = _0x3c8758;
            iwc = 0x0,
            bga = ![],
            wt = _0x45abdf[_0x279aae(0x193)](),
            i = wt[_0x279aae(0x1a7)];
            if (i > 0x0) {
                if (ilc > 0x0)
                    so += '\x20';
                sPrev = '',
                ipv = ![];
                for (let _0x9b4faa = 0x0; _0x9b4faa < i; _0x9b4faa++) {
                    let _0x28b612 = wt[_0x279aae(0x19f)](_0x9b4faa);
                    if (wt[_0x279aae(0x195)](_0x9b4faa) <= 0xff)
                        continue;
                    iv = ![],
                    bx = ![];
                    _0x9b4faa < i - 0x1 && (sn = wt[_0x9b4faa + 0x1]);
                    lr += _0x28b612;
                    if (Vovels[_0x279aae(0x18b)](_0x28b612) > -0x1 || SwarSingle[_0x279aae(0x18b)](_0x28b612) > -0x1) {
                        if (sn == HalfChar)
                            iwc > 0x0 && !bga && ConvertToGurtu(),
                            _0x9b4faa++,
                            iv = ![],
                            bx = !![];
                        else
                            sn == HalfNMark ? (AddGuru(),
                            _0x9b4faa++,
                            iv = ![],
                            bx = !![]) : AddLaghu();
                    } else {
                        if (SwarDoubles[_0x279aae(0x18b)](_0x28b612) > -0x1)
                            AddGuru();
                        else {
                            if (GuruMatras[_0x279aae(0x18b)](_0x28b612) > -0x1 && !bga)
                                ConvertToGurtu();
                            else
                                (LaghuMatras['indexOf'](_0x28b612) > -0x1 || SkipChars[_0x279aae(0x18b)](_0x28b612) > -0x1) && (bx = !![],
                                iv = ![]);
                        }
                    }
                    sPrev = _0x28b612,
                    ipv = iv;
                }
            }
        }
        ),
        ilc > 0x0 ? sInnerHtml += _0x3c8758(0x19a) + slt + _0x3c8758(0x196) + so + '\x20[' + ilc + _0x3c8758(0x18d) : sInnerHtml += _0x3c8758(0x19b);
    }
    );
}
