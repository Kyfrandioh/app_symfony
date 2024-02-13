(self["webpackChunk"] = self["webpackChunk"] || []).push([["openingHours"],{

/***/ "./assets/scripts/openingHours.js":
/*!****************************************!*\
  !*** ./assets/scripts/openingHours.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
__webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
$(function () {
  var timeChoice = $("#reservation_time_hour");
  var dateField = $("#reservation_date");
  var closingMessage = $("#closing-message");
  var reservationTime = $("#reservation_time");
  dateField.on("change", function () {
    var date = $(this).val();
    timeChoice.find("option").remove();
    $.ajax({
      type: "GET",
      url: "/reservation/date?date=".concat(date),
      dataType: "json",
      success: function success(data) {
        var noonOpeningHours = [];
        var eveningOpeningHours = [];
        $.each(data, function (key, value) {
          if (value != null) {
            if (value < 16) {
              noonOpeningHours.push(value);
            } else {
              eveningOpeningHours.push(value);
            }
          }
        });
        if (!noonOpeningHours.length && !eveningOpeningHours.length) {
          reservationTime.css("display", "none");
          closingMessage.text("Le restaurant est fermé, veuillez choisir une autre date");
        } else {
          reservationTime.css("display", "flex");
          closingMessage.text("");
          var options;
          $.each(noonOpeningHours, function (key, value) {
            options += '<option value="' + value + '">' + value + "</option>";
          });
          $.each(eveningOpeningHours, function (key, value) {
            options += '<option value="' + value + '">' + value + "</option>";
          });
          timeChoice.empty().append(options);
        }
      },
      error: function error() {
        alert("Une erreur est survenue");
      }
    });
  });
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_array_find_js-node_modules_core-js_modules_es_array_p-697111"], () => (__webpack_exec__("./assets/scripts/openingHours.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3BlbmluZ0hvdXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUFBLENBQUMsQ0FBQyxZQUFZO0VBQ1YsSUFBSUMsVUFBVSxHQUFHRCxDQUFDLENBQUMsd0JBQXdCLENBQUM7RUFDNUMsSUFBSUUsU0FBUyxHQUFHRixDQUFDLENBQUMsbUJBQW1CLENBQUM7RUFDdEMsSUFBSUcsY0FBYyxHQUFHSCxDQUFDLENBQUMsa0JBQWtCLENBQUM7RUFDMUMsSUFBSUksZUFBZSxHQUFHSixDQUFDLENBQUMsbUJBQW1CLENBQUM7RUFFNUNFLFNBQVMsQ0FBQ0csRUFBRSxDQUFDLFFBQVEsRUFBRSxZQUFZO0lBQy9CLElBQUlDLElBQUksR0FBR04sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDTyxHQUFHLENBQUMsQ0FBQztJQUN4Qk4sVUFBVSxDQUFDTyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDVCxDQUFDLENBQUNVLElBQUksQ0FBQztNQUNIQyxJQUFJLEVBQUUsS0FBSztNQUNYQyxHQUFHLDRCQUFBQyxNQUFBLENBQTRCUCxJQUFJLENBQUU7TUFDckNRLFFBQVEsRUFBRSxNQUFNO01BQ2hCQyxPQUFPLEVBQUUsU0FBQUEsUUFBVUMsSUFBSSxFQUFFO1FBRXJCLElBQUlDLGdCQUFnQixHQUFHLEVBQUU7UUFDekIsSUFBSUMsbUJBQW1CLEdBQUcsRUFBRTtRQUU1QmxCLENBQUMsQ0FBQ21CLElBQUksQ0FBQ0gsSUFBSSxFQUFFLFVBQVVJLEdBQUcsRUFBRUMsS0FBSyxFQUFFO1VBQy9CLElBQUlBLEtBQUssSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJQSxLQUFLLEdBQUcsRUFBRSxFQUFFO2NBQ1pKLGdCQUFnQixDQUFDSyxJQUFJLENBQUNELEtBQUssQ0FBQztZQUNoQyxDQUFDLE1BQU07Y0FDSEgsbUJBQW1CLENBQUNJLElBQUksQ0FBQ0QsS0FBSyxDQUFDO1lBQ25DO1VBQ0o7UUFDSixDQUFDLENBQUM7UUFFRixJQUFHLENBQUNKLGdCQUFnQixDQUFDTSxNQUFNLElBQUksQ0FBQ0wsbUJBQW1CLENBQUNLLE1BQU0sRUFBRTtVQUN4RG5CLGVBQWUsQ0FBQ29CLEdBQUcsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDO1VBQ3RDckIsY0FBYyxDQUFDc0IsSUFBSSxDQUFDLDBEQUEwRCxDQUFDO1FBQ25GLENBQUMsTUFBTTtVQUNIckIsZUFBZSxDQUFDb0IsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7VUFDdENyQixjQUFjLENBQUNzQixJQUFJLENBQUMsRUFBRSxDQUFDO1VBQ3ZCLElBQUlDLE9BQU87VUFFWDFCLENBQUMsQ0FBQ21CLElBQUksQ0FBQ0YsZ0JBQWdCLEVBQUUsVUFBVUcsR0FBRyxFQUFFQyxLQUFLLEVBQUU7WUFDM0NLLE9BQU8sSUFBSSxpQkFBaUIsR0FBR0wsS0FBSyxHQUFHLElBQUksR0FBR0EsS0FBSyxHQUFHLFdBQVc7VUFDckUsQ0FBQyxDQUFDO1VBQ0ZyQixDQUFDLENBQUNtQixJQUFJLENBQUNELG1CQUFtQixFQUFFLFVBQVVFLEdBQUcsRUFBRUMsS0FBSyxFQUFFO1lBQzlDSyxPQUFPLElBQUksaUJBQWlCLEdBQUdMLEtBQUssR0FBRyxJQUFJLEdBQUdBLEtBQUssR0FBRyxXQUFXO1VBQ3JFLENBQUMsQ0FBQztVQUVGcEIsVUFBVSxDQUFDMEIsS0FBSyxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDRixPQUFPLENBQUM7UUFDdEM7TUFFSixDQUFDO01BQ0RHLEtBQUssRUFBRSxTQUFBQSxNQUFBLEVBQVk7UUFDZkMsS0FBSyxDQUFDLHlCQUF5QixDQUFDO01BQ3BDO0lBRUosQ0FBQyxDQUFDO0VBQ04sQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvb3BlbmluZ0hvdXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IHRpbWVDaG9pY2UgPSAkKFwiI3Jlc2VydmF0aW9uX3RpbWVfaG91clwiKTtcclxuICAgIGxldCBkYXRlRmllbGQgPSAkKFwiI3Jlc2VydmF0aW9uX2RhdGVcIik7XHJcbiAgICBsZXQgY2xvc2luZ01lc3NhZ2UgPSAkKFwiI2Nsb3NpbmctbWVzc2FnZVwiKTtcclxuICAgIGxldCByZXNlcnZhdGlvblRpbWUgPSAkKFwiI3Jlc2VydmF0aW9uX3RpbWVcIik7XHJcblxyXG4gICAgZGF0ZUZpZWxkLm9uKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9ICQodGhpcykudmFsKCk7XHJcbiAgICAgICAgdGltZUNob2ljZS5maW5kKFwib3B0aW9uXCIpLnJlbW92ZSgpO1xyXG4gICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHVybDogYC9yZXNlcnZhdGlvbi9kYXRlP2RhdGU9JHtkYXRlfWAsXHJcbiAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgbm9vbk9wZW5pbmdIb3VycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGV2ZW5pbmdPcGVuaW5nSG91cnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgPCAxNikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9vbk9wZW5pbmdIb3Vycy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW5pbmdPcGVuaW5nSG91cnMucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZighbm9vbk9wZW5pbmdIb3Vycy5sZW5ndGggJiYgIWV2ZW5pbmdPcGVuaW5nSG91cnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXJ2YXRpb25UaW1lLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NpbmdNZXNzYWdlLnRleHQoXCJMZSByZXN0YXVyYW50IGVzdCBmZXJtw6ksIHZldWlsbGV6IGNob2lzaXIgdW5lIGF1dHJlIGRhdGVcIik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc2VydmF0aW9uVGltZS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nTWVzc2FnZS50ZXh0KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gobm9vbk9wZW5pbmdIb3VycywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucyArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyB2YWx1ZSArICdcIj4nICsgdmFsdWUgKyBcIjwvb3B0aW9uPlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChldmVuaW5nT3BlbmluZ0hvdXJzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIHZhbHVlICsgJ1wiPicgKyB2YWx1ZSArIFwiPC9vcHRpb24+XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWVDaG9pY2UuZW1wdHkoKS5hcHBlbmQob3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJVbmUgZXJyZXVyIGVzdCBzdXJ2ZW51ZVwiKTtcclxuICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7Il0sIm5hbWVzIjpbIiQiLCJ0aW1lQ2hvaWNlIiwiZGF0ZUZpZWxkIiwiY2xvc2luZ01lc3NhZ2UiLCJyZXNlcnZhdGlvblRpbWUiLCJvbiIsImRhdGUiLCJ2YWwiLCJmaW5kIiwicmVtb3ZlIiwiYWpheCIsInR5cGUiLCJ1cmwiLCJjb25jYXQiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJkYXRhIiwibm9vbk9wZW5pbmdIb3VycyIsImV2ZW5pbmdPcGVuaW5nSG91cnMiLCJlYWNoIiwia2V5IiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIiwiY3NzIiwidGV4dCIsIm9wdGlvbnMiLCJlbXB0eSIsImFwcGVuZCIsImVycm9yIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9