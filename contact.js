const contactForm = document.getElementById('contact-form'), 
 contactName = document.getElementById('contact-name'),

 contactEmail = document.getElementById('contact-email'),

 contactSubject = document.getElementById('contact-subject'), contactMessage = document.getElementById('contact-message'),

 errorMessage = document.getElementById('error-message');

const sendEmail = (e) => {

    e.preventDefault();

    if (contactName.value === ''|| contactEmail.value === ''|| contactSubject.value === ''|| contactMessage.value ===''){
        errorMessage.textContent='Write all the input'
    }

    else{ 
        emailjs.sendForm('service_6mperxt','template_qdzmjpl','#contact-form','bqlUdxCcLoDgwYXs7')
        .then(() => {
            errorMessage.classList.add('color-first');
            errorMessage.textContent='Message Sent';

            setTimeout(()=>{
                errorMessage.textContent='';
            },5000);
        },
        (error)=>{
            alert('OOPS! Something went wrong',error)
        }
        );

        contactName.value='';
        contactEmail.value='';
        contactMessage.value='';
        contactSubject.value='';
        contactForm.value='';
    }
};

contactForm.addEventListener('submit', sendEmail);