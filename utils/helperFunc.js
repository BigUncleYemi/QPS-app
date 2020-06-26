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

export const uploadFiles = file => {
  return RNFetchBlob.fetch(
    'POST',
    '{{CLOUDINARY UPLOAD LINK}}',
    {
      'Content-Type': 'multipart/form-data',
    },
    [
      {
        name: 'file',
        filename: file.name,
        type: file.type,
        data: RNFetchBlob.wrap(file.uri),
      },
      {name: 'upload_preset', data: 'uefj00kb'},
    ],
  );
};

export const storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

/*
 * qua is quantity
 * des is design
 * bp is base price
 *
 *
 */

export const getFormular = (key, qua, des = des ? 4000 : 0, bp) => {
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
    // quantity : a, design, paper, refining,
    default:
      break;
  }
};
