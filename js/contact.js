document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const templateParams = {
    service_id: 'service_46gsu7o',    template_id: 'template_nyii2wi', 
    user_id: 'mqlcZSutjjPywFsHS', 
    template_params: {
      from_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value,
    },
  };

  fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(templateParams),
  })
    .then((response) => {
      if (response.ok) {
        alert('Your message has been sent successfully!');
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      } else {
        alert('Failed to send the message. Please try again later.');
        console.error('Error response:', response);
      }
    })
    .catch((error) => {
      console.error('Failed...', error);
      alert('An error occurred while sending your message.');
    });
});

