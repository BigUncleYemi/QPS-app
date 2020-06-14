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
