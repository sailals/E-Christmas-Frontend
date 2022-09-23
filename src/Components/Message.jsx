import React from "react";

function Message() {
  return (
    <>
      <section className="message section container">
        <div className="message__container grid">
          <form action="" class="message__form">
            <h2 class="message__title">
              Send Good <br /> Wishes!
            </h2>
            <input
              type="email"
              placeholder="Write your message"
              class="message__input"
            />
            <button class="button message__button">Send Message</button>
          </form>
          <img src="/Images/message.png" alt="" class="message__img" />
          <img src="/Images/penguin.png" alt="" className="message__img2" />
        </div>
      </section>
    </>
  );
}

export default Message;
