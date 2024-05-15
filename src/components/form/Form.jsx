import React, { useState } from "react";
import { toast } from "react-toastify";
const initialState = {
  fname: "",
  lname: "",
  age: "",
  sms: "",
};

const BOT__TOKEN = "7176373143:AAFDmSo4--gn27ZOZTTY9ASyFr0SPuAC3mQ";

//  https://api.telegram.org/bot7176373143:AAFDmSo4--gn27ZOZTTY9ASyFr0SPuAC3mQ/getUpdates
// https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]
const CHAT__ID = "-4221355956";
const USER__ID = "5980648858";

const Form = () => {
  const [user, setUser] = useState(initialState);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = "Malumot %0A%0A";
    text += `Ismi: ${user.fname} %0A`;
    text += `Familyasi: ${user.lname} %0A`;
    text += `Yoshi: ${user.age} %0A`;
    text += `Malumot: ${user.sms} %0A%0A`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${USER__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
    setUser(initialState);
    toast.success("Adminga malumotlar jo'natildi!");
  };
  return (
    <div className="container">
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="fname">Fisrt Name *</label>
        <input
          value={user.fname}
          onChange={(e) => setUser({ ...user, fname: e.target.value })}
          type="text"
          placeholder="Fisrt Name"
          required
        />
        <label htmlFor="lname">Last Name *</label>
        <input
          value={user.lname}
          onChange={(e) => setUser({ ...user, lname: e.target.value })}
          type="text"
          placeholder="Last Name"
          required
        />
        <label htmlFor="age">Age *</label>
        <input
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
          type="number"
          required
          placeholder="Age"
        />
        <textarea
          value={user.sms}
          onChange={(e) => setUser({ ...user, sms: e.target.value })}
          name=""
          rows={4}
          id=""
          required
          placeholder="Message"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
