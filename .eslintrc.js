module.exports = {
    root: true,
    extends: '@react-native',
    rules: {
        'react/no-danger': 'off',
        'react/jsx-key': 'error',
        'react-native/no-inline-styles': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'react/react-in-jsx-scope': 'off',
    },
    env: {
        browser: true,
        node: true,
    },
};
