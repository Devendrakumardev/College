import React from "react";
import "./Contact.css";
import mgs_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44231ace-1e9c-4757-bd3e-a33a5f1b0f13");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="contact">
      <div className="contact-right">
        <h3>
          Sent us massege <img src={mgs_icon} alt="" />{" "}
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          quod nisi accusantium esse repudiandae! Atque iusto officia fuga quo
          possimus hic reprehenderit aperiam inventore accusamus?
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            Contackt@devendra.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 9580387090
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            devendrakumarverma@gamil.com <br />
            I,m basicaly Utter Pradesh Locknow{" "}
          </li>
        </ul>
      </div>
      <div className="contact-right ">
        <form className="size" onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name "
            required
          />
          <label>Phone number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
          />
          <label>Write Your Masseage</label>
          <textarea
            name="massage"
            rows="6"
            placeholder="Enter Your massage"
            required
          ></textarea>
          <button type="submite" className="btn dark-btn">
            Submit now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
