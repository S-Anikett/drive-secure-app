import styles from './styles';

const NAVIGATION_MAPPINGS = {
  Home: {
    styles: {
      main: styles.leftTabStyle,
      after: styles.leftTabStyleAfter,
    },
    icon: {name: 'view-dashboard', focusedColor: '#fde74d'},
  },
  Profile: {
    styles: {
      main: styles.rightTabStyle,
      after: styles.rightTabStyleAfter,
    },
    icon: {name: 'account', focusedColor: '#fde74d'},
  },
  MobileCamera: {
    styles: {
      main: styles.middleTabStyle,
      after: null,
    },
    icon: {name: 'record-circle-outline', focusedColor: '#ee3425'},
  },
};

export default NAVIGATION_MAPPINGS;
