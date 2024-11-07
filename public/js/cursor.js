(function() {
  !function(t) {
      var e, r;
      return r = function() {
          function e(r) {
              this.supportTLS11 = !0,
              this.$el = t(r),
              this.$credit = this.$el.find("#credit-card"),
              this.$el.find("#gmo-credit").length > 0 && (this.$credit = this.$el.find("#gmo-credit"),
              this.gmoShopID = this.$credit.find('[name$="[token_api_key]"]').val()),
              this.cards = [],
              this.$el.find('[name="creditcard[]"]').each(function(e) {
                  return function(r, n) {
                      return e.cards.push(t(n).val())
                  }
              }(this)),
              this.$submit = this.$el.find("[type=submit]"),
              this.$submit.on("click", t.proxy(this.submitHandler, this)),
              this.$submit.prop("disabled", !1),
              this.$el.on("ajax:success", t.proxy(this.setCreditEnabled, this)),
              window.execTran = function(t) {
                  e.prototype.execTranHandler(t)
              }
          }
          return e.VISA_REG = /^4[0-9]{12}(?:[0-9]{3})?$/,
          e.MASTER_REG = /^[5|2][0-9]{12}(?:[0-9]{3})?$/,
          e.prototype.execTranHandler = function(e) {
              return "000" !== e.resultCode ? (131 === e.resultCode || 132 === e.resultCode ? window.alert("カード名義人はご利用のクレジットカードに記載されたご名義を半角で入力してください") : window.alert("処理に失敗しました"),
              location.reload()) : (this.$credit = t("form").find("#gmo-credit"),
              this.$submit = t("form").find("[type=submit]"),
              this.$credit.find('[name$="[card_token]"]').val(e.tokenObject.token),
              this.$credit.find('[name$="[card_req_card_number]"]').val(e.tokenObject.maskedCardNo),
              this.$submit.submit())
          }
          ,
          e.prototype.submitHandler = function() {
              var e, r, n, i, o;
              return o = this.getTokenRequestData(),
              "100" === this.$el.find("[name=payment_type_id]:checked").val() ? (i = this.calcCardMode(),
              "registered" === i ? (this.setCreditDisabled(!0),
              this.$submit = t("form").find("[type=submit]"),
              this.$submit.submit()) : this.$credit.find('[name$="[security_code]"]').val().length < 1 || this.$credit.find('[name$="[card_number]"]').val().length < 1 ? window.alert("フォームが空です") : this.$credit.find('[name$="[cardholder_name]"]').length > 0 && this.$credit.find('[name$="[cardholder_name]"]').val().length < 1 ? window.alert("カード名義人はご利用のクレジットカードに記載されたご名義を半角で入力してください") : (r = window.Multipayment,
              r.init(this.gmoShopID),
              n = {
                  cardno: this.$credit.find('[name$="[card_number]"]').val(),
                  expire: [this.$credit.find('[name$="[card_expire2]"]').val().slice(-2), ("00" + this.$credit.find('[name$="[card_expire1]"]').val()).slice(-2)].join(""),
                  securitycode: this.$credit.find('[name$="[security_code]"]').val(),
                  tokennumber: 2
              },
              e = this.$credit.find('[name$="[cardholder_name]"]'),
              e.length > 0 && (n.holdername = e.val()),
              r.getToken(n, window.execTran),
              this.setCreditDisabled(!0))) : "1" !== this.$el.find("[name=payment_type_id]:checked").val() || this.hasCardToken() ? this.request() : this.requestMdkToken(),
              !1
          }
          ,
          e.prototype.calcCardMode = function() {
              var t, e;
              return e = this.$el.find("[name=gmo_cards]:checked").val(),
              "undefined" === e ? "no_register" : /^-?\d+$/.test(e) ? "registered" : (t = "1" === this.$el.find("[name=card_register]:checked").val(),
              t ? "register" : "no_register")
          }
          ,
          e.prototype.request = function() {
              return this.hideErrorMessages(),
              this.hasCardToken() && this.setCreditDisabled(!0),
              t.ajax({
                  url: this.$el.attr("action"),
                  type: this.$el.attr("method"),
                  data: this.$el.serialize(),
                  dataType: "json",
                  beforeSend: t.proxy(this.beforeSendHandler, this),
                  success: t.proxy(this.successHandler, this),
                  error: t.proxy(this.errorHandler, this),
                  complete: t.proxy(this.completeHandler, this)
              })
          }
          ,
          e.prototype.beforeSendHandler = function() {
              return this.$submit.prop("disabled", !0)
          }
          ,
          e.prototype.successHandler = function(e) {
              switch (e.status) {
              case 200:
                  return window.location = e.redirect_to;
              case 400:
                  return this.$el.data("confirm") && t.magnificPopup.close(),
                  this.showErrorMessages(e.errors),
                  this.setCreditDisabled(!1),
                  this.$submit.prop("disabled", !1)
              }
          }
          ,
          e.prototype.errorHandler = function(t) {
              return this.showErrorMessages(t.errors),
              this.$submit.prop("disabled", !1)
          }
          ,
          e.prototype.showErrorMessages = function(e) {
              var r, n, i, o, s, a, u;
              u = [];
              for (i in e) {
                  switch (a = e[i],
                  i = i.toLowerCase().replace(/(.*)::/, "")) {
                  case "credit":
                      i = "credit-card";
                      break;
                  case "cvs":
                      i = "convenience";
                      break;
                  default:
                      i = "payment"
                  }
                  n = this.$el.find("#" + i),
                  r = t('<div class="alert alert-danger"></div>').appendTo(n),
                  u.push(function() {
                      var t;
                      t = [];
                      for (s in a)
                          o = a[s],
                          t.push(r.append("<div>" + o + "</div>"));
                      return t
                  }())
              }
              return u
          }
          ,
          e.prototype.hideErrorMessages = function() {
              return this.$el.find(".alert.alert-danger").remove()
          }
          ,
          e.prototype.setCreditEnabled = function(t, e) {
              switch (e.status) {
              case 400:
                  return this.setCreditDisabled(!1)
              }
          }
          ,
          e.prototype.setCreditDisabled = function(t) {
              var e;
              return e = '[name$="[card_number]"], [name$="[card_expire1]"], [name$="[card_expire2]"], [name$="[security_code]"], [name$="[token_api_key]"], [name$="[cardholder_name]"]',
              this.$el.find(e).prop("disabled", t)
          }
          ,
          e.prototype.requestMdkToken = function() {
              var e, r, n;
              return this.hideErrorMessages(),
              r = this.getTokenRequestData(),
              e = {},
              this.validateTokenRequestData(r, e) ? (n = this.supportTLS11 ? "https://api3.veritrans.co.jp/4gtoken" : "https://3gs.veritrans.co.jp/4gtoken",
              t.ajax({
                  url: n,
                  type: "POST",
                  contentType: "application/json",
                  data: JSON.stringify(r),
                  dataType: "json",
                  beforeSend: t.proxy(this.tokenBeforeSendHandler, this),
                  success: t.proxy(this.tokenSuccessHandler, this),
                  error: t.proxy(this.tokenErrorHandler, this)
              })) : (this.$el.data("confirm") && t.magnificPopup.close(),
              this.showErrorMessages(e))
          }
          ,
          e.prototype.tokenBeforeSendHandler = function() {
              return this.$submit.prop("disabled", !0)
          }
          ,
          e.prototype.tokenSuccessHandler = function(t) {
              return this.setTokenResponseData(t),
              this.request()
          }
          ,
          e.prototype.hasCardToken = function() {
              return this.$credit.find('[name$="[card_token]"]').val() && this.$credit.find('[name$="[card_req_card_number]"]').val()
          }
          ,
          e.prototype.tokenErrorHandler = function(t) {
              var e, r, n;
              return 0 === t.readyState && 0 === t.status ? (this.supportTLS11 = !1,
              this.requestMdkToken()) : (n = t.responseJSON.code,
              e = "invalid_cardholder_name" === n ? "カード名義人はご利用のクレジットカードに記載されたご名義を半角で入力してください" : t.responseJSON.message,
              r = {
                  credit: {
                      key: [e]
                  }
              },
              this.showErrorMessages(r),
              this.$submit.prop("disabled", !1))
          }
          ,
          e.prototype.getTokenRequestData = function() {
              var t, e;
              return e = {
                  card_number: this.$credit.find('[name$="[card_number]"]').val(),
                  card_expire: [("00" + this.$credit.find('[name$="[card_expire1]"]').val()).slice(-2), this.$credit.find('[name$="[card_expire2]"]').val().slice(-2)].join("/"),
                  security_code: this.$credit.find('[name$="[security_code]"]').val(),
                  token_api_key: this.$credit.find('[name$="[token_api_key]"]').val()
              },
              t = this.$el.find('[name$="[cardholder_name]"]'),
              t.length > 0 && (e.cardholder_name = t.val()),
              e
          }
          ,
          e.prototype.setTokenResponseData = function(t) {
              return this.$credit.find('[name$="[card_token]"]').val(t.token),
              this.$credit.find('[name$="[card_req_card_number]"]').val(t.req_card_number)
          }
          ,
          e.prototype.validateTokenRequestData = function(t, e) {
              return t.card_number ? this.cards.length > 0 && !this.checkCardBrand(t.card_number) ? (e.credit = {
                  card_number: ["カード番号がご利用可能なクレジットカードの種類でない為ご利用いただけません"]
              },
              !1) : this.$credit.data("expire") && !this.checkCardExpire(t.card_expire) ? (e.credit = {
                  card_expire: [this.$credit.data("expire-message")]
              },
              !1) : t.security_code ? this.$el.find('[name$="[cardholder_name]"]').length > 0 && !t.cardholder_name ? (e.credit = {
                  cardholder_name: ["カード名義人はご利用のクレジットカードに記載されたご名義を半角で入力してください"]
              },
              !1) : !0 : (e.credit = {
                  security_code: ["セキュリティコードを入力してください"]
              },
              !1) : (e.credit = {
                  card_number: ["カード番号を入力してください"]
              },
              !1)
          }
          ,
          e.prototype.checkCardBrand = function(t) {
              var r, n, i, o, s, a;
              for (i = !1,
              a = this.cards,
              o = 0,
              s = a.length; s > o; o++)
                  r = a[o],
                  n = e[r.toUpperCase() + "_REG"],
                  i || "undefined" == typeof n || (i = n.test(t));
              return i
          }
          ,
          e.prototype.checkCardExpire = function(t) {
              var e, r, n;
              return n = t.split("/"),
              e = new Date(parseInt(String((new Date).getFullYear()).substr(0, 2) + n[1]),parseInt(n[0]),0,23,59,59),
              r = new Date(this.$credit.data("expire")),
              e > r
          }
          ,
          e
      }(),
      e = function(e) {
          return this.each(function() {
              var n, i, o;
              return n = t(this),
              i = n.data("select-payment-type-form"),
              o = "object" == typeof e && e,
              i || n.data("select-payment-type-form", i = new r(this,o)),
              n
          })
      }
      ,
      t.fn.selectPaymentTypeForm = e,
      t.fn.selectPaymentTypeForm.Constructor = r,
      window.SelectPaymentTypeForm = r,
      t(function() {
          return t(".select-payment-type-form").selectPaymentTypeForm()
      })
  }(window.$)
}
).call(this),
function() {
  var t = {}.hasOwnProperty
    , e = function(e, r) {
      function n() {
          this.constructor = e
      }
      for (var i in r)
          t.call(r, i) && (e[i] = r[i]);
      return n.prototype = r.prototype,
      e.prototype = new n,
      e.__super__ = r.prototype,
      e
  };
  !function(t) {
      var r, n;
      return r = function(r) {
          function n(t) {
              n.__super__.constructor.call(this, t)
          }
          return e(n, r),
          n.prototype.successHandler = function(e) {
              var r, n;
              switch (e.status) {
              case 200:
                  return this.$el.data("finish-target-url") ? window.location.href = this.$el.data("finish-target-url") : (n = this.$el.find("#finish-template"),
                  "waiting" === e.order_status && (n = this.$el.find("#finish-template-cvs")),
                  r = t(n.html()).appendTo(this.$el),
                  r.find("a").on("click", function() {
                      return window.location.reload()
                  }),
                  r.modal());
              case 400:
                  return this.$el.data("confirm") && t.magnificPopup.close(),
                  this.showErrorMessages(e.errors),
                  this.setCreditDisabled(!1),
                  this.$submit.prop("disabled", !1)
              }
          }
          ,
          n.prototype.errorHandler = function() {
              return this.$el.data("confirm") ? t.magnificPopup.close() : void 0
          }
          ,
          n.prototype.showErrorMessages = function(e) {
              var r, i, o, s, a, u;
              n.__super__.showErrorMessages.call(this, e),
              u = [];
              for (o in e)
                  a = e[o],
                  i = this.$el.find("#error-container"),
                  "digital_content_payment" === o ? (r = t('<div class="alert alert-danger"></div>').appendTo(i),
                  u.push(function() {
                      var t, e, n;
                      for (n = [],
                      t = 0,
                      e = a.length; e > t; t++)
                          s = a[t],
                          n.push(r.append("<div>" + s + "</div>"));
                      return n
                  }())) : u.push(void 0);
              return u
          }
          ,
          n
      }(SelectPaymentTypeForm),
      n = function(e) {
          return this.each(function() {
              var n, i, o;
              return n = t(this),
              i = n.data("digital-content-select-payment-type-form"),
              o = "object" == typeof e && e,
              i || n.data("digital-content-select-payment-type-form", i = new r(this,o)),
              n
          })
      }
      ,
      t.fn.digitalContentSelectPaymentTypeForm = n,
      t.fn.digitalContentSelectPaymentTypeForm.Constructor = r,
      window.DigitalContentSelectPaymentTypeForm = r,
      t(function() {
          return t(".digital-content-select-payment-type-form").digitalContentSelectPaymentTypeForm()
      })
  }(window.$)
}
.call(this),
function(t) {
  t.fn.qrcode = function(e) {
      function r(t) {
          this.mode = a,
          this.data = t
      }
      function n(t, e) {
          this.typeNumber = t,
          this.errorCorrectLevel = e,
          this.modules = null,
          this.moduleCount = 0,
          this.dataCache = null,
          this.dataList = []
      }
      function i(t, e) {
          if (void 0 == t.length)
              throw Error(t.length + "/" + e);
          for (var r = 0; r < t.length && 0 == t[r]; )
              r++;
          this.num = Array(t.length - r + e);
          for (var n = 0; n < t.length - r; n++)
              this.num[n] = t[n + r]
      }
      function o(t, e) {
          this.totalCount = t,
          this.dataCount = e
      }
      function s() {
          this.buffer = [],
          this.length = 0
      }
      var a;
      r.prototype = {
          getLength: function() {
              return this.data.length
          },
          write: function(t) {
              for (var e = 0; e < this.data.length; e++)
                  t.put(this.data.charCodeAt(e), 8)
          }
      },
      n.prototype = {
          addData: function(t) {
              this.dataList.push(new r(t)),
              this.dataCache = null
          },
          isDark: function(t, e) {
              if (0 > t || this.moduleCount <= t || 0 > e || this.moduleCount <= e)
                  throw Error(t + "," + e);
              return this.modules[t][e]
          },
          getModuleCount: function() {
              return this.moduleCount
          },
          make: function() {
              if (1 > this.typeNumber) {
                  for (var t = 1, t = 1; 40 > t; t++) {
                      for (var e = o.getRSBlocks(t, this.errorCorrectLevel), r = new s, n = 0, i = 0; i < e.length; i++)
                          n += e[i].dataCount;
                      for (i = 0; i < this.dataList.length; i++)
                          e = this.dataList[i],
                          r.put(e.mode, 4),
                          r.put(e.getLength(), u.getLengthInBits(e.mode, t)),
                          e.write(r);
                      if (r.getLengthInBits() <= 8 * n)
                          break
                  }
                  this.typeNumber = t
              }
              this.makeImpl(!1, this.getBestMaskPattern())
          },
          makeImpl: function(t, e) {
              this.moduleCount = 4 * this.typeNumber + 17,
              this.modules = Array(this.moduleCount);
              for (var r = 0; r < this.moduleCount; r++) {
                  this.modules[r] = Array(this.moduleCount);
                  for (var i = 0; i < this.moduleCount; i++)
                      this.modules[r][i] = null
              }
              this.setupPositionProbePattern(0, 0),
              this.setupPositionProbePattern(this.moduleCount - 7, 0),
              this.setupPositionProbePattern(0, this.moduleCount - 7),
              this.setupPositionAdjustPattern(),
              this.setupTimingPattern(),
              this.setupTypeInfo(t, e),
              7 <= this.typeNumber && this.setupTypeNumber(t),
              null == this.dataCache && (this.dataCache = n.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
              this.mapData(this.dataCache, e)
          },
          setupPositionProbePattern: function(t, e) {
              for (var r = -1; 7 >= r; r++)
                  if (!(-1 >= t + r || this.moduleCount <= t + r))
                      for (var n = -1; 7 >= n; n++)
                          -1 >= e + n || this.moduleCount <= e + n || (this.modules[t + r][e + n] = r >= 0 && 6 >= r && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == r || 6 == r) || r >= 2 && 4 >= r && n >= 2 && 4 >= n ? !0 : !1)
          },
          getBestMaskPattern: function() {
              for (var t = 0, e = 0, r = 0; 8 > r; r++) {
                  this.makeImpl(!0, r);
                  var n = u.getLostPoint(this);
                  (0 == r || t > n) && (t = n,
                  e = r)
              }
              return e
          },
          createMovieClip: function(t, e, r) {
              for (t = t.createEmptyMovieClip(e, r),
              this.make(),
              e = 0; e < this.modules.length; e++)
                  for (var r = 1 * e, n = 0; n < this.modules[e].length; n++) {
                      var i = 1 * n;
                      this.modules[e][n] && (t.beginFill(0, 100),
                      t.moveTo(i, r),
                      t.lineTo(i + 1, r),
                      t.lineTo(i + 1, r + 1),
                      t.lineTo(i, r + 1),
                      t.endFill())
                  }
              return t
          },
          setupTimingPattern: function() {
              for (var t = 8; t < this.moduleCount - 8; t++)
                  null == this.modules[t][6] && (this.modules[t][6] = 0 == t % 2);
              for (t = 8; t < this.moduleCount - 8; t++)
                  null == this.modules[6][t] && (this.modules[6][t] = 0 == t % 2)
          },
          setupPositionAdjustPattern: function() {
              for (var t = u.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                  for (var r = 0; r < t.length; r++) {
                      var n = t[e]
                        , i = t[r];
                      if (null == this.modules[n][i])
                          for (var o = -2; 2 >= o; o++)
                              for (var s = -2; 2 >= s; s++)
                                  this.modules[n + o][i + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s ? !0 : !1
                  }
          },
          setupTypeNumber: function(t) {
              for (var e = u.getBCHTypeNumber(this.typeNumber), r = 0; 18 > r; r++) {
                  var n = !t && 1 == (e >> r & 1);
                  this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n
              }
              for (r = 0; 18 > r; r++)
                  n = !t && 1 == (e >> r & 1),
                  this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n
          },
          setupTypeInfo: function(t, e) {
              for (var r = u.getBCHTypeInfo(this.errorCorrectLevel << 3 | e), n = 0; 15 > n; n++) {
                  var i = !t && 1 == (r >> n & 1);
                  6 > n ? this.modules[n][8] = i : 8 > n ? this.modules[n + 1][8] = i : this.modules[this.moduleCount - 15 + n][8] = i
              }
              for (n = 0; 15 > n; n++)
                  i = !t && 1 == (r >> n & 1),
                  8 > n ? this.modules[8][this.moduleCount - n - 1] = i : 9 > n ? this.modules[8][15 - n - 1 + 1] = i : this.modules[8][15 - n - 1] = i;
              this.modules[this.moduleCount - 8][8] = !t
          },
          mapData: function(t, e) {
              for (var r = -1, n = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                  for (6 == s && s--; ; ) {
                      for (var a = 0; 2 > a; a++)
                          if (null == this.modules[n][s - a]) {
                              var d = !1;
                              o < t.length && (d = 1 == (t[o] >>> i & 1)),
                              u.getMask(e, n, s - a) && (d = !d),
                              this.modules[n][s - a] = d,
                              i--,
                              -1 == i && (o++,
                              i = 7)
                          }
                      if (n += r,
                      0 > n || this.moduleCount <= n) {
                          n -= r,
                          r = -r;
                          break
                      }
                  }
          }
      },
      n.PAD0 = 236,
      n.PAD1 = 17,
      n.createData = function(t, e, r) {
          for (var e = o.getRSBlocks(t, e), i = new s, a = 0; a < r.length; a++) {
              var d = r[a];
              i.put(d.mode, 4),
              i.put(d.getLength(), u.getLengthInBits(d.mode, t)),
              d.write(i)
          }
          for (a = t = 0; a < e.length; a++)
              t += e[a].dataCount;
          if (i.getLengthInBits() > 8 * t)
              throw Error("code length overflow. (" + i.getLengthInBits() + ">" + 8 * t + ")");
          for (i.getLengthInBits() + 4 <= 8 * t && i.put(0, 4); 0 != i.getLengthInBits() % 8; )
              i.putBit(!1);
          for (; !(i.getLengthInBits() >= 8 * t) && (i.put(n.PAD0, 8),
          !(i.getLengthInBits() >= 8 * t)); )
              i.put(n.PAD1, 8);
          return n.createBytes(i, e)
      }
      ,
      n.createBytes = function(t, e) {
          for (var r = 0, n = 0, o = 0, s = Array(e.length), a = Array(e.length), d = 0; d < e.length; d++) {
              var h = e[d].dataCount
                , c = e[d].totalCount - h
                , n = Math.max(n, h)
                , o = Math.max(o, c);
              s[d] = Array(h);
              for (var l = 0; l < s[d].length; l++)
                  s[d][l] = 255 & t.buffer[l + r];
              for (r += h,
              l = u.getErrorCorrectPolynomial(c),
              h = new i(s[d],l.getLength() - 1).mod(l),
              a[d] = Array(l.getLength() - 1),
              l = 0; l < a[d].length; l++)
                  c = l + h.getLength() - a[d].length,
                  a[d][l] = c >= 0 ? h.get(c) : 0
          }
          for (l = d = 0; l < e.length; l++)
              d += e[l].totalCount;
          for (r = Array(d),
          l = h = 0; n > l; l++)
              for (d = 0; d < e.length; d++)
                  l < s[d].length && (r[h++] = s[d][l]);
          for (l = 0; o > l; l++)
              for (d = 0; d < e.length; d++)
                  l < a[d].length && (r[h++] = a[d][l]);
          return r
      }
      ,
      a = 4;
      for (var u = {
          PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
          G15: 1335,
          G18: 7973,
          G15_MASK: 21522,
          getBCHTypeInfo: function(t) {
              for (var e = t << 10; 0 <= u.getBCHDigit(e) - u.getBCHDigit(u.G15); )
                  e ^= u.G15 << u.getBCHDigit(e) - u.getBCHDigit(u.G15);
              return (t << 10 | e) ^ u.G15_MASK
          },
          getBCHTypeNumber: function(t) {
              for (var e = t << 12; 0 <= u.getBCHDigit(e) - u.getBCHDigit(u.G18); )
                  e ^= u.G18 << u.getBCHDigit(e) - u.getBCHDigit(u.G18);
              return t << 12 | e
          },
          getBCHDigit: function(t) {
              for (var e = 0; 0 != t; )
                  e++,
                  t >>>= 1;
              return e
          },
          getPatternPosition: function(t) {
              return u.PATTERN_POSITION_TABLE[t - 1]
          },
          getMask: function(t, e, r) {
              switch (t) {
              case 0:
                  return 0 == (e + r) % 2;
              case 1:
                  return 0 == e % 2;
              case 2:
                  return 0 == r % 3;
              case 3:
                  return 0 == (e + r) % 3;
              case 4:
                  return 0 == (Math.floor(e / 2) + Math.floor(r / 3)) % 2;
              case 5:
                  return 0 == e * r % 2 + e * r % 3;
              case 6:
                  return 0 == (e * r % 2 + e * r % 3) % 2;
              case 7:
                  return 0 == (e * r % 3 + (e + r) % 2) % 2;
              default:
                  throw Error("bad maskPattern:" + t)
              }
          },
          getErrorCorrectPolynomial: function(t) {
              for (var e = new i([1],0), r = 0; t > r; r++)
                  e = e.multiply(new i([1, d.gexp(r)],0));
              return e
          },
          getLengthInBits: function(t, e) {
              if (e >= 1 && 10 > e)
                  switch (t) {
                  case 1:
                      return 10;
                  case 2:
                      return 9;
                  case a:
                      return 8;
                  case 8:
                      return 8;
                  default:
                      throw Error("mode:" + t)
                  }
              else if (27 > e)
                  switch (t) {
                  case 1:
                      return 12;
                  case 2:
                      return 11;
                  case a:
                      return 16;
                  case 8:
                      return 10;
                  default:
                      throw Error("mode:" + t)
                  }
              else {
                  if (!(41 > e))
                      throw Error("type:" + e);
                  switch (t) {
                  case 1:
                      return 14;
                  case 2:
                      return 13;
                  case a:
                      return 16;
                  case 8:
                      return 12;
                  default:
                      throw Error("mode:" + t)
                  }
              }
          },
          getLostPoint: function(t) {
              for (var e = t.getModuleCount(), r = 0, n = 0; e > n; n++)
                  for (var i = 0; e > i; i++) {
                      for (var o = 0, s = t.isDark(n, i), a = -1; 1 >= a; a++)
                          if (!(0 > n + a || n + a >= e))
                              for (var u = -1; 1 >= u; u++)
                                  0 > i + u || i + u >= e || 0 == a && 0 == u || s == t.isDark(n + a, i + u) && o++;
                      o > 5 && (r += 3 + o - 5)
                  }
              for (n = 0; e - 1 > n; n++)
                  for (i = 0; e - 1 > i; i++)
                      o = 0,
                      t.isDark(n, i) && o++,
                      t.isDark(n + 1, i) && o++,
                      t.isDark(n, i + 1) && o++,
                      t.isDark(n + 1, i + 1) && o++,
                      (0 == o || 4 == o) && (r += 3);
              for (n = 0; e > n; n++)
                  for (i = 0; e - 6 > i; i++)
                      t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
              for (i = 0; e > i; i++)
                  for (n = 0; e - 6 > n; n++)
                      t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
              for (i = o = 0; e > i; i++)
                  for (n = 0; e > n; n++)
                      t.isDark(n, i) && o++;
              return t = Math.abs(100 * o / e / e - 50) / 5,
              r + 10 * t
          }
      }, d = {
          glog: function(t) {
              if (1 > t)
                  throw Error("glog(" + t + ")");
              return d.LOG_TABLE[t]
          },
          gexp: function(t) {
              for (; 0 > t; )
                  t += 255;
              for (; t >= 256; )
                  t -= 255;
              return d.EXP_TABLE[t]
          },
          EXP_TABLE: Array(256),
          LOG_TABLE: Array(256)
      }, h = 0; 8 > h; h++)
          d.EXP_TABLE[h] = 1 << h;
      for (h = 8; 256 > h; h++)
          d.EXP_TABLE[h] = d.EXP_TABLE[h - 4] ^ d.EXP_TABLE[h - 5] ^ d.EXP_TABLE[h - 6] ^ d.EXP_TABLE[h - 8];
      for (h = 0; 255 > h; h++)
          d.LOG_TABLE[d.EXP_TABLE[h]] = h;
      return i.prototype = {
          get: function(t) {
              return this.num[t]
          },
          getLength: function() {
              return this.num.length
          },
          multiply: function(t) {
              for (var e = Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
                  for (var n = 0; n < t.getLength(); n++)
                      e[r + n] ^= d.gexp(d.glog(this.get(r)) + d.glog(t.get(n)));
              return new i(e,0)
          },
          mod: function(t) {
              if (0 > this.getLength() - t.getLength())
                  return this;
              for (var e = d.glog(this.get(0)) - d.glog(t.get(0)), r = Array(this.getLength()), n = 0; n < this.getLength(); n++)
                  r[n] = this.get(n);
              for (n = 0; n < t.getLength(); n++)
                  r[n] ^= d.gexp(d.glog(t.get(n)) + e);
              return new i(r,0).mod(t)
          }
      },
      o.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
      o.getRSBlocks = function(t, e) {
          var r = o.getRsBlockTable(t, e);
          if (void 0 == r)
              throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
          for (var n = r.length / 3, i = [], s = 0; n > s; s++)
              for (var a = r[3 * s + 0], u = r[3 * s + 1], d = r[3 * s + 2], h = 0; a > h; h++)
                  i.push(new o(u,d));
          return i
      }
      ,
      o.getRsBlockTable = function(t, e) {
          switch (e) {
          case 1:
              return o.RS_BLOCK_TABLE[4 * (t - 1) + 0];
          case 0:
              return o.RS_BLOCK_TABLE[4 * (t - 1) + 1];
          case 3:
              return o.RS_BLOCK_TABLE[4 * (t - 1) + 2];
          case 2:
              return o.RS_BLOCK_TABLE[4 * (t - 1) + 3]
          }
      }
      ,
      s.prototype = {
          get: function(t) {
              return 1 == (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
          },
          put: function(t, e) {
              for (var r = 0; e > r; r++)
                  this.putBit(1 == (t >>> e - r - 1 & 1))
          },
          getLengthInBits: function() {
              return this.length
          },
          putBit: function(t) {
              var e = Math.floor(this.length / 8);
              this.buffer.length <= e && this.buffer.push(0),
              t && (this.buffer[e] |= 128 >>> this.length % 8),
              this.length++
          }
      },
      "string" == typeof e && (e = {
          text: e
      }),
      e = t.extend({}, {
          render: "canvas",
          width: 256,
          height: 256,
          typeNumber: -1,
          correctLevel: 2,
          background: "#ffffff",
          foreground: "#000000"
      }, e),
      this.each(function() {
          var r;
          if ("canvas" == e.render) {
              r = new n(e.typeNumber,e.correctLevel),
              r.addData(e.text),
              r.make();
              var i = document.createElement("canvas");
              i.width = e.width,
              i.height = e.height;
              for (var o = i.getContext("2d"), s = e.width / r.getModuleCount(), a = e.height / r.getModuleCount(), u = 0; u < r.getModuleCount(); u++)
                  for (var d = 0; d < r.getModuleCount(); d++) {
                      o.fillStyle = r.isDark(u, d) ? e.foreground : e.background;
                      var h = Math.ceil((d + 1) * s) - Math.floor(d * s)
                        , c = Math.ceil((u + 1) * s) - Math.floor(u * s);
                      o.fillRect(Math.round(d * s), Math.round(u * a), h, c)
                  }
          } else
              for (r = new n(e.typeNumber,e.correctLevel),
              r.addData(e.text),
              r.make(),
              i = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background),
              o = e.width / r.getModuleCount(),
              s = e.height / r.getModuleCount(),
              a = 0; a < r.getModuleCount(); a++)
                  for (u = t("<tr></tr>").css("height", s + "px").appendTo(i),
                  d = 0; d < r.getModuleCount(); d++)
                      t("<td></td>").css("width", o + "px").css("background-color", r.isDark(a, d) ? e.foreground : e.background).appendTo(u);
          r = i,
          jQuery(r).appendTo(this)
      })
  }
}(jQuery),
function() {
  !function(t) {
      return t(function() {
          var e;
          return t("#presale-qrcode").length > 0 ? (e = t("#presale-qrcode"),
          e.qrcode(e.data("url"))) : void 0
      })
  }(window.$)
}
.call(this),
function() {}
.call(this);
