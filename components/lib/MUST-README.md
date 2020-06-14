*Dear future Developer*

<p>Peace be onto you</p>
<p>if you are seeing this this means you have inherited this code base and hope you dont have too much issue as there will be no git history till all UI is done 😜</p>
<p>What i want you to know ois if you have gotten to this folder, then yopu must have been looking around 👀</p>
<p>So for the love of your God do not delete files in this fold unless you know what it is for and have a good reason to do so.</p>
<p>I repeat pls do not delete any file here 🙇</p>

*This folder contained rip off libs that were customize for the app please be warned*

:love_letter: Big Uncle Yemi.


      <!DOCTYPE html>
      <html lang="en">
              <head>
                      <meta charset="UTF-8">
                      <meta http-equiv="X-UA-Compatible" content="ie=edge">
                      <!-- Latest compiled and minified CSS -->
                      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                      <!-- Fonts -->
                      <link rel="dns-prefetch" href="//fonts.gstatic.com">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" type="text/css">
                      <title>SUBSCRIPTION</title>
              </head>
              <body  onload="payWithPaystack()" style="background-color:#fff;height:100vh ">

                      <!-- place below the html form -->
                      <script src="https://js.paystack.co/v1/inline.js"></script>
                      <script>
                        function payWithPaystack(){
                          var handler = PaystackPop.setup({
                            key: '${props.paystackKey}',
                            email: 'customer@email.com',
                            amount: 10000,
                            ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                            metadata: {
                              custom_fields: [
                                  {
                                      display_name: "Mobile Number",
                                      variable_name: "mobile_number",
                                      value: "+2348012345678"
                                  }
                              ]
                            },
                            callback: function(response){
                                alert('success. transaction ref is ' + response.reference);
                            },
                            onClose: function(){
                                alert('window closed');
                            }
                          });
                          handler.openIframe();
                        }
                      </script>
                      <script type="text/javascript">
                        window.onload = function() {
                          payWithPaystack();
                        };
                      </script> 
              </body>
      </html> 