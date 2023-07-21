import "./ContactForm.css";

export default function ContactForm() {
  return (
    <div className="form-container">
      <h1 className="form-title">Send a message to us</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
}
