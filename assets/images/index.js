import React from 'react';
// eslint-disable-next-line no-unused-vars
import Svg, {G, Path, Circle, Defs, Image, Ellipse} from 'react-native-svg';

import ImgOneSVG from './image-1.svg';
import ImgTwoSVG from './image-2.svg';
import ImgThreeSVG from './image-3.svg';
import TabHomeSVG from './tab_Home.svg';
import TabCartSVG from './tab_cart.svg';
import TabAccountSvg from './tab_account.svg';
import TabCalculatorSvg from './tab_Calculator.svg';
import TabHomeActiveSVG from './noun_Home.svg';
import TabCartActiveSVG from './noun_cart.svg';
import TabAccountActiveSvg from './noun_account.svg';
import TabCalculatorActiveSvg from './noun_Calculator.svg';
import QuickPrintSVG from './noun_print.svg';
import FilterSVG from './noun_filters.svg';
import QuickCalculatorSvg from './noun_Calculator_print.svg';
import UploadSVG from './Upload.svg';
import CouponSvg from './noun_Coupon.svg';
import Path2Svg from './Path-2.svg';
import Path3Svg from './Path-3.svg';
import OrderPlaceActiveSvg from './Order_Placed_Active.svg';
import OrderPlaceSvg from './Order_Placed_Default.svg';
import OrderProcessedActiveSvg from './Order_Processed_Active.svg';
import OrderProcessedSvg from './Order_Processed_Default.svg';
import PaymentConfirmedActiveSvg from './Payment_Confirmed_Active.svg';
import PaymentConfirmedSvg from './Payment_Confirmed_Default.svg';
import ReadyForPickupActiveSvg from './ready_for_PickUp_Active.svg';
import ReadyForPickupSvg from './ready_for_PickUp_Default.svg';
import ShippedActiveSvg from './Shipped_Active.svg';
import ShippedSvg from './Shipped_Default.svg';

export const ImgOne = props => <ImgOneSVG {...props} />;
export const ImgTwo = props => <ImgTwoSVG {...props} />;
export const ImgThree = props => <ImgThreeSVG {...props} />;
export const TabHome = props => <TabHomeSVG {...props} />;
export const TabCart = props => <TabCartSVG {...props} />;
export const TabAccount = props => <TabAccountSvg {...props} />;
export const TabCalculator = props => <TabCalculatorSvg {...props} />;
export const TabHomeActive = props => <TabHomeActiveSVG {...props} />;
export const TabCartActive = props => <TabCartActiveSVG {...props} />;
export const TabAccountActive = props => <TabAccountActiveSvg {...props} />;
export const TabCalculatorActive = props => (
  <TabCalculatorActiveSvg {...props} />
);
export const QuickPrint = props => <QuickPrintSVG {...props} />;
export const QuickCalculator = props => <QuickCalculatorSvg {...props} />;
export const Filter = props => <FilterSVG {...props} />;
export const Upload = props => <UploadSVG {...props} />;
export const Coupon = props => <CouponSvg {...props} />;
export const OrderPlaceActive = props => <OrderPlaceActiveSvg {...props} />;
export const OrderPlace = props => <OrderPlaceSvg {...props} />;
export const OrderProcessedActive = props => (
  <OrderProcessedActiveSvg {...props} />
);
export const OrderProcessed = props => <OrderProcessedSvg {...props} />;
export const PaymentConfirmedActive = props => (
  <PaymentConfirmedActiveSvg {...props} />
);
export const PaymentConfirmed = props => <PaymentConfirmedSvg {...props} />;
export const ReadyForPickupActive = props => (
  <ReadyForPickupActiveSvg {...props} />
);
export const ReadyForPickup = props => <ReadyForPickupSvg {...props} />;
export const ShippedActive = props => <ShippedActiveSvg {...props} />;
export const Shipped = props => <ShippedSvg {...props} />;
export const Path2 = props => <Path2Svg {...props} />;
export const Path3 = props => <Path3Svg {...props} />;
