import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import hooksPlugin from "eslint-plugin-react-hooks";

export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { languageOptions: { ecmaVersion: 'latest', globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "react-hooks": hooksPlugin,
    },
  },

  //ImportPlugin.flatConfigs.recommended,
  {
    rules: {
      'react-refresh/only-export-components': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'no-unsafe-finally': 'off',
      'no-unused-vars': 'off',
      'react/jsx-key': 'off',
      ...hooksPlugin.configs.recommended.rules,
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];