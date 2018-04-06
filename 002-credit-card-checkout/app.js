document.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelector('.pay');
  if(window.PaymentRequest) {
    // Use Payment Request API
    const supportedPaymentMethods = [
      {
        supportedMethods: 'basic-card',
      }
    ];
    const paymentDetails = {
      total: {
        label: 'Total',
        amount:{
          currency: 'USD',
          value: 0
        }
      }
    };
    // Options isn't required.
    const options = {};


    p.addEventListener('click', () => {
      const req = new PaymentRequest(
        supportedPaymentMethods,
        paymentDetails,
        options
      );
      req.show().then((data) => {
        console.log(data);
      });
    })


  } else {
    window.alert('Payment Request API not supported')
  }
});

