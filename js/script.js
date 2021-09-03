const _0x52aeab = _0x3564;
(function (_0xdd613b, _0x2813f8) {
  const _0x4e67b4 = _0x3564,
    _0xe6efb3 = _0xdd613b();
  while (!![]) {
    try {
      const _0x1c6ddc =
        (parseInt(_0x4e67b4(0xc1)) / 0x1) * (-parseInt(_0x4e67b4(0xc2)) / 0x2) +
        parseInt(_0x4e67b4(0xcd)) / 0x3 +
        parseInt(_0x4e67b4(0xdc)) / 0x4 +
        -parseInt(_0x4e67b4(0xe0)) / 0x5 +
        (-parseInt(_0x4e67b4(0xca)) / 0x6) * (parseInt(_0x4e67b4(0xd2)) / 0x7) +
        parseInt(_0x4e67b4(0xe7)) / 0x8 +
        parseInt(_0x4e67b4(0xe6)) / 0x9;
      if (_0x1c6ddc === _0x2813f8) break;
      else _0xe6efb3["push"](_0xe6efb3["shift"]());
    } catch (_0x3d1cf8) {
      _0xe6efb3["push"](_0xe6efb3["shift"]());
    }
  }
})(_0x5300, 0xdfef7);
const container = document[_0x52aeab(0xcf)](_0x52aeab(0xc6)),
  photoGallery = document[_0x52aeab(0xcf)](_0x52aeab(0xbe)),
  notifyText = document[_0x52aeab(0xcf)](_0x52aeab(0xcc)),
  spinner = _0x52aeab(0xd3);
let searchResult;
function _0x3564(_0x5f0fbd, _0x41e5ab) {
  const _0x530021 = _0x5300();
  return (
    (_0x3564 = function (_0x356461, _0x336153) {
      _0x356461 = _0x356461 - 0xbc;
      let _0x511e74 = _0x530021[_0x356461];
      return _0x511e74;
    }),
    _0x3564(_0x5f0fbd, _0x41e5ab)
  );
}
const loadData = (_0x3abe6b) => {
  const _0x3d4cb8 = _0x52aeab;
  container[_0x3d4cb8(0xce)] = "";
  let _0x44f763 = _0x3abe6b;
  const _0x1503a6 = document["getElementById"]("input-field");
  _0x1503a6[_0x3d4cb8(0xdb)] != ""
    ? (_0x44f763 = _0x1503a6[_0x3d4cb8(0xdb)])
    : (_0x44f763 = _0x3abe6b),
    (searchResult = _0x44f763),
    (_0x1503a6["value"] = "");
  const _0x1c65a8 = _0x3d4cb8(0xd0) + _0x44f763 + _0x3d4cb8(0xc0);
  (notifyText[_0x3d4cb8(0xce)] = _0x3d4cb8(0xe3) + spinner + "\x20"),
    fetch(_0x1c65a8)
      [_0x3d4cb8(0xe5)]((_0x37a882) => _0x37a882[_0x3d4cb8(0xbd)]())
      [_0x3d4cb8(0xe5)]((_0xda78e9) =>
        displayImages(
          _0xda78e9[_0x3d4cb8(0xdd)][_0x3d4cb8(0xdf)](
            (_0x42041f) => _0x42041f[_0x3d4cb8(0xd4)][_0x3d4cb8(0xc5)]
          )
        )
      );
};
loadData(_0x52aeab(0xc9));
const displayImages = (_0x5be436) => {
  const _0x16a1ae = _0x52aeab;
  (photoGallery["innerHTML"] = ""),
    searchResult && _0x5be436[_0x16a1ae(0xc3)] !== 0x0
      ? _0x5be436[_0x16a1ae(0xd8)]((_0x1bcd00) => {
          const _0x4069fc = _0x16a1ae,
            _0x3eae49 = Math[_0x4069fc(0xd6)](Math[_0x4069fc(0xe1)]() * 0x4),
            _0x346f71 = _0x4069fc(0xd7) + _0x3eae49,
            _0x209fce = document[_0x4069fc(0xda)](_0x4069fc(0xbf));
          _0x209fce[_0x4069fc(0xbc)]["add"](_0x4069fc(0xc8), "" + _0x346f71),
            (_0x209fce[_0x4069fc(0xce)] =
              _0x4069fc(0xd5) + _0x1bcd00 + _0x4069fc(0xd1)),
            photoGallery["appendChild"](_0x209fce),
            (notifyText[_0x4069fc(0xce)] =
              _0x4069fc(0xd9) + searchResult + _0x4069fc(0xde)),
            container[_0x4069fc(0xcb)](photoGallery);
        })
      : (console[_0x16a1ae(0xe4)](searchResult),
        searchResult === undefined
          ? (notifyText[_0x16a1ae(0xc7)] =
              "Please\x20write\x20specific\x20name\x20to\x20get\x20photos")
          : (notifyText[_0x16a1ae(0xce)] =
              _0x16a1ae(0xc4) + searchResult + _0x16a1ae(0xe2)),
        (container[_0x16a1ae(0xce)] =
          "\x20<img\x20class=\x22d-block\x20mx-auto\x20w-50\x22\x20src=\x22images/not-found.png\x22\x20alt=\x22\x22\x20/>"));
};
function _0x5300() {
  const _0xe09cfe = [
    "div",
    "&per_page=50&client_id=pl7Dj4uX_pWVpe-j4D7OQxNcOXnZgdHS5wvdBAA7ZAc\x0a\x20\x20",
    "23AeovoI",
    "103742wFsIyU",
    "length",
    "Sorry\x20<span\x20class=\x22fw-bold\x20text-danger\x22>",
    "regular",
    "container",
    "innerText",
    "photo",
    "kashmir",
    "10095018ryTccO",
    "appendChild",
    "notify-text",
    "4762104VVwwMG",
    "innerHTML",
    "getElementById",
    "https://api.unsplash.com/search/photos/?query=",
    "\x22\x20alt=\x22\x22\x20/>",
    "7zXEFBk",
    "<div\x20class=\x22sk-chase\x20mx-auto\x20mt-4\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22sk-chase-dot\x22></div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x20",
    "urls",
    "<img\x20src=\x22",
    "ceil",
    "nor-",
    "forEach",
    "Result\x20:\x20<span\x20class=\x22text-warning\x22>",
    "createElement",
    "value",
    "725832xbTYal",
    "results",
    "</span>",
    "map",
    "3077420RCIIuj",
    "random",
    "</span>\x20is\x20not\x20found.",
    "Please\x20wait\x20for\x20a\x20moment..\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "log",
    "then",
    "14635377hhXjKK",
    "8106240fZQXkJ",
    "classList",
    "json",
    "gallery",
  ];
  _0x5300 = function () {
    return _0xe09cfe;
  };
  return _0x5300();
}
