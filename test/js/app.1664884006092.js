(function (t) {
  function e(e) {
    for (
      var a, r, i = e[0], c = e[1], p = e[2], u = 0, f = [];
      u < i.length;
      u++
    )
      (r = i[u]),
        Object.prototype.hasOwnProperty.call(o, r) && o[r] && f.push(o[r][0]),
        (o[r] = 0);
    for (a in c) Object.prototype.hasOwnProperty.call(c, a) && (t[a] = c[a]);
    l && l(e);
    while (f.length) f.shift()();
    return s.push.apply(s, p || []), n();
  }
  function n() {
    for (var t, e = 0; e < s.length; e++) {
      for (var n = s[e], a = !0, i = 1; i < n.length; i++) {
        var c = n[i];
        0 !== o[c] && (a = !1);
      }
      a && (s.splice(e--, 1), (t = r((r.s = n[0]))));
    }
    return t;
  }
  var a = {},
    o = { app: 0 },
    s = [];
  function r(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = { i: e, l: !1, exports: {} });
    return t[e].call(n.exports, n, n.exports, r), (n.l = !0), n.exports;
  }
  (r.m = t),
    (r.c = a),
    (r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: n });
    }),
    (r.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (r.t = function (t, e) {
      if ((1 & e && (t = r(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          r.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (r.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return r.d(e, "a", e), e;
    }),
    (r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (r.p = "");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    c = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var p = 0; p < i.length; p++) e(i[p]);
  var l = c;
  s.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "0173": function (t, e, n) {
    t.exports = n.p + "img/盧秀燕.116f8f7f.jpg";
  },
  "0471": function (t, e, n) {
    "use strict";
    n("acb5");
  },
  "0ac5": function (t, e, n) {
    t.exports = n.p + "img/鄭運鵬.bad0f143.jpg";
  },
  "0bf5": function (t, e, n) {
    t.exports = n.p + "img/詹智鈞.a50bd5a7.jpg";
  },
  "0ca8": function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  "0cf6": function (t, e, n) {},
  "0d36": function (t, e, n) {
    t.exports = n.p + "img/蔡培慧.d04a2c77.jpg";
  },
  "0dbf": function (t, e, n) {
    t.exports = n.p + "img/鄭宇翔.8ec54957.jpg";
  },
  "0f28": function (t, e, n) {
    t.exports = n.p + "img/王永慶.b3723abc.jpg";
  },
  "0f60": function (t, e, n) {
    t.exports = n.p + "img/黃敏惠.6bebd19b.jpg";
  },
  "11d4": function (t, e, n) {
    t.exports = n.p + "img/date.040c6ff5.png";
  },
  1411: function (t, e, n) {},
  "14ce": function (t, e, n) {
    t.exports = n.p + "img/tablet_horizontal.e6b0692f.jpg";
  },
  "16d3": function (t, e, n) {},
  1721: function (t, e, n) {
    t.exports = n.p + "img/黃師鵬.d9584623.jpg";
  },
  "19a9": function (t, e, n) {
    t.exports = n.p + "img/許鋐哲.25577f14.jpg";
  },
  "1a89": function (t, e, n) {
    t.exports = n.p + "img/陳其邁.59cb59f3.jpg";
  },
  "1b1c": function (t, e, n) {
    t.exports = n.p + "img/朱紀瑋.2e8b4e04.jpg";
  },
  "1b4a": function (t, e, n) {
    t.exports = n.p + "img/洪志恒.8f46e5e0.jpg";
  },
  "1c9f": function (t, e, n) {
    t.exports = n.p + "img/沈慧虹.a9340627.jpg";
  },
  "1dde": function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  "1e9f": function (t, e, n) {
    "use strict";
    n("9082");
  },
  "1f30": function (t, e, n) {},
  2409: function (t, e, n) {
    t.exports = n.p + "img/曾尹儷.efc70acf.jpg";
  },
  2953: function (t, e, n) {
    t.exports = n.p + "img/周江杰.7f35bb49.jpg";
  },
  "2bac": function (t, e, n) {
    t.exports = n.p + "img/王惠美.e61d7b0a.jpg";
  },
  "2bf1": function (t, e, n) {
    t.exports = n.p + "img/陳秋境.5e49b703.jpg";
  },
  "2d13": function (t, e, n) {
    t.exports = n.p + "img/劉復嵐.6b89f533.jpg";
  },
  "2dff": function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  "2e80": function (t, e, n) {
    t.exports = n.p + "img/侯友宜.b67224f7.jpg";
  },
  "2e83": function (t, e, n) {
    t.exports = n.p + "img/曹爾元.fee83ac1.jpg";
  },
  3104: function (t, e, n) {
    t.exports = n.p + "img/Kolas.8908f123.png";
  },
  3193: function (t, e, n) {
    t.exports = n.p + "img/黃聖峰.558be09f.jpg";
  },
  "319b": function (t, e, n) {},
  3234: function (t, e, n) {
    t.exports = n.p + "img/張麗善.e32e9220.jpg";
  },
  3274: function (t, e, n) {
    t.exports = n.p + "img/劉建國.51950d9e.jpg";
  },
  "32ec": function (t, e, n) {
    t.exports = n.p + "img/陳福海.e35bfc7c.jpg";
  },
  "33eb": function (t, e, n) {
    t.exports = n.p + "img/張善政.88327864.jpg";
  },
  3755: function (t, e, n) {},
  "3dd1": function (t, e) {
    t.exports =
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAASABIAAD/7QA4UGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAAA4QklNBCUAAAAAABDUHYzZjwCyBOmACZjs+EJ+/+EAWEV4aWYAAE1NACoAAAAIAAIBEgADAAAAAQABAACHaQAEAAAAAQAAACYAAAAAAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAf6gAwAEAAAAAQAAAf4AAAAA/9sAQwADAgIDAgIDAwIDAwMDAwQHBQQEBAQJBgcFBwoJCwsKCQoKDA0RDgwMEAwKCg4UDxAREhMTEwsOFBYUEhYREhMS/9sAQwEDAwMEBAQIBQUIEgwKDBISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhISEhIS/8AAEQgAZABkAwEiAAIRAQMRAf/EABsAAQACAwEBAAAAAAAAAAAAAAABAgMFBgQH/8QAKhAAAgIBBAIBAwMFAAAAAAAAAAECAwQFERIxBiFBE2GBBxQiQlFxkeH/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAQQCAwUGB//EACURAAICAQIFBQEAAAAAAAAAAAABAgMRBAUSIUFxsTFRYZHB0f/aAAwDAQACEQMRAD8A4IAHhz7qAAAAAAAAAAAAAAAAAAAAAACH0ASCg9tpRUpSk1GMYrdyb6SS7ZMYuTSSy2RKSim2+RcGTLwMvA4PPxb8ZW+oOaWzfe26b9/ZmA2XUWUy4bItP5MKrYWx4oPKLgquyxqNgAAAAAAAAAIfRJD6AKnp0zMjp2p4uVZCVkKLN5Rivezi4tr7rff8FMPDu1DJjj4kYuxxcm5y2jGK23b+fldHTaP4BPUtQxcW3MyrLMm2NarwsWMptt9RUn7f2bX4ENdXpLoTckpeqXN+M/hydx3HS1qVNjeeuOn4YvJ/JMLUtOWLp7ndKyyE5TdUoKtRe/8AUl/L1tsv7s5g+k+Tfo3Hx7Ejky1LPVdzx/oRyKaYzmrKpTk3GLe3FxUXs2nyXs4vU/G8nTaLL4W1ZNFUeU9o8Jxiu3tu09vwWNfvFesvSlJKXolz8tYKG3bpoq48Kb59Wv42atdliq7LFc9KAAAAAAAAACH0SQ+gCIylXZGyqc67IPeE4S4yj/hm50vzTWdHzKMrDyaJX401OqduOm1JdP00n/o0oMZQjPHEk8e6Tx29ipqNBpr3myGX9eDosvz/AFbNwsbGsq0eMcSuFVVteAo28ILaMZTT5SSXw2/g0uZqOXqMeOdkTsr33+nGKhBv43S7/O5fUJuyyM50ypbio8d01slsv+nkMKoVrE1FJ9ln7K+m2zRxSnGvn3z+tErssVXZY2nTAAAAAAAAABD6JIfsAqCeI4gGbJ+hvD9rHiuC5e37l8mAniOJEVhYIjHhWMhdliEtiSSQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/9k=";
  },
  4586: function (t, e, n) {
    t.exports = n.p + "img/黃宏成台灣阿成世界偉人財神總統.940722a8.jpg";
  },
  4699: function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  4827: function (t, e, n) {},
  "4a4d": function (t, e, n) {
    t.exports = n.p + "img/唐新民.bf0d1d35.jpg";
  },
  "4d37": function (t, e, n) {
    "use strict";
    n("319b");
  },
  "4dc1": function (t, e, n) {
    t.exports = n.p + "img/王忠銘.1bf7af4b.jpg";
  },
  "4ed4": function (t, e, n) {
    t.exports = n.p + "img/范振揆.bcdb096c.jpg";
  },
  "4f05": function (t, e, n) {
    "use strict";
    n("1411");
  },
  5012: function (t, e, n) {
    "use strict";
    n("3755");
  },
  "51e7": function (t, e, n) {
    t.exports = n.p + "img/李俊俋.2b157819.jpg";
  },
  5486: function (t, e, n) {
    t.exports = n.p + "img/蘇清泉.2ea33206.jpg";
  },
  5532: function (t, e, n) {
    t.exports = n.p + "img/林耕仁.1c757b33.jpg";
  },
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("e792"), n("0cdd");
    var a = n("2b0e"),
      o = n("5f5b");
    n("ab8b"), n("2dd8");
    a["default"].use(o["a"]);
    var s = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("div", { staticClass: "header" }, [
              t._m(0),
              n(
                "nav",
                { staticClass: "computer navbar" },
                [
                  n("router-link", { attrs: { to: "/" } }, [t._v("首頁")]),
                  n("router-link", { attrs: { to: "/about" } }, [
                    t._v("選將名單"),
                  ]),
                  n("a", { attrs: { href: "/#news" } }, [t._v("新聞專區")]),
                  n("a", { attrs: { href: "/#district" } }, [t._v("地方選戰")]),
                  n("a", { attrs: { href: "/#video" } }, [t._v("影音專區")]),
                ],
                1
              ),
              n(
                "div",
                {
                  staticClass: "fad fa-2x fa-bars mobile",
                  on: { click: t.menu },
                },
                [
                  n(
                    "nav",
                    { staticClass: "nav" },
                    [
                      n("router-link", { attrs: { to: "/" } }, [t._v("首頁")]),
                      n("hr"),
                      n("router-link", { attrs: { to: "/about" } }, [
                        t._v("選將名單"),
                      ]),
                      n("hr"),
                      n("a", { attrs: { href: "/#news" } }, [t._v("新聞專區")]),
                      n("hr"),
                      n("a", { attrs: { href: "/#district" } }, [
                        t._v("地方選戰"),
                      ]),
                      n("hr"),
                      n("a", { attrs: { href: "/#video" } }, [
                        t._v("影音專區"),
                      ]),
                      n("hr"),
                    ],
                    1
                  ),
                ]
              ),
            ]),
            n("router-view"),
          ],
          1
        );
      },
      r = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "flex-logo logo" }, [
            a(
              "a",
              {
                attrs: { href: "https://www.ftvnews.com.tw/", target: "blank" },
              },
              [a("img", { attrs: { src: n("cf05"), alt: "民視新聞網" } })]
            ),
          ]);
        },
      ],
      i = {
        name: "App",
        components: {},
        data: function () {
          return {
            list: [
              { title: "首頁", anchor: "#voting" },
              { title: "最新新聞", anchor: "#profile" },
              { title: "影音專區", anchor: "#porcess" },
              { title: "LIVE新聞", anchor: "#news" },
            ],
          };
        },
        created: function () {
          window.addEventListener("scroll", this.handleScroll);
        },
        methods: {
          menu: function () {
            this.active.removeEventListener("click", !1);
          },
          handleScroll: function () {
            this.active = window.scrollY < 700;
          },
        },
        mounted: function () {
          this.scroll(), this.moveBar();
        },
      },
      c = i,
      p = (n("9b9a"), n("2877")),
      l = Object(p["a"])(c, s, r, !1, null, "41ac000c", null),
      u = l.exports,
      f = n("2f62");
    a["default"].use(f["a"]);
    var A = new f["a"].Store({
        state: {
          Yilan: [
            {
              name: "江聰淵",
              no: "1",
              party: "民進黨",
              photo: n("e436"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["淡江大學國際企業學系商學碩士"],
                exp: [
                  "2018年宜蘭市第18屆市長",
                  "2020蔡英文總統陳歐珀立法委員宜蘭縣競選總部總幹事",
                ],
              },
            },
            {
              name: "林姿妙",
              no: "2",
              party: "國民黨",
              photo: n("8097"),
              party_photo: n("2dff"),
              experience: {
                edu: ["佛光大學公共事務學系碩士在職專班"],
                exp: ["2014年羅東鎮第17屆鎮長", "2018年宜蘭縣第18屆縣長"],
              },
            },
            {
              name: "陳琬惠",
              no: "3",
              party: "民眾黨",
              photo: n("ca7b"),
              party_photo: n("f25e"),
              experience: {
                edu: ["國立政治大學經營管理碩士"],
                exp: [
                  "台灣公益團體自律聯盟秘書長",
                  "2020年民眾黨第10屆不分區立委候選人",
                  "2022年立法院台灣民眾黨黨團主任",
                ],
              },
            },
            {
              name: "陳秋境",
              no: "4",
              party: "無黨籍",
              photo: n("2bf1"),
              party_photo: n("0ca8"),
              experience: {
                edu: ["國立宜蘭大學"],
                exp: [
                  "1993年公務人員普通考試化學工程科（及格）",
                  "經濟部台灣自來水公司",
                ],
              },
            },
            {
              name: "朱振東",
              no: "5",
              party: "天一黨",
              photo: n("dc4b"),
              party_photo: n("3dd1"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "許鋐哲",
              no: "6",
              party: "無黨",
              photo: n("19a9"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
          ],
          Keelung: [
            {
              name: "蔡適應",
              no: "1",
              party: "民進黨",
              photo: n("e821"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["國立臺北大學都市計劃研究所博士"],
                exp: [
                  "2005年基隆市議會（第16-18屆）議員",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "謝國樑",
              no: "2",
              party: "國民黨",
              photo: n("cdc6"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "麻省理工學院科技管理學碩士",
                  "政治大學法律學碩士(在職專班)",
                ],
                exp: ["2012年第8屆立法委員", "民黨基隆市地方黨部主任委員"],
              },
            },
            {
              name: "陳薇仲",
              no: "3",
              party: "時代力量",
              photo: n("6ba3"),
              party_photo: n("af21"),
              experience: {
                edu: ["國立臺灣大學生物產業傳播暨發展學系學士"],
                exp: ["2021年時代力量第3屆決策委員", "2021年時代力量副祕書長"],
              },
            },
            {
              name: "黃希賢",
              no: "4",
              party: "無黨",
              photo: n("d5b3"),
              party_photo: n("1dde"),
              experience: {
                edu: [
                  "中國市政專科學校企業管理科",
                  "國立政治大學EMBA在職碩班全球企業經營組",
                ],
                exp: ["2021年退出國民黨", "2022年參選基隆市長"],
              },
            },
            {
              name: "曾國民",
              no: "5",
              party: "無黨",
              photo: n("fe75"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
          ],
          Taipei: [
            {
              name: "陳時中",
              no: "1",
              party: "民進黨",
              photo: n("f5f3"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["臺北醫學院牙醫學系"],
                exp: [
                  "2005年行政院衛生署副署長",
                  "2016年總統府國策顧問",
                  "2017年衛生福利部部長",
                ],
              },
            },
            {
              name: "蔣萬安",
              no: "2",
              party: "國民黨",
              photo: n("a2cd"),
              party_photo: n("2dff"),
              experience: {
                edu: ["賓夕法尼亞大學法律博士"],
                exp: [
                  "2017年中國國民黨中央委員會中央常務委員",
                  "2020年第10屆立法委員",
                  "中國國民黨立法院黨團書記長",
                ],
              },
            },
            {
              name: "黃珊珊",
              no: "3 ",
              party: "無黨",
              photo: n("8d7f"),
              party_photo: n("0ca8"),
              experience: {
                edu: ["國立臺灣大學大氣科學系轉法律系"],
                exp: [
                  "2014年台北市議會第12屆議員",
                  "2018年台北市議會第13屆議員",
                  "2019年台北市副市長",
                ],
              },
            },
            {
              name: "蘇煥智",
              no: "4",
              party: "維新黨",
              photo: n("aa45"),
              party_photo: n("e735"),
              experience: {
                edu: ["國立臺灣大學法律系畢業 ", "輔仁大學法律研究所碩士"],
                exp: [
                  "2005年臺南縣第15屆縣長",
                  "2019年臺灣維新創黨人兼第一屆召集人",
                ],
              },
            },
            {
              name: "張家豪",
              no: "5",
              party: "台灣動保黨",
              photo: n("9fdf"),
              party_photo: n("a6bf"),
              experience: {
                edu: ["台灣大學心理學系學士"],
                exp: [
                  "2017年東默農編劇有限公司 共同創辦人 ",
                  "2020年台灣動保黨 副主席",
                ],
              },
            },
            {
              name: "黃聖峰",
              no: "6",
              party: "台澎黨",
              photo: n("3193"),
              party_photo: n("4699"),
              experience: {
                edu: [
                  "英國愛丁堡大學國際法博士生",
                  "英國倫敦大學學院（UCL）國際法碩士畢",
                ],
                exp: [
                  "創立監票者聯盟",
                  "創立臺澎國際法法理建國連線",
                  "台澎國際法法理建國黨法務長",
                ],
              },
            },
            {
              name: "童文薰",
              no: "7",
              party: "無黨",
              photo: n("6bdb"),
              party_photo: n("0ca8"),
              experience: {
                edu: [
                  "國立臺灣大學法律學系學士",
                  "美國麥克喬治法學院LLM法學碩士",
                ],
                exp: ["萬國法律事務所律師", "李潮雄律師事務所律師"],
              },
            },
            {
              name: "鄭匡宇",
              no: "8",
              party: "無黨",
              photo: n("f1ee"),
              party_photo: n("1dde"),
              experience: {
                edu: ["美國加州大學河濱分校舞蹈史舞蹈理論博士"],
                exp: [
                  "2015年東吳大學華語教學副主任",
                  "2016年創立寰宇軒行股份有限公司",
                ],
              },
            },
            {
              name: "施奉先",
              no: "9",
              party: "無黨",
              photo: n("d1df"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "唐新民",
              no: "10",
              party: "無黨",
              photo: n("4a4d"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "王文娟",
              no: "9",
              party: "無黨",
              photo: n("73e4"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "謝立康",
              no: "10",
              party: "無黨",
              photo: n("cf46"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
          ],
          Newtaipei: [
            {
              name: "林佳龍",
              no: "1",
              party: "民進黨",
              photo: n("8706"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["耶魯大學人文哲學碩士、政治學碩士、政治學博士"],
                exp: [
                  "2012年第8屆立法委員",
                  "2019年交通部長",
                  "2022年無任所大使",
                ],
              },
            },
            {
              name: "侯友宜",
              no: "2",
              party: "國民黨",
              photo: n("2e80"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "中央警察大學犯罪防治研究所法學博士",
                  "賓夕法尼亞大學法學碩士、博士",
                ],
                exp: ["2014年新北市第2屆副市長", "2018年新北市第3屆市長"],
              },
            },
          ],
          Taoyuan: [
            {
              name: "鄭運鵬",
              no: "1",
              party: "民進黨",
              photo: n("0ac5"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["國立臺灣大學土木工程學系畢業"],
                exp: [
                  "2014年任民進黨文宣部主任",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "張善政",
              no: "2",
              party: "國民黨",
              photo: n("33eb"),
              party_photo: n("2dff"),
              experience: {
                edu: ["美國史丹佛大學土木與環境工程學碩士、博士"],
                exp: [
                  "2019年中華民族致公黨最高顧問",
                  "2020年中華民國總統選舉中國國民黨副總統候選人",
                ],
              },
            },
            {
              name: "賴香伶",
              no: "3",
              party: "民眾黨",
              photo: n("9d1d"),
              party_photo: n("f25e"),
              experience: {
                edu: ["輔仁大學企業管理系", "世新大學社會發展研究所"],
                exp: [
                  "2014年台北市政府勞動局局長",
                  "2020年第10屆立法委員",
                  "2020年立法院民眾黨黨團總召",
                ],
              },
            },
            {
              name: "鄭寶清",
              no: "4",
              party: "無黨",
              photo: n("798c"),
              party_photo: n("1dde"),
              experience: {
                edu: [
                  "國立中興大學法商學院公共政策研究所（今國立臺北大學公共行政暨政策系）碩士",
                  "國立中央大學企業管理系博士",
                ],
                exp: [
                  "2016年第9屆立法委員",
                  "2017年社團法人國立臺北大學公共行政暨政策系系友會常務理事",
                ],
              },
            },
          ],
          HsinchuCity: [
            {
              name: "沈慧虹",
              no: "1",
              party: "民進黨",
              photo: n("1c9f"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "淡江大學交通管理系學士",
                  "國立交通大學交通運輸研究所碩士",
                ],
                exp: [
                  "台北市政府發言人室",
                  "台北捷運公司籌備處工程員",
                  "新竹市副市長",
                ],
              },
            },
            {
              name: "林耕仁",
              no: "2",
              party: "國民黨",
              photo: n("5532"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "國立交通大學高階管理學碩士畢",
                  "中華大學科技管理研究所碩士畢",
                ],
                exp: ["新竹市第五、六、七、八、九屆市議員"],
              },
            },
            {
              name: "高虹安",
              no: "3",
              party: "民眾黨",
              photo: n("db68"),
              party_photo: n("f25e"),
              experience: {
                edu: [
                  "國立臺灣大學資訊工程系碩士",
                  "美國辛辛那提大學機械工程博士",
                ],
                exp: [
                  "2020年第10屆立法委員、第10屆立法院數位國力促進會副會長",
                  "2022年第10屆立法院資通安全與科技發展策進會會長",
                ],
              },
            },
            {
              name: "龔偉綸",
              no: "4",
              party: "無黨",
              photo: n("9e8c"),
              party_photo: n("1dde"),
              experience: {
                edu: ["國立臺北教育大學法律教育學系"],
                exp: [
                  "台灣菁英協會第六期副會長 ",
                  "青商會理事 ",
                  "大台灣隊會友",
                ],
              },
            },
            {
              name: "黃源甫",
              no: "5",
              party: "無黨",
              photo: n("d5b1"),
              party_photo: n("1dde"),
              experience: {
                edu: ["國立交通大學管理科學博士"],
                exp: [
                  "2014年新竹市水源里里長參選人",
                  "2016立委參選人",
                  "2018年新竹市市長參選人",
                ],
              },
            },
            {
              name: "李驥羣",
              no: "6",
              party: "無黨",
              photo: n("5bb0"),
              party_photo: n("1dde"),
              experience: {
                edu: ["竹東高中(肄)", "磐石夜補校"],
                exp: ["教育廳高中自修鑑定通過", "2018年新竹市市長參選人"],
              },
            },
          ],
          HsinchuCountry: [
            {
              name: "周江杰",
              no: "1",
              party: "民進黨",
              photo: n("2953"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["國立政治大學公共行政學系", "國立政治大學公共行政研究所"],
                exp: [
                  "2018年民主進步黨客家部主任",
                  "2019年民主進步黨新聞部主任、民主進步黨發言人",
                ],
              },
            },
            {
              name: "楊文科",
              no: "2",
              party: "國民黨",
              photo: n("7d43"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "美國薩基諾谷州立大學企管碩士",
                  "中華大學科技管理研究所碩士",
                ],
                exp: ["2016年第27任行政院院長", "新竹縣第18屆縣長"],
              },
            },
            {
              name: "范振揆",
              no: "3",
              party: "無黨籍",
              photo: n("4ed4"),
              party_photo: n("0ca8"),
              experience: {
                edu: ["玄奘大學法律學系"],
                exp: ["國民大會代表范揚恭辦公室主任"],
              },
            },
            {
              name: "黃秀龍",
              no: "4",
              party: "無黨籍",
              photo: n("7d43"),
              party_photo: n("0ca8"),
              experience: {
                edu: ["竹東高中"],
                exp: [
                  "欣榮企業社",
                  "兄弟企業社",
                  "國際企業社",
                  "神誠有限公司董事",
                ],
              },
            },
            {
              name: "劉復嵐",
              no: "5",
              party: "無黨籍",
              photo: n("2d13"),
              party_photo: n("0ca8"),
              experience: {
                edu: [""],
                exp: [
                  "2018年新竹縣 關西鎮 新力里長參選人",
                  "2020年立法委員參選人",
                ],
              },
            },
          ],
          Miaoli: [
            {
              name: "徐定禎",
              no: "1",
              party: "民進黨",
              photo: n("e3e8"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["東吳大學企業管理學系學士"],
                exp: ["頭份鎮第16－17屆鎮長", "頭份市第1屆市長"],
              },
            },
            {
              name: "謝福弘",
              no: "2",
              party: "國民黨",
              photo: n("e124"),
              party_photo: n("2dff"),
              experience: {
                edu: ["中國文化大學政治學系學士", "中華大學土木與資訊科學碩士"],
                exp: [
                  "中國國民黨苗栗縣黨部主委",
                  "2020年農田水利署苗栗管理處處長",
                ],
              },
            },
            {
              name: "宋國鼎",
              no: "3",
              party: "時代力量",
              photo: n("cb83"),
              party_photo: n("af21"),
              experience: {
                edu: [
                  "國立中正大學法律、勞工關係雙學士",
                  "國立中正大學法學碩士",
                ],
                exp: ["2018年苗栗縣議會第19屆縣議員"],
              },
            },
            {
              name: "鍾東錦",
              no: "4",
              party: "無黨",
              photo: n("799d"),
              party_photo: n("1dde"),
              experience: {
                edu: ["中華大學企業管理學系"],
                exp: [
                  "2014年第18屆苗栗縣議會議員",
                  "2018年第18屆苗栗縣議會副議長",
                  "2018年第19屆苗栗縣議會議長",
                ],
              },
            },
            {
              name: "吳盛聖",
              no: "5",
              party: "無黨",
              photo: n("a98d"),
              party_photo: n("1dde"),
              experience: {
                edu: ["國立勤益技術學院機械系​"],
                exp: [
                  "江蘇新雲漢光電科技有限公司(中外合資) 國有控股企業副總經理 / 集團高級副總裁",
                  "台灣明道大學副校長",
                ],
              },
            },
          ],
          Taichung: [
            {
              name: "蔡其昌",
              no: "1",
              party: "民進黨",
              photo: n("e375"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "東海大學歷史學系",
                  "東海大學歷史學碩士",
                  "國立中興大學EMBA財金組",
                  "泰國湄州大學觀光發展榮譽博士",
                ],
                exp: [
                  "2016年第9屆立法委員、立法院副院長",
                  "2020年第10屆立法委員、連任立法院副院長",
                  "2021年中華職棒會長",
                ],
              },
            },
            {
              name: "盧秀燕",
              no: "2",
              party: "國民黨",
              photo: n("0173"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "國立政治大學地政學系",
                  "淡江大學國際事務與戰略研究所碩士",
                ],
                exp: [
                  "2012年第8屆立法委員",
                  "2016年第9屆立法委員",
                  "2018年臺中市第3屆市長",
                ],
              },
            },
            {
              name: "陳美妃",
              no: "3",
              party: "無黨",
              photo: n("fbab"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
          ],
          Changhua: [
            {
              name: "黃秀芳",
              no: "1",
              party: "民進黨",
              photo: n("ebc5"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["靜宜大學外文系", "東海大學人力資源管理班結業"],
                exp: [
                  "2014年彰化縣議會第18屆議員",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "王惠美",
              no: "2",
              party: "國民黨",
              photo: n("2bac"),
              party_photo: n("2dff"),
              experience: {
                edu: ["東海大學政治學系學士", "東海大學政治學碩士"],
                exp: ["2016年第9屆立法委員", "2018年化縣第18屆縣長"],
              },
            },
            {
              name: "蕭仁正",
              no: "3",
              party: "無黨",
              photo: n("694b"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
          ],
          Nantou: [
            {
              name: "蔡培慧",
              no: "1",
              party: "民進黨",
              photo: n("0d36"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "世新大學社會發展研究所碩士",
                  "國立臺灣大學生物產業傳播暨發展研究所學系研究所博士",
                ],
                exp: [
                  "2016年第9屆不分區立法委員",
                  "2020年行政院中部聯合服務中心執行長",
                ],
              },
            },
            {
              name: "許淑華",
              no: "2",
              party: "國民黨",
              photo: n("9cb8"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "南開技術學院工業工程管理系",
                  "逢甲大學經營管理碩士（爭議）",
                ],
                exp: [
                  "2015年第8屆立法委員",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "王永慶",
              no: "3",
              party: "無黨",
              photo: n("0f28"),
              party_photo: n("1dde"),
              experience: {
                edu: ["同德高職"],
                exp: ["2014年南投縣議員參選人", "2018年南投縣議員參選人"],
              },
            },
          ],
          Yunlin: [
            {
              name: "劉建國",
              no: "1",
              party: "民進黨",
              photo: n("3274"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["南華大學旅遊管理學系暨旅遊管理碩士"],
                exp: [
                  "2015年立法院厚生會會長",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "張麗善",
              no: "2",
              party: "國民黨",
              photo: n("3234"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "國立虎尾科技大學工業管理系",
                  "國立台灣師範大學運動與休閒管理研究所教育學碩士",
                ],
                exp: ["2016年第9屆立法委員", "2018年雲林縣第18屆縣長"],
              },
            },
            {
              name: "林佳瑜",
              no: "3",
              party: "無黨",
              photo: n("7b37"),
              party_photo: n("1dde"),
              experience: {
                edu: ["中山醫學大學", "中山醫學院牙醫系"],
                exp: ["2005年雲林縣長參選人", "2018年雲林縣長參選人"],
              },
            },
          ],
          ChiayiCity: [
            {
              name: "李俊俋",
              no: "1",
              party: "民進黨",
              photo: n("51e7"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "波士頓學院政治研究所碩士",
                  "喬治華盛頓大學政治研究所博士班結業",
                ],
                exp: ["2016年第9屆立法委員", "2020年中華民國總統府副秘書長"],
              },
            },
            {
              name: "黃敏惠",
              no: "2",
              party: "國民黨",
              photo: n("0f60"),
              party_photo: n("2dff"),
              experience: {
                edu: ["國立臺灣師範大學國文學士", "國立嘉義大學管理碩士"],
                exp: [
                  "2016年中國國民黨主席（代理）",
                  "2018年嘉義市第10屆市長）",
                  "2021年中國國民黨副主席",
                ],
              },
            },
            {
              name: "黃宏成台灣阿成世界偉人財神總統",
              no: "3",
              party: "無黨",
              photo: n("4586"),
              party_photo: n("1dde"),
              experience: {
                edu: ["東吳法律系"],
                exp: [
                  "2016年第9屆立法委員參選人",
                  "2018年嘉義市長參選人",
                  "2020年第10屆立法委員參選人",
                ],
              },
            },
            {
              name: "蔡松益",
              no: "4",
              party: "無黨",
              photo: n("9ee8"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "黃紹聰",
              no: "5",
              party: "無黨",
              photo: n("8348"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "陳泰山",
              no: "6",
              party: "無黨",
              photo: n("d39a"),
              party_photo: n("1dde"),
              experience: {
                edu: [""],
                exp: [
                  "2018年嘉義市劉厝里長參選人",
                  "2020年第10屆立法委員參選人",
                ],
              },
            },
          ],
          ChiayiCountry: [
            {
              name: "翁章梁",
              no: "1",
              party: "民進黨",
              photo: n("987f"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "中原大學資訊工程學系",
                  "南華大學非營利事業管理研究所碩士",
                ],
                exp: ["行政院農業委員會副主任委員", "嘉義縣第18屆縣長"],
              },
            },
            {
              name: "王育敏",
              no: "2",
              party: "國民黨",
              photo: n("f774"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "東海大學社會工作學系社會工作學學士",
                  "東海大學社會工作學系社會工作學碩士",
                ],
                exp: ["2012年第8屆立法委員", "2016年第9屆立法委員"],
              },
            },
          ],
          Tainan: [
            {
              name: "黃偉哲",
              no: "1",
              party: "民進黨",
              photo: n("d93c"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "國立臺灣大學農業推廣系農學學士",
                  "美國耶魯大學公共衛生碩士",
                  "美國哈佛大學公共行政碩士",
                ],
                exp: ["2016年第9屆立法委員", "2018年臺南市第3屆市長"],
              },
            },
            {
              name: "謝龍介",
              no: "2",
              party: "國民黨",
              photo: n("f774"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "遠東技術學院企業管理系",
                  "國立成功大學高階管理碩士（EMBA）",
                ],
                exp: [
                  "2002年省轄市第15屆臺南市議會議員",
                  "2006年省轄市第16屆臺南市議會議員",
                ],
              },
            },
            {
              name: "許忠信",
              no: "3",
              party: "無黨",
              photo: n("c645"),
              party_photo: n("1dde"),
              experience: {
                edu: [
                  "國立臺灣大學國際關係組學士",
                  "國立政治大學法律研究所碩士",
                  "英國劍橋大學國際經貿法學博士",
                ],
                exp: [
                  "經濟部貿易調查委員會義務法律顧問",
                  "行政院新聞局法規會委員",
                ],
              },
            },
            {
              name: "林義豐",
              no: "4",
              party: "無黨",
              photo: n("afa7"),
              party_photo: n("1dde"),
              experience: {
                edu: [
                  "台南市立協進國小",
                  "美國維吉尼亞州科技管理大學企業管理碩士",
                ],
                exp: ["2020年台南市第五選區立委候選人", "2022年台南市長參選人"],
              },
            },
            {
              name: "吳炳輝",
              no: "3",
              party: "無黨",
              photo: n("c59e"),
              party_photo: n("1dde"),
              experience: {
                edu: ["東吳大學法律系", "加拿大大學企業管理碩士及博士"],
                exp: ["1990年執行律師業務", "2020年台南市第五選區立委參選人"],
              },
            },
          ],
          Kaohsiung: [
            {
              name: "陳其邁",
              no: "1",
              party: "民進黨",
              photo: n("1a89"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "中山醫學院醫學系畢業",
                  "國立臺灣大學公共衛生研究所預防醫學碩士",
                ],
                exp: [
                  "2019年第42任行政院副院長",
                  "2020年高雄市第3屆市長（補選）",
                ],
              },
            },
            {
              name: "柯志恩",
              no: "2",
              party: "國民黨",
              photo: n("6c78"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "國立政治大學教育學系教育學學士",
                  "美國密西根州立大學教育學碩士",
                  "美國南加州大學教育心理學博士",
                ],
                exp: [
                  "2018年第27屆立法院厚生會秘書長",
                  "2020年中國國民黨中央委員會副秘書長",
                ],
              },
            },
            {
              name: "鄭宇翔",
              no: "3",
              party: "無黨",
              photo: n("0dbf"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "曾尹儷",
              no: "4",
              party: "無黨",
              photo: n("2409"),
              party_photo: n("1dde"),
              experience: {
                edu: ["美國巴爾的摩大學公共管理博士"],
                exp: ["國民黨市長候選人黃俊英及楊秋興競選團隊發言人"],
              },
            },
          ],
          Pingtung: [
            {
              name: "周春米",
              no: "1",
              party: "民進黨",
              photo: n("d1b9"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["國立臺灣大學法律學系法學組畢業"],
                exp: ["2016年第9屆立法委員", "2020年第10屆立法委員"],
              },
            },
            {
              name: "蘇清泉",
              no: "2",
              party: "國民黨",
              photo: n("5486"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "中山醫學大學醫學學士",
                  "中山醫學大學醫學碩士",
                  "中山醫學大學醫學博士",
                ],
                exp: ["2012年第8屆立法委員"],
              },
            },
            {
              name: "詹智鈞",
              no: "3",
              party: "時代力量",
              photo: n("0bf5"),
              party_photo: n("af21"),
              experience: {
                edu: [
                  "國立中興大學食品科學系",
                  "高雄醫學大學學士後醫學系",
                  "國立屏東大學社會發展學系碩士班",
                ],
                exp: ["屏東地檢署榮譽法醫師", "屏基工會創會理事長"],
              },
            },
          ],
          Hualien: [
            {
              name: "KolasYotaka",
              no: "1",
              party: "民進黨",
              photo: n("3104"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["東海大學社會學系學士", "東海大學社會學研究所碩士"],
                exp: [
                  "2017年美國國務院「國際領袖計畫」訪問者",
                  "2018年行政院發言人",
                  "2020年總統府發言人",
                ],
              },
            },
            {
              name: "徐榛蔚",
              no: "2",
              party: "國民黨",
              photo: n("f774"),
              party_photo: n("2dff"),
              experience: {
                edu: ["中國文化大學音樂系"],
                exp: [
                  "2016年總統候選人朱立倫花蓮縣競選總部主委",
                  "2016年第9屆立法委員",
                  "2018年花蓮縣第18屆縣長",
                ],
              },
            },
            {
              name: "黃師鵬",
              no: "3",
              party: "無黨",
              photo: n("1721"),
              party_photo: n("1dde"),
              experience: {
                edu: [""],
                exp: [
                  "2014年花蓮縣長參選人",
                  "2016年選立法委員參選人",
                  "2018年參花蓮縣長參選人",
                ],
              },
            },
          ],
          Taitung: [
            {
              name: "劉櫂豪",
              no: "1",
              party: "民進黨",
              photo: n("694b"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["國立政治大學法律系"],
                exp: [
                  "2020年民主進步黨台東縣黨部主委",
                  "2012年第8屆立法委員",
                  "2016年第9屆立法委員",
                  "2020年第10屆立法委員",
                ],
              },
            },
            {
              name: "饒慶鈴",
              no: "2",
              party: "國民黨",
              photo: n("be7d"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "美國加州聖荷西州立大學媒體教育碩士",
                  "國立臺灣師範大學政治研究所博士",
                ],
                exp: ["2016年中國國民黨副秘書長", "2018年臺東縣第18屆縣長"],
              },
            },
            {
              name: "陳長宏",
              no: "3",
              party: "無黨",
              photo: n("624c"),
              party_photo: n("1dde"),
              experience: {
                edu: [""],
                exp: [
                  "台灣網際網路創會會長及法制委員會總召",
                  "族群聯盟執行長",
                  "全球華人牧師大會總召",
                ],
              },
            },
          ],
          Penghu: [
            {
              name: "陳光復",
              no: "1",
              party: "民進黨",
              photo: n("8a21"),
              party_photo: n("5b6d"),
              experience: {
                edu: ["喜信聖經學院"],
                exp: [
                  "2007年澎湖第一酒廠有限公司創辦人兼任董事長",
                  "2007年澎湖第一生技有限公司創辦人兼任董事長",
                  "2019年總統府國策顧問",
                ],
              },
            },
            {
              name: "賴峰偉",
              no: "2",
              party: "國民黨",
              photo: n("7dd6"),
              party_photo: n("2dff"),
              experience: {
                edu: [
                  "東海大學化學系畢業",
                  "美國密蘇里大學工業管理碩士",
                  "美國密蘇里大學工程管理博士",
                ],
                exp: ["2010年考試院考選部部長", "2018年澎湖縣第18屆縣長員"],
              },
            },
            {
              name: "葉竹林",
              no: "3",
              party: "無黨",
              photo: n("7d92"),
              party_photo: n("1dde"),
              experience: {
                edu: ["澎湖科技大學服務業經營管理研究所碩士畢業"],
                exp: ["澎湖縣縣議員", "2018年馬公市第10屆市長"],
              },
            },
          ],
          Kinmen: [
            {
              name: "李應文",
              no: "1",
              party: "無黨",
              photo: n("9e3c"),
              party_photo: n("1dde"),
              experience: {
                edu: ["國立東華大學碩士"],
                exp: [
                  "107年金門縣李氏宗親會常務理事",
                  "102-107國民黨金沙民眾服務站主任",
                  "金門縣青年創業協會理事長",
                ],
              },
            },
            {
              name: "楊鎮浯",
              no: "2",
              party: "國民黨",
              photo: n("5c46"),
              party_photo: n("2dff"),
              experience: {
                edu: ["中國文化大學經濟學系", "西敏大學企業管理碩士"],
                exp: ["2016年第9屆立法委員", "2018年金門縣第7屆縣長"],
              },
            },
            {
              name: "洪志恒",
              no: "3",
              party: "無黨",
              photo: n("1b4a"),
              party_photo: n("1dde"),
              experience: {
                edu: ["東吳大學法律系畢業"],
                exp: ["2018年金門縣長參選人", "2020年立法委員參選人"],
              },
            },
            {
              name: "朱紀瑋",
              no: "4",
              party: "無黨",
              photo: n("1b1c"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: [""] },
            },
            {
              name: "陳福海",
              no: "5",
              party: "無黨",
              photo: n("32ec"),
              party_photo: n("1dde"),
              experience: {
                edu: [
                  "國立空中大學公共行政學系",
                  "銘傳大學公共事務所學分班",
                  "華中科技大學公共管理學院碩士",
                  "華中科技大學公共管理學院博士生",
                ],
                exp: ["2008年第7屆立法委員", "2014年第6屆金門縣縣長"],
              },
            },
            {
              name: "林志錦",
              no: "6",
              party: "無黨",
              photo: n("717e"),
              party_photo: n("1dde"),
              experience: { edu: [""], exp: ["2020年立法委員參選人"] },
            },
          ],
          Lienchiang: [
            {
              name: "李問",
              no: "1",
              party: "民進黨",
              photo: n("694b"),
              party_photo: n("5b6d"),
              experience: {
                edu: [
                  "國立臺灣大學人類學系學士",
                  "美國芝加哥大學社會科學碩士學程碩士",
                ],
                exp: [
                  "民主進步黨連江縣入黨審查委員會召集人",
                  "民主進步黨連江縣黨部主委",
                ],
              },
            },
            {
              name: "曹爾元",
              no: "2",
              party: "國民黨",
              photo: n("2e83"),
              party_photo: n("2dff"),
              experience: { edu: [""], exp: ["農改場技術員迄縣府地政局長"] },
            },
            {
              name: "王忠銘",
              no: "3",
              party: "國民黨",
              photo: n("4dc1"),
              party_photo: n("2dff"),
              experience: {
                edu: ["淡江大學教育政策與領導研究所"],
                exp: ["連江縣政府局長", "連江縣政府參議", "連江縣政府主任"],
              },
            },
          ],
        },
        actions: {},
        modules: {},
      }),
      v = n("8c4f"),
      d = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          [
            n("COntentBanner"),
            n("AdditionBox"),
            n("ContentProcess"),
            n("ContentTime"),
            n("ContentProfile"),
            n("ContentNews"),
            n("ContentDistrict"),
            n("ContentVideo"),
            n("Footer"),
            n("Share"),
          ],
          1
        );
      },
      g = [],
      h = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "main" }, [
          n("h1", [t._v(t._s(t.title))]),
          t._m(0),
        ]);
      },
      m = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("a", { attrs: { href: "#" } }, [
            a("picture", [
              a("source", {
                attrs: { srcset: n("978f"), media: "(max-width: 500px)" },
              }),
              a("source", {
                attrs: { srcset: n("14ce"), media: "(max-width: 768px)" },
              }),
              a("source", {
                attrs: { srcset: n("8c7d"), media: "(max-width: 1024px)" },
              }),
              a("img", { attrs: { src: n("8355"), alt: "" } }),
            ]),
          ]);
        },
      ],
      w = {
        data: function () {
          return { title: "九合一選舉" };
        },
      },
      y = w,
      x = (n("1e9f"), Object(p["a"])(y, h, m, !1, null, "662d8772", null)),
      b = x.exports,
      C = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      _ = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "addition" }, [
            a("img", {
              staticClass: "box",
              attrs: { src: n("f9cc"), alt: "box" },
            }),
            a("p", [t._v(" 倒數"), a("i"), t._v(" 天           ")]),
          ]);
        },
      ],
      k = new Date();
    console.log(Date()),
      console.log(k.getTime()),
      console.log(k.getDay()),
      console.log(k.getMonth()),
      console.log(k.getHours()),
      console.log(k.getMinutes());
    var P = document.getElementsByTagName("i"),
      E = k.getHours();
    console.log("hour", E),
      setInterval(function () {
        var t = new Date(),
          e = t.getTime();
        t.setMonth(10),
          t.setDate(26),
          t.setHours(0),
          t.setMinutes(0),
          t.setSeconds(0);
        var n = t.getTime(),
          a = (n - e) / 1e3,
          o = parseInt(a / 60 / 60 / 24);
        P[0].textContent = o;
      }, 1);
    var z = {
        methods: {
          function: function () {
            console.log(k);
          },
        },
      },
      j = z,
      N = (n("5012"), Object(p["a"])(j, C, _, !1, null, "b4209b1a", null)),
      I = N.exports,
      O = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      D = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [
            a("img", {
              staticClass: "img",
              attrs: { src: n("7a81"), alt: "小可愛" },
            }),
            a("div", { staticClass: "section-box" }, [
              a("ul", { staticClass: "entries" }, [
                a("li", { staticClass: "entry" }, [
                  t._v("08.29 ~ 09.02 登記參選"),
                ]),
                a("li", { staticClass: "entry" }, [t._v("10.21 號次抽籤")]),
                a("li", { staticClass: "entry" }, [
                  t._v("11.11 ~ 11.25 政見發表會"),
                ]),
                a("li", { staticClass: "entry" }, [t._v("11.25 公告選舉人數")]),
                a("li", { staticClass: "entry" }, [t._v("11.26 投票日")]),
              ]),
            ]),
          ]);
        },
      ];
    $(document).ready(function () {
      var t = 1e3,
        e = 1e3;
      function n() {
        $(".entry:first-child")
          .fadeIn(t)
          .delay(e)
          .queue(function () {
            $(this).fadeOut(t).appendTo(".entries").dequeue();
          });
      }
      n(),
        setInterval(function () {
          n();
        }, t + e);
    });
    var K = {
        data: function () {
          return {
            title: "重要日程",
            list: [
              { date: "08.29 ~ 09.02登記參選", project: "登記參選" },
              { date: "10.21號次抽籤", project: "號次抽籤" },
              { date: "11.11 ~ 11.25", project: "政見發表會" },
              { date: "11.25", project: "公告選舉人數" },
              { date: "11.26", project: "投票日" },
            ],
          };
        },
        methods: {
          getLocalUrl: function () {
            var t = document.createElement("input"),
              e =
                window.location.href +
                "?utm_source=3qpage&utm_medium=copybutton";
            document.body.appendChild(t),
              (t.value = e),
              t.select(),
              document.execCommand("copy"),
              document.body.removeChild(t),
              alert("複製成功!");
          },
        },
      },
      M = K,
      V = (n("4f05"), Object(p["a"])(M, O, D, !1, null, "7283b2ee", null)),
      S = V.exports,
      T = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      Q = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", [a("img", { attrs: { src: n("11d4") } })]);
        },
      ],
      L = {},
      G = L,
      H = (n("d265"), Object(p["a"])(G, T, Q, !1, null, "3d66aa9f", null)),
      W = H.exports,
      B = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "section", attrs: { id: "video" } }, [
          n("h3", [t._v(t._s(t.title))]),
          t._m(0),
          t._m(1),
          n("h3", [t._v(t._s(t.title2))]),
          t._m(2),
          t._m(3),
        ]);
      },
      F = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "line" }, [
            a("img", { attrs: { src: n("694b"), alt: "" } }),
            a("hr"),
            a("img", { attrs: { src: n("694b"), alt: "" } }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "section-box" }, [
            n("h4", [t._v("台灣最前線")]),
            n("br"),
            n("div", { staticClass: "iframe-container" }, [
              n("iframe", {
                attrs: {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0BrUIa70CS1_PoeAghdM3K",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                },
              }),
            ]),
            n("br"),
            n("h4", [t._v("辣新聞152")]),
            n("br"),
            n("div", { staticClass: "iframe-container" }, [
              n("iframe", {
                attrs: {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO2IzwPDbwG0K8TXleBbl4oN",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                },
              }),
            ]),
            n("br"),
            n("h4", [t._v("台灣向前行")]),
            n("br"),
            n("div", { staticClass: "iframe-container" }, [
              n("iframe", {
                attrs: {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/videoseries?list=PLf2VRok0uRO0px2iZrtznovVe10LfcfJO",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                },
              }),
            ]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "line", attrs: { id: "live" } }, [
            a("img", { attrs: { src: n("694b"), alt: "" } }),
            a("hr"),
            a("img", { attrs: { src: n("694b"), alt: "" } }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "section-box" }, [
            n("div", { staticClass: "iframe-container" }, [
              n("iframe", {
                attrs: {
                  width: "560",
                  height: "315",
                  src: "https://www.youtube.com/embed/ylYJSBUgaMA",
                  title: "YouTube video player",
                  frameborder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowfullscreen: "",
                },
              }),
            ]),
          ]);
        },
      ],
      Z = {
        data: function () {
          return { title: "影音專區", title2: "直播新聞" };
        },
      },
      J = Z,
      Y = (n("9b6b"), Object(p["a"])(J, B, F, !1, null, "0eef0358", null)),
      q = Y.exports,
      U = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "section", attrs: { id: "news" } }, [
          n("h3", [t._v(t._s(t.title))]),
          n("ul", { staticClass: "desktop" }, [
            n("li", { on: { click: t.getData_ftvNews } }, [t._v("最新新聞")]),
            n("li", { on: { click: t.getData_ftvNews1 } }, [t._v("政治新聞")]),
            n("li", { on: { click: t.getData_ftvNews2 } }, [t._v("修憲公投")]),
            t._m(0),
          ]),
          n("ul", { staticClass: "mobile" }, [
            n("li", { on: { click: t.getData_ftvNews5 } }, [t._v("最新新聞")]),
            n("li", { on: { click: t.getData_ftvNews6 } }, [t._v("政治新聞")]),
            n("li", { on: { click: t.getData_ftvNews7 } }, [t._v("修憲公投")]),
            t._m(1),
          ]),
          t._m(2),
          n("div", { staticClass: "section-box" }, [
            n(
              "div",
              { staticClass: "news-layout desktop" },
              t._l(t.newsInfo, function (e, a) {
                return n("div", { key: a, staticClass: "news" }, [
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://www.ftvnews.com.tw/news/detail/" + e.ID,
                        target: "blank",
                      },
                    },
                    [
                      n("div", [
                        n("img", {
                          attrs: { src: e.Image, alt: "新聞封面照" },
                        }),
                      ]),
                      n("div", [
                        n("h2", { staticClass: "title" }, [
                          t._v(t._s(e.Title)),
                        ]),
                      ]),
                      n("div", [n("p", [t._v(t._s(e.CreateDate))])]),
                    ]
                  ),
                ]);
              }),
              0
            ),
            n(
              "div",
              { staticClass: "news-layout mobile1" },
              t._l(t.newsInfo, function (e, a) {
                return n("div", { key: a, staticClass: "news" }, [
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://www.ftvnews.com.tw/news/detail/" + e.ID,
                        target: "blank",
                      },
                    },
                    [
                      n("div", [
                        n("img", {
                          attrs: { src: e.Image, alt: "新聞封面照" },
                        }),
                      ]),
                      n("div", [
                        n("h2", { staticClass: "title" }, [
                          t._v(t._s(e.Title)),
                        ]),
                      ]),
                      n("div", [n("p", [t._v(t._s(e.CreateDate))])]),
                    ]
                  ),
                ]);
              }),
              0
            ),
            t._m(3),
          ]),
        ]);
      },
      R = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("li", [
            n("a", { attrs: { href: "#district" } }, [t._v("地方選戰")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("li", [
            n("a", { attrs: { href: "#district" } }, [t._v("地方選戰")]),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "line" }, [
            a("img", { attrs: { src: n("694b"), alt: "" } }),
            a("hr"),
            a("img", { attrs: { src: n("694b"), alt: "" } }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "btn_more" }, [
            n(
              "a",
              {
                attrs: {
                  href: "https://www.ftvnews.com.tw/tag/九合一選舉/",
                  target: "blank",
                },
              },
              [t._v("更多新聞")]
            ),
          ]);
        },
      ],
      X =
        (n("d3b7"),
        n("159b"),
        {
          data: function () {
            return { title: "最新新聞", newsInfo: [] };
          },
          methods: {
            getData_ftvNews: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉&Page=1&sp=6"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews1: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=6"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews2: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=18歲公民權&Page=1&sp=6"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews3: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=9"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews4: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=9"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews5: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=九合一選舉&Page=1&sp=4"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews6: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=政治&Page=1&sp=4"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews7: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=18歲公民權&Page=1&sp=4"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews8: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=4"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
            getData_ftvNews9: function () {
              var t = this;
              document.querySelectorAll(".news").forEach(function (t) {
                return t.remove();
              }),
                axios
                  .get(
                    "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=4"
                  )
                  .then(function (e) {
                    var n = e.data.ITEM;
                    n.forEach(function (e) {
                      t.newsInfo.push(e);
                    });
                  })
                  .catch(function (t) {
                    console.log("error" + t);
                  });
            },
          },
          mounted: function () {
            this.getData_ftvNews();
          },
        }),
      tt = X,
      et = (n("6b63"), Object(p["a"])(tt, U, R, !1, null, "905c5224", null)),
      nt = et.exports,
      at = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "section", attrs: { id: "district" } }, [
          n("h3", [t._v(t._s(t.title))]),
          n("ul", { staticClass: "desktop" }, [
            n("li", { on: { click: t.get_ftvNews } }, [t._v("台北市")]),
            n("li", { on: { click: t.get_ftvNews1 } }, [t._v("新北市")]),
            n("li", { on: { click: t.get_ftvNews2 } }, [t._v("桃園市")]),
            n("li", { on: { click: t.get_ftvNews3 } }, [t._v("新竹市")]),
            n("li", { on: { click: t.get_ftvNews4 } }, [t._v("台中市")]),
            n("li", { on: { click: t.get_ftvNews5 } }, [t._v("台南市")]),
            n("li", { on: { click: t.get_ftvNews6 } }, [t._v("高雄市")]),
          ]),
          n("ul", { staticClass: "mobile" }, [
            n("li", { on: { click: t.get_ftvNews7 } }, [t._v("台北市")]),
            n("li", { on: { click: t.get_ftvNews8 } }, [t._v("新北市")]),
            n("li", { on: { click: t.get_ftvNews9 } }, [t._v("桃園市")]),
            n("li", { on: { click: t.get_ftvNews10 } }, [t._v("新竹市")]),
            n("li", { on: { click: t.get_ftvNews11 } }, [t._v("台中市")]),
            n("li", { on: { click: t.get_ftvNews12 } }, [t._v("台南市")]),
            n("li", { on: { click: t.get_ftvNews13 } }, [t._v("高雄市")]),
          ]),
          t._m(0),
          n("div", { staticClass: "section-box" }, [
            n(
              "div",
              { staticClass: "news-layout desktop" },
              t._l(t.newsInfo, function (e, a) {
                return n("div", { key: a, staticClass: "news1" }, [
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://www.ftvnews.com.tw/news/detail/" + e.ID,
                        target: "blank",
                      },
                    },
                    [
                      n("div", [
                        n("img", {
                          attrs: { src: e.Image, alt: "新聞封面照" },
                        }),
                      ]),
                      n("div", [
                        n("h2", { staticClass: "title" }, [
                          t._v(t._s(e.Title)),
                        ]),
                      ]),
                      n("div", [n("p", [t._v(t._s(e.CreateDate))])]),
                    ]
                  ),
                ]);
              }),
              0
            ),
            n(
              "div",
              { staticClass: "news-layout mobile1" },
              t._l(t.newsInfo, function (e, a) {
                return n("div", { key: a, staticClass: "news1" }, [
                  n(
                    "a",
                    {
                      attrs: {
                        href: "https://www.ftvnews.com.tw/news/detail/" + e.ID,
                        target: "blank",
                      },
                    },
                    [
                      n("div", [
                        n("img", {
                          attrs: { src: e.Image, alt: "新聞封面照" },
                        }),
                      ]),
                      n("div", [
                        n("h2", { staticClass: "title" }, [
                          t._v(t._s(e.Title)),
                        ]),
                      ]),
                      n("div", [n("p", [t._v(t._s(e.CreateDate))])]),
                    ]
                  ),
                ]);
              }),
              0
            ),
            t._m(1),
          ]),
        ]);
      },
      ot = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a("div", { staticClass: "line" }, [
            a("img", { attrs: { src: n("694b"), alt: "" } }),
            a("hr"),
            a("img", { attrs: { src: n("694b"), alt: "" } }),
          ]);
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { staticClass: "btn_more" }, [
            n(
              "a",
              {
                attrs: {
                  href: "https://www.ftvnews.com.tw/tag/六都選戰/",
                  target: "blank",
                },
              },
              [t._v("更多新聞")]
            ),
          ]);
        },
      ],
      st = {
        data: function () {
          return {
            title: "地方選戰",
            items: [{ message: "Foo" }, { message: "Bar" }],
            district: "",
            newsInfo: [],
          };
        },
        methods: {
          get_ftvNews: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews1: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews2: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews3: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews4: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews5: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews6: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=6"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews7: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台北市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews8: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新北市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews9: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=桃園市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews10: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=新竹市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews11: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台中市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews12: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=台南市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          get_ftvNews13: function () {
            var t = this;
            document.querySelectorAll(".news1").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://ftvnews-api2.azurewebsites.net/API/FtvGetNewsWeb.aspx?Cate=高雄市選戰&Page=1&sp=4"
                )
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
        },
        mounted: function () {
          this.get_ftvNews();
        },
      },
      rt = st,
      it = (n("4d37"), Object(p["a"])(rt, at, ot, !1, null, "74b05a06", null)),
      ct = it.exports,
      pt = function () {
        var t = this,
          e = t.$createElement;
        t._self._c;
        return t._m(0);
      },
      lt = [
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", { attrs: { id: "footer" } }, [
            n("footer", [t._v("Copyright © 2022 民視新聞網路部 社群中心")]),
          ]);
        },
      ],
      ut = {},
      ft = ut,
      At = (n("8d57"), Object(p["a"])(ft, pt, lt, !1, null, "77f43e27", null)),
      vt = At.exports,
      dt = function () {
        var t = this,
          e = t.$createElement,
          a = t._self._c || e;
        return a("div", [
          a(
            "div",
            { staticClass: "layout_addition", on: { scroll: t.scroll } },
            [
              a("div", { staticClass: "layout_grid" }, [
                a(
                  "div",
                  {
                    staticClass: "icon",
                    class: { fixed: t.active },
                    attrs: { id: "icon" },
                  },
                  [
                    t._m(0),
                    a("br"),
                    t._m(1),
                    a("br"),
                    a(
                      "a",
                      {
                        staticClass: "fb-xfbml-parse-ignore",
                        attrs: { target: "_blank" },
                        on: { click: t.getLocalUrl },
                      },
                      [
                        a("img", {
                          attrs: {
                            src: n("75e1"),
                            alt: "share",
                            width: "60px",
                          },
                        }),
                      ]
                    ),
                    a("br"),
                  ]
                ),
              ]),
              t.scrollY > 100
                ? a("div", [
                    a("i", {
                      staticClass: "fa-solid fa-2x fa-angle-up",
                      attrs: { id: "toTop" },
                      on: { click: t.scrollTop },
                    }),
                  ])
                : t._e(),
            ]
          ),
        ]);
      },
      gt = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "a",
            {
              attrs: {
                href: "https://social-plugins.line.me/lineit/share?url=https://www.ftvnews.com.tw/topics/election2022",
                target: "_blank",
              },
            },
            [
              a(
                "span",
                {
                  attrs: {
                    id: "social_line",
                    "data-href":
                      "https://www.ftvnews.com.tw/topics/election2022/",
                  },
                },
                [
                  a("img", {
                    attrs: { src: n("aa06"), alt: "line", width: "60px" },
                  }),
                ]
              ),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "a",
            {
              staticClass: "fb-xfbml-parse-ignore",
              attrs: {
                target: "_blank",
                href: "https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.ftvnews.com.tw%2Ftopics%2Felection2022%2F&src=sdkpreparse",
              },
            },
            [
              a("img", {
                attrs: { src: n("e219"), alt: "facebook", width: "60px" },
              }),
            ]
          );
        },
      ];
    console.log();
    var ht = {
        data: function () {
          return { scrollY: "" };
        },
        methods: {
          handleScroll: function () {
            this.active = window.scrollY > 800;
          },
          getLocalUrl: function () {
            var t = document.createElement("input"),
              e = window.location.href + "?utm_medium=copybutton";
            document.body.appendChild(t),
              (t.value = e),
              t.select(),
              document.execCommand("copy"),
              document.body.removeChild(t),
              alert("網址複製成功!");
          },
          linkToHome: function () {
            window.open("https://www.ftvnews.com.tw/", "_blank");
          },
          scrollTop: function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
          },
          scroll: function () {
            this.scrollY = window.scrollY;
          },
        },
        created: function () {
          window.addEventListener("scroll", this.handleScroll),
            window.addEventListener("scroll", this.scroll);
        },
      },
      mt = ht,
      wt = (n("dd4b"), Object(p["a"])(mt, dt, gt, !1, null, "0ca88420", null)),
      yt = wt.exports,
      xt = {
        name: "App",
        components: {
          COntentBanner: b,
          AdditionBox: I,
          ContentProcess: S,
          ContentTime: W,
          ContentNews: nt,
          ContentDistrict: ct,
          ContentVideo: q,
          Footer: vt,
          Share: yt,
        },
      },
      bt = xt,
      Ct =
        (n("0471"), n("820d"), Object(p["a"])(bt, d, g, !1, null, null, null)),
      _t = Ct.exports,
      kt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("COntentBanner"),
            n("AdditionBox"),
            n("ContentProfile"),
            n("ContentPm"),
            n("Footer"),
            n("Share"),
          ],
          1
        );
      },
      Pt = [],
      Et = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n("div", { staticClass: "aaa", attrs: { id: "profile" } }, [
          n("h3", [t._v(t._s(t.title))]),
          n(
            "div",
            { staticClass: "section-box" },
            [
              n("b-tabs", { attrs: { "content-class": "mt-3", fill: "" } }, [
                n(
                  "div",
                  {},
                  [
                    n(
                      "b-tab",
                      { attrs: { title: "北部" } },
                      [
                        n(
                          "b-tabs",
                          { attrs: { "content-class": "mt-3", fill: "" } },
                          [
                            n(
                              "b-tab",
                              { attrs: { title: "基隆市" } },
                              t._l(t.getProfile1, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile1[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile1[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile1[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile1[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "台北市" } },
                              t._l(t.getProfile2, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile2[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile2[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile2[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile2[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "新北市" } },
                              t._l(t.getProfile3, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile3[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile3[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile3[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile3[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "桃園市" } },
                              t._l(t.getProfile4, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile4[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile4[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          n(
                                            "div",
                                            { staticClass: "emil" },
                                            t._l(
                                              t.getProfile4[a].experience.edu,
                                              function (e, a) {
                                                return n(
                                                  "p",
                                                  {
                                                    key: a,
                                                    staticClass:
                                                      "edu_content ellipsis2",
                                                  },
                                                  [t._v(" " + t._s(e) + " ")]
                                                );
                                              }
                                            ),
                                            0
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile4[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "新竹縣" } },
                              t._l(t.getProfile6, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile6[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile6[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile6[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile6[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "新竹市" } },
                              t._l(t.getProfile5, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile5[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile5[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile5[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile5[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "宜蘭縣" } },
                              t._l(t.getProfile, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "b-tab",
                      { attrs: { title: "中部" } },
                      [
                        n(
                          "b-tabs",
                          { attrs: { "content-class": "mt-3", fill: "" } },
                          [
                            n(
                              "b-tab",
                              { attrs: { title: "苗栗縣" } },
                              t._l(t.getProfile7, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile7[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile7[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile7[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile7[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "台中市" } },
                              t._l(t.getProfile8, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile8[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile8[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile8[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile8[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "彰化縣" } },
                              t._l(t.getProfile9, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile9[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile9[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile9[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile9[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "南投縣" } },
                              t._l(t.getProfile10, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile10[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile10[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile10[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile10[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "雲林縣" } },
                              t._l(t.getProfile11, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile11[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile11[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile11[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile11[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "b-tab",
                      { attrs: { title: "南部" } },
                      [
                        n(
                          "b-tabs",
                          { attrs: { "content-class": "mt-3", fill: "" } },
                          [
                            n(
                              "b-tab",
                              { attrs: { title: "嘉義市" } },
                              t._l(t.getProfile12, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile12[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile12[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile12[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile12[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "嘉義縣" } },
                              t._l(t.getProfile13, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile13[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile13[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile13[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile13[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "台南市" } },
                              t._l(t.getProfile14, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile14[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile14[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile14[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile14[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "高雄市" } },
                              t._l(t.getProfile15, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile15[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile15[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile15[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile15[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "屏東縣" } },
                              t._l(t.getProfile16, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile16[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile16[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile16[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile16[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "b-tab",
                      { attrs: { title: "東部" } },
                      [
                        n(
                          "b-tabs",
                          { attrs: { "content-class": "mt-3", fill: "" } },
                          [
                            n(
                              "b-tab",
                              { attrs: { title: "花蓮縣" } },
                              t._l(t.getProfile17, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile17[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile17[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile17[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile17[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "台東縣" } },
                              t._l(t.getProfile18, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile18[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile18[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile18[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile18[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    n(
                      "b-tab",
                      { attrs: { title: "離島" } },
                      [
                        n(
                          "b-tabs",
                          { attrs: { "content-class": "mt-3", fill: "" } },
                          [
                            n(
                              "b-tab",
                              { attrs: { title: "澎湖縣" } },
                              t._l(t.getProfile19, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile19[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile19[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile19[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile19[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "金門縣" } },
                              t._l(t.getProfile20, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile20[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile20[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile20[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile20[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                            n(
                              "b-tab",
                              { attrs: { title: "連江縣" } },
                              t._l(t.getProfile21, function (e, a) {
                                return n(
                                  "div",
                                  { key: a, staticClass: "layout" },
                                  [
                                    n("div", { staticClass: "layout_card" }, [
                                      n("img", {
                                        staticClass: "person_img",
                                        attrs: {
                                          src: t.getProfile21[a].photo,
                                          alt: "personal",
                                          loading: "lazy",
                                        },
                                      }),
                                      n("img", {
                                        staticClass: "party_img",
                                        attrs: {
                                          src: t.getProfile21[a].party_photo,
                                          alt: "party",
                                          loading: "lazy",
                                        },
                                      }),
                                      n(
                                        "div",
                                        { staticClass: "text" },
                                        [
                                          n("h4", [t._v(t._s(e.name))]),
                                          n("h4", [t._v(t._s(e.party))]),
                                          n("p", { staticClass: "edu_title" }, [
                                            t._v("最高學歷"),
                                          ]),
                                          t._l(
                                            t.getProfile21[a].experience.edu,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "edu_content",
                                                },
                                                [t._v(" " + t._s(e) + " ")]
                                              );
                                            }
                                          ),
                                          n("p", { staticClass: "exp_title" }, [
                                            t._v("經歷"),
                                          ]),
                                          t._l(
                                            t.getProfile21[a].experience.exp,
                                            function (e, a) {
                                              return n(
                                                "p",
                                                {
                                                  key: a,
                                                  staticClass: "exp_content",
                                                },
                                                [t._v(" " + t._s(e))]
                                              );
                                            }
                                          ),
                                        ],
                                        2
                                      ),
                                    ]),
                                  ]
                                );
                              }),
                              0
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            1
          ),
        ]);
      },
      zt = [],
      jt = {
        data: function () {
          return { title: "縣市長候選人" };
        },
        computed: {
          getProfile: function () {
            return this.$store.state.Yilan;
          },
          getProfile1: function () {
            return this.$store.state.Keelung;
          },
          getProfile2: function () {
            return this.$store.state.Taipei;
          },
          getProfile3: function () {
            return this.$store.state.Newtaipei;
          },
          getProfile4: function () {
            return this.$store.state.Taoyuan;
          },
          getProfile6: function () {
            return this.$store.state.HsinchuCountry;
          },
          getProfile5: function () {
            return this.$store.state.HsinchuCity;
          },
          getProfile7: function () {
            return this.$store.state.Miaoli;
          },
          getProfile8: function () {
            return this.$store.state.Taichung;
          },
          getProfile9: function () {
            return this.$store.state.Changhua;
          },
          getProfile10: function () {
            return this.$store.state.Nantou;
          },
          getProfile11: function () {
            return this.$store.state.Yunlin;
          },
          getProfile12: function () {
            return this.$store.state.ChiayiCity;
          },
          getProfile13: function () {
            return this.$store.state.ChiayiCountry;
          },
          getProfile14: function () {
            return this.$store.state.Tainan;
          },
          getProfile15: function () {
            return this.$store.state.Kaohsiung;
          },
          getProfile16: function () {
            return this.$store.state.Pingtung;
          },
          getProfile17: function () {
            return this.$store.state.Hualien;
          },
          getProfile18: function () {
            return this.$store.state.Taitung;
          },
          getProfile19: function () {
            return this.$store.state.Penghu;
          },
          getProfile20: function () {
            return this.$store.state.Kinmen;
          },
          getProfile21: function () {
            return this.$store.state.Lienchiang;
          },
        },
      },
      Nt = jt,
      It = (n("f49c"), Object(p["a"])(Nt, Et, zt, !1, null, "6829ed77", null)),
      Ot = It.exports,
      Dt = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          { staticClass: "section" },
          [
            n("h3", [t._v(t._s(t.title))]),
            n(
              "b-tabs",
              {
                staticClass: "desktop",
                attrs: { "content-class": "mt-3", fill: "" },
              },
              [
                n(
                  "ul",
                  { staticClass: "desktop" },
                  [
                    n("b-tab", { attrs: { title: "北部" } }, [
                      n("li", { on: { click: t.getData_ftvNews } }, [
                        t._v("宜蘭市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews1 } }, [
                        t._v("基隆市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews2 } }, [
                        t._v("台北市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews3 } }, [
                        t._v("新北市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews4 } }, [
                        t._v("桃園市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews5 } }, [
                        t._v("新竹市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews6 } }, [
                        t._v("新竹縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "中部" } }, [
                      n("li", { on: { click: t.getData_ftvNews7 } }, [
                        t._v("苗栗縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews8 } }, [
                        t._v("台中市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews9 } }, [
                        t._v("彰化縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews10 } }, [
                        t._v("南投縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews11 } }, [
                        t._v("雲林縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "南部" } }, [
                      n("li", { on: { click: t.getData_ftvNews12 } }, [
                        t._v("嘉義市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews13 } }, [
                        t._v("嘉義縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews14 } }, [
                        t._v("台南市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews15 } }, [
                        t._v("高雄市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews16 } }, [
                        t._v("屏東縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "東部" } }, [
                      n("li", { on: { click: t.getData_ftvNews17 } }, [
                        t._v("花蓮縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews18 } }, [
                        t._v("台東縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "離島" } }, [
                      n("li", { on: { click: t.getData_ftvNews19 } }, [
                        t._v("澎湖縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews20 } }, [
                        t._v("金門縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews21 } }, [
                        t._v("連江縣"),
                      ]),
                    ]),
                  ],
                  1
                ),
              ]
            ),
            n(
              "b-tabs",
              {
                staticClass: "mobile",
                attrs: { "content-class": "mt-3", fill: "" },
              },
              [
                n(
                  "ul",
                  { staticClass: "mobile" },
                  [
                    n("b-tab", { attrs: { title: "北部" } }, [
                      n("li", { on: { click: t.getData_ftvNews } }, [
                        t._v("宜蘭市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews1 } }, [
                        t._v("基隆市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews2 } }, [
                        t._v("台北市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews3 } }, [
                        t._v("新北市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews4 } }, [
                        t._v("桃園市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews5 } }, [
                        t._v("新竹市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews6 } }, [
                        t._v("新竹縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "中部" } }, [
                      n("li", { on: { click: t.getData_ftvNews7 } }, [
                        t._v("苗栗縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews8 } }, [
                        t._v("台中市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews9 } }, [
                        t._v("彰化縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews10 } }, [
                        t._v("南投縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews11 } }, [
                        t._v("雲林縣"),
                      ]),
                    ]),
                    n("b-tab", { attrs: { title: "南部" } }, [
                      n("li", { on: { click: t.getData_ftvNews12 } }, [
                        t._v("嘉義市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews13 } }, [
                        t._v("嘉義縣"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews14 } }, [
                        t._v("台南市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews15 } }, [
                        t._v("高雄市"),
                      ]),
                      n("li", { on: { click: t.getData_ftvNews16 } }, [
                        t._v("屏東縣"),
                      ]),
                    ]),
                    n(
                      "b-tab",
                      { staticClass: "lesscity", attrs: { title: "東部" } },
                      [
                        n("li", { on: { click: t.getData_ftvNews17 } }, [
                          t._v("花蓮縣"),
                        ]),
                        n("li", { on: { click: t.getData_ftvNews18 } }, [
                          t._v("台東縣"),
                        ]),
                      ]
                    ),
                    n(
                      "b-tab",
                      { staticClass: "lesscity", attrs: { title: "離島" } },
                      [
                        n("li", { on: { click: t.getData_ftvNews19 } }, [
                          t._v("澎湖縣"),
                        ]),
                        n("li", { on: { click: t.getData_ftvNews20 } }, [
                          t._v("金門縣"),
                        ]),
                        n("li", { on: { click: t.getData_ftvNews21 } }, [
                          t._v("連江縣"),
                        ]),
                      ]
                    ),
                  ],
                  1
                ),
              ]
            ),
            n("div", { staticClass: "section-box" }, [
              n(
                "div",
                { staticClass: "news-layout desktop" },
                t._l(t.newsInfo, function (e, a) {
                  return n("div", { key: a, staticClass: "news" }, [
                    n("div", { staticClass: "content-layout" }, [
                      n("img", {
                        attrs: {
                          src:
                            " https://www.ftvnews.com.tw/topics/test/image/" +
                            e.party +
                            ".jpg",
                          alt: "新聞封面照",
                        },
                      }),
                      n("div", { staticClass: "porfile" }, [
                        n("h2", { staticClass: "name" }, [t._v(t._s(e.name))]),
                        n("p", { staticClass: "party" }, [t._v(t._s(e.party))]),
                        n("p", { staticClass: "party" }, [t._v(t._s(e.zone))]),
                      ]),
                    ]),
                  ]);
                }),
                0
              ),
              n(
                "div",
                { staticClass: "news-layout mobile1" },
                t._l(t.newsInfo, function (e, a) {
                  return n("div", { key: a, staticClass: "news" }, [
                    n("div", { staticClass: "content-layout" }, [
                      n("img", {
                        attrs: {
                          src:
                            " https://www.ftvnews.com.tw/topics/test/image/" +
                            e.party +
                            ".jpg",
                          alt: "新聞封面照",
                        },
                      }),
                      n("div", { staticClass: "porfile" }, [
                        n("h2", { staticClass: "name" }, [t._v(t._s(e.name))]),
                        n("p", { staticClass: "party" }, [t._v(t._s(e.party))]),
                        n("p", { staticClass: "party" }, [t._v(t._s(e.zone))]),
                      ]),
                    ]),
                  ]);
                }),
                0
              ),
            ]),
          ],
          1
        );
      },
      Kt = [],
      Mt = {
        data: function () {
          return { title: "縣市議員候選人", newsInfo: [] };
        },
        methods: {
          getData_ftvNews: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Yilan.json")
                .then(function (e) {
                  var n = e.data.ITEM;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  }),
                    console.log(t.newsInfo[1].zone);
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews1: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Keelung.json")
                .then(function (e) {
                  var n = e.data.Keelung;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews2: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Taipei.json")
                .then(function (e) {
                  var n = e.data.Taipei;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews3: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Newtaipei.json")
                .then(function (e) {
                  var n = e.data.Newtaipei;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews4: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Taoyuan.json")
                .then(function (e) {
                  var n = e.data.Taoyuan;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews6: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://www.ftvnews.com.tw/topics/test/HsinchuCountry.json"
                )
                .then(function (e) {
                  var n = e.data.HsinchuCountry;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews5: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Hsinchucity.json")
                .then(function (e) {
                  var n = e.data.Hsinchucity;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews7: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Miaoli.json")
                .then(function (e) {
                  var n = e.data.Miaoli;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews8: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Taichung.json")
                .then(function (e) {
                  var n = e.data.Taichung;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews9: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Changhua.json")
                .then(function (e) {
                  var n = e.data.Changhua;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews10: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Nantou.json")
                .then(function (e) {
                  var n = e.data.Nantou;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews11: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Yunlin.json")
                .then(function (e) {
                  var n = e.data.Yunlin;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews12: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Chiayicity.json")
                .then(function (e) {
                  var n = e.data.Chiayicity;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews13: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get(
                  "https://www.ftvnews.com.tw/topics/test/ChiayiCountry.json"
                )
                .then(function (e) {
                  var n = e.data.ChiayiCountry;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews14: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Tainan.json")
                .then(function (e) {
                  var n = e.data.Tainan;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews15: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Kao.json")
                .then(function (e) {
                  var n = e.data.Kao;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews16: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Pingtung.json")
                .then(function (e) {
                  var n = e.data.Pingtung;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews17: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Hualien.json")
                .then(function (e) {
                  var n = e.data.Hualien;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews18: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Tai.json")
                .then(function (e) {
                  var n = e.data.Tai;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews19: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Penghu.json")
                .then(function (e) {
                  var n = e.data.Penghu;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews20: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Kinmen.json")
                .then(function (e) {
                  var n = e.data.Kinmen;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
          getData_ftvNews21: function () {
            var t = this;
            document.querySelectorAll(".news").forEach(function (t) {
              return t.remove();
            }),
              axios
                .get("https://www.ftvnews.com.tw/topics/test/Lienchiang.json")
                .then(function (e) {
                  var n = e.data.Lienchiang;
                  n.forEach(function (e) {
                    t.newsInfo.push(e);
                  });
                })
                .catch(function (t) {
                  console.log("error" + t);
                });
          },
        },
        mounted: function () {
          this.getData_ftvNews();
        },
      },
      Vt = Mt,
      St = (n("b82b"), Object(p["a"])(Vt, Dt, Kt, !1, null, "752ef85d", null)),
      Tt = St.exports,
      Qt = {
        name: "App",
        components: {
          COntentBanner: b,
          AdditionBox: I,
          ContentProfile: Ot,
          ContentPm: Tt,
          Footer: vt,
          Share: yt,
        },
      },
      Lt = Qt,
      Gt = (n("dded"), Object(p["a"])(Lt, kt, Pt, !1, null, null, null)),
      Ht = Gt.exports;
    a["default"].use(v["a"]);
    var Wt = [
        { path: "/", name: "home", component: _t },
        { path: "/about", name: "about", component: Ht },
      ],
      Bt = new v["a"]({ base: "", routes: Wt }),
      Ft = Bt;
    (a["default"].config.productionTip = !1),
      new a["default"]({
        store: A,
        router: Ft,
        render: function (t) {
          return t(u);
        },
      }).$mount("#app");
  },
  "5b32": function (t, e, n) {},
  "5b6d": function (t, e, n) {
    t.exports = n.p + "img/民進黨.34dc5637.jpg";
  },
  "5bb0": function (t, e, n) {
    t.exports = n.p + "img/李驥羣.11fd1e88.png";
  },
  "5c46": function (t, e, n) {
    t.exports = n.p + "img/楊鎮浯.9946a79f.jpg";
  },
  "624c": function (t, e, n) {
    t.exports = n.p + "img/陳長宏.5999c570.jpg";
  },
  "691c": function (t, e, n) {},
  "694b": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "6b63": function (t, e, n) {
    "use strict";
    n("8927");
  },
  "6ba3": function (t, e, n) {
    t.exports = n.p + "img/陳薇仲.2fe4e327.jpg";
  },
  "6bdb": function (t, e, n) {
    t.exports = n.p + "img/童文薰.3c311504.jpg";
  },
  "6c78": function (t, e, n) {
    t.exports = n.p + "img/柯志恩.f42de0f8.jpg";
  },
  "717e": function (t, e, n) {
    t.exports = n.p + "img/林志錦.d0ced5e0.jpg";
  },
  "73e4": function (t, e, n) {
    t.exports = n.p + "img/王文娟.fe99da93.jpg";
  },
  "75e1": function (t, e, n) {
    t.exports = n.p + "img/share.185c18e7.png";
  },
  "798c": function (t, e, n) {
    t.exports = n.p + "img/鄭寶清.1c242011.jpg";
  },
  "799d": function (t, e, n) {
    t.exports = n.p + "img/鍾東錦.1a4978c9.jpg";
  },
  "7a81": function (t, e) {
    t.exports =
      "data:image/png;base64,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";
  },
  "7b37": function (t, e, n) {
    t.exports = n.p + "img/林佳瑜.d4626027.jpg";
  },
  "7d43": function (t, e, n) {
    t.exports = n.p + "img/楊文科.1d0d614d.jpg";
  },
  "7d92": function (t, e, n) {
    t.exports = n.p + "img/葉竹林.73d00286.jpg";
  },
  "7dd6": function (t, e, n) {
    t.exports = n.p + "img/賴峰偉.8b9a94f0.jpg";
  },
  8097: function (t, e, n) {
    t.exports = n.p + "img/林姿妙.ddda30db.jpg";
  },
  "820d": function (t, e, n) {
    "use strict";
    n("e31a");
  },
  8348: function (t, e, n) {
    t.exports = n.p + "img/黃紹聰.48bc539d.jpg";
  },
  8355: function (t, e, n) {
    t.exports = n.p + "img/desktop.b14e0eeb.png";
  },
  8706: function (t, e, n) {
    t.exports = n.p + "img/林佳龍.a7e2f2d2.jpg";
  },
  8927: function (t, e, n) {},
  "8a21": function (t, e, n) {
    t.exports = n.p + "img/陳光復.aba8aa4b.jpg";
  },
  "8c7d": function (t, e, n) {
    t.exports = n.p + "img/tablet_vertical.af837473.jpg";
  },
  "8d57": function (t, e, n) {
    "use strict";
    n("1f30");
  },
  "8d7f": function (t, e, n) {
    t.exports = n.p + "img/黃珊珊.5f37eb8e.jpg";
  },
  9010: function (t, e, n) {},
  9082: function (t, e, n) {},
  "978f": function (t, e, n) {
    t.exports = n.p + "img/mobile.e945f308.png";
  },
  "987f": function (t, e, n) {
    t.exports = n.p + "img/翁章梁.7b586e10.jpg";
  },
  "9b6b": function (t, e, n) {
    "use strict";
    n("0cf6");
  },
  "9b9a": function (t, e, n) {
    "use strict";
    n("9010");
  },
  "9cb8": function (t, e, n) {
    t.exports = n.p + "img/許淑華.27d33173.jpg";
  },
  "9d1d": function (t, e, n) {
    t.exports = n.p + "img/賴香伶.2d599961.jpg";
  },
  "9e3c": function (t, e, n) {
    t.exports = n.p + "img/李應文.a7ffa9e6.jpg";
  },
  "9e8c": function (t, e, n) {
    t.exports = n.p + "img/龔偉綸.d43ae6dd.jpg";
  },
  "9ee8": function (t, e, n) {
    t.exports = n.p + "img/蔡松益.1415c7a7.jpg";
  },
  "9fdf": function (t, e, n) {
    t.exports = n.p + "img/張家豪.a8635c4b.jpg";
  },
  a2cd: function (t, e, n) {
    t.exports = n.p + "img/蔣萬安.92e0cfa0.jpg";
  },
  a6bf: function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  a98d: function (t, e, n) {
    t.exports = n.p + "img/吳盛聖.003a6c9c.jpg";
  },
  aa06: function (t, e, n) {
    t.exports = n.p + "img/line.f24ac597.png";
  },
  aa45: function (t, e, n) {
    t.exports = n.p + "img/蘇煥智.50661540.jpg";
  },
  acb5: function (t, e, n) {},
  af21: function (t, e) {
    t.exports =
      "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAADAFBMVEX5vgH2vAH1uwD3vQH5vwT4vgH4vQH/xwH/ywH/ygH/zAH/xgD4uQD6uwD/yAH/wwCObAFbRgBmTgFkTAFmTgOFbSL95p/34Zn03ZZ1XhRhSgBlTQFeSAGBYgH8wAD3vAA7LQEAAAEAAAQAAACVmab////9//9ESFcmHQH+wQFJOAEJBwAFBAEGBgY6Ojf+/fv8+/n///76+vgGBQE2KQH9wQBHNgEDAgEBAQAEBAS3t7f7+/v+/v7+/v1DQ0MzJwFFRUX8/PxnZ2cCAQHGxsb6+vqtra0ICApUVFT09PQYGBj/xwI+LwDV1dVJSUkwJQBuXSkzN0E+Pj1MTEyMjY7p6el6enqDg4SLi4uSkpKYmJihoaCoqKhAQks/Mwz6vwH87b3n3Lj3uwD25rb88c747cr///357sv56rr5+fns7Ozl5eXi4uLb29vR0dGvr6+IiIh+fn51dXVubm5dXV1WVlb/xAEhJC8jIyIREREMDAyWlpa8vLwsLCxvb2+cnJzAwMBkZGQmJiZsbGzMzMzt4r7ztwDO0NhNQRrv7++xsbEnHgC1tbRXV1fJycmPj480NDRhYWGmpaRLOQH/yQM5KwAqLTiLjpf2uwCOfkxKS1AtIwH/wgGynlwzLyS/uKJZUz+blIAMCQEfGQUbFQEeFwERDQH7wAHwtwD1vAbyuQHvtgDvtwH7vwH/xQH0ugHttQHQnwGfegGmfwHFlgH/zQH/1wETDwH/1QHbpwEZEwEpIAFyVwHPngH/0AF9XwHUoQEWEQEkHAF6XQFRPgFYQwFiSwFOPAGQbwEPCwGYdAGbdgHmrwHXpAHZpgHfqgHWowEiGgGGZgFVQQFTQAHkrgH/yQGeeQHMnAGEZQGpgQFCMgHrswFGNQH/zwH/2AGKaQGuhQGyiAF2WgElHAF+YQHLmwFZRAGiewEgGQGsgwG+kQHClAGkfQG6jgFpUAHHmAH/0wFvVQG0iQGSbwGVcgHosQGIaAHMmwFrUgG3iwHgqwHirQG8jwHdqAHqswGYtiGLAAAI80lEQVR4AezNtQGAQBTA0HPB3fdfE9cah/+6VEEAAAAAeCBMtigb8T4xOoCQSquFNkxrZHepnCMerucH4SLy4yTtZEmWF2VZNbTW854jTxQF8B/WfIFVcvaOO+OZrnRV1PHYtm3b5nqfdivO/1N7Yn4/5fv+w8ORj08/WdJjxWfKIJK3jExY5RtZ2U8ejrzMseTmJaPBRvkyBYVFNmh5ecWWklIVSJmlXE+GwU4G54LIAU2+Lrc4lSMMLnJzzg3ySOMvISa8kYb4yA+mq0RyrBqLJ4BgxHBTKIzYm5pVCVJRibRURXpLUDWSqVEwu/5/W1tXX+9wOaobGoLVjbFRb2puaW1r7+j0d7R0dStYJz2veiktgssISkvffz0PRh71D2QUuCMxIuGx+GIxfEUZg/3/qEGEiDIxwEgIhk/wfBrqV9ISGk7vKzelRSIjCpCe/lEaC41PTE5NT5GIGDOts3PzC57FpeoWIjXI/8u1K6vhtfVAABtkcB9tIpVZKlKCfHwaWyc6toiEoLFVBJJLs0EVIld8sWmaDH7yyYZsQ9Pj0bATQ1TtXQw2cktjF2ackOweiXy1yCYZgox9sJjBTBxQBBlShjBUR0d9Hlqiq9BKXHCRMfjxH0WIiUMKCfLCjDaEMazZZcs4L6KjY0UtYVikKgrxLZgAkwSqm8gnV+YYnZw+UYPkwZw8PGsSc8BWgw5g9ZzixnTgYlnNyahhvumSpqelsXpl9+9c06Sd5OKXK1NDSeljJQjWm27cm023CK83z9/e3cwGPeMkCdoArM5sJS2xom3mcmq3EXrYs+Y59Dd2TNHuJpHvDnqxmjP+aQ5Wpz3um0MdDPsdi1t7Hecb8/dEu3LNmKoKiS+4Pzjc2XVIg0FruZ5pbNslmtgDmLJq5eu37x17VXMb0WXIgLWD3aYJ+10gtmSUIT9sVXuX6yiXMcs1yOgAtHJTvpGnpEx99PNX5lxjy29YkyX3n3bMgqlxdY3jkSFN2pkU6ChW/lcJZRQdPdLxYYaPkG+RL8Ho0c50rxUppwvNoVDBfUtbXFLs4L4Ul8Xvm+1et1w3fvHX/s/rz+R7+D65foX7HzC6uFc/+enPfv4LT139H6Whsfjvmyccp2f3Nn3j++b166bm5uamJv1Kk/4m+EjC38bghsu4XIyd7O5eb4v+7ZXlculVuSSVeyVJ8hZ4CQXeAokE6E8vRekBacibMfsVXhB4P+NSiZXv1TIoYrDa3OyjmsjFcSxN03au2fdtM0feiOm+Jl9zGvJmSMPaGmhrC7QHQ+3hRlvEbOFoIdDYmNvR2dnFdXvqe/y05Fek3j5PQ30/b1UUWWYKBxoG0zSEq1n5L/cRYx4CYbhvpBoYeBMNWFSxAhiVYkB/HEjw7Nj4REd/PfDR5MTU1JSvQG2AIyfXZrPl5jgwbTciws9gtht5c0XTVVWemoYZsWW+EaX9GtFM9gNRk5YHnRIQnCXOBVPTNGJvsm25tuwcD4oYQzVZhG0GNolaApbpFZUW2oDvVtfygTe98fUNybq5lT+zDQzO7OyEgV1LQU1VY2GaRnykUJQhkbwdZBWBUNKIbM20B3y+v28DDgJLh21jBRbzqtwJBNYE3g3nLv92ZHb28zSzsyNHVtaQSPY6co5SS8cnwJfj1pV6VIJQ5QSgW676xDhRVGlG7ULV6dm5p3a6qIh0e1HRdK1ni2cMiZQVI+/i8iqVBXzU7rVmAnPXE+MHQPJ6okOVyfL/HXBjVmWWiLyz+G6LhyuKo9FoccVw8TltqLnyQZhtAMFZiqimLQE5vXJwGLg5K1dkilUmShG+LmfTIn7vNjASBRCdBbqsnLE+iZ7Adrc+2joEVIzR2j6QpzUJi/rQUll9AK4D3WaG+lATrgaNuVmlTkeeLYayAoMdb7vB1g7Q8b4KPkEXEXziHTCtthA7OakMjgmFzfhQE6oLJcvVlaisXq6EuzzD8Ojq3gAuU0CW+EFEfXXvQWW/pJK98lQPYGjGrnf8goW+6tvZspWgNHtrpy9OEYxMxpNMnD/E0H2oF/ZBhMkorwEOI36ZEXYQ3rXYTaJm0kX8SrRzu3baicrp2u3OYZOhPtnBgRtZQuImdZ4WSQE5gosR3gB7R48ury97eYZ079HF3d0BKt9prZnr65lDDqejT3/pN7BTurSr+qLp+iGtHjpzvI9PArM8w/BXIFSuKE+j8UnS8mFAp/1sDr9NlpkxtJ9QHG13bST39/fjRy3Mq/FE4khS1ZaHBAk59MnX/dd2xmXfJF+BwP6Y1J4MkGcg+f4RPzUyhjnFLGkWEx85i5ythkTBygXXQiIrBC3+tWCkt1cz8UHRwvN+kT8LhXo1QRCDkVAoeBaKEMxrZrtsZD+JT24cPSav7pbe9uyPBSbkpXhyTEptPT7FH1I9R4fHgavHt4nErtd+l4j3S5uJ+edAIjm2mQikUofz8VNDa1cf8geihSjNLaq+RRsuZKcTFaNowC0SOCkerEaprRAe9PNulIR7Yog/IYaKQqD2c+zgUKMNDeHig6zlgbuxPfccthxPdGnOcOly7A45A7eV0bKcaPhusuyjdbSv1nyUj6GB2N49Zsq2y8sG1NZSh1uijA3hj5BTASxeOgq7Pmpgvh2ohG3EcYEtt9v9ZeP6MLAVRdVHjL8QqD45sDUswIPFyJcDsvg5rnjGiMhQeA8ny509vk24s7FsWolV74qzjkfcDCPbjcfigdaVL7u6sRv8cuCxZRhhzxLOa9x8YacvuI5Wv92ASLAbV8j6Eo69J3RdImf1GdEz8QbbaL/FZRfuSX/MdQ0m8Ng72Bh8jek8ZGO90MO7S9XgDnYtBkRY5TQxf/n24nJ9g41vTmYuKGririCDTpwfWnbXJzfj7Obl+uHG0tTVvP9w3/uc2WO9vIgv3C1ZNwJ2ZWH02pBrzPn5crPFZA6KFC9KQYWVebIcyUJQY5WgZOIpPUrUrOZyVtQ4r1lhzSZeMWmcKOhzrIAz6EFyjJ3W//QzNMfo+4c+Jsm3HkMzlB5FkxiOol0k3E7iGZamSbieN4N64YUXXnjhhRf+A/glbQkqpiY9nUIAAAAASUVORK5CYII=";
  },
  afa7: function (t, e, n) {
    t.exports = n.p + "img/林義豐.88faf3ed.jpg";
  },
  b82b: function (t, e, n) {
    "use strict";
    n("c54c");
  },
  be7d: function (t, e, n) {
    t.exports = n.p + "img/饒慶鈴.71a3a718.jpg";
  },
  c54c: function (t, e, n) {},
  c59e: function (t, e, n) {
    t.exports = n.p + "img/吳炳輝.9b5eca87.jpg";
  },
  c645: function (t, e, n) {
    t.exports = n.p + "img/許忠信.e7997c7c.jpg";
  },
  ca7b: function (t, e, n) {
    t.exports = n.p + "img/陳琬惠.45d504c4.jpg";
  },
  cb83: function (t, e, n) {
    t.exports = n.p + "img/宋國鼎.eb568bf4.jpg";
  },
  cdc6: function (t, e, n) {
    t.exports = n.p + "img/謝國樑.08dfe931.jpg";
  },
  cf05: function (t, e, n) {
    t.exports = n.p + "img/logo.815ac279.png";
  },
  cf46: function (t, e, n) {
    t.exports = n.p + "img/謝立康.8d696dbf.jpg";
  },
  d1b9: function (t, e, n) {
    t.exports = n.p + "img/周春米.23e86976.jpg";
  },
  d1df: function (t, e, n) {
    t.exports = n.p + "img/施奉先.f674f692.jpg";
  },
  d265: function (t, e, n) {
    "use strict";
    n("4827");
  },
  d39a: function (t, e, n) {
    t.exports = n.p + "img/陳泰山.ec194519.jpg";
  },
  d5b1: function (t, e, n) {
    t.exports = n.p + "img/黃源甫.19aa51ee.jpg";
  },
  d5b3: function (t, e, n) {
    t.exports = n.p + "img/黃希賢.c1105c89.jpg";
  },
  d93c: function (t, e, n) {
    t.exports = n.p + "img/黃偉哲.13d474a7.jpg";
  },
  db68: function (t, e, n) {
    t.exports = n.p + "img/高虹安.75204e86.jpg";
  },
  dc4b: function (t, e, n) {
    t.exports = n.p + "img/朱振東.36b5a562.jpg";
  },
  dd4b: function (t, e, n) {
    "use strict";
    n("5b32");
  },
  dded: function (t, e, n) {
    "use strict";
    n("16d3");
  },
  e124: function (t, e, n) {
    t.exports = n.p + "img/謝福弘.ec1c0db5.jpg";
  },
  e219: function (t, e, n) {
    t.exports = n.p + "img/fb.257e9826.png";
  },
  e31a: function (t, e, n) {},
  e375: function (t, e, n) {
    t.exports = n.p + "img/蔡其昌.3270121f.jpg";
  },
  e3e8: function (t, e, n) {
    t.exports = n.p + "img/徐定禎.cce50e2a.jpg";
  },
  e436: function (t, e, n) {
    t.exports = n.p + "img/江聰淵.e4e07897.jpg";
  },
  e735: function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  e821: function (t, e, n) {
    t.exports = n.p + "img/蔡適應.bd854798.jpg";
  },
  ebc5: function (t, e, n) {
    t.exports = n.p + "img/黃秀芳.baa1b944.jpg";
  },
  f1ee: function (t, e, n) {
    t.exports = n.p + "img/鄭匡宇.97b419f5.jpg";
  },
  f25e: function (t, e) {
    t.exports =
      "data:image/jpeg;base64,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";
  },
  f49c: function (t, e, n) {
    "use strict";
    n("691c");
  },
  f5f3: function (t, e, n) {
    t.exports = n.p + "img/陳時中.8a0655d3.jpg";
  },
  f774: function (t, e, n) {
    t.exports = n.p + "img/徐榛蔚.18cd4520.jpg";
  },
  f9cc: function (t, e, n) {
    t.exports = n.p + "img/投票箱.7dc2ca5f.png";
  },
  fbab: function (t, e, n) {
    t.exports = n.p + "img/陳美妃.17c76645.jpg";
  },
  fe75: function (t, e, n) {
    t.exports = n.p + "img/曾國民.75645723.jpg";
  },
});
//# sourceMappingURL=app.1664884006092.js.map