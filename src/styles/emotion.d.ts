import type { SerializedStyles } from '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      Blue: string;
      Red: string;
      primaryBlue50: string;
      primaryBlue100: string;
      primaryBlue200: string;
      primaryBlue300: string;
      primaryBlue400: string;
      primaryBlue500: string;
      primaryBlue600: string;
      primaryBlue700: string;
      primaryBlue800: string;
      primaryBlue900: string;
      grayScaleWhite: string;
      grayScaleWG: string;
      grayScaleLG1: string;
      grayScaleLG2: string;
      grayScaleMG1: string;
      grayScaleMG2: string;
      grayScaleDG: string;
      grayScaleBG: string;
      grayScaleBlack: string;
      transparentRed_3: string;
      transparentBlack_65: string;
      transparentBlue_5: string;
      transparentBlue_50: string;
      transparentRed_15: string;
      transparentRed_40: string;
      chipBlueBg: string;
      chipBlueText: string;
    };
    fonts: {
      Head1_B_20: SerializedStyles;
      Head1_SB_20: SerializedStyles;
      Head1_M_20: SerializedStyles;
      Head2_B_18: SerializedStyles;
      Head2_SB_18: SerializedStyles;
      Title1_SB_16: SerializedStyles;
      Title2_M_16: SerializedStyles;
      Title2_R_16: SerializedStyles;
      Body1_M_14: SerializedStyles;
      Body2_R_14: SerializedStyles;
      Body3_SB_14: SerializedStyles;
      Caption1_R_12: SerializedStyles;
      Caption2_SB_12: SerializedStyles;
      Caption3_M_12: SerializedStyles;
    };
  }
}
