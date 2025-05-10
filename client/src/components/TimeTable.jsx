import React, { useState } from 'react';

const Timetable = ({ selectedDate }) => {
  const [currentDate, setCurrentDate] = useState(selectedDate || new Date());

  const schedule = {
    Sunday: [],
    Monday: [
      "Tamil", "English", { type: "break", label: "Break" }, "Math", "Science",
      { type: "lunch", label: "Lunch" }, "Social", "CS",
      { type: "break", label: "Break" }, "Tamil", "English"
    ],
    Tuesday: [
      "English", "Math", { type: "break", label: "Break" }, "CS", "Science",
      { type: "lunch", label: "Lunch" }, "Tamil", "Social"
    ],
    Wednesday: ["Math", "Science", { type: "lunch", label: "Lunch" }, "English"],
    Thursday: ["CS", "Science", { type: "break", label: "Break" }, "Tamil"],
    Friday: ["English", "Math", "Social", { type: "lunch", label: "Lunch" }],
    Saturday: ["Drawing", "Library"]
  };

  const changeDay = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + direction);
    setCurrentDate(newDate);
  };

  const weekday = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const todaysSchedule = schedule[weekday] || [];

  return (
    <div className="card shadow-sm p-4 text-center" style={{ borderRadius: "20px" }}>
      <div className="d-flex justify-content-center align-items-center mb-3 gap-3">
        <button
          onClick={() => changeDay(-1)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            fontWeight: "900",
            fontSize: "1.2rem"
          }}
        >
          ‹
        </button>
        <h5 className="mb-0">{weekday}</h5>
        <button
          onClick={() => changeDay(1)}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid #ccc",
            backgroundColor: "#fff",
            fontWeight: "900",
            fontSize: "1.2rem"
          }}
        >
          › 
        </button>
      </div>

      <hr />

      <div>
        {todaysSchedule.length === 0 ? (
          <p className="text-muted">No classes today</p>
        ) : (
          todaysSchedule.map((item, i) => {
            if (typeof item === "string") {
              return <p key={i} className="mb-2 text-secondary">{item}</p>;
            }

            const styleMap = {
              break: {
                backgroundColor: "#d6d6ff",
                color: "#5a5ad9"
              },
              lunch: {
                backgroundColor: "#ffe5b4",
                color: "#c67a00"
              }
            };

            const style = styleMap[item.type] || {};

            return (
              <div key={i} className="my-2">
                <div
                  className="mx-auto px-3 py-1"
                  style={{
                    ...style,
                    borderRadius: "10px",
                    fontSize: "0.8rem",
                    display: "inline-block"
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Timetable;
