import RNFetchBlob from 'rn-fetch-blob';
import DocumentPicker from 'react-native-document-picker';
import AsyncStorage from '@react-native-community/async-storage';

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
    .filter(item => item !== '');

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

export const uploadFiles = async () => {
  try {
    const results = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });
    results.map((file, index) => {
      console.log(JSON.stringify(file));
      let cleanURi =
        file.fileCopyUri && file.fileCopyUri.replace('file://', '');
      console.log(JSON.stringify(file), cleanURi);
      RNFetchBlob.fetch(
        'POST',
        // 'cloudinary://457411138945421:7csShyrTsuKBM7PffHJdCl3QHNA@quick-print-shop',
        'https://api.cloudinary.com/v1_1/quick-print-shop/image/upload',
        {
          'Content-Type': 'multipart/form-data',
        },
        [
          {
            name: 'uploaded design',
            filename:
              (file.name && file.name.slice(0, -4)) || `IMG00${index + 1}`,
            data: RNFetchBlob.wrap(decodeURIComponent(cleanURi)),
          },
          {name: 'upload_preset', data: 'uefj00kb'},
        ],
        // eslint-disable-next-line prettier/prettier
      ).then(res => res.json())
        .then(response => console.log('Cloudinary response:', response));
    });
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
    console.log(jsonValue, 'iineer');
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

/*
 * qua is quantity
 * des is design
 * bp is base price
 *
 *
 */

export const getFormular = ({
  key,
  qua,
  des = des ? des : 0,
  bp,
  pap,
  ref,
  trim = 0,
  impre = 0,
  side,
  up,
}) => {
  switch (key) {
    case 45:
      // quantity, design,
      if (qua >= 100 || qua <= 500) {
        return qua * bp * 2.5 + des;
      } else if (qua >= 501 || qua <= 1000) {
        return qua * bp * 2.3 + des;
      } else if (qua >= 1001 || qua <= 5000) {
        return qua * bp * 2.1 + des;
      } else if (qua >= 5001) {
        return qua * bp * 1.8 + des;
      }
      break;
    case 43:
      // quantity : a, design: d, paper: pap, refining: ref
      const z = qua;
      const a = (z / 10) * 1.2;
      const p = a * pap;
      const r = a * ref;
      const tri = a * trim;
      const impr = a * (2 * side) * impre;
      if (qua >= 100 || qua <= 200) {
        return (a + p + r + tri + impr) * 2.5;
      } else if (qua >= 201 || qua <= 500) {
        return (a + p + r + tri + impr) * 2.2;
      } else if (qua >= 501) {
        return (a + p + r + tri + impr) * 2;
      }
      break;
    case 47:
      // quantity : a, design, paper, refining,
      return qua * up * 2.3 + des;
      break;
    case 50:
      // quantity, design,
      if (qua >= 100 || qua <= 500) {
        return qua * bp * 2.5 + des;
      } else if (qua >= 501 || qua <= 1000) {
        return qua * bp * 2.3 + des;
      } else if (qua >= 1001 || qua <= 5000) {
        return qua * bp * 2.1 + des;
      } else if (qua >= 5001) {
        return qua * bp * 1.8 + des;
      }
      break;
    default:
      break;
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

let b = {
  size: 330871,
  fileCopyUri:
    'file:///Users/biguncleyemi/Library/Developer/CoreSimulator/Devices/476C037F-8698-42BC-9D49-8572F4AA26D8/data/Containers/Data/Application/95272CD2-101A-4DFB-9792-DC4EB08ECA94/tmp/org.reactjs.native.example.quickPrintShop-Inbox/Best%20Buy.png',
  name: 'Best Buy.png',
  uri:
    'file:///Users/biguncleyemi/Library/Developer/CoreSimulator/Devices/476C037F-8698-42BC-9D49-8572F4AA26D8/data/Containers/Data/Application/95272CD2-101A-4DFB-9792-DC4EB08ECA94/tmp/org.reactjs.native.example.quickPrintShop-Inbox/Best%20Buy.png',
  type: 'image/png',
};
