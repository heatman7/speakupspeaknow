import colors from './colors'

const fontFamilies = {
  lato: 'Lato, Helvetica, sans-serif',
  rubik: 'Rubik, Helvetica, sans-serif',
}

export const baseTextStyles = {
  margin: 0,
  fontFamily: fontFamilies.rubik,
}

const textStyles: Record<string, any> = {
  heading: {
    fontWeight: 400,
    fontSize: [50, 50, 75, 75],
    lineHeight: 1.33,
    fontFamily: fontFamilies.lato,
    color: colors.textGray,
  },
  pageHeader: {
    fontWeight: 400,
    fontSize: [28, 32, 36, 36],
    lineHeight: '1.35',
    fontFamily: fontFamilies.rubik,
    color: colors.textGray,
  },
  sectionHeader: {
    fontWeight: 400,
    fontSize: [24, 24, 32, 32],
    lineHeight: '1.35',
    fontFamily: fontFamilies.rubik,
    color: colors.textGray,
  },
  sectionSubheader: {
    fontWeight: 500,
    fontSize: 20,
    lineHeight: '1.35',
    fontFamily: fontFamilies.rubik,
    color: colors.textGray,
  },
  body: {
    fontSize: [14, 14, 16, 16],
    lineHeight: ['20px', '22px', '24px', '27px'],
    fontFamily: fontFamilies.rubik,
    fontWeight: 400,
    color: colors.textGray,
  },
  bodyTertiary: {
    fontSize: [12, 12, 12, 12],
    lineHeight: '1.35',
    fontFamily: fontFamilies.rubik,
    fontWeight: 400,
    color: colors.textGray,
  },
  link: {
    fontSize: [15, 16, 18, 20],
    lineHeight: ['20px', '22px', '24px', '27px'],
    fontFamily: fontFamilies.rubik,
    fontWeight: 'medium',
    color: colors.bostonBlue,
  },
  caption: {
    fontSize: [15, 16, 18, 24],
    lineHeight: ['20px', '22px', '24px', '32px'],
    fontFamily: fontFamilies.lato,
    fontWeight: 700,
    color: colors.textGray,
  },
  label: {
    marginBottom: 1,
    fontSize: [14, 14, 14, 14],
    lineHeight: '1.35',
    fontFamily: fontFamilies.rubik,
    fontWeight: 500,
    color: colors.textOlive,
    textTransform: 'uppercase',
  },
  input: {
    fontSize: [15, 16, 18, 24],
    lineHeight: ['20px', '22px', '24px', '32px'],
    fontFamily: fontFamilies.rubik,
    fontWeight: 400,
    color: colors.textGray,
  },
}

export default {
  fontFamilies,
  baseTextStyles,
  textStyles,
}
