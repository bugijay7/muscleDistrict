import React from 'react';

const scheduleData = [
  {
    day: "Monday",
    classes: [
      { time: "8:00 AM", className: "Yoga" },
      { time: "10:00 AM", className: "Pilates" },
      { time: "5:00 PM", className: "HIIT" },
    ],
  },
  {
    day: "Tuesday",
    classes: [
      { time: "9:00 AM", className: "Cardio" },
      { time: "12:00 PM", className: "Strength Training" },
      { time: "6:00 PM", className: "Zumba" },
    ],
  },
  {
    day: "Wednesday",
    classes: [
      { time: "8:00 AM", className: "Yoga" },
      { time: "11:00 AM", className: "Crossfit" },
      { time: "7:00 PM", className: "Spin Class" },
    ],
  },
  {
    day: "Thursday",
    classes: [
      { time: "10:00 AM", className: "Boxing" },
      { time: "1:00 PM", className: "Pilates" },
      { time: "6:00 PM", className: "HIIT" },
    ],
  },
  {
    day: "Friday",
    classes: [
      { time: "8:00 AM", className: "Yoga" },
      { time: "12:00 PM", className: "Strength Training" },
      { time: "5:00 PM", className: "Zumba" },
    ],
  },
  {
    day: "Saturday",
    classes: [
      { time: "9:00 AM", className: "Crossfit" },
      { time: "11:00 AM", className: "Cardio" },
      { time: "4:00 PM", className: "Spin Class" },
    ],
  },
];

function ScheduleGrid() {
  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 text-black drop-shadow-md">
        This Week's Schedule
      </h2>

      <div className="flex flex-wrap gap-6 justify-center overflow-x-auto lg:overflow-visible pb-4">
        {scheduleData.map((daySchedule, index) => (
          <div
            key={index}
            className="w-[250px] bg-sky-200 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-2xl font-extrabold text-center mb-5 uppercase tracking-wider">
              {daySchedule.day}
            </h3>
            <ul className="space-y-4">
              {daySchedule.classes.map((classInfo, idx) => (
                <li
                  key={idx}
                  className="bg-white bg-opacity-90 text-black rounded-lg p-4 shadow-md hover:bg-opacity-100 transition-all"
                >
                  <p className="text-lg font-bold">{classInfo.time}</p>
                  <p className="text-sm text-gray-700">{classInfo.className}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScheduleGrid;
