import React, { useState } from "react";
import { DatePicker } from "@mantine/dates";

const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <DatePicker
        value={selectedDate}
        onChange={handleDateChange}
        placeholder="Select a date"
      />
    </div>
  );
};

export default Calendar;
