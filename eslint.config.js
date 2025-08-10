import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    // Configuración para código normal
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node
      }
    },
    plugins: {},
    rules: {
      "no-unused-vars": "warn",          
      "no-undef": "error",               
      "eqeqeq": ["error", "always"],     
      "semi": ["error", "always"],       
      "quotes": ["error", "double"],     
      "indent": ["error", 2],            
      "curly": "error",                 
      "no-console": "off"               
    }
  },

  {
    // Configuración específica para archivos de test Jest
    files: ["**/*.test.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.jest   // aquí le dices que test, expect, etc. existen
      }
    },
    plugins: {},
    rules: {
      // Puedes repetir o cambiar reglas para tests si quieres
      "no-unused-vars": "warn",
      "no-undef": "error",
      "eqeqeq": ["error", "always"],
      "semi": ["error", "always"],
      "quotes": ["error", "double"],
      "indent": ["error", 2],
      "curly": "error",
      "no-console": "off"
    }
  },

  pluginJs.configs.recommended
];
