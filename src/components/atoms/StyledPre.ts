/* eslint-disable max-len */
import styled from '@emotion/styled';

type StyledPreProps = {
    baseFontSize?: string | null,
    largeResolution?: string | null,
    largeFontSize?: string | null,
    mediumResolution?: string | null,
    mediumFontSize?: string | null,
    smallResolution?: string | null,
    smallFontSize?: string | null
}

export const StyledPre = styled.pre<StyledPreProps>`
  text-align: center;
  font-size: ${(props: StyledPreProps) => (props.baseFontSize ? props.baseFontSize : '5px')};

  @media screen and (max-width: ${(props: StyledPreProps) => (props.largeResolution ? props.largeResolution : '1300px')}) {
    font-size: ${(props: StyledPreProps) => (props.largeFontSize ? props.largeFontSize : '3px')};
  }

  @media screen and (max-width: ${(props: StyledPreProps) => (props.mediumResolution ? props.mediumResolution : '900px')}) {
    font-size: ${(props: StyledPreProps) => (props.mediumFontSize ? props.mediumFontSize : '2px')};
  }

  @media screen and (max-width: ${(props: StyledPreProps) => (props.smallResolution ? props.smallResolution : '360px')}) {
    font-size: ${(props: StyledPreProps) => (props.smallFontSize ? props.smallFontSize : '1px')};
  }
`;
