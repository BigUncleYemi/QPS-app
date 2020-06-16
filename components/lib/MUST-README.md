*Dear future Developer*

<p>Peace be onto you</p>
<p>if you are seeing this this means you have inherited this code base and hope you dont have too much issue as there will be no git history till all UI is done 😜</p>
<p>What i want you to know ois if you have gotten to this folder, then yopu must have been looking around 👀</p>
<p>So for the love of your God do not delete files in this fold unless you know what it is for and have a good reason to do so.</p>
<p>I repeat pls do not delete any file here 🙇</p>

*This folder contained rip off libs that were customize for the app please be warned*

:love_letter: Big Uncle Yemi.


            <Text style={{color: '#000000', fontSize: 15, fontWeight: '700'}}>
              09 May, 2020
            </Text>
            <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
              Your order will be processed once
            </Text>
            <Text style={{color: '#E0DFDF', fontSize: 10, fontWeight: '500'}}>
              Your payment is confirmed
            </Text>

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

{
         "id":6093,
         "name":"A2 Wall Calendar (7 Sheets)",
         "slug":"a2-wall-calendar-7-sheets",
         "permalink":"https://www.quickprintshop.com.ng/product/a2-wall-calendar-7-sheets/",
         "date_created":"2020-02-22T18:14:49",
         "date_created_gmt":"2020-02-22T18:14:49",
         "date_modified":"2020-03-30T09:25:47",
         "date_modified_gmt":"2020-03-30T09:25:47",
         "type":"simple",
         "status":"publish",
         "featured":false,
         "catalog_visibility":"visible",
         "description":"<p><strong>Material</strong> - 150 Matte paper<br />\n<strong>Finishing</strong> - Wire-O Binding<br />\n<strong>Delivery</strong> - 7 - 10 working days</p>\n",
         "short_description":"<p>You can order A2 Wall Calendar (7 sheets) from www.qps.ng. Start the process by simply uploading your designs in the required format or work with our creative team to create a unique design. We will print and deliver to any location within Nigeria within 3-5 working days</p>\n",
         "sku":"",
         "price":"144999",
         "regular_price":"144999",
         "sale_price":"",
         "date_on_sale_from":null,
         "date_on_sale_from_gmt":null,
         "date_on_sale_to":null,
         "date_on_sale_to_gmt":null,
         "price_html":"from ₦144,999.00 / 100",
         "on_sale":false,
         "purchasable":true,
         "total_sales":0,
         "virtual":false,
         "downloadable":false,
         "downloads":[

         ],
         "download_limit":-1,
         "download_expiry":-1,
         "external_url":"",
         "button_text":"",
         "tax_status":"taxable",
         "tax_class":"",
         "manage_stock":false,
         "stock_quantity":null,
         "stock_status":"instock",
         "backorders":"no",
         "backorders_allowed":false,
         "backordered":false,
         "sold_individually":false,
         "weight":"",
         "dimensions":{
            "length":"",
            "width":"",
            "height":""
         },
         "shipping_required":true,
         "shipping_taxable":true,
         "shipping_class":"",
         "shipping_class_id":0,
         "reviews_allowed":true,
         "average_rating":"0.00",
         "rating_count":0,
         "related_ids":[
            6095,
            6075,
            6094,
            6096,
            6076
         ],
         "upsell_ids":[

         ],
         "cross_sell_ids":[

         ],
         "parent_id":0,
         "purchase_note":"",
         "categories":[
            {
               "id":61,
               "name":"Calendars",
               "slug":"calendars"
            }
         ],
         "tags":[

         ],
         "images":[
            {
               "id":6100,
               "date_created":"2020-02-22T18:11:52",
               "date_created_gmt":"2020-02-22T18:11:52",
               "date_modified":"2020-02-22T18:11:52",
               "date_modified_gmt":"2020-02-22T18:11:52",
               "src":"https://www.quickprintshop.com.ng/wp-content/uploads/2020/02/A2-Wall-Calendar-7-Sheets.jpg",
               "name":"A2 Wall Calendar (7 Sheets)",
               "alt":""
            }
         ],
         "attributes":[

         ],
         "default_attributes":[

         ],
         "variations":[

         ],
         "grouped_products":[

         ],
         "menu_order":0,
         "meta_data":[
            {
               "id":3766,
               "key":"_wpb_vc_js_status",
               "value":"false"
            },
            {
               "id":4366,
               "key":"_fixed_price_rules",
               "value":{
                  "100":"1449.99",
                  "200":"1024.995",
                  "300":"1073.33",
                  "400":"1014.99",
                  "500":"869.998",
                  "750":"801.99",
                  "1000":"771.499",
                  "1500":"580.67",
                  "2000":"499.224",
                  "2500":"479.599",
                  "3000":"476.99",
                  "3500":"479.714",
                  "4000":"442.499",
                  "5000":"399.99",
                  "7500":"399.99",
                  "10000":"349.9999"
               }
            },
            {
               "id":5325,
               "key":"_cwpt_price_title",
               "value":"from ₦144,999.00 / 100"
            },
            {
               "id":5326,
               "key":"_cwpt_hide_price",
               "value":"no"
            },
            {
               "id":5327,
               "key":"_cwpt_apply_on_all_wc_pages",
               "value":"yes"
            },
            {
               "id":5328,
               "key":"mwb_tyo_estimated_delivery_date",
               "value":""
            },
            {
               "id":5329,
               "key":"mwb_tyo_estimated_delivery_time",
               "value":""
            },
            {
               "id":5330,
               "key":"mwb_tyo_selected_shipping_service",
               "value":""
            },
            {
               "id":5331,
               "key":"mwb_tyo_package_tracking_number",
               "value":""
            },
            {
               "id":5332,
               "key":"mwb_tyo_enhanced_cn",
               "value":""
            },
            {
               "id":5333,
               "key":"mwb_tyo_enhanced_order_company",
               "value":""
            },
            {
               "id":5334,
               "key":"mwb_tyo_enhanced_tracking_no",
               "value":""
            },
            {
               "id":6508,
               "key":"min_quantity",
               "value":""
            },
            {
               "id":6509,
               "key":"max_quantity",
               "value":""
            }
         ],
         "_links":{
            "self":[
               {
                  "href":"https://www.quickprintshop.com.ng/wp-json/wc/v3/products/6093"
               }
            ],
            "collection":[
               {
                  "href":"https://www.quickprintshop.com.ng/wp-json/wc/v3/products"
               }
            ]
         }
      }