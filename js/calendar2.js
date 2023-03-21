//check the console for date click event
//Fixed day highlight
//Added previous month and next month view
function CalendarControl2() {
  const calendar2 = new Date();
  const calendarControl2 = {
    localDate: new Date(),
    prevMonthLastDate: null,
    dateToday: null,
    calWeekDays: ["일", "월", "화", "수", "목", "금", "토"],
    calMonthName: [
      "1월",
      "2월",
      "3월",
      "4월",
      "5월",
      "6월",
      "7월",
      "8월",
      "9월",
      "10월",
      "11월",
      "12월",
    ],
    daysInMonth: function (month, year) {
      return new Date(year, month, 0).getDate();
    },
    firstDay: function () {
      return new Date(calendar2.getFullYear(), calendar2.getMonth(), 1);
    },
    lastDay: function () {
      return new Date(calendar2.getFullYear(), calendar2.getMonth() + 1, 0);
    },
    firstDayNumber: function () {
      return calendarControl2.firstDay().getDay() + 1;
    },
    lastDayNumber: function () {
      return calendarControl2.lastDay().getDay() + 1;
    },
    getPreviousMonthLastDate: function () {
      let lastDate = new Date(
        calendar2.getFullYear(),
        calendar2.getMonth(),
        0
      ).getDate();
      return lastDate;
    },
    navigateToPreviousMonth: function () {
      calendar2.setDate(1);
      calendar2.setMonth(calendar2.getMonth() - 1);
      calendarControl2.attachEventsOnNextPrev();
    },
    navigateToNextMonth: function () {
      calendar2.setDate(1);
      calendar2.setMonth(calendar2.getMonth() + 1);
      calendarControl.attachEventsOnNextPrev();
    },
    navigateToCurrentMonth: function () {
      let currentDate = calendarControl2.localDate.getDate();
      let currentMonth = calendarControl2.localDate.getMonth();
      let currentYear = calendarControl2.localDate.getFullYear();
      calendar2.setDate(currentDate);
      calendar2.setMonth(currentMonth);
      calendar2.setYear(currentYear);
      calendarControl2.attachEventsOnNextPrev();
    },
    displayYear: function () {
      let yearLabel = document.querySelector(".calendar2 .calendar-year-label");
      yearLabel.innerHTML = calendar2.getFullYear();
    },
    displayMonth: function () {
      let monthLabel = document.querySelector(
        ".calendar2 .calendar-month-label"
      );
      monthLabel.innerHTML = calendarControl2.calMonthName[calendar2.getMonth()];
    },
    selectDate: function (e) {
      console.log(
        `${e.target.textContent} ${
          calendarControl2.calMonthName[calendar2.getMonth()]
        } ${calendar2.getFullYear()}`
      );
      document.querySelectorAll(".number-item").forEach((t) => {
        t.classList.remove("on");
        this.parentNode.classList.add("on");
      });
    },
    plotSelectors: function () {
      document.querySelector(
        ".calendar2"
      ).innerHTML += `<div class="calendar-inner"><div class="calendar-controls">
        <div class="calendar-prev"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M88.2 3.8L35.8 56.23 28 64l7.8 7.78 52.4 52.4 9.78-7.76L45.58 64l52.4-52.4z"/></svg></a></div>
        <div class="calendar-year-month">
        <div class="calendar-month-label"></div>
        <div>-</div>
        <div class="calendar-year-label"></div>
        </div>
        <div class="calendar-next"><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#666" d="M38.8 124.2l52.4-52.42L99 64l-7.77-7.78-52.4-52.4-9.8 7.77L81.44 64 29 116.42z"/></svg></a></div>
        </div>
        <div class="calendar-today-date">Today: 
          ${calendarControl2.calWeekDays[calendarControl2.localDate.getDay()]}, 
          ${calendarControl2.localDate.getDate()}, 
          ${calendarControl2.calMonthName[calendarControl2.localDate.getMonth()]} 
          ${calendarControl2.localDate.getFullYear()}
        </div>
        <div class="calendar-body"></div></div>`;
    },
    plotDayNames: function () {
      for (let i = 0; i < calendarControl2.calWeekDays.length; i++) {
        document.querySelector(
          ".calendar2 .calendar-body"
        ).innerHTML += `<div>${calendarControl2.calWeekDays[i]}</div>`;
      }
    },
    plotDates: function () {
      document.querySelector(".calendar2 .calendar-body").innerHTML = "";
      calendarControl2.plotDayNames();
      calendarControl2.displayMonth();
      calendarControl2.displayYear();
      let count = 1;
      let prevDateCount = 0;

      calendarControl2.prevMonthLastDate =
        calendarControl2.getPreviousMonthLastDate();
      let prevMonthDatesArray = [];
      let calendarDays = calendarControl2.daysInMonth(
        calendar2.getMonth() + 1,
        calendar2.getFullYear()
      );
      // dates of current month
      for (let i = 1; i < calendarDays; i++) {
        if (i < calendarControl2.firstDayNumber()) {
          prevDateCount += 1;
          document.querySelector(
            ".calendar2 .calendar-body"
          ).innerHTML += `<div class="prev-dates"></div>`;
          prevMonthDatesArray.push(calendarControl2.prevMonthLastDate--);
        } else {
          document.querySelector(
            ".calendar2 .calendar-body"
          ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
        }
      }
      //remaining dates after month dates
      for (let j = 0; j < prevDateCount + 1; j++) {
        document.querySelector(
          ".calendar2 .calendar-body"
        ).innerHTML += `<div class="number-item" data-num=${count}><a class="dateNumber" href="#">${count++}</a></div>`;
      }
      calendarControl2.highlightToday();
      calendarControl2.plotPrevMonthDates(prevMonthDatesArray);
      calendarControl2.plotNextMonthDates();
    },
    attachEvents: function () {
      let prevBtn = document.querySelector(".calendar2 .calendar-prev a");
      let nextBtn = document.querySelector(".calendar2 .calendar-next a");
      let todayDate = document.querySelector(".calendar2 .calendar-today-date");
      let dateNumber = document.querySelectorAll(".calendar2 .dateNumber");
      prevBtn.addEventListener(
        "click",
        calendarControl2.navigateToPreviousMonth
      );
      nextBtn.addEventListener("click", calendarControl2.navigateToNextMonth);
      todayDate.addEventListener(
        "click",
        calendarControl2.navigateToCurrentMonth
      );
      for (var i = 0; i < dateNumber.length; i++) {
        dateNumber[i].addEventListener(
          "click",
          calendarControl2.selectDate,
          false
        );
      }
    },
    highlightToday: function () {
      this.dateToday = calendarControl2.localDate.getDate();
      let currentMonth = calendarControl2.localDate.getMonth() + 1;
      let changedMonth = calendar2.getMonth() + 1;
      let currentYear = calendarControl2.localDate.getFullYear();
      let changedYear = calendar2.getFullYear();
      if (
        currentYear === changedYear &&
        currentMonth === changedMonth &&
        document.querySelectorAll(".number-item")
      ) {
        document
          .querySelectorAll(".number-item")
          [this.dateToday - 1].classList.add("calendar-today");
      }
    },
    plotPrevMonthDates: function (dates) {
      dates.reverse();
      for (let i = 0; i < dates.length; i++) {
        if (document.querySelectorAll(".prev-dates")) {
          document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
        }
      }
    },
    plotNextMonthDates: function () {
      let childElemCount =
        document.querySelector(".calendar-body").childElementCount;
      //7 lines
      if (childElemCount > 42) {
        let diff = 49 - childElemCount;
        calendarControl2.loopThroughNextDays(diff);
      }

      //6 lines
      if (childElemCount > 35 && childElemCount <= 42) {
        let diff = 42 - childElemCount;
        calendarControl2.loopThroughNextDays(42 - childElemCount);
      }
    },
    loopThroughNextDays: function (count) {
      if (count > 0) {
        for (let i = 1; i <= count; i++) {
          document.querySelector(
            ".calendar-body"
          ).innerHTML += `<div class="next-dates">${i}</div>`;
        }
      }
    },
    attachEventsOnNextPrev: function () {
      calendarControl2.plotDates();
      calendarControl2.attachEvents();
    },
    init: function () {
      calendarControl2.plotSelectors();
      calendarControl2.plotDates();
      calendarControl2.attachEvents();
    },
  };
  calendarControl2.init();
}

const calendarControl2 = new CalendarControl2();
