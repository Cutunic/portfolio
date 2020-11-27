const contactComp = `
<div class="contact-content-container">

    <div class="main-title">
        <h3>Contact</h3>
        <p>"It is even better to act quickly and err than to hesitate until the time of action is past." Carl von Clausewitz</p>
    </div>
    <div class="contact-info-container">

        <div class="info-item-box">
            <div class="icon-box info-icon">
                <i class="fas fa-phone-alt icon"></i>
            </div>
            <div class="icon-description info-description-box">
                <p>Call Me</p>
                <p>+49 176 7314 9983</p>
            </div>
        </div>
        <div class="info-item-box">
            <div class="icon-box info-icon">
                <i class="far fa-envelope-open icon"></i>
            </div>
            <div class="icon-description info-description-box">
                <p>E-mail</p>
                <p>matej.cutunic@gmail.com</p>
            </div>
        </div>
        <div class="info-item-box">
            <div class="icon-box info-icon">
                <i class="fas fa-map-marker-alt icon"></i>
            </div>
            <div class="icon-description info-description-box">
                <p>Location</p>
                <p>Croatia, Zagreb</p>
            </div>
        </div>
    </div>
    
    <div class="send-email-container">
        <h3>Get In Touch</h3>
        <form action="https://formspree.io/f/xvovagba" method="POST">
            <div class="name-contact">
                <input id="name-contact" type="text" placeholder="Name" name="name">
                <label for="name-contact"></label>
            </div>
            <div class="email-contact">
                <input id="email-contact" type="text" placeholder="Email" name="_replyto">
                <label for="email-contact"></label>
            </div>
            <div class="subject-contact">
                <input id="subject-contact" type="text" placeholder="Subject" name="subject">
                <label for="subject-contact"></label>
            </div>
            <div class="msg-contact">
                <textarea id="msg-contact" placeholder="Message" name="body"></textarea>
                <label for="msg-contact"></label>
            </div>
            <button class="submit-contact btn-msg" type="submit">Send Message</button>
        </form>
        
    </div>
    

</div>
`;