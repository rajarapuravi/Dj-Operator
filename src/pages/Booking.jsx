
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Booking() {

  const location = useLocation();

  const operator = location.state?.operator;

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [date,setDate] = useState("");
  const [program,setProgram] = useState("");

  const handleBooking = () => {

    const booking = {
      operatorName: operator.name,
      operatorId: operator.djId,
      clientName: name,
      phone,
      address,
      date,
      program
    };

    const bookings =
      JSON.parse(
        localStorage.getItem("bookings")
      ) || [];

    bookings.push(booking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(bookings)
    );

    alert(
      "🎉 Booking Successful!"
    );
  };

  return (
    <div className="booking-card">

      <h1>
        Book {operator?.name}
      </h1>

      <input
        placeholder="Client Name"
        onChange={(e)=>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Phone Number"
        onChange={(e)=>
          setPhone(e.target.value)
        }
      />

      <input
        placeholder="Address"
        onChange={(e)=>
          setAddress(e.target.value)
        }
      />

      <input
        type="date"
        onChange={(e)=>
          setDate(e.target.value)
        }
      />

      <input
        placeholder="Program Type"
        onChange={(e)=>
          setProgram(e.target.value)
        }
      />

      <button
        onClick={handleBooking}
      >
        Confirm Booking
      </button>

    </div>
  );
}

export default Booking;

