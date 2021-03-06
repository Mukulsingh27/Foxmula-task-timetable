import React from "react";
import "./timetable.css";
import "./index.css";
import Column from "./Components/Column";

function TimeTable() {
  let data = [
    {
      title: "MON",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "TUE",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "WED",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },
      ],
    },
    {
      title: "THU",
      data: [
        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "FRI",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "SAT",
      data: [
        {
          title: "Homework",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "Due at 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
    {
      title: "SUN",
      data: [
        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Class",
          time: "12:00 AM - 12:00 AM",
        },

        {
          title: "Test",
          head: "Lorem_Lorem_Lorem",
          description: "Lorem_Lorem_Lorem",
          time: "12:00 AM - 12:00 AM",
        },
      ],
    },
  ];
  return (
    <div className={"p-5 d-flex card-3"}>
      {data.map((item, index) => (
        <Column key={index} data={item} />
      ))}
    </div>
  );
}
export default TimeTable;
