import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';

export const extractDesc = a =>
  a
    .split('<p>')
    .join('</p>')
    .split('</p>')
    .join('<br />')
    .split('<br />')
    .join('<strong>')
    .split('<strong>')
    .join('</strong>')
    .split('</strong>')
    .join('>')
    .split('>')
    .join('<')
    .split('<')
    .join('[')
    .split('[')
    .filter(item => !item.includes('vc_'))
    .filter(item => item !== '')
    .join('/li')
    .split('/li')
    .join('li')
    .split('li')
    .join('ul')
    .split('ul')
    .join('/')
    .split('/');

export const object2Array = obj => {
  if (obj) {
    return Object.keys(obj).map(key => [Number(key), obj[key]]);
  }
};

export const getCartItems = obj => {
  if (obj) {
    return Object.keys(obj).map(key => obj[key]);
  }
};

export const removePriceHtml = data => {
  if (data.length === 0) {
    return 'request quote';
  } else if (data.length < 35) {
    return data;
  }
  let c = data
    .split(
      '<span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#8358;</span>',
    )
    .join('')
    .split('</span>')
    .join('</p>')
    .split('</p>')
    .join('/li')
    .split('/li')
    .join('li')
    .split('li')
    .join('ul')
    .split('ul')
    .join('/')
    .split('/')
    .join('<br />')
    .split('<br />')
    .join('<strong>')
    .split('<strong>')
    .join('</strong>')
    .split('</strong>')
    .join('')
    .split('from');
  c[0] = 'from ₦';
  return c.join('');
};

export const nameProduct = item => {
  let c = item.slice(0, 33);
  if (item.length > 33) {
    c += '...';
  }
  return c;
};

export async function uploadFile(file) {
  let cleanURi = file.fileCopyUri && file.fileCopyUri.replace('file://', '');
  return RNFetchBlob.fetch(
    'POST',
    'https://content.dropboxapi.com/2/files/upload',
    {
      Authorization:
        'Bearer w6MtlN3agYAAAAAAAAAADDtNZuWnRXBumOKVEjzIk5BAX4eAyPrdBDZ6TSMhurF9',
      'Dropbox-API-Arg': JSON.stringify({
        path: `/design_upload/${file.name}`,
        mode: 'add',
        autorename: true,
        mute: false,
      }),
      'Content-Type': 'application/octet-stream',
    },
    RNFetchBlob.wrap(decodeURIComponent(cleanURi)),
  );
}

export const uploadFiles = async () => {
  try {
    const results = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });

    let data = [];
    let requests = await results.map(file => {
      //create a promise for each API call
      return new Promise((resolve, reject) => {
        uploadFile(file)
          .then(res => resolve(res.data))
          .catch(err => reject(err));
      });
    });
    await Promise.all(requests)
      .then(body => {
        const b = body.map(i => JSON.parse(i));
        data = b;
      })
      .catch(err => console.log(err));
    return data;
    // const res = results.map(i => uploadFile(i));
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      // User cancelled the picker, exit any dialogs or menus and move on
    } else {
      throw err;
    }
  }
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
    // saving error
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    console.log(jsonValue);
    return jsonValue !== null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log(e);
    // error reading value
  }
};

export const removeValue = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }
};

export const errHandler = err => {
  const y =
    typeof err.data.message === 'object'
      ? err.data.message.message
      : err.data.message;
  console.log(err.data.message, typeof err.data.message, y);
  return y;
};

export function getAmount(q, r, s) {
  let price = {};
  r.filter(i => i.size === s).forEach(a => {
    if (Number(q) >= a.unit) {
      price.value = a.price;
      price.priceSetting = a;
    }
  });
  return price;
}

export function getDiscountAmount(q, p, r, d, s) {
  let disPrice;
  r.filter(i => i.size === s).forEach(i =>
    i.discount.map(a => {
      if (Number(q) <= Number(a.max) && Number(q) >= Number(a.min)) {
        let per = Number(a.percent) / 100;
        disPrice = Number(p) * per * Number(q);
        if (d && d.length === 0) {
          disPrice = disPrice + Number(i.design);
        }
      }
    }),
  );
  return disPrice;
}

export const Pricer = (
  quantity = 0,
  priceData = [],
  design = [],
  size = 'DEFAULT',
) =>
  getDiscountAmount(
    quantity,
    getAmount(quantity, priceData, size).value,
    priceData,
    design,
    size,
  );

export const OrderFunc = (
  user,
  cart,
  address,
  homeDelivery,
  totalPrice,
  paymentId,
) => {
  let billing = {
    name: `${user && user.data && user.data.firstName} ${user &&
      user.data &&
      user.data.surname}`,
    address: address,
    state: null,
    email: user && user.data && user.data.email,
    phone: user && user.data && user.data.phone,
    homeDelivery: homeDelivery,
    customerId: user && user.data && user.data.id,
  };

  let set_paid = true;

  const line_items = Object.keys(cart)
    .map(key => cart[key])
    .map(i => ({
      product_id: i.productId,
      quantity: i.quantity,
      price: i.price,
    }));

  const department = Object.keys(cart)
    .map(key => cart[key])
    .map(i => ({
      productId: i.productId,
      productName: i.name,
    }));

  const orderItem = Object.keys(cart)
    .map(key => cart[key])
    .map(i => ({
      productId: i.productId,
      quantity: i.quantity,
      name: i.name,
      price: i.price,
    }));

  const items = Object.keys(cart)
    .map(key => cart[key])
    .map(i => ({
      productId: i.productId,
      quantity: i.quantity,
      productName: i.name,
      productImage: i && i.img && i.img[0] && i.img[0].src,
      size: i.size,
      design: i.design,
      price: i.price,
    }));

  const o = {
    order: {
      set_paid,
      billing,
      customerId: user && user.data && user.data.id,
      line_items,
    },
    track: {
      paymentId,
      totalPrice,
      set_paid,
      billing,
      items,
      department,
    },
    orderItem,
  };
  console.log(JSON.stringify(o));
  return o;
};
